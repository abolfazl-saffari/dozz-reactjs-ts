import { Component } from "react";

class Board extends Component {
  render() {
    return (
      <table className="border-collapse m-auto">
        <tr>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-t-0 border-l-0">
            1
          </td>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-t-0">
            1
          </td>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-t-0 border-r-0">
            1
          </td>
        </tr>
        <tr>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-l-0">
            1
          </td>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black">1</td>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-r-0">
            1
          </td>
        </tr>
        <tr>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-b-0 border-l-0">
            1
          </td>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-b-0">
            1
          </td>
          <td className="w-24 h-24 md:w-48 md:h-48 border-2 border-black border-b-0 border-r-0">
            1
          </td>
        </tr>
      </table>
    );
  }
}

export default Board;
