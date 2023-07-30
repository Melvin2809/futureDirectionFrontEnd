import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Formations from"../views/Formations.vue";
import Ecoles from"../views/Ecoles.vue";
import Salaires from"../views/Salaires.vue";

import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        beforeEnter: createAuthGuard(app)
      },
      {
        path: "/Formations",
        name: "formations",
        component: Formations
      },
      {
        path: "/Ecoles",
        name: "Ecoles",
        component: Ecoles
      },
      {
        path: "/Salaires",
        name: "Salires",
        component:Salaires
      }
    ],
    history: createWebHashHistory()
  })
}
