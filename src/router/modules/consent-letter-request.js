import Layout from "@/layout";
import { User } from "@/utils/app-permission.js";

const routes = {
  path: "/consent-letter-request",
  redirect: "/consent-letter-request",
  component: Layout,
  name: "Yêu cầu cung cấp thông tin",
  meta: {
    title: "Yêu cầu cung cấp thông tin",
    icon: "las la-user",
  },
  children: [
    {
      path: "pending",
      component: () => import("@/views/consent-letter-request/pending/list"),
      name: "pending",
      meta: {
        title: "Tài khoản chờ duyệt",
        icon: "stonehub-dot",
        permissions: User.User_GetList,
      },
    },
    {
      path: "approved",
      component: () => import("@/views/consent-letter-request/approved/list"),
      name: "approved",
      meta: {
        title: "Tài khoản đã duyệt",
        icon: "stonehub-dot",
        permissions: User.User_GetList,
      },
    },
    {
      path: "rejected",
      component: () => import("@/views/consent-letter-request/rejected/list"),
      name: "rejected",
      meta: {
        title: "Tài khoản từ chối",
        icon: "stonehub-dot",
        permissions: User.User_GetList,
      },
    },
  ],
};

export default routes;
