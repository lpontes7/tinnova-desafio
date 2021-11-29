import { Request, Response } from "express"
import { Erro } from "../../../error/error";
import { DeleteVeiculoService } from "./delete-veiculo.service";

export class UpdateVeiculoController {
    constructor(
        private deleteVeiculoService : DeleteVeiculoService,
        private error : Erro
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.query.id as string
        
        try {
            await this.deleteVeiculoService.execute(id)
            return response
                .status(201)
                .json({
                    message: `Sucesso ao excluir veiculo`
                })

        } catch (e) {
            await this.error.erro(e, response)
        }
    }
}