import { Request, Response } from "express"
import { Erro } from "../../../error/error";
import { FindVeiculoDTO } from "./dto/find-veiculo.dto";
import { FindVeiculoService } from "./find-veiculo.service";

export class FindVeiculoController {
    constructor(
        private findVeiculoService : FindVeiculoService,
        private error : Erro
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        //@ts-ignore
        const data: FindVeiculoDTO = request.query;

        try {
            const resp = await this.findVeiculoService.execute(data)
            return response
                .status(201)
                .json(resp)

        } catch (e) {
            await this.error.erro(e, response)
        }
    }
}