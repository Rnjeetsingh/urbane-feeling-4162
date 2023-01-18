import logo from './logo.svg';
import './App.css';

import AllRoutes from './components/AllRoutes';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <AllRoutes />
    </div>
  );
}

export default App;
