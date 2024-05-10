import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  teamname: { type: String, required: true },
  description : { type: String, required: true },
  data: { type: String, required: true },
});

const Player = mongoose.model('Player', playerSchema);

export default Player;