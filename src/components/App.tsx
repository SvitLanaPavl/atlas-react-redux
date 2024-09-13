import { Provider } from "react-redux";
import { store } from "../store";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";

function App() {
  return <Provider store={store}>
    <Header />
    <Board />
    <Footer />
  </Provider>;
}

export default App;
