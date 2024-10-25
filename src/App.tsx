import Contact from "./components/Contact";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Profile />
      <Project />
      <Services />
      <Contact />
    </>
  );
}

export default App;
