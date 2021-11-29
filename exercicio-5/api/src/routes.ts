import { Router } from "express";
import validationMiddleware from "./middlewares/validation.middleware";
import { creatVeiculoController } from "./useCases/veiculo/creat-veiculo/creat-veiculo.index";
import { CriarVeiculoDTO } from "./useCases/veiculo/creat-veiculo/dto/creat-veiculo.dto"
import { deleteVeiculoController } from "./useCases/veiculo/delete-veiculo/delete-veiculo.index";
import { FindVeiculoDTO } from "./useCases/veiculo/find-veiculo/dto/find-veiculo.dto";
import { findVeiculoController } from "./useCases/veiculo/find-veiculo/find-veiculo.index";
import { AtualizarVeiculoDTO } from "./useCases/veiculo/update-veiculo/dto/update-veiculo.dto";
import { updateVeiculoController } from "./useCases/veiculo/update-veiculo/update-veiculo.index";

const router = Router()


router.get('/veiculo', validationMiddleware(FindVeiculoDTO, 'query', true), (request, response) => {
    return findVeiculoController.handle(request, response)
})

router.post("/veiculo", validationMiddleware(CriarVeiculoDTO, 'body'), (request, response) => {
    return creatVeiculoController.handle(request, response)
})

router.patch("/veiculo", validationMiddleware(AtualizarVeiculoDTO, 'body', true), (request, response) => {
    return updateVeiculoController.handle(request, response)
})

router.delete("/veiculo", (request, response) => {
    return deleteVeiculoController.handle(request, response)
})

export { router }