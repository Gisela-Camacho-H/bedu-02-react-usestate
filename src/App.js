//IMPORTACIONES
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exercise from './components/Exercise';
// FUNCION
function App() {
  return (
    //Establece configuración de ruteo 
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/ejercicio" element={ <Exercise />} />
    </Routes>
    </BrowserRouter>
  );
}

//EXPORTACION
export default App;
