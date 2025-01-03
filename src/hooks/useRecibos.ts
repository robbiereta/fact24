import { useState } from 'react';
import { IRecibo } from '@/models/Recibo';

export const useRecibos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRecibos = async (): Promise<IRecibo[]> => {
    setLoading(true);
    try {
      const response = await fetch('/api/recibos');
      if (!response.ok) throw new Error('Error fetching recibos');
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getReciboById = async (id: string): Promise<IRecibo | null> => {
    setLoading(true);
    try {
      const response = await fetch(`/api/recibos/${id}`);
      if (!response.ok) throw new Error('Error fetching recibo');
      return await response.json();
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createRecibo = async (reciboData: Partial<IRecibo>): Promise<IRecibo | null> => {
    setLoading(true);
    try {
      const response = await fetch('/api/recibos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reciboData),
      });
      if (!response.ok) throw new Error('Error creating recibo');
      return await response.json();
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateRecibo = async (id: string, reciboData: Partial<IRecibo>): Promise<IRecibo | null> => {
    setLoading(true);
    try {
      const response = await fetch(`/api/recibos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reciboData),
      });
      if (!response.ok) throw new Error('Error updating recibo');
      return await response.json();
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteRecibo = async (id: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await fetch(`/api/recibos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error deleting recibo');
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getRecibos,
    getReciboById,
    createRecibo,
    updateRecibo,
    deleteRecibo,
  };
};
