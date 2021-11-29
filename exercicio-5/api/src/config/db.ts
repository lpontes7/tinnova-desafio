import { createConnection } from "typeorm"

export const conectarServidorNoDB = async () => {
    const conexao = await createConnection({
        type: 'postgres',
        host: "db",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "veiculo",
        synchronize: true,
        logging: true,
        entities: ['src/entity/**/*.entity{.ts,.js}']
    });
    console.log('App conectado ao BD ' + conexao.options.database)

    process.on('SIGINT', () => {
        conexao.close().then(() => {
            console.log('Conexão com BD fechada')
        })
    })

}