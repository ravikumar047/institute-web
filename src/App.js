import "./App.css";
import Navbar from "./components/Navbar";
import ImgCards from "./components/ImgCards";
import Next from "./components/Next";
import Final from "./components/Final";

function App() {
  return (
    <div>
    
      <Navbar />
     
      

      <div className="mt-5 ml-2">
        <h1 style={{ marginLeft: "3rem" }}>News & Events</h1>
        <ImgCards />
      </div>
      <div
        style={{
          backgroundColor: "#D2D2D2",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <h1 style={{ marginLeft: "3rem", paddingTop: "0.5rem" }}>
          Announcements
        </h1>
        <br />
        <Next />
      </div>
      <div className="mt-5 ml-2">
        <h1 style={{ marginLeft: "3rem" }}>Research Update</h1>
        <Final />
      </div>
      {/* <ImgCards /> */}
    </div>
  );
}

export default App;
