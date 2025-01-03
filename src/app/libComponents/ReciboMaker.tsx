'use server';

import { useState, useEffect } from 'react';
import { useRecibos } from '@/hooks/useRecibos';
import { IRecibo } from '@/models/Recibo';

export default function ReciboMaker(notasPartidas: any) {
  const [recibos, setRecibos] = useState<IRecibo[]>([]);
  const { loading, error, getRecibos, createRecibo, updateRecibo, deleteRecibo } = useRecibos();

  useEffect(() => {
    loadRecibos();
  }, []);

  const loadRecibos = async () => {
    const data = await getRecibos();
    setRecibos(data);
  };

  const handleCreate = async (reciboData: Partial<IRecibo>) => {
    const newRecibo = await createRecibo(reciboData);
    if (newRecibo) {
      setRecibos([newRecibo, ...recibos]);
    }
  };

  const handleUpdate = async (id: string, reciboData: Partial<IRecibo>) => {
    const updatedRecibo = await updateRecibo(id, reciboData);
    if (updatedRecibo) {
      setRecibos(recibos.map(r => r._id === id ? updatedRecibo : r));
    }
  };

  const handleDelete = async (id: string) => {
    const success = await deleteRecibo(id);
    if (success) {
      setRecibos(recibos.filter(r => r._id !== id));
    }
  };

  let total3 = 0;
  function getTotal(notas: any) {
    notas.map((note: any) => {
      total3 += Number(note.ImporteRealConImp)
      console.log("total3:" + total3);
    })
    return total3
  }
  let totalConImpuestos: number = getTotal(notasPartidas)
  let iva: number = totalConImpuestos * 0.16
  let subtotal: number = totalConImpuestos - iva
  let fecha = new Date();
  let fechaActual = fecha.toLocaleDateString();
  let folio = 'folio'; // orderid.generate();

  let recibo = {
    'folio_venta': folio,
    'fecha': fechaActual,
    'cliente': "Publico en general",
    'lineas_venta': notasPartidas,
    'total': totalConImpuestos,
    'estatus': "pagado",
    'anticipo': 0,
    'observaciones': "observaciones"
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recibos</h1>
      {/* Add your form components and recibo list rendering here */}
    </div>
  );
}