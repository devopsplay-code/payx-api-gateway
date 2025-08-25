import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Proxy to Auth Service
app.use('/auth', createProxyMiddleware({
  target: 'http://localhost:4001',
  changeOrigin: true
}));

const PORT = 4000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
