const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000; // Escolha a porta que desejar

app.use(express.json());
app.use(cors());

// Rota para exportar o texto
app.post('/export', async (req, res) => {
    const { text } = req.body;
    const fileName = 'exported_text.txt';
    const filePath = path.join(__dirname, fileName);
    try {
        await fs.writeFile(filePath, text);
        res.download(filePath, fileName);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao exportar o texto.' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
