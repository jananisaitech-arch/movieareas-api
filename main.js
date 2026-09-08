import express from "express";
import movieRoute from './routes/movies.js';
import connectDB from "./lib/db.js";
 
const app = express();
const PORT = 5000;

connectDB();
// datas understanding middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// middleware 
app.use('/movies', movieRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})