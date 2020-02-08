import Home from '../src/views/Home.vue'
import Login from '../src/views/Login.vue'

// MAPEANDO AS ROTAS
export const routes =[{
  path:'',
  name:'login',
  component:Login,
  titulo: 'Login',
  menu:false
},
  {
    path:'',
    name:'home',
    component:Home,
    titulo: 'Home',
    menu:true
  }

]
