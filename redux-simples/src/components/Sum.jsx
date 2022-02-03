import React from "react";
import Card from "./Card";

export default function Sum(props) {
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Soma:</span>
          <strong>{(props.max + props.min)}</strong>
        </span>
      </div>
    </Card>
  );
}