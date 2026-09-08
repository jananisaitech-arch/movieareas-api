import express from "express";
import movieRoute from './routes/movies.js'
 
const app = express();
const PORT = 5000;

// app.get('/', (req , res) => {
//   res.send("Hello World!");
// })

// middleware 
app.use('/movies', movieRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})