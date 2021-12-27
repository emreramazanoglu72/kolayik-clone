import React from "react";
import { Card } from "react-bootstrap";

export const WidgetCard = ({ children, title, icon = null }) => {
  return (
    <Card className="widget">
      <Card.Body>
        <Card.Title className="widget-title">
          {icon}
          <span>{title} </span>
        </Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
};


