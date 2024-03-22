import { Provider } from "react";
import store from "../src/Redux/store";

function App() {

  
  const initialState = {
    todos: [],
  };

  return (
    <Provider store={store}>
      <h1>Hello we are from lcet college</h1>
      <button>Click me</button>
    </Provider>
  );
}

export default App;
