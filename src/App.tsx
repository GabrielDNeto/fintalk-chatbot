import Banner from "./components/Banner";

function App() {
  return (
    <div className="w-full h-full py-8 bg-[url('./assets/banner-img-background-effect.svg')] bg-no-repeat bg-contain bg-right">
      <div className="container mx-auto h-full">
        <Banner />
      </div>
    </div>
  );
}

export default App;
