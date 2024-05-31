import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import { Provider } from "react-redux";
import { store } from './store';

function App() {

  return (
    <>
    <Router>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      <Link to="/contact"> Contact </Link>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<h1>404: Not Found</h1>}></Route>
      </Routes>
      </Provider>
    </Router>
    </>
  )
}

export default App
