import mongoose from "mongoose";
const cardScheme = mongoose.Schema({
    name: String,
    imageUrl: String,
});
const Cards = mongoose.model('cards', cardScheme);
export default Cards;