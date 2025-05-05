import React, { useState, useEffect } from 'react';
import { useRecibos } from '@/hooks/useRecibos';
import { IRecibo } from '@/models/Recibo';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

function RecibosManager() {
  const { getRecibos, deleteRecibo, loading, error: errorMessage } = useRecibos();
  const [recibos, setRecibos] = useState<IRecibo[]>([]);
  const [selectedRecibo, setSelectedRecibo] = useState<IRecibo | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDate, setFilterDate] = useState<string>('');
  const itemsPerPage = 10;

  useEffect(() => {
    loadRecibos();
  }, []);

  const loadRecibos = async () => {
    const response = await fetch('http://localhost:5003/api/sales');
    const data = await response.json();
    setRecibos(data);
    console.log(data);
  };

  const handleViewDetails = (recibo: IRecibo) => {
    setSelectedRecibo(recibo);
    setShowDetailsModal(true);
  };

  const handleDeleteConfirm = (recibo: IRecibo) => {
    setSelectedRecibo(recibo);
    setShowDeleteConfirm(true);
  };

  const handleDelete = async () => {
    if (selectedRecibo) {
      const success = await deleteRecibo(String(selectedRecibo._id));
      if (success) {
        setRecibos(recibos.filter(r => r._id !== selectedRecibo._id));
        setShowDeleteConfirm(false);
        setSelectedRecibo(null);
      }
    }
  };

  // Filter out recibos with 'Fecha no disponible'
  const filteredRecibos = recibos.filter(recibo => recibo.date !== null);

  // Apply date filter
  const dateFilteredRecibos = filterDate 
    ? filteredRecibos.filter(recibo => recibo.date && format(new Date(recibo.date), 'yyyy-MM-dd') === filterDate)
    : filteredRecibos;

  // Calculate total amount for visible receipts
  const totalAmount = dateFilteredRecibos.reduce((sum, recibo) => {
    return sum + (recibo.total_amount || 0);
  }, 0);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecibos = dateFilteredRecibos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dateFilteredRecibos.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteRecibo = async (id: string) => {
    try {
      await deleteRecibo(id);
      toast.success("Recibo eliminado correctamente");
    } catch (error) {
      toast.error("No se pudo eliminar el recibo");
    }
  };

  if (loading) return <div>Cargando recibos...</div>;
  if (errorMessage) return <div>Error: {typeof errorMessage === 'string' ? errorMessage : 'An error occurred'}</div>;

  return (
    <div className="recibos-manager">
      <h2>Gestión de Recibos</h2>
      <div className="mb-3">
        <Button variant="primary" onClick={loadRecibos} className="me-2">
          Actualizar Lista
        </Button>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => {
            setFilterDate(e.target.value);
            setCurrentPage(1); // Reset to first page when filter changes
          }}
          className="form-control d-inline-block"
          style={{ width: 'auto' }}
        />
        {dateFilteredRecibos.length > 0 && (
          <h4 className="d-inline-block ms-3 mt-2">
            Total: ${totalAmount.toFixed(2)}
          </h4>
        )}
      </div>
      
      {dateFilteredRecibos.length === 0 ? (
        <p>No hay recibos para mostrar.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Folio</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Forma de Pago</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentRecibos.map((recibo) => (
                <tr key={recibo._id as string}>
                  <td>{recibo.folio_venta || recibo._id}</td>
                  <td>{recibo.date ? format(new Date(recibo.date), 'dd/MM/yyyy') : 'Fecha no disponible'}</td>
                  <td>{recibo.cliente || recibo.client_id || 'N/A'}</td>
                  <td>${recibo.total_amount !== undefined ? recibo.total_amount.toFixed(2) : 'N/A'}</td>
                  <td>{recibo.payment_method || 'N/A'}</td>
                  <td>{recibo.estatus || (recibo.facturada ? 'Facturada' : 'No facturada')}</td>
                  <td>
                    <Button 
                      variant="info" 
                      size="sm" 
                      onClick={() => handleViewDetails(recibo)}
                      className="me-2"
                    >
                      Detalles
                    </Button>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => handleDeleteRecibo(recibo._id as string)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="pagination">
            <Button
              variant="outline-primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "primary" : "outline-primary"}
                onClick={() => handlePageChange(i + 1)}
                className="mx-1"
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline-primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </Button>
          </div>
        </>
      )}

      {/* Details Modal */}
      <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Recibo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRecibo && (
            <div>
              <p><strong>Folio:</strong> {selectedRecibo.folio_venta || selectedRecibo._id}</p>
              <p><strong>Fecha:</strong> {selectedRecibo.date ? format(new Date(selectedRecibo.date), 'dd/MM/yyyy HH:mm') : 'Fecha no disponible'}</p>
              <p><strong>Cliente:</strong> {selectedRecibo.cliente || selectedRecibo.client_id || 'N/A'}</p>
              <p><strong>Total:</strong> ${selectedRecibo.total_amount !== undefined ? selectedRecibo.total_amount.toFixed(2) : 'N/A'}</p>
              <p><strong>Forma de Pago:</strong> {selectedRecibo.payment_method || 'N/A'}</p>
              <p><strong>Estatus:</strong> {selectedRecibo.estatus || (selectedRecibo.facturada ? 'Facturada' : 'No facturada')}</p>
              <p><strong>Observaciones:</strong> {selectedRecibo.observaciones || 'Ninguna'}</p>
              
              {selectedRecibo.items && selectedRecibo.items.length > 0 && (
                <div>
                  <h6>Items:</h6>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedRecibo.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.description}</td>
                          <td>{item.quantity}</td>
                          <td>${item.unitPrice !== undefined ? item.unitPrice.toFixed(2) : 'N/A'}</td>
                          <td>${item.total !== undefined ? item.total.toFixed(2) : 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este recibo?
          {selectedRecibo && (
            <p><strong>Folio:</strong> {selectedRecibo.folio_venta || selectedRecibo._id}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RecibosManager;
