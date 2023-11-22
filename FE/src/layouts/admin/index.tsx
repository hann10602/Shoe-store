import LayoutAdmin from "@/components/Layout/Admin";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return <LayoutAdmin>{children}</LayoutAdmin>;
};

export default AdminLayout;
