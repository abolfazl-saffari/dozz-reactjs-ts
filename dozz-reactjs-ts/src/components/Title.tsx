import { Component } from "react";

class Title extends Component {
  render() {
    return (
      <>
        <h1 className="title text-6xl hover:text-white transition duration-300 ease-in-out delay-50">
          DOZZ
        </h1>
        <h1 className="title text-3xl hover:text-white transition duration-300 ease-in-out delay-50">
          Theme
        </h1>
      </>
    );
  }
}

export default Title;
