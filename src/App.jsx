import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import Home from './component/Home/Home';
import Layout from './component/Layout/Layout';

let x = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <Home /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={x} />
    </>
  )
}

export default App