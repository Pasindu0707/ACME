import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Import for __dirname
import { dirname } from 'path'; // Import for dirname

// Get the current file name and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

export default router;
