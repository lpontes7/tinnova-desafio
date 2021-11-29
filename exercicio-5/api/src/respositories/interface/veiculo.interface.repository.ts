import { Veiculo } from "../../entity/veiculo.entity";
import { FindVeiculoDTO } from "../../useCases/veiculo/find-veiculo/dto/find-veiculo.dto";

export interface IVeiculoRepository {
    findAll(data : FindVeiculoDTO): Promise<{total: number;dados: Veiculo[]}>;
    findById(id: number):Promise< Veiculo| null>;
    updateVeiculo(veiculo :Veiculo): Promise<void>;
    deleteVeiculo(id: number): Promise<void>;
    saveVeiculo(veiculo :Veiculo): Promise<Veiculo>;
}