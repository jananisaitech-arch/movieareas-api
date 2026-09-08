import Movie from "../models/movie.model.js";

export const movieIndex =  (req, res) => {
  res.json({ message: "Get all movies" });
}

export const movieCreate = async(req, res) => {
  console.log(req.body);

  const newMovie = new Movie ({
    title : req.body.title,
    desc: req.body.desc
  })
  try {
      const movie = await newMovie.save()
      return res.status(200).json(movie)
  } catch (error) {
     return res.error(400).json({message: error.message})
  }


  return res.json(req.body)
}

export const movieUpdate = (req, res) => {
  res.json({ message: `Movie ${req.params.id} updated` });
}

export const movieDelete =  (req, res) => {
  res.json({ message: `Movie ${req.params.id} deleted` });
}