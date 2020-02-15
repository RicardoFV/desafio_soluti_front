import Home from '../src/views/Home.vue'
import Login from '../src/views/Login.vue'
import Usuarios from "./views/cadastros/Usuarios";
import Empresas from "./views/cadastros/Empresas.vue";
import Contratos from "./views/cadastros/Contratos";
import Administradores from "./views/cadastros/Administradores";
import UsuarioAlterar from "./views/alterar/UsuarioAlterar";
import ContratosPendentes from "./views/relatorios/ContratosPendentes.vue";

// Mapeando as rotas
export const routes =[
  {
  path:'',
  name:'login',
  component:Login,
  titulo: 'Login',
  menu:false
},
  {
    path:'/home',
    name:'home',
    component:Home,
    titulo: 'Home',
    menu:true
  },
  {
    path:'/usuarios',
    name:'usuarios',
    component:Usuarios,
    titulo: 'Usuarios',
    menu:true
  },
  {
    path:'/empresas',
    name:'empresas',
    component:Empresas,
    titulo: 'Empresas',
    menu:true
  },
  {
    path:'/alterarempresa',
    name:'alterarempresa',
    component:Empresas,
    titulo: 'Empresas',
    menu:false
  },
  {
    path:'/contratos',
    name:'contratos',
    component:Contratos,
    titulo: 'Contratos',
    menu:true
  },
  {
    path:'/administradores',
    name:'administradores',
    component:Administradores,
    titulo: 'Administradores',
    menu:true
  },
  {
    path:'/usuarioalterar',
    name:'usuarioalterar',
    component:UsuarioAlterar,
    titulo: 'UsuarioAlterar',
    menu:true
  },
  {
    path:'/contratopendente',
    name:'contratoPendente',
    component:ContratosPendentes,
    titulo:'ContratosPendentes',
    menu:true
  },
  {
    path:'/sair',
    name:'sair',
    component:Login,
    titulo:'Sair',
    menu:true
  }

]
