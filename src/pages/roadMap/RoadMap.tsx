import Header from "../../components/header/Header";
import { Plan, PlanName, RoadmapWrapper, Step } from "./RoadMap.styled";

const roadmap = [
  {
    name: "Planning",
    status: "done",
    steps: [
      { name: "Device Basic Characteristics", status: "done" },
      { name: "Software Proccesses", status: "done" },
      { name: "Establish Quality Management System", status: "done" },
      { name: "Device Classification", status: "done" },
    ],
  },
  {
    name: "Design and Development",
    status: "incomplete",
    steps: [
      { name: "Establish Risk Management System", status: "done" },
      { name: "User Needs", status: "incomplete" },
      { name: "Software and Design Development", status: "done" },
      { name: "Purchasing, Sales and Suppliers", status: "incomplete" },
      { name: "Design Stage Checklists", status: "incomplete" },
    ],
  },
  {
    name: "Testing and Validation",
    status: "incomplete",
    steps: [
      { name: "Usability and Human Factors Egineering", status: "incomplete" },
      { name: "Clinical Investigations", status: "incomplete" },
      { name: "Sorftware Verification and Validation", status: "incomplete" },
      { name: "Complaints and Feedback", status: "incomplete" },
      { name: "Design Stage Checklists", status: "incomplete" },
      { name: "Training", status: "incomplete" },
      { name: "Testing and Validation Stage Checklists", status: "incomplete" },
    ],
  },
  {
    name: "Regulatory Preparation",
    status: "incomplete",
    steps: [
      {
        name: "Labeling, Instructions for Use, and Manuals",
        status: "incomplete",
      },
      { name: "Post-Market Surveillance", status: "incomplete" },
      { name: "Clinical Evaluation", status: "incomplete" },
      {
        name: "General Safety and Performance Requirements Checklist",
        status: "incomplete",
      },
      { name: "Audist and Review", status: "incomplete" },
    ],
  },
  {
    name: "Submission",
    status: "incomplete",
    steps: [
      { name: "Declaration of Conformity", status: "incomplete" },
      { name: "UDI Creation and EUDAMED Registration", status: "incomplete" },
      { name: "Generate Technical File", status: "incomplete" },
    ],
  },
];

const RoadMap = () => (
  <>
    <Header title="Roadmap - LipoCheck" goBackTo="/devices" />
    <RoadmapWrapper>
      {roadmap.map((plan) => (
        <Plan>
          <PlanName>{plan.name}</PlanName>
          {plan.steps.map((step) => (
            <Step $status={step.status}>{step.name}</Step>
          ))}
        </Plan>
      ))}
    </RoadmapWrapper>
  </>
);

export default RoadMap;
