import './App.css';
import NavBar from './Componets/Public/NavBar';
import Body from './Componets/Main/Body';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Inter&display=swap');
      </style>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
