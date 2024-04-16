import { Edit, RoadMap } from "@icons";
import {
  Device,
  TextWrapper,
  IntercationsIcon,
  LeftInteractions,
  DeviceKey,
  DeviceValue,
} from "./DeviceCard.styled";
import { Link } from "react-router-dom";
import Popover from "@components/popover/Popover";
import { TDevice } from "@types";

const DeviceCard = ({ device }: { device: TDevice }) => (
  <>
    <Device $progress={device.progress}>
      <TextWrapper>
        <DeviceKey>Name: </DeviceKey>
        <DeviceValue>{device.name}</DeviceValue>
      </TextWrapper>
      <TextWrapper>
        <DeviceKey>Type: </DeviceKey>
        <DeviceValue>{device.type}</DeviceValue>
      </TextWrapper>
      <TextWrapper>
        <DeviceKey>Class: </DeviceKey>
        <DeviceValue>{device.class}</DeviceValue>
      </TextWrapper>
      <TextWrapper>
        <DeviceKey>Description: </DeviceKey>
        <DeviceValue>{device.description}</DeviceValue>
      </TextWrapper>
      <LeftInteractions>
        <Link to={`${device.id}/road-map`}>
          <IntercationsIcon>
            <RoadMap />
            <Popover text="Road Map" id="road-map" />
          </IntercationsIcon>
        </Link>
        <Link to="/devices">
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
