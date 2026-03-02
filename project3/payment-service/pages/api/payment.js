
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;
    res.status(200).json({ message: 'Payment successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
                