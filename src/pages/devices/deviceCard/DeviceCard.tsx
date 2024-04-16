import { Edit, RoadMap } from "@icons";
import {
  Device,
  Name,
  IntercationsIcon,
  LeftInteractions,
} from "./DeviceCard.styled";
import { Link } from "react-router-dom";
import Popover from "../../../components/popover/Popover";

export type Device = {
  name: string;
  type: string;
  class: string;
  description: string;
  progress: number;
};

const DeviceCard = ({ device }: { device: Device }) => (
  <>
    <Device $progress={device.progress}>
      <Name>Name: {device.name}</Name>
      <Name>Type: {device.type}</Name>
      <Name>Class: {device.class}</Name>
      <Name>Description: {device.description}</Name>
      <LeftInteractions>
        <Link to="id/road-map">
          <IntercationsIcon>
            <RoadMap />
            <Popover text="Road Map" id="road-map" />
          </IntercationsIcon>
        </Link>
        <Link to="id/road-map">
          <IntercationsIcon>
            <Edit />
            <Popover text="Edit" id="edit" />
          </IntercationsIcon>
        </Link>
      </LeftInteractions>
    </Device>
  </>
);

export default DeviceCard;
