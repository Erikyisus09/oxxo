import { Schema, model } from "mongoose";

export const esquemaProd = new Schema({
    name: {
        type: String
    },
    id_producto : {
        type: Number
    },
    precio: {
        type: Number
    }
})

export const modelProd = new model('tabla de productos', esquemaProd)