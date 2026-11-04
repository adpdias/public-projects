import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":categoryId/:productId" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;