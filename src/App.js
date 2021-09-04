import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NotFound from './Components/NotFound/NotFound';
import AddImage from './Components/AddImage/AddImage';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <Router>
      <div>
        {/* <Header></Header> */}
        <Switch>
          <Route path="/addImage">
            <AddImage />
          </Route>
          <Route path="/">
            <Gallery />
          </Route>
          <Route path="home">
            <Gallery />
          </Route>


          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
