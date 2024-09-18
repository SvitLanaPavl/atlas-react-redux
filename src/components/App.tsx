import { Provider } from "react-redux";
import { store, persistor } from "../store";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Header />
      <Board />
      <Footer />
    </PersistGate>
  </Provider>;
}

export default App;
