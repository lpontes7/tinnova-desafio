import { IVeiculoRepository } from "../../../respositories/interface/veiculo.interface.repository";
import { FindVeiculoDTO } from "./dto/find-veiculo.dto";

export class FindVeiculoService {

    constructor(
        private findVeiculoRespository: IVeiculoRepository,
    ) { }

    async execute(data: FindVeiculoDTO){
        return await this.findVeiculoRespository.findAll(data)
    }
}