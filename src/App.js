import Menu from './components/Menu/Menu.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';
import Donations from './components/Donations/Donar.jsx';
import Informes from './components/Informes/Informes.jsx';
import Propuestas from './components/Propuestas/Propuestas.jsx';
import Acuerdos from './components/Acuerdos/Acuerdos.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/donar" element={<Donations />} />
          <Route path="/informes" element={<Informes />} />
          <Route path="/propuestas" element={<Propuestas />} />
          <Route path="/acuerdos" element={<Acuerdos />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
