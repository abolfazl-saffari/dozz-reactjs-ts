import { Component } from "react";
import Cross from "./Cross";
import Circle from "./Circle";

type props = {
  className?: string;
  statue: string;
};

class Cell extends Component<props> {
  render() {
    return (
      <td
        className={`w-24 h-24 md:w-48 md:h-48 border-4 border-black transition duration-300 ease-in-out delay-50  
        ${this.props.className}
        ${
          this.props.statue === "empty"
            ? "hover:bg-gray-100 animate-pulse cursor-pointer"
            : "hover:text-gray-100"
        }`}
      >
        {this.props.statue === "cross" ? <Cross /> : ""}
        {this.props.statue === "circle" ? <Circle /> : ""}
      </td>
    );
  }
}

export default Cell;
