import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipController } from './space-ship.controller';
import { SpaceShipService } from './space-ship.service';

describe('SpaceShipController', () => {
  let controller: SpaceShipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceShipController],
    }).compile();

    controller = module.get<SpaceShipController>(SpaceShipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

describe('SpaceShipController', () => {
 
  let controller: SpaceShipController;

  let service: SpaceShipService;


  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({

      controllers: [SpaceShipController],

      providers: [SpaceShipService]

    }).compile();

    controller = module.get<SpaceShipController>(SpaceShipController);

    service = module.get<SpaceShipService>(SpaceShipService);

  });

  it('should call the service', () => {

    const spaceShip = {};

    controller.save(spaceShip);

    expect(service.save).toHaveBeenCalled();

  });

});

