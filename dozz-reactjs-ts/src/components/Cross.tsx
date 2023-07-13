import { Component } from "react";
import { RxCross2 } from "react-icons/rx";

class Cross extends Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <RxCross2 className="text-6xl md:text-9xl" />
      </div>
    );
  }
}

export default Cross;
