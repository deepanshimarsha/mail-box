import './App.css';
import {Routes, Route } from 'react-router-dom';
import Inbox from './pages/Inbox';
import Spam from './pages/Spam';
import Detail from './pages/Detail';
import Trash from './pages/Trash';

function App() {
  return (
    <div className="App">

      
     <Routes>
      <Route path='/' element={<Inbox/>}/>
      <Route path='/spam' element={<Spam/>}/>
      <Route path='/trash' element={<Trash/>}/>
      <Route path='/detail/:mailId' element={<Detail/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
