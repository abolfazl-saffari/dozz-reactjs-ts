import { Component } from "react";
import Board from "./components/Board";
import Cell from "./components/Cell";
import Circle from "./components/Circle";
import Cross from "./components/Cross";

class App extends Component<any, any> {
  render() {
    return (
      <div>
        <Board />
        <Cell />
        <Circle />
        <Cross />
      </div>
    );
  }
}

export default App;
