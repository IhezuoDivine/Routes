import { Link, Routes, Route } from "react-router-dom";
import Meals from "./Hello";

function Nav() {
  return (
    <div>
      <Link to="/meals">Meals</Link>

      <Routes>
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </div>
  );
}

export default Nav;
