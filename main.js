import express from "express";
 
const app = express ();
const PORT = 5000;

app.get('/', (req , res) => {
  console.log("Hello World!");
})

// CRUD functionalities of movies

// reading movies
app.get('/movies', (req, res) => {
  
})

// creating movies
app.post('/movies', (req, res) => {

})

// updating movie
app.put('/movies/:id', (req, res) => {

})

// deleting movie
app.delete('/movies/:id', (req, res) => {
  
})

app.listen( PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})