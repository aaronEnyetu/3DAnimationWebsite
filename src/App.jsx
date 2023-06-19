import Nav from "./components/Nav.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import SoundSection from "./components/SoundSection.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
import WebgiViewer from "./components/WebgiViewer.jsx";
import { useRef } from "react";

function App() {

  const WebgiViewerRef = useRef()

  const handlePreview = () => {
    WebgiViewerRef.current.triggerPreview()
  }

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview} />
      <WebgiViewer ref={WebgiViewerRef} />
    </div>
  );
}

export default App;
