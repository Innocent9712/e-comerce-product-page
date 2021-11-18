import React,{useReducer} from "react"
import './App.css';
import Header from './components/Header';
import ProductContainer from "./components/ProductContainer";
import { initialState, reducer } from "./ContextApi";

export const  GlobalContext = React.createContext()


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider  value={{ globalState : state, globalDispatch : dispatch}}>
      <div className="App">
        <Header />
        <ProductContainer />
      </div>
      
    </GlobalContext.Provider>
  );
}

export default App;