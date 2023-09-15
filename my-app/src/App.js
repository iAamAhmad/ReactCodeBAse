
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (



    <Router>
      <NavBar name="TextUtils" />
      <Alert alert=" Hey this is an alert" />
      <div className="container" my-3>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter your text here to analyze" />
          </Route>
        </Routes>
      </div>
    </Router>





  );
}

export default App;
