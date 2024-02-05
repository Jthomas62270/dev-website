import './App.css';
import NavBar from './Componets/Public/NavBar';
import Body from './Componets/Main/Body';
import Footer from './Componets/Public/Footer';
import { ScrollProvider } from './Componets/Service/ScrollContext';

function App() {
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Inter&display=swap');
      </style>
      <ScrollProvider>
        <NavBar />
        <Body />
        <Footer />
      </ScrollProvider>
    </div>

  );
}

export default App;
