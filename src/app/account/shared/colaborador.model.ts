import { Usuario } from '../../componentes/usuario/usuario.model';

export class Model {
    constructor(colaborador : Usuario) {
        Object.assign(this, colaborador);
    
    }
  }
  //classe usuario extendendo a classe Model
  export class Colaborador extends Model {
  }