import { Response } from "express";
import { IError } from "./interface/error.interface";

export class Erro {

  async erro(e: IError, res: Response) {
    switch (e.status) {
      case 400:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 401:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 403:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 404:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 406:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 408:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 409:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 410:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 413:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 415:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 422:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 502:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 503:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      case 504:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(e.status).send(e.message);
      default:
        console.log('LOG DE ERRO:');
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
  }
}
