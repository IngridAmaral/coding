import { useParams } from "react-router-dom";
import Header from "@components/header/Header";
import { Plan, PlanName, RoadmapWrapper, Step } from "./RoadMap.styled";
import { mockedResponse } from "../../mockResponse";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";

const RoadMap = () => {
  let { id } = useParams<{ id: keyof typeof mockedResponse.devices }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (id) {
    const roadmap = mockedResponse["devices"][id]["roadmap"];

    return (
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
  }
};

export default RoadMap;
