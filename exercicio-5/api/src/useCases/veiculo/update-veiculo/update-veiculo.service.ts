import { IVeiculoRepository } from "../../../respositories/interface/veiculo.interface.repository";
import { AtualizarVeiculoDTO } from "./dto/update-veiculo.dto";

export class UpdateVeiculoService {

    constructor(
        private updateVeiculoRespository: IVeiculoRepository,
    ) { }

    async execute(data: AtualizarVeiculoDTO, id:string): Promise<void> {


        let veiculo = await this.updateVeiculoRespository.findById(parseInt(id))

        if (!veiculo) {
            const error = new Error("Veiculo não encontrado")
            //@ts-ignore
            error.status = 400
            throw error;
        }

        if (data.ano) veiculo.ano = data.ano
        if (data.descricao) veiculo.descricao = data.descricao
        if (data.marca) veiculo.marca = data.marca
        if (data.veiculo) veiculo.veiculo = data.veiculo
        if (data.vendido) veiculo.vendido = data.vendido
        veiculo.updated = new Date()

        await this.updateVeiculoRespository.updateVeiculo(veiculo)
    }
}