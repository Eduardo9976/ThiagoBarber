import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import Servicos from '../views/Servicos.vue'
import Agendamento from '../views/Agendamento.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/agendamento',
    name: 'Agendamento',
    component: Agendamento
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: Servicos
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
})

export default router
