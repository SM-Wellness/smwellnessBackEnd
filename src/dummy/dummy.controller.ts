import {
  DummyControllerDecorator as Controller,
  GetDummyData,
} from './dummy.controller.decorator';
import { DummyService } from './dummy.service';

@Controller()
export class DummyController {
  constructor(private readonly dummyService: DummyService) {}

  @GetDummyData()
  getDummy() {
    return this.dummyService.getDummy();
  }
}
