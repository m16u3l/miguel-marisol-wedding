import Header from './components/Header/Header'
import Couple from './components/Couple/Couple'
import Event from './components/Event/Event'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App" id="page">
      <Nav />
      <Header />
      <Couple/>
      <Event/>
      <Footer/>
    </div>
  );
}

export default App;
