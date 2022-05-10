import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/* Router Modules */
import userRoutes from "./modules/users";
import manualRegisterRoutes from "./modules/manual-register";
import levelUpgradeRoutes from "./modules/level-upgrades";
import changingInformationRoutes from "./modules/changing-information";
import consentLetterRequestRoutes from "./modules/consent-letter-request";
import rejectedUserRoutes from "./modules/rejected-user";
import tradingAccountRoutes from "./modules/trading-account";
import rmAccountRoutes from "./modules/rm-account";
import bannerRoutes from "./modules/banner";
// import newsfeedRoutes from './modules/newsfeed'
import educationLibraryRoutes from "./modules/education-library";
import systemRoutes from "./modules/system";
import customerFormsRoutes from "./modules/customer-forms";
import fundRoutes from "./modules/funds";
import contactRoutes from "./modules/contact";
// import feedBackRoutes from './modules/feedback'
import faqRoutes from "./modules/faq";
import orderRoutes from "./modules/order";
import paymentHistoryRoutes from "./modules/paymentHistory";
import stockIndexRoutes from "./modules/stockIndex";
import notificationTemplateRoutes from "./modules/notification-template";
import flexibleNotificationRoutes from "./modules/flexible-notification";
import role from "./modules/role";
import tenant from "./modules/tenant";
// import layoutRoutes from './modules/layout'
// import elementRoutes from './modules/elements'
// import formRoutes from './modules/forms'
// import authPageRoutes from './modules/auth-pages'
// import applicationRoutes from './modules/applications'
// import errorPageRoutes from './modules/error-pages'
// import chartRoutes from './modules/charts'
// import exceptionRouter from './modules/exception-log'
// import excelRouter from './modules/excel'
// import multilanguageRouters from './modules/multilanguage'
// import pdfRouters from './modules/pdf'
// import supportRouters from './modules/supports'
// import iconRouters from './modules/icons'
// import tableRouters from './modules/table'
// import zipRouters from './modules/zip'
// import componentRouters from './modules/components'
// import advancedComponentRouters from './modules/advancedcomponents'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://Stonehub.github.io/stonehub-vue-admin-template-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/auths/login/index"),
    hidden: true,
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/auths/login/auth-redirect"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/auths/register"),
    hidden: true,
  },
  {
    path: "/forgot-password",
    component: () => import("@/views/auths/forgot-password"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "dashboard",
        meta: { title: "Bảng chính", icon: "el-icon-data-board", affix: true },
      },
    ],
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  userRoutes,
  bannerRoutes,
  stockIndexRoutes,
  orderRoutes,
  educationLibraryRoutes,
  faqRoutes,
  contactRoutes,
  paymentHistoryRoutes,
  manualRegisterRoutes,
  levelUpgradeRoutes,
  changingInformationRoutes,
  consentLetterRequestRoutes,
  fundRoutes,
  customerFormsRoutes,
  tradingAccountRoutes,
  rmAccountRoutes,
  rejectedUserRoutes,
  notificationTemplateRoutes,
  flexibleNotificationRoutes,
  role,
  tenant,
  systemRoutes,
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true, name: "custom-error" },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
