import {esquemaE} from './empleados.model.js'
import { model } from 'mongoose'

export const modeloG = new model('tabla de gerentes', esquemaE)