const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS
app.use(cors());

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Endpoint para upload de imagem
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'Nenhum arquivo enviado.' });
      return;
    }

    const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    res.status(201).json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer upload da imagem.' });
  }
});

// Endpoint para salvar texto do blog (exemplo simples)
app.post('/api/posts', express.json(), (req, res) => {
  try {
    const { title, content } = req.body;
    // Aqui você poderia salvar no banco de dados ou em um arquivo, dependendo da sua necessidade
    res.status(201).json({ message: 'Postagem salva com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar a postagem.' });
  }
});

// Servidor ouvindo na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
