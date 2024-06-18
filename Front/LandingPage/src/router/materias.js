
module.exports = (pool) => {
    const express = require('express');
    const router = express.Router();
  
    // @route   GET /api/materias
    // @desc    Get All Materias
    router.get('/', async (req, res) => {
      try {
        const result = await pool.query('SELECT * FROM materias');
        res.json(result.rows);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
  
    // @route   POST /api/materias
    // @desc    Create a Materia
    router.post('/', async (req, res) => {
      const { title, summary, content, category, link } = req.body;
      try {
        const result = await pool.query(
          'INSERT INTO materias (title, summary, content, category, link) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [title, summary, content, category, link]
        );
        res.json(result.rows[0]);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
  
    // @route   DELETE /api/materias/:id
    // @desc    Delete a Materia
    router.delete('/:id', async (req, res) => {
      const { id } = req.params;
      try {
        await pool.query('DELETE FROM materias WHERE id = $1', [id]);
        res.json({ message: 'Matéria deletada com sucesso' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
  
    return router;
  };
  