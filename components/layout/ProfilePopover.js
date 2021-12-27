import React from "react";
import { Popover } from "react-bootstrap";

const ProfilePopover = () => {
  return (
    <Popover id="popover-positioned-right" style={{ bottom: 10, left: 150 }}>
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
};

export default ProfilePopover;
