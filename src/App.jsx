import { ContextProvider } from "./components/utils/GlobalContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Card />
      <Footer />
    </ContextProvider>
  );
}

export default App;
