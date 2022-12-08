import { RouterProvider } from "react-router-dom";
import ProductProvider from "./components/context/ProductProvider";
import router from "./components/Routes/Routes";

function App() {
  return (
    <div className="container mx-auto">
    
        <RouterProvider router={router} />
      
      <div>jkdjkfkj</div>
      <div>jkdjkfkj</div>
      <div>jkdjkfkj</div>
      <div>jkdjkfkj</div>
      <div>jkdjkfkj</div>
    </div>
  );
}

export default App;
