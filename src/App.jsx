import { ContextProvider } from "./components/utils/GlobalContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Footer />
    </ContextProvider>
  );
}

export default App;
