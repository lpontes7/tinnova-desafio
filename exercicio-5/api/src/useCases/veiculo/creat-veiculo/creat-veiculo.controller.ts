import { Request, Response } from "express"
import { Erro } from "../../../error/error";
import { CreatVeiculoService } from "./creat-veiculo.service";
import { CriarVeiculoDTO } from "./dto/creat-veiculo.dto";

export class CreatVeiculoController {
    constructor(
        private creatVeiculoService : CreatVeiculoService,
        private error : Erro
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const data: CriarVeiculoDTO = request.body;

        try {
            const id = await this.creatVeiculoService.execute(data)
            return response
                .status(201)
                .json({
                    message: `Sucesso ao cadastrar novo veiculo, id: ${id}`
                })

        } catch (e) {
            await this.error.erro(e, response)
        }
    }
}