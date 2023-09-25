import { isAdmin } from "../config/isAdmin";
import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";

export const Layout = isAdmin ? AdminLayout : MainLayout;
