import { Erro } from "../../../error/error"
import { VeiculoRepository } from "../../../respositories/veiculo.repository"
import { UpdateVeiculoController } from "./delete-veiculo.controller"
import { DeleteVeiculoService } from "./delete-veiculo.service"

const veiculoRespository = new VeiculoRepository()
const erro = new Erro()

const deleteVeiculoService = new DeleteVeiculoService(veiculoRespository)

const deleteVeiculoController = new UpdateVeiculoController(deleteVeiculoService,erro)

export { deleteVeiculoController }
