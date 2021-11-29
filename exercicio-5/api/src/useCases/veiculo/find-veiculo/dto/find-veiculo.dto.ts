import { IsBooleanString, IsEnum, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { Marcas } from "../../creat-veiculo/dto/marcas.enum";
import { OrderByEnum } from "./order-by.enum";
import { OrderEnum } from "./order.enum";

export class FindVeiculoDTO {
  @IsNotEmpty()
  @IsEnum(OrderByEnum)
  orderBy?: string;

  @IsNotEmpty()
  @IsEnum(OrderEnum)
  @IsString()
  order?: string;

  @IsNotEmpty()
  @IsBooleanString()
  naoVendidos: boolean;

  @IsNotEmpty()
  @IsNumberString()
  decada?: string;

  @IsNotEmpty()
  @IsEnum(Marcas)
  @IsString()
  marca?: string;

  @IsNotEmpty()
  @IsBooleanString()
  ultimaSemana?: string;
}


