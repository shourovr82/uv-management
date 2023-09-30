"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroups,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
import { Button, Col, Row } from "antd";

const CreateStudentPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ padding: "10px" }}>
      <UmBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `create admin`,
            link: `/super_admin/admin`,
          },
        ]}
      />
      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px " }}>
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First name"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  size="large"
                  name="admin.gender"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  size="large"
                  name="admin.managementDepartment"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>{" "}
          {/*! //! basic info--------------------- */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px " }}>
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact Number"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact Number"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date Of Birth"
                  size="large"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGroups}
                  label="Blood Group"
                  placeholder="Select"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={12}
              >
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present Address"
                  rows={4}
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={12}
              >
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent Address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateStudentPage;
