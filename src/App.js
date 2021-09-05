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
import UploadChart from './Components/UploadChart/UploadChart';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/chart">
            <UploadChart></UploadChart>
          </Route>
          <Route path="/">
            <Gallery />
          </Route>
          <Route path="/home">
            <Gallery />
          </Route>


          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
