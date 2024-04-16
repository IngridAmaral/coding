import { Add } from "@icons";
import { DevicesWrapper, AddDevice, IconWrapper } from "./Devices.styled";
import Header from "../../components/header/Header";
import DeviceCard, { Device } from "./deviceCard/DeviceCard";

const devices: Device[] = [
  {
    name: "LipoCheck",
    type: "Application",
    class: "Class II",
    description:
      "LipoCheck helps you recognize lipedema and supports you on the way to becoming free of symptoms.",
    progress: 100,
  },
  {
    name: "LipoCheck",
    type: "Application",
    class: "Class I",
    description:
      "LipoCheck helps you recognize lipedema and supports you on the way to becoming free of symptoms.",
    progress: 30,
  },
];

const Devices = () => (
  <>
    <Header title="Medical Devices" />
    <DevicesWrapper>
      {devices.map((device) => (
        <DeviceCard device={device} />
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

export default Devices;
