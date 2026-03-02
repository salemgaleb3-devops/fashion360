
export default function handler(req, res) {
  if (req.method === 'GET') {
    const trends = [{ id: 1, name: 'Sustainable Fashion' }];
    res.status(200).json(trends);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
                