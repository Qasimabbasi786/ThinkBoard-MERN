import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 5002;

console.log(process.env.MONGO_URI);

// connectDB();


// Middleware to parse JSON bodies
app.use(express.json());
// Apply rate limiting middleware
app.use(rateLimiter);

app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to your frontend's origin
}));


// Custom middleware to log request details
// app.use((req, res, next) => {
//   console.log(`We just got new Request:\n Method: ${req.method}\n URL: ${req.url}`);
//   next();
// });




// Routes
app.use('/api/notes', notesRoutes);


connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
});