import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Eventos from "./pages/Eventos"
import ExpedicaoDetalhe from "./pages/ExpedicaoDetalhe"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/expedicao/:id" element={<ExpedicaoDetalhe />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App