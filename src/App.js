import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Products from "./pages/public/Products";
import NotFound from "./pages/public/NotFound";
import Login from "./pages/public/Login";
import Registration from "./pages/public/Registration";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

function App() {
  return (
    <div className="container mx-auto">
      <nav className="flex gap-x-10 mx-auto">
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/registration">Registration</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
