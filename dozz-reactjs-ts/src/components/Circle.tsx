import { Component } from "react";
import { BiCircle } from "react-icons/bi";

class Circle extends Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <BiCircle className="text-6xl md:text-9xl" />
      </div>
    );
  }
}

export default Circle;
