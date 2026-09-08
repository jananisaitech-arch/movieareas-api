import Movie from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const movieCreate = async (req, res) => {
  console.log(req.body);

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await newMovie.save();
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  return res.json(req.body);
};

export const movieDetail = async(req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    if( movie == null ){
       return res.status(404).json({message: "Movie not found"})
    }
    else{
        res.json(movie)
    }
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
};
export const movieUpdate = async(req, res) => {
    // if(req.body.title !== null){
    //      res.movie.title = req.body.title
    // }
    //  if(req.body.desc !== null){
    //      res.movie.desc = req.body.desc
    // }

    // try {
    //    const updatedMovie = await res.movie.save() 
    //    res.json(updatedMovie);
    // } catch (error) {
    //     res.status(400).json({message: error.message})
    // }
    try {
       const updatedMovie =  await Movie.findByIdAndUpdate({_id: req.params.id},
            {
                title: req.body.title,
                desc: req.body.desc
            },
            {
                new: true
            }
         )
         res.status(200).json(updatedMovie)
    } catch (error) {
         res.status(400).json({message: error.message})
    }

}
export const movieDelete = (req, res) => {
  res.json({ message: `Movie ${req.params.id} deleted` });
};
