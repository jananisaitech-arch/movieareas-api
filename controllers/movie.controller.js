export const movieIndex =  (req, res) => {
  res.json({ message: "Get all movies" });
}

export const movieCreate = (req, res) => {
  res.json({ message: "Movie created" });
}

export const movieUpdate = (req, res) => {
  res.json({ message: `Movie ${req.params.id} updated` });
}

export const movieDelete =  (req, res) => {
  res.json({ message: `Movie ${req.params.id} deleted` });
}