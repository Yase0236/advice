import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Calculate from "../components/Calculate";
import Footer from "../components/Footer";
import Results from "../components/Results";
import Tips from "../components/Tips";

function App() {
  return (
    <div className="App">
      <Header />

      <section class="main">
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
