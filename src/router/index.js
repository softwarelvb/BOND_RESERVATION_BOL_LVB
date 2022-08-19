import Vue from "vue";
import VueRouter from "vue-router";

import Index1 from "./pages/index1.vue";
import Index2 from "./pages/index2.vue";
import Index3 from "./pages/index3.vue";
import Index4 from "./pages/index4.vue";
import Index5 from "./pages/index5.vue";
import Index6 from "./pages/index6.vue";
import Index7 from "./pages/index7.vue";
import Index8 from "./pages/index8.vue";
import Index9 from "./pages/index9.vue";
import Login from "./pages/login.vue";
import Signup from "./pages/signup.vue";
import Signup2 from "./pages/signUp2.vue";
import Forgotpassword from "./pages/password-forgot.vue";

const MainLayout = () => import("@/layouts/mainlayout.vue");
const OTP = () => import("@/router/pages/OTP");
// const SUCCESS = () => import("@/router/pages/components/success")
const Form = () => import("@/router/pages/form.vue");
const CONTACTBANK = () => import("@/router/pages/contact.vue");
const SERVICES = () => import("@/router/pages/services.vue");
const NotFound = () => import("@/router/pages/Error404.vue");
const UserInfo = () => import("@/router/pages/User/UserInfo");
const CreateFormPage = () => import("@/router/pages/FormPage/CreateForm");
const UserFormPage = () => import("@/router/pages/FormPage/UserForm");
const TestPDF = () => import("@/components/Form/PDF/PaymentOrderForm");
const DownloadPDFPage = () => import("@/router/pages/PDFDownload");

import store from "@/stores/store";

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
      },
      {
        path: "/form-online",
        name: "form page",
        component: Form,
      },
      // {
      // 	path: "/signup",
      // 	name: "Signup page",
      // 	component: Signup
      // },

      {
        path: "/signup",
        name: "Signup page",
        component: Signup2,
      },
      {
        path: "/password_forgot",
        name: "Forgot Password page",
        component: Forgotpassword,
      },
      {
        path: "/otp",
        name: "OTP confirm password",
        component: OTP,
      },
      // {
      //     path: '/success-register',
      //     name: 'success register page',
      //     component: SUCCESS
      // },
      {
        path: "/contact-bank",
        name: "contract bank page",
        component: CONTACTBANK,
      },
      {
        path: "/bank-services",
        name: "bank service page",
        component: SERVICES,
      },
      {
        path: "/user-info",
        name: "user info page",
        component: UserInfo,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/create-form",
        name: "create form page",
        component: CreateFormPage,
      },
      {
        path: "/User-form",
        name: "User form page",
        component: UserFormPage,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/testPDF",
        name: "test pdf form page",
        component: TestPDF,
      },
      {
        path: "/download-pdf",
        name: "Download pdf page",
        component: DownloadPDFPage,
      },
    ],
  },

  // {
  // 	path: "/",
  // 	name: "Index-1",
  // 	component: Index1
  // },
  {
    path: "/index-1",
    component: Index1,
  },
  {
    path: "/index-2",
    name: "Index-2",
    component: Index2,
  },
  {
    path: "/index-3",
    name: "Index-3",
    component: Index3,
  },
  {
    path: "/index-4",
    name: "Index-4",
    component: Index4,
  },
  {
    path: "/index-5",
    name: "Index-5",
    component: Index5,
  },
  {
    path: "/index-6",
    name: "Index-6",
    component: Index6,
  },
  {
    path: "/index-7",
    name: "Index-7",
    component: Index7,
  },
  {
    path: "/index-8",
    name: "Index-8",
    component: Index8,
  },
  {
    path: "/index-9",
    name: "Index-9",
    component: Index9,
  },
  {
    path: "/login",
    name: "Login page",
    component: Login,
  },
  // {
  // 	path: "/signup",
  // 	name: "Signup page",
  // 	component: Signup
  // },
  // {
  // 	path: "/signup2",
  // 	name: "Signup page",
  // 	component: Signup2
  // },
  {
    path: "/password_forgot",
    name: "Forgot Password page",
    component: Forgotpassword,
  },
  {
    path: "/login",
    name: "Login page",
    component: Login,
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  const token = store.get("token");
  if (requiresAuth && !token) {
    next("/");
  } else {
    next();
  }
});

export default router;
