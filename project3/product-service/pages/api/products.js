
export default function handler(req, res) {
  if (req.method === 'GET') {
    const products = [{ id: 1, name: 'Product 1', price: 100 }];
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
                