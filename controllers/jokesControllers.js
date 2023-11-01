import Broma from "../models/jokesModels.js"

const getJoke=async(req,res)=>{
    var jokesList = await Broma.find();
    res.json(jokesList);
}
const createJoke= async (req,res)=>{
    var newJoke =await Broma.create(req.body);
    res.status(201).json(newJoke);
}
const updateJoke=async(req,res)=>{
    var idJoke = req.params.idJoke;
    var dataUpdate = req.body;

    await Broma.findByIdAndUpdate(idJoke, dataUpdate)
    res.status(200).json("se actualizó el producto")
}
const deleteJoke=async(req,res)=>{
    var id = req.params.idJoke;
    await Broma.findByIdAndDelete(id)
    res.status(200).json()
}
const getOneJoke=async(req,res)=>{
    var id = req.params.idJoke;
    var oneJoke = await Broma.findById(id)
    res.status(200).json(oneJoke)
}

export{getJoke, createJoke, updateJoke, deleteJoke, getOneJoke}