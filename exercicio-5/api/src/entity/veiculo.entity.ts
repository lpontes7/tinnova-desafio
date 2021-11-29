import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IVeiculo } from './interface/veiculo.interface'

@Entity()
export class Veiculo implements IVeiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    veiculo: string;

    @Column()
    marca: string;

    @Column()
    ano: number;

    @Column()
    descricao: string;

    @Column()
    vendido: boolean;

    @Column()
    created: Date;

    @Column({nullable: true})
    updated?: Date;

    constructor(partial: Partial<Veiculo>) {
        Object.assign(this, partial);
    }
}
