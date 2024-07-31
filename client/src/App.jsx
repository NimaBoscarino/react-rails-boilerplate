// to include: TopNavBar, Footer, conditionally render: Homepage, Dashboard
import { useState } from "react";
import "./App.css";
import SearchResult from "./components/SearchResults";

import TopNavBar from "./components/TopNavBar.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Profile from "./routes/Profile.jsx";
import Homepage from "./routes/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import SearchResult from "./components/SearchResults.jsx";

const routes = {
  dashboard: Dashboard,
  profile: Profile,
  homepage: Homepage,
  search: SearchResult,
};

const App = () => {
  const currentUser = { name: "John Doe", email: "johndoe@example.com" };
  // Simulate a user object
  const [user, setUser] = useState(currentUser);

  const handleLogout = () => {
    // Simulate a user logging out
    setUser(null);
  
  };


  //loads the Homepage
  const [currentPage, setCurrentPage] = useState("homepage");

  const CurrentPage = routes[currentPage];
console.log(CurrentPage)

  return (
    <div className="App">
      <TopNavBar
        setCurrentPage={setCurrentPage}
        user={user}
        handleLogout={handleLogout}
      />
      <CurrentPage />
      <Footer />
    </div>
  );
};


export default App;
