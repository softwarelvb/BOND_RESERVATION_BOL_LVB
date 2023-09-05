import Vue from "vue";
import VueRouter from "vue-router";

import Index1 from "./pages/index1.vue";

const MainLayout = () => import("@/layouts/mainlayout.vue");

const FormSuccess = () => import("@/router/pages/FormPage/FormSuccess.vue");

const CONTACTBANK = () => import("@/router/pages/contact.vue");

const NotFound = () => import("@/router/pages/Error404.vue");

const CreateFormPage = () => import("@/router/pages/FormPage/CreateForm");

const WaitingPage = () => import("@/router/pages/waiting-register-page");


import moment from "moment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "Index-1",
        component: Index1,
        beforeEnter: (to, from, next) => {
          const now = moment()
          const start = moment('1:00', 'HH:mm')
          const end = moment('23:30', 'HH:mm')
          if (now.isBetween(start, end)) {
            next()
          } else {
            next({ name: 'waiting page' })
          }
        }
      },
      {
        path: "/form-success",
        name: "form success",
        component: FormSuccess,
        beforeEnter: (to, from, next) => {
          const now = moment()
          const start = moment('1:00', 'HH:mm')
          const end = moment('23:30', 'HH:mm')
          if (now.isBetween(start, end)) {
            next()
          } else {
            next({ name: 'waiting page' })
          }
        }
      },
      {
        path: "/contact-bank",
        name: "contract bank page",
        component: CONTACTBANK,
        beforeEnter: (to, from, next) => {
          const now = moment()
          const start = moment('1:00', 'HH:mm')
          const end = moment('23:30', 'HH:mm')
          if (now.isBetween(start, end)) {
            next()
          } else {
            next({ name: 'waiting page' })
          }
        }
      },
      {
        path: "/create-form",
        name: "create form page",
        component: CreateFormPage,
        beforeEnter: (to, from, next) => {
          const now = moment()
          const start = moment('1:00', 'HH:mm')
          const end = moment('23:30', 'HH:mm')
          if (now.isBetween(start, end)) {
            next()
          } else {
            next({ name: 'waiting page' })
          }
        }
      },
    ],
  },
  {
    path: "/index-1",
    component: Index1,
    beforeEnter: (to, from, next) => {
      const now = moment()
      const start = moment('1:00', 'HH:mm')
      const end = moment('23:30', 'HH:mm')
      if (now.isBetween(start, end)) {
        next()
      } else {
        next({ name: 'waiting page' })
      }
    }
  },
  {
    path: "/waiting-page",
    name: "waiting page",
    component: WaitingPage,
    beforeEnter(to, from, next) {
      const currentTime = moment();
      const start = moment().set({hour: 1, minute: 0, second: 0, millisecond: 0});
      const end = moment().set({hour: 23, minute: 30, second: 0, millisecond: 0});
      if (to.name !== 'Index-1' && currentTime.isBetween(start, end)) {
        next({name: 'Index-1'});
      } else {
        next();
      }
    },
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "*",
    redirect: "/404",
    beforeEnter: (to, from, next) => {
      const now = moment()
      const start = moment('1:00', 'HH:mm')
      const end = moment('23:30', 'HH:mm')
      if (now.isBetween(start, end)) {
        next()
      } else {
        next({ name: 'waiting page' })
      }
    }
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
