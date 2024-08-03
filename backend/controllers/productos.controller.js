import { modelProd } from "../models/productos.model.js";

modelProd.create({
    name: "Pepsi 1L",
    id_producto: 4568,
    precio: 17,
})

export const test3 = ()=>{
    console.log("Se esta llamndo el controlador de reprobados")
}