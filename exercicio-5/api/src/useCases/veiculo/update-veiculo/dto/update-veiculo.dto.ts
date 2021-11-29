import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Marcas } from '../../creat-veiculo/dto/marcas.enum';


export class AtualizarVeiculoDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    veiculo?: string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(Marcas)
    marca?: string;

    @IsNotEmpty()
    @IsNumber()
    ano?: number;

    @IsNotEmpty()
    @IsString()
    descricao?: string;

    @IsNotEmpty()
    @IsBoolean()
    vendido?: boolean;
}

