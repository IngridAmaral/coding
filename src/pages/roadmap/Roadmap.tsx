import { useParams } from "react-router-dom";
import Header from "@components/header/Header";
import {
  IconContainer,
  Plan,
  PlanName,
  RoadmapWrapper,
  Step,
  StepsWrapper,
} from "./Roadmap.styled";
import { mockedResponse } from "../../mockResponse";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { CaretRight } from "@icons";

const Roadmap = () => {
  let { id } = useParams<{ id: keyof typeof mockedResponse.devices }>();
  const [isLoading, setIsLoading] = useState(true);
  type track = {
    [key: number]: { [key: number]: boolean };
  };
  const [trackAccordion, setTrackAccordion] = useState<track | null>(null);

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
          {roadmap.map((plan, idx) => {
            const isFirstLayerOpen = trackAccordion?.hasOwnProperty(idx);
            return (
              <Plan>
                <PlanName
                  onClick={() => {
                    if (trackAccordion?.hasOwnProperty(idx)) {
                      const { [idx]: i, ...rest } = trackAccordion;

                      setTrackAccordion(rest);
                    } else {
                      setTrackAccordion({ ...trackAccordion, [idx]: {} });
                    }
                    console.log(trackAccordion);
                  }}
                  $isOpen={isFirstLayerOpen}
                >
                  {`${plan.name} 0/${plan.steps.length}`}
                  <IconContainer $isOpen={isFirstLayerOpen}>
                    <CaretRight />
                  </IconContainer>
                </PlanName>
                <StepsWrapper $isOpen={isFirstLayerOpen}>
                  {plan.steps.map((step, stepIdx) => (
                    <Step
                      $status={step.status}
                      $isOpen={
                        trackAccordion?.hasOwnProperty(idx) &&
                        trackAccordion[idx][stepIdx] &&
                        trackAccordion[idx][stepIdx]
                      }
                      onClick={() => {
                        if (trackAccordion?.hasOwnProperty(idx)) {
                          if (trackAccordion[idx][stepIdx]) {
                            const { [stepIdx]: i, ...rest } =
                              trackAccordion[idx];
                            console.log("trackAccordion[idx][stepIdx]", 1),
                              trackAccordion[idx][stepIdx];

                            setTrackAccordion({
                              ...trackAccordion,
                              [idx]: {
                                ...rest,
                                [stepIdx]: !trackAccordion[idx][stepIdx],
                              },
                            });
                          } else {
                            console.log("trackAccordion[idx][stepIdx]", 0);
                            setTrackAccordion({
                              ...trackAccordion,
                              [idx]: {
                                ...trackAccordion[idx],
                                [stepIdx]: true,
                              },
                            });
                          }
                        }
                        console.log("trackAccordion step", trackAccordion);
                      }}
                    >
                      {step.name}
                      <IconContainer
                        $isOpen={
                          trackAccordion?.hasOwnProperty(idx) &&
                          trackAccordion[idx][stepIdx] &&
                          trackAccordion[idx][stepIdx]
                        }
                      >
                        <CaretRight />
                      </IconContainer>
                    </Step>
                  ))}
                </StepsWrapper>
              </Plan>
            );
          })}
        </RoadmapWrapper>
      </>
    );
  }
};

export default Roadmap;
