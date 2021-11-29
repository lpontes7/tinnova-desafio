import { Veiculo } from "../../../entity/veiculo.entity";
import { IVeiculoRepository } from "../../../respositories/interface/veiculo.interface.repository";
import { CriarVeiculoDTO } from "./dto/creat-veiculo.dto";

export class CreatVeiculoService {

    constructor(
        private creatVeiculoRespository: IVeiculoRepository,
    ) { }

    async execute(data: CriarVeiculoDTO): Promise<number> {

        const veiculo = new Veiculo ({...data, created:new Date()})    

        const resp = await this.creatVeiculoRespository.saveVeiculo(veiculo)
        return resp.id
    }
}