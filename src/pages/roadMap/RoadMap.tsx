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
      { name: "User Needs", status: "done" },
      { name: "Software and Design Development", status: "done" },
      { name: "Purchasing, Sales and Suppliers", status: "done" },
      { name: "Design Stage Checklists", status: "done" },
    ],
  },
  {
    name: "Testing and Validation",
    status: "incomplete",
    steps: [
      { name: "Usability and Human Factors Egineering", status: "done" },
      { name: "Clinical Investigations", status: "done" },
      { name: "Sorftware Verification and Validation", status: "done" },
      { name: "Complaints and Feedback", status: "done" },
      { name: "Design Stage Checklists", status: "done" },
      { name: "Training", status: "done" },
      { name: "Testing and Validation Stage Checklists", status: "done" },
    ],
  },
  {
    name: "Regulatory Preparation",
    status: "incomplete",
    steps: [
      { name: "Labeling, Instructions for Use, and Manuals", status: "done" },
      { name: "Post-Market Surveillance", status: "done" },
      { name: "Clinical Evaluation", status: "done" },
      {
        name: "General Safety and Performance Requirements Checklist",
        status: "done",
      },
      { name: "Audist and Review", status: "done" },
    ],
  },
  {
    name: "Submission",
    status: "incomplete",
    steps: [
      { name: "Declaration of Conformity", status: "done" },
      { name: "UDI Creation and EUDAMED Registration", status: "done" },
      { name: "Generate Technical File", status: "done" },
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
            <Step>{step.name}</Step>
          ))}
        </Plan>
      ))}
    </RoadmapWrapper>
  </>
);

export default RoadMap;
