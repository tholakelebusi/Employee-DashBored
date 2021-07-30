import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { SpaceShipModule } from './space-ship/space-ship.module';


const url="mongodb+srv://cossa:12345@cluster0.krz1i.mongodb.net/Employee?retryWrites=true&w=majority";
@Module({
  imports: [SpaceShipModule,EmployeeModule,MongooseModule.forRoot(url)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
