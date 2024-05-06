import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import YourHome from '../Pages/YourHome';
import Form from '../Pages/Form';


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/YourHome' element={<YourHome/>}/>
      <Route path='/Form' element={<Form/>}/>
    </Routes>
  );
}

export default RoutesIndex;

