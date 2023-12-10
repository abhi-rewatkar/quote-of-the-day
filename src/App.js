import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Quotes from './components/Quotes';

function App() {

  
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Quotes/>}/>
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;