import './index.css'
import ReactDOM from 'react-dom'
import App from "./App"

/*
const el = document.getElementById("root")
ReactDOM.render("Ola React!!!", el)

ReactDOM.render(
  "Ola React!!!",
  document.getElementById("root")
  )
*/

// utilizando JSX
/*
ReactDOM.render(
  <div>Ola</div>,
  document.getElementById(`root`)
)

const tag = <div>Ola</div>
ReactDOM.render(
  tag,
  document.getElementById(`root`)
)*/

//utilizando o componente ~primeiro~
ReactDOM.render(
  <App />,
  document.getElementById(`root`)
)

