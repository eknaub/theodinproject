import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:id" element={<ItemDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;