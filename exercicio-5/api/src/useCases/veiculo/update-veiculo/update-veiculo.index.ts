import { Erro } from "../../../error/error"
import { VeiculoRepository } from "../../../respositories/veiculo.repository"
import { UpdateVeiculoController } from "./update-veiculo.controller"

import { UpdateVeiculoService } from "./update-veiculo.service"

const veiculoRespository = new VeiculoRepository()
const erro = new Erro()

const updateVeiculoService = new UpdateVeiculoService(veiculoRespository)

const updateVeiculoController = new UpdateVeiculoController(updateVeiculoService,erro)

export { updateVeiculoController }
