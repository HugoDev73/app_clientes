import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

import Listar from './components/clientes/Listar.vue';
import Crear from './components/clientes/Crear.vue';
import Editar from './components/clientes/Editar.vue';
import Detalle from './components/clientes/Detalle.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/clientes", name:'listar', component: Listar },
  { path: "/clientes/crear", name:'crear_cliente', component: Crear },
  { path: "/clientes/actualizar/:id", name:'actualizar_cliente', component: Editar },
  { path: "/clientes/detalle/:id", name:'detalle_cliente', component: Detalle },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;