import Home from '../src/views/Home.vue'
import Login from '../src/views/Login.vue'
import Usuarios from "./views/cadastros/Usuarios";
import Empresas from "./views/cadastros/Empresas.vue";
// Mapeando as rotas
export const routes =[{
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
  }

]
