import express from 'express';
import * as jokesRoutes from "./routes/jokesRoutes.js"
import mongoose from 'mongoose'

const app = express();

mongoose.connect("mongodb://localhost:27017/jokes")
.then(()=>{
    console.log("se conectó correctamente a la BD")
})
.catch((err)=>{
    console.log("hubo un error" + err)
});


app.use(express.json()); 
app.use(jokesRoutes.router)
app.listen(8000);


