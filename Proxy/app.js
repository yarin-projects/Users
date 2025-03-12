import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import rateLimit from 'express-rate-limit';

const app = express();

const minuteValue = 1;
const millisecondsInMinute = minuteValue * 60 * 1000;

const TARGET_URL = 'http://localhost:3000';

const limiter = rateLimit({
  windowMs: millisecondsInMinute,
  max: 100,
  message: 'Too many requests. Please Try Again Later',
});

app.use(limiter);

app.use(
  '/',
  createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
  })
);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy Server Listening On Port ${PORT}`);
});
