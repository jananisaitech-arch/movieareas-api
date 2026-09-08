import { model, Schema } from "mongoose";


const movieSchema =  new Schema ({
    title: String,
    desc: String
})

const Movie = model('movie', movieSchema)
export default Movie;