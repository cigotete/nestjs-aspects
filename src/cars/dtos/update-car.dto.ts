import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @MinLength(2)
  @IsOptional()
  readonly model?: string;
}
