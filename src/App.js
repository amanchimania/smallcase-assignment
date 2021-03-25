import './App.css';
import Page from "./Page";
import {useState} from "react"
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
function App() {
  const [value,setValue]=useState("Open the modal")
  const handle=()=>{
    setValue(null);
  }
  return (
    <div className="App">
      <h1>To get the Modal click on the link below</h1>
      <BrowserRouter>
      <Link to="/page"><button onClick={handle}>{value}</button></Link>
      <Switch>
        <Route path="/page">
          <Page title="This is the title of the Modal" body="This is the Body" footer="This is the footer" />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
