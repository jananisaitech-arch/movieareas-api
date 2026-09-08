import express from 'express';
import { movieCreate, movieDelete, movieIndex, movieUpdate } from '../controllers/movie.controller.js';


const router = express.Router();

// CRUD functionalities of movies

// reading movies
router.get('/', movieIndex)

// creating movies
router.post('/', movieCreate)

// updating movie
router.put('/:id', movieUpdate)

// deleting movie
router.delete('/:id', movieDelete)

export default router;