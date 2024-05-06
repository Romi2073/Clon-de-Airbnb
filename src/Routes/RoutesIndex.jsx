import { Routes, Route } from 'react-router-dom';
import Banner from '../Pages/Banner';
import Home from '../Pages/Home';
import YourHome from '../Pages/YourHome';


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path='/YourHome' element={<YourHome/>}/>
      <Route path="/Home" element={<Banner />} />
    </Routes>
  );
}

export default RoutesIndex;

