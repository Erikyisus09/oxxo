import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv  from "dotenv";
import { test } from "./backend/controllers/empleados.controller.js";
import { test2 } from "./backend/controllers/gerentes.controller.js";
import { test3 } from "./backend/controllers/productos.controller.js";
import { test4 } from "./backend/controllers/productosF.controller.js";
import { test5 } from "./backend/controllers/promociones.controller.js";

dotenv.config()
mongoose.connect(process.env.url)
.then(()=>{
    console.log("si jala" )
})
.catch((error)=>{
    console.log("no jala" )
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("escucando el servidor")
})

test()
test2()
test3()
test4()
test5()