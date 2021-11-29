import { Erro } from "../../../error/error"
import { VeiculoRepository } from "../../../respositories/veiculo.repository"
import { CreatVeiculoController } from "./creat-veiculo.controller"
import { CreatVeiculoService } from "./creat-veiculo.service"

const veiculoRespository = new VeiculoRepository()
const erro = new Erro()

const creatVeiculoService = new CreatVeiculoService(veiculoRespository)

const creatVeiculoController = new CreatVeiculoController(creatVeiculoService,erro)

export { creatVeiculoController }
