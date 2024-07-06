import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
