import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Search from "./components/Search/Search";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Announcements"
        content="Our Interim reports releases, share buyback program and more. Read up on our latest announcements."
        image="/images/banner01.png"
      />
      <Search />
    </div>
  );
}

export default App;
