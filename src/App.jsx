import "./App.css";
import Contact from "./components/Contact";
import Map from "./components/Map";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="shadow-lg p-3 mb-5  rounded">
        <h2>Come Learn With Us</h2>
        <Map />
        <Contact />
      </div>
    </>
  );
}

export default App;
