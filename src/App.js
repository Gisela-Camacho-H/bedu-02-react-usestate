//IMPORTACIONES
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exercise from './components/Exercise';
import Layout from './components/Layout'
// FUNCION
function App() {
  return (
    //Establece configuración de ruteo 
    <BrowserRouter>
    {/*Establece la lista de rutas */}
    <Routes>

      <Route path="/" element={ <Layout />} >

        <Route path="/" element={ <Home />} />
        <Route path="/ejercicio" element={ <Exercise />} />

      </Route>

    </Routes>
    </BrowserRouter>
  );
}

//EXPORTACION
export default App;
