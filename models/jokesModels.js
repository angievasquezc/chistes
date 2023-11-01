import mongoose from "mongoose";

const JokesSchema = new mongoose.Schema(
    {
        firstPart:String,
        secondPart:String,
        
    }
)

const Broma = mongoose.model("broma", JokesSchema);
export default Broma;