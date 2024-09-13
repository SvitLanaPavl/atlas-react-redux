import { Provider } from "react-redux";
import { store } from "../store";

function App() {
  return <Provider store={store}>Hello Atlas</Provider>;
}

export default App;
