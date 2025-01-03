import express from 'express';
import {
  createRecibo,
  getRecibos,
  getReciboById,
  updateRecibo,
  deleteRecibo
} from '../controllers/reciboController';

const router = express.Router();

// Create a new recibo
router.post('/', createRecibo);

// Get all recibos
router.get('/', getRecibos);

// Get a single recibo by ID
router.get('/:id', getReciboById);

// Update a recibo
router.put('/:id', updateRecibo);

// Delete a recibo
router.delete('/:id', deleteRecibo);

export default router;
