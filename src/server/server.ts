import express from 'express';
import cors from 'cors';
import path from 'path';

__dirname = path.resolve();
const app = express();

app.use(cors)