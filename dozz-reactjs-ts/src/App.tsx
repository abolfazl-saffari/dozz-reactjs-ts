import { Component } from "react";
import Board from "./components/Board";
import Title from "./components/Title";

class App extends Component<any, any> {
  render() {
    return (
      <div className="relative">
        <header className="sticky top-0 flex justify-between items-center py-5 px-10">
          <Title />
        </header>
        <main className="w-full h-screen flex justify-center items-center text-center">
          <Board />
        </main>
      </div>
    );
  }
}

export default App;
