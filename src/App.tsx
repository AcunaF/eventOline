import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Index } from "./components";
import { NavScroll } from "../src/components/navbar/navBar.components";
import { FullScreenImage } from "../src/components/banner/banner.component";
import { Footer } from "../src/components/footer/footer.component";
import { VideoPlayer } from "../src/components/core/event/event.component";
function App() {
  return (
    <>
      <div className="container">
        <NavScroll />
        <FullScreenImage />
        <Index />
        <VideoPlayer src="https://youtu.be/84Tq-eAJIk4?si=NU_uMge6F1cmYdkk" />
        <Footer />
      </div>
    </>
  );
}

export default App;
