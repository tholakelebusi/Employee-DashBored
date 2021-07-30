import * as mongoose from 'mongoose';


export const EmployeeSchema = new mongoose.Schema({
    name: String,
   position: String,
   
})