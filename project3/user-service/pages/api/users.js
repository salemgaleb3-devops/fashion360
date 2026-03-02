
export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(201).json({ message: 'User registered' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
                