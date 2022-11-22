import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Calculate from "../components/Calculate";
import Footer from "../components/Footer";
import Results from "../components/Results";
import Tips from "../components/Tips";
import { useEffect, useState } from "react";

function App() {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = "co2emission.json";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMedia(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header />

      <section className="main">
        <Introduction />
        <Calculate />
        <Results />
        <Tips />
      </section>

      <Footer />
    </div>
  );
}

export default App;
