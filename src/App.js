import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/NavPage';
import DashboardPage from './Components/DashboardPage';


function App() {
  return (
    <>
  <Router>
      <div className="d-flex flex-row">
        <div className="col-3">
          <Nav />
        </div>
        <div className="col-9">
          <div className="row">
            <Routes>
              <Route path="/dashboard" exact element={<DashboardPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router> 

     </>

  );
}

export default App;
