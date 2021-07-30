import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './interface/employee.interface';
@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private readonly EmployeeModel: Model<Employee>){}

  async findAll(): Promise<Employee[]>{
        return await this.EmployeeModel.find();
    }

    async find(id: string): Promise<Employee>{
        return await this.EmployeeModel.findOne({_id:id });
    }

   


    async Create(product: Employee): Promise<Employee>{
        const newProduct = new this.EmployeeModel(product);
        return await newProduct.save();

    }
    async update(id: string, employee: Employee): Promise<Employee>{
        
      return await this.EmployeeModel.findByIdAndUpdate(id, employee, { new: true});
  }

  async delete(id: string): Promise<Employee>{
      return await this.EmployeeModel.findByIdAndRemove(id);
  }

}
