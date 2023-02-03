import { createBrowserRouter } from 'react-router-dom'
import routes from '@/configs/routes'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const routesComponents = [
  {
    element: <Home />,
    errorElement: <NotFound />,
    path: routes.root
  }
]

const Router = createBrowserRouter(routesComponents)

export default Router
