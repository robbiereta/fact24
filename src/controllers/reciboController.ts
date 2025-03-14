import { Request, Response } from 'express';
import Recibo, { IRecibo } from '../models/Recibo';

// Create a new recibo
export const createRecibo = async (req: Request, res: Response) => {
  try {
    const recibo = new Recibo(req.body);
    const savedRecibo = await recibo.save();
    res.status(201).json(savedRecibo);
  } catch (error) {
<<<<<<< HEAD
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ message: errorMessage });
=======
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ message });
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f
  }
};

// Get all recibos
export const getRecibos = async (req: Request, res: Response) => {
  try {
    const recibos = await Recibo.find();
    res.status(200).json(recibos);
  } catch (error) {
<<<<<<< HEAD
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
=======
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message });
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f
  }
};

// Get a single recibo by ID
export const getReciboById = async (req: Request, res: Response) => {
  try {
    const recibo = await Recibo.findById(req.params.id);
    if (!recibo) {
      return res.status(404).json({ message: 'Recibo not found' });
    }
    res.status(200).json(recibo);
  } catch (error) {
<<<<<<< HEAD
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
=======
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message });
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f
  }
};

// Update a recibo
export const updateRecibo = async (req: Request, res: Response) => {
  try {
    const recibo = await Recibo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!recibo) {
      return res.status(404).json({ message: 'Recibo not found' });
    }
    res.status(200).json(recibo);
  } catch (error) {
<<<<<<< HEAD
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ message: errorMessage });
=======
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ message });
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f
  }
};

// Delete a recibo
export const deleteRecibo = async (req: Request, res: Response) => {
  try {
    const recibo = await Recibo.findByIdAndDelete(req.params.id);
    if (!recibo) {
      return res.status(404).json({ message: 'Recibo not found' });
    }
    res.status(200).json({ message: 'Recibo deleted successfully' });
  } catch (error) {
<<<<<<< HEAD
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
=======
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message });
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f
  }
};
