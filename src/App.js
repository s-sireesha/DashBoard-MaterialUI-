import "./App.css";
import Home from "./pages/Home/Home";
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import { productInputs, userInputs } from "./formSource";
import "./style/Dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import {useContext} from "react";
// import { useState } from "react";
// import "./Component.css";
// import "./Componenets/Component.css";
// import Component1 from './Componenets/Component1';
// import Component2 from './Componenets/Component2';
// class clickCountButton extends React.Component{
//   state = {
//     count : 0
//   };

function App() {
  // console.log('Hello World')
  // let heading = "my heading";
  // let paragraph = "this is my paragraph";

  // const[dark,setDark] = useState(false)

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode? "app dark" : "app"}>
      
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route  index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route> <Route path="user">
            <Route index element={<List />} />
            <Route path=":userid" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
          </Route>
         
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productid" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Component1/>
 <Component2/>
 <Component1/>
 <Component2/>
 <Component1/>
 <Component2/>
 <Component1/>
 <Component2/> */}
      {/* <h2 className={heading} style={{color:"red",backgroundColor:"black"}}>{heading}</h2> 
  <p>{paragraph}</p>  */}
      {/* useState with class components  */}
    </div>
  );
}

export default App;
