import { ApiProperty } from '@nestjs/swagger';

export class CreateUserHealthInfoRequestDto {
  @ApiProperty()
  readonly smoking: number;

  @ApiProperty()
  readonly alcohol: number;

  @ApiProperty()
  readonly bigThree: number;

  @ApiProperty()
  readonly bmi: number;

  @ApiProperty()
  readonly sugarLevel: number;

  @ApiProperty()
  readonly bloodPressure: number;

  @ApiProperty()
  readonly todayCalorie: number;

  @ApiProperty()
  readonly todayWater: number;

  @ApiProperty()
  readonly todaySteps: number;

  @ApiProperty()
  readonly liverLevels: number;
}
