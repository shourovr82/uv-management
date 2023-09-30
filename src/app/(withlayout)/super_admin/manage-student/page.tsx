"use client";

import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UmBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h2>Manage Student Page</h2>
      <Link href="/super_admin/manage-student/create">
        <Button type="primary">Create Student</Button>
      </Link>
    </div>
  );
};

export default ManageStudentPage;
