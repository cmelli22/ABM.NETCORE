import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Form from './components/Form'
import PersonaListContainer from './components/Personas/PersonaListConatiner';
import PersonaDetailContainer from './components/Personas/PersonaDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Header className="header"></Header>
         <Routes>
            <Route path="/" element={<PersonaListContainer/>}/>
            <Route path="/Alta" element={<Form/>}/>
            <Route path="/persona/:id" element={<PersonaDetailContainer/>}/>
          </Routes>
         <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
