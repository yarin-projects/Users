import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { TOKENS } from './tokens.js';

const app = express();

const limiter = rateLimit({
  windowMs: TOKENS.oneMinuteMs,
  max: TOKENS.maxRequests,
  message: TOKENS.messages.rateLimitMax,
});

app.use(
  cors({
    credentials: true,
    origin: [TOKENS.corsAllowedUrl],
  })
);
app.use(limiter);

app.use(
  '/',
  createProxyMiddleware({
    target: TOKENS.localTargetUrl,
    // target: TOKENS.dockerTargetUrl,
    changeOrigin: true,
    logger: console,
  })
);

app.listen(TOKENS.port, () => {
  console.log(TOKENS.messages.serverRunning, TOKENS.port);
});
