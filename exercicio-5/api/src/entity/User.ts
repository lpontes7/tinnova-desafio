import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Veiculo {

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

    @Column()
    updated: Date;
}
