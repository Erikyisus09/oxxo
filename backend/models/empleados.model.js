import { Schema, model } from "mongoose";

export const esquemaE = new Schema({
    name: {
        type: String
    },
    id_empleado: {
        type: Number
    },
    celular: {
        type: Number
    }
})

export const modeloE = new model('tabla de empleados',esquemaE)
