import { useState, createContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: true 
    }
  }}); // empty or an object
  const [username, setUsername] = useState("swetank");
  return (
    <>
    <QueryClientProvider client={client}>
    <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="*" element={<h1> Page Not Found! </h1>}></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
    </QueryClientProvider>
    </>
  )
}

export default App
