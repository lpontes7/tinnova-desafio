import { IVeiculoRepository } from "../../../respositories/interface/veiculo.interface.repository";

export class DeleteVeiculoService {

    constructor(
        private deleteVeiculoRespository: IVeiculoRepository,
    ) { }

    async execute(id: string): Promise<void> {

        let veiculo = await this.deleteVeiculoRespository.findById(parseInt(id))

        if (!veiculo) {
            const error = new Error("Veiculo não encontrado")
            //@ts-ignore
            error.status = 400
            throw error;
        }

        await this.deleteVeiculoRespository.deleteVeiculo(parseInt(id))
    }
}