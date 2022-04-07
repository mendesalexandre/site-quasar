const routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },

  {
    path: "/",
    component: () => import("layouts/site/SiteLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/site/home/Index.vue"),
        name: "site.home",
      },
      {
        path: "/tabela-de-emolumentos",
        component: () => import("pages/site/emolumentos/Emolumentos.vue"),
        name: "site.tabela-emolumentos",
      },
      {
        path: "/contato/trabalhe-conosco",
        component: () => import("pages/site/emolumentos/Emolumentos.vue"),
        name: "site.tabela-emolumentos",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
