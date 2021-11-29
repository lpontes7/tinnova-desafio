import { Erro } from "../../../error/error"
import { VeiculoRepository } from "../../../respositories/veiculo.repository"
import { FindVeiculoController } from "./find-veiculo.controller"
import { FindVeiculoService } from "./find-veiculo.service"


const veiculoRespository = new VeiculoRepository()
const erro = new Erro()

const findVeiculoService = new FindVeiculoService(veiculoRespository)

const findVeiculoController = new FindVeiculoController(findVeiculoService,erro)

export { findVeiculoController }
