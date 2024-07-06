import BoostSection from "./components/BoostSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ShortSection from "./components/ShortSection";

function App() {
  return (
    <>
      <Header />
      <main className="w-full overflow-hidden">
        <Introduction />
        <ShortSection />
        <BoostSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
