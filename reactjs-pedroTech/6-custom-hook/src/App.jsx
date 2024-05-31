import './App.css'
import Home from './pages/Home';
import CatFact from './pages/CatFact';
import Counter from './pages/Counter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const client = new QueryClient({});

  return (
    <>
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cat" element={<CatFact />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
