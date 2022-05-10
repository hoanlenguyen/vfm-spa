import Layout from "@/layout";
import {Role,AdminUserRole} from '@/utils/app-permission.js'
const routes = {
  path: "/role",
  component: Layout,
  redirect: "/role",
  name: "Phân quyền",
  meta: {
    title: 'Phân quyền',
    icon: 'las la-user'
  },
  children: [
    {
      path: "/role/user-group-and-permission",
      component: () => import("@/views/role/user-group-and-permission/list"),
      name: "Bộ phận",
      meta: {
        title: "Bộ phận",
        icon: "stonehub-dot",
        breadcrumb: false,
        permissions:Role.Role_GetList  
      }
    },
    {
      path: "/role/user-list",
      component: () => import("@/views/role/user-list/list"),
      name: "Nhân sự",
      meta: {
        title: "Nhân sự",
        icon: "stonehub-dot",
        breadcrumb: false,
        permissions:AdminUserRole.AdminUserRole_GetList
      }
    }
  ]
};

export default routes;
