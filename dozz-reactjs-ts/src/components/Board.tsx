import { Component } from "react";
import Cell from "./Cell";

class Board extends Component {
  render() {
    return (
      <table className="border-collapse m-auto">
        <tr>
          <Cell className="border-t-0 border-l-0" statue="cross" />
          <Cell className="border-t-0" statue="empty" />
          <Cell className="border-t-0 border-r-0" statue="circle" />
        </tr>
        <tr>
          <Cell className="border-l-0" statue="circle" />
          <Cell statue="empty" />
          <Cell className="border-r-0" statue="cross" />
        </tr>
        <tr>
          <Cell className="border-b-0 border-l-0" statue="cross" />
          <Cell className="border-b-0" statue="empty" />
          <Cell className="border-b-0 border-r-0" statue="circle" />
        </tr>
      </table>
    );
  }
}

export default Board;
