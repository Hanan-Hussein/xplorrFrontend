import './App.css';
import HomePage from './components/Homepage';
import CategoryDetails from './components/CategoryDetails';
import { Routes, Route } from "react-router-dom";
import DestinationDetails from './components/DestinationDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name" element={<CategoryDetails />} />
        <Route path="/category/details/:id" element={<DestinationDetails />} />

      </Routes>

    </>
  );
}

export default App;
