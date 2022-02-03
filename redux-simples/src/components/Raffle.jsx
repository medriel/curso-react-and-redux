import React from "react";
import Card from "./Card";

export default function Raffle(props) {

  const random = parseInt(Math.random() * (props.max - props.min)) + props.min

  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{random}</strong>
        </span>
      </div>
    </Card>
  );
}