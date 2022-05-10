import Layout from "@/layout";
import { User } from "@/utils/app-permission.js";

const routes = {
  path: "/rm",
  redirect: "/rm",
  component: Layout,
  name: "Tài khoản RM",
  meta: {
    title: "Tài khoản RM",
    icon: "las la-user"
  },
  children: [
    {
      path: "",
      component: () => import("@/views/account/relationship-management/list"),
      name: "RM",
      meta: {
        title: "Tài khoản RM",
        icon: "las la-user",
        breadcrumb: false,
        permissions: User.User_GetList
      }
    }
  ]
};

export default routes;
