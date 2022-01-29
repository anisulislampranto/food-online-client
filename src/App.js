import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddRestaurants from './Components/Dashboard/AddRestaurants/AddRestaurants';
import Home from './Components/Home/Home/Home';
import RestaurantMenu from './Components/Home/RestaurantMenu/RestaurantMenu';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurant/:id' element={<RestaurantMenu />} />
      <Route path='/addrestaurant' element={<AddRestaurants />} />
    </Routes>
  );
}

export default App;
