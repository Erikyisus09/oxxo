import { modeloE } from "../models/empleados.model.js";

modeloE.create({
    name: "Eddy",
    id_empelado: 13548,
    celular: 4496253635 
})

export const test = ()=>{
    console.log("Se esta llamndo el controlador de empleados")
}
