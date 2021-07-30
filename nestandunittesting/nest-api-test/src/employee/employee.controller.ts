import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import {EmployeeDTO} from './dto/employee.dto'
import { Employee } from './interface/employee.interface';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly employeeSrvice:EmployeeService){}

  @Get()
  findAll(): Promise<Employee[]>{
      return this.employeeSrvice.findAll();
  }

  @Get(':id')
  find(@Param('id') id): Promise<Employee>{
     
           return this.employeeSrvice.find(id);
 
  }

  
  @Post()
  createProduct(@Body() product: EmployeeDTO): Promise<Employee>{
      return this.employeeSrvice.Create(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id, @Body() product: EmployeeDTO): Promise<Employee>{
      return this.employeeSrvice.update(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id): Promise<Employee>{
      return this.employeeSrvice.delete(id);
  }
}

