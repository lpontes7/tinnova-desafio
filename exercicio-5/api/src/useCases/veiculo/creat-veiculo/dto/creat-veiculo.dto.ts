import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Marcas } from './marcas.enum';

export class CriarVeiculoDTO{ 
    @IsString()
    @IsNotEmpty()
    veiculo: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(Marcas)
    marca: string;
    
    @IsNumber()
    @IsNotEmpty()
    ano: number;
    
    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsBoolean()
    @IsNotEmpty()
    vendido: boolean;
}