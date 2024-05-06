import { BrowserRouter } from "react-router-dom"
import "../src/index.css"
import './App.css'
import Navbar from "./components/Navbar"
import RoutesIndex from "./Routes/RoutesIndex"


export default function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}