import "./App.css";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar";
import MainPageContent from "./components/MainPageContent";
import RightSidebar from "./components/RightSidebar";

// This is the main page component of the excercise app.

// I have divided it into 4 main parts:
// - The navigation menu on the top that contains the company logo
// - The main page component with the title and the image
// - The sidebar on the right with the description and the custom button
// - And finally a background component, where I have recreated the pattern
//   seen in the given excercise, as I did not find anything similar to that online.

// I will not be commenting on the styling, as I think that that would be unnecessairy.
// I hope that is not going to be an issue, but if requested, I can get back to it
// and add comments for that as well.

// As you will see, I have used Tailwind CSS for the styling.

// I have also added responsivity for phone devices, but not for tablets.
// The reason for this is that I wanted to send the solution to you as soon
// as possible, in case that would be an extra point, so I thought this was
// enough to showcase how I would turn a website's computer-screen based design
// into something phone friendly! :)

function App() {
  return (
    <div
      className="flex max-md:flex-col bg-gradient-to-b from-turquoise-1 from-50% to-turquoise-3 h-screen max-md:h-full max-w-screen"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <Background />
      <div className="bg-white bg-opacity-60 h-full w-screen">
        {/* ------ Navbar ------ */}
        <Navbar />
        {/* ------ MAIN CONTENT ------ */}
        <MainPageContent />
        {/* ------ RIGHT SIDEBAR ------ */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
