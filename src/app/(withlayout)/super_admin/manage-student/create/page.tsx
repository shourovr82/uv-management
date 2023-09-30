import StepperForm from "@/components/StepperForm/StepperForm";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentInfo />,
    },
    {
      title: "Guardian Information",
      content: <StudentInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <StudentInfo />,
    },
  ];

  return (
    <div style={{ margin: "10px" }}>
      <h1>Create Student</h1>
      <StepperForm steps={steps} />
    </div>
  );
};

export default CreateStudentPage;
