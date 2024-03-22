import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// Action types
const SET_THEME = "SET_THEME";
const ADD_TO_CART = "ADD_TO_CART";

// Theme  Reducer

function themeReducer(state = "light_mode", action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}

// cart Reducer

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}

// combining reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
});

//creating a store
const store = createStore(rootReducer);

function Data() {
  const themeData = useSelector((s) => s.theme);
  const cartData = useSelector((s) => s.cart);
  return (
    <div
      className={themeData === "light_mode" ? "light-mode" : "dark-mode"}
      style={{
        padding: "10px",
      }}
    >
      {JSON.stringify(themeData, null, 2)}
      <hr />
      {JSON.stringify(cartData, null, 2)}
    </div>
  );
}

// ThemeSwitch Component
function Themecomponent() {
  const dispatch = useDispatch();
  return (
    <div className="theme">
      <button
        onClick={() => dispatch({ type: "SET_THEME", payload: "light_mode" })}
      >
        Light Mode
      </button>
      <button
        onClick={() => dispatch({ type: "SET_THEME", payload: "dark_mode" })}
      >
        Dark Mode
      </button>
    </div>
  );
}

function Cartcomponnet() {
  const dispatch = useDispatch();

  function Addtocart(item_name) {
    dispatch({ type: ADD_TO_CART, payload: item_name });
  }
  return (
    <>
      <div className="cart">
        <input type="text" id="itemname" placeholder="item_name" />
        <button
          id="Addtocartbtn"
          onClick={() => Addtocart(document.getElementById("itemname").value)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="items">
        <div>
          <Data />
        </div>
        <Themecomponent />
        <Cartcomponnet />
      </div>
    </Provider>
  );
}

export default App;
