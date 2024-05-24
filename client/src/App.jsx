
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from './routes/ROUTES';
import FavProvider from './context/wishlistContext';
import BasketProvider from './context/basketContext';
function App() {

  const router = createBrowserRouter(ROUTES)
  return (
    <>
    <BasketProvider>
    <FavProvider>
    <RouterProvider router={router} />
    </FavProvider>
    </BasketProvider>

    
    </>
  )
}

export default App
