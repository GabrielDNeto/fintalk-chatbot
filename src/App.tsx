import Banner from "./components/Banner";
import Header from "./components/Header";

function App() {
  return (
    <section className="w-full h-screen relative bg-[#182a4c]">
      <Header />
      <main className="w-full h-full pt-[4.75rem] bg-[url('./assets/banner-img-background-effect.svg')] bg-no-repeat bg-contain bg-right">
        <div className="container mx-auto h-full">
          <Banner />
        </div>
      </main>
    </section>
  );
}

export default App;
