import { Schema, model } from "mongoose";

export const esquemaPromos = new Schema({
    name: {
        type: String
    },
    Precio: {
        type: Number
    },
    incluye: {
        type: String
    }
})

export const modeloPromos = new model('tabla de promos', esquemaPromos)