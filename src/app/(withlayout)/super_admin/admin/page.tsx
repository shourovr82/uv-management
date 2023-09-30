"use client";

import ActionBar from "@/components/ui/ActionBar";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <div style={{ padding: "10px" }}>
      <UmBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdminPage;
