import { Between, Equal, getRepository, Like, MoreThanOrEqual, Repository } from "typeorm";
import { Veiculo } from "../entity/veiculo.entity";
import { CriarVeiculoDTO } from "../useCases/veiculo/creat-veiculo/dto/creat-veiculo.dto";
import { FindVeiculoDTO } from "../useCases/veiculo/find-veiculo/dto/find-veiculo.dto";

import { IVeiculoRepository } from "./interface/veiculo.interface.repository";

export class VeiculoRepository implements IVeiculoRepository {
    constructor() { }

    async findAll(data: FindVeiculoDTO): Promise<{ total: number; dados: Veiculo[] }> {
        const veiculoRespository = getRepository(Veiculo)
        let orderParams: any = {
            Veiculo: 'ASC',
        };

        if (data.orderBy && data.order) {
            orderParams = {};
            if (data.orderBy == 'veiculo')
                orderParams['veiculo'] = data.order;
            else if (data.orderBy === 'marca')
                orderParams['marca'] = data.order;
            else if (data.orderBy === 'ano')
                orderParams['ano'] = data.order;
            else if (data.orderBy === 'vendido')
                orderParams['vendido'] = data.order;
            else orderParams[data.orderBy] = data.order;
        }

        const whereParams: any = {};

        if (data.marca) whereParams.marca = Like(`${data.marca}`);
        if (data.naoVendidos) whereParams.vendido = Equal(data.naoVendidos)
        if (data.decada) {
            const decada = parseInt(data.decada)
            whereParams.ano = Between(
                decada,
                decada + 10,
            );
        }

        if (data.ultimaSemana) {
            var d = new Date();
            d.setDate(d.getDate() - 7)
            whereParams.created = MoreThanOrEqual(d);
        }

        const registros = await veiculoRespository.createQueryBuilder('veiculo')
            .orderBy(orderParams)
            .where(whereParams)
            .getManyAndCount();

        return {
            total: registros[1],
            dados: registros[0],
        };
    }

    async findById(id: number) {
        const veiculoRespository = getRepository(Veiculo)
        return await veiculoRespository.findOne({ where: { id: id } })
    }

    async updateVeiculo(veiculo: Veiculo): Promise<void> {
        const veiculoRespository = getRepository(Veiculo)
        await veiculoRespository.update(veiculo.id, veiculo)
    }

    async deleteVeiculo(id: number): Promise<void> {
        const veiculoRespository = getRepository(Veiculo)
        await veiculoRespository.delete(id)
    }

    async saveVeiculo(saveDto: CriarVeiculoDTO): Promise<Veiculo> {
        const veiculoRespository = getRepository(Veiculo)
        return await veiculoRespository.save(saveDto)
    }

}