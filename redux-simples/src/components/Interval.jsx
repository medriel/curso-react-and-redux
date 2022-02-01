import "./Interval.css";
import React from "react";
import Card from "./Card";

export default function Interval(props) {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínino:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
}