import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  readonly name: string;
}
