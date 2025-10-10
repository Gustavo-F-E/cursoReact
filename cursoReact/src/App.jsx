import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
// import { Footer } from "./components/Footer/Footer.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
    return (
        <>
            <Header />
            <ItemListContainer />
            <Footer />
            {/* <Footer /> */}
        </>
    );
}

export default App;
