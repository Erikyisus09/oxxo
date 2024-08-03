import { esquemaProd } from "./productos.model.js";
import { model } from "mongoose";

export const modeloPF = new model('tabla de productos faltantes', esquemaProd)