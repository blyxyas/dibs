import { defineRoutes } from "@bearcove/sextant";
import type { Component } from "svelte";
import DashboardView from "./views/DashboardView.svelte";
import TableListView from "./views/TableListView.svelte";
import RowDetailView from "./views/RowDetailView.svelte";
import RowCreateView from "./views/RowCreateView.svelte";

const Dashboard = DashboardView as Component<any>;
const TableList = TableListView as Component<any>;
const RowDetail = RowDetailView as Component<any>;
const RowCreate = RowCreateView as Component<any>;

/**
 * Route definitions for dibs-admin.
 * These are relative - the consuming app mounts them at a prefix (e.g., "/admin/*").
 */
export const adminRoutes = defineRoutes({
  dashboard: {
    path: "/",
    component: Dashboard,
  },
  tableList: {
    path: "/:table",
    query: {
      page: { type: "number", default: 1 },
      sort: { type: "string", optional: true },
      sortDir: { type: "string", optional: true },
    },
    component: TableList,
  },
  rowCreate: {
    path: "/:table/new",
    component: RowCreate,
  },
  rowDetail: {
    path: "/:table/:pk",
    component: RowDetail,
  },
});

export type AdminRoutes = typeof adminRoutes;
