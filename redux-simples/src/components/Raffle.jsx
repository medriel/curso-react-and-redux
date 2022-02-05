import React from "react";
import Card from "./Card";

export default function Raffle(props) {

  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  );
}