//rotas do meu projeto
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import {RelatoriosComponent} from './componentes/relatorios/relatorios.component';


import { ManutencaoImagensComponent }from './views/manutencao-imagens/manutencao-imagens.component';
import { ManutencaoProfessorComponent }from './views/manutencao-professor/manutencao-professor.component';
import { ManutencaoUsuarioComponent }from './views/manutencao-usuario/manutencao-usuario.component';
import { ManutencaoColaboracaoComponent }from './views/manutencao-colaboracao/manutencao-colaboracao.component';
import { ManutentaoDisciplinaComponent }from './views/manutencao-disciplina/manutentao-disciplina.component';
import { ImagemUpdateComponent } from './componentes/imagem/imagem-update/imagem-update.component';




import { ImagemCreateComponent } from './componentes/imagem/imagem-create/imagem-create.component';
import { UsuarioCreateComponent } from './componentes/usuario/usuario-create/usuario-create.component';
import { ProfessorCreateComponent} from './componentes/professor/professor-create/professor-create.component';
import { ColaboracaoCreateComponent} from './componentes/colaboracao/colaboracao-create/colaboracao-create.component';
import { DisciplinaCreateComponent} from './componentes/disciplina/disciplina-create/disciplina-create.component'
import { AssuntoCreateComponent } from './componentes/assunto/assunto-create/assunto-create.component';
import { LoginTemplateComponent } from './componentes/login/login-template/login-template.component';



import { ColaboracaoReadComponent} from './componentes/colaboracao/colaboracao-read/colaboracao-read.component';
import { DisciplinaReadComponent} from './componentes/disciplina/disciplina-read/disciplina-read.component';
import { ImagemReadComponent} from './componentes/imagem/imagem-read/imagem-read.component';
import { ProfessorReadComponent } from './componentes/professor/professor-read/professor-read.component';
import { UsuarioReadComponent } from './componentes/usuario/usuario-read/usuario-read.component';
import { ColapsarImagemComponent } from './componentes/imagem/colapsar-imagem/colapsar-imagem.component';
import { ColapsarRelatorioComponent } from './componentes/relatorios/colapsar-relatorio/colapsar-relatorio.component';
import { ColapsarRelatorioProfessorComponent} from './componentes/relatorios/colapsar-relatorio-professor/colapsar-relatorio-professor.component';
import { ColapsarRelatorioUsuarioComponent } from './componentes/relatorios/colapsar-relatorio-usuario/colapsar-relatorio-usuario.component';
import { LoginCreateComponent } from './componentes/login/login-create/login-create.component'


import { ImagemDeleteComponent } from './componentes/imagem/imagem-delete/imagem-delete.component';
import { ColaboracaoDeleteComponent } from './componentes/colaboracao/colaboracao-delete/colaboracao-delete.component';
import { UsuarioDeleteComponent } from './componentes/usuario/usuario-delete/usuario-delete.component';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component'


const routes: Routes = [
  {path: "",
component: HomeComponent
  },
  {path: "imagens",
    component: ManutencaoImagensComponent
  },
  {path: "disciplina",
  component: ManutentaoDisciplinaComponent
},
{path: "relatorio",
component: RelatoriosComponent
},
{path: "login",
component: LoginTemplateComponent
},
{path: "professor",
  component: ManutencaoProfessorComponent
},
{path: "usuario",
  component: ManutencaoUsuarioComponent
},
{path: "colaboracao",
  component: ManutencaoColaboracaoComponent
},

{path: "imagem/create",
  component: ImagemCreateComponent
},


{path: "login/create",
  component: LoginCreateComponent
},
{path: "imagem/update",
  component: ImagemUpdateComponent
},

{path: "disciplina/create",
  component: DisciplinaCreateComponent
},
{path: "usuario/create",
  component: UsuarioCreateComponent
},
{path: "professor/create",
  component: ProfessorCreateComponent
},
{path: "colaboracao/create",
  component: ColaboracaoCreateComponent
},
{path: "disciplina/read",
  component: DisciplinaReadComponent
},
{path: "imagem/read",
  component: ImagemReadComponent
},
{path: "professor/read",
  component: ProfessorReadComponent
},
{path: "usuario/read",
  component: UsuarioReadComponent
},
{path: "imagem/colapsar",
  component: ColapsarImagemComponent
},
{path: "relatorio/colapsar",
  component: ColapsarRelatorioComponent
},
{path: "relatorio/colapsar/professor",
  component: ColapsarRelatorioProfessorComponent
},
{path: "relatorio/colapsar/usuario",
  component: ColapsarRelatorioUsuarioComponent
},

{path: "colaboracao/read",
  component: ColaboracaoReadComponent
},
{path: "assunto/create",
  component: AssuntoCreateComponent
},
{path: "imagem/delete",
  component: ImagemDeleteComponent
},
{path: "colaboracao/delete",
  component: ColaboracaoDeleteComponent
},

{path: "usuario/delete",
  component: UsuarioDeleteComponent
},
{path: "upload",
  component: UploadFileComponent
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
