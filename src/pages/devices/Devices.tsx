import { Add } from "@icons";
import { DevicesWrapper, AddDevice, IconWrapper } from "./Devices.styled";
import Header from "@components/header/Header";
import DeviceCard from "./deviceCard/DeviceCard";
import { mockedResponse } from "../../mockResponse";

const Devices = () => {
  const devices = Object.keys(mockedResponse.devices);

  return (
    <>
      <Header title="Medical Devices" />
      <DevicesWrapper>
        {devices.map((device) => (
          <DeviceCard
            device={
              mockedResponse.devices[
                device as keyof typeof mockedResponse.devices
              ]
            }
          />
        ))}
      </DevicesWrapper>
      <AddDevice>
        Add device
        <IconWrapper>
          <Add />
        </IconWrapper>
      </AddDevice>
    </>
  );
};

export default Devices;
