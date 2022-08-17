import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './pages/Counter';
import Form from './pages/Form';
function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="fixed top-5 left-10">
        <Link to="/" className="mr-4">
          counter
        </Link>
        <Link to="/form">Form</Link>
      </div>
      <Routes>
        <Route path="/" element={<Counter number={0} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
