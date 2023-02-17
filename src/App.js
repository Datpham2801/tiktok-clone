import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
