import "./App.scss";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import HeadBar from "./component/HeadBar";
import HomePage from "./component/HomePage";
import MyInfo from "./component/MyInfoPage";
import Service from "./component/Service";
import WorkPage from "./component/WorkPage";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#070F2B",
      }}
    >
      <HeadBar />
      <HomePage />
      <WorkPage />
      <MyInfo />
      <Service />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
