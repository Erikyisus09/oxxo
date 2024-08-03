import { modeloPromos } from "../models/promociones.model.js";

modeloPromos.create({
    name: "promo lunes",
    precio: 206,
    incluye: "Tequila, hielos y refresco"
})

export const test5 = ()=>{
    console.log("Se esta llamndo el controlador de reprobados")
}