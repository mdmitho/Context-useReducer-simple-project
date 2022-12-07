import { createContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Routes';

  const PRODUCT_CONTEXT = createContext()
function App() {

const [data, setData] = useState([])
console.log(data)
useEffect(() =>{
  fetch("http://localhost:5000/watch")
  .then((res)=> res.json())
  .then((data)=> setData(data))
},[])

  return (
    <div className='container mx-auto' >
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
