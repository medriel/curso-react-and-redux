import React from "react";
import Card from "./Card";

export default function Raffle(props) {
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>7</strong>
        </span>
      </div>
    </Card>
  );
}