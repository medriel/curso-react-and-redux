import "./Interval.css";
import React from "react";
import { connect } from "react-redux"

import Card from "./Card";
import { changeMinimumNumber } from '../store/actions/numbers'

function Interval(props) {

  const { min, max } = props

  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={e => props.changeMin(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            readOnly
          />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

function mapDispatchToProp(dispatch) {
  return {
    changeMin(newNumber) {

      //action creator -> action
      const action = changeMinimumNumber(newNumber)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Interval)