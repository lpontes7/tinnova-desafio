import { Request, Response } from "express"
import { Erro } from "../../../error/error";
import { UpdateVeiculoService } from "./update-veiculo.service";
import { AtualizarVeiculoDTO } from "./dto/update-veiculo.dto";

export class UpdateVeiculoController {
    constructor(
        private updateVeiculoService : UpdateVeiculoService,
        private error : Erro
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const data: AtualizarVeiculoDTO = request.body;
        const id = request.query.id as string
        
        try {
            await this.updateVeiculoService.execute(data, id)
            return response
                .status(201)
                .json({
                    message: `Sucesso ao atualizar veiculo`
                })

        } catch (e) {
            await this.error.erro(e, response)
        }
    }
}