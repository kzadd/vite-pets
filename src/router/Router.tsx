import { createBrowserRouter } from 'react-router-dom'
import routes from '@/configs/routes'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

/**
 * The Routes's components.
 */
const routesComponents = [{ element: <Home />, errorElement: <NotFound />, path: routes.root }]

/**
 * The Router's. https://reactrouter.com/en/main/routers/create-browser-router
 */
const Router = createBrowserRouter(routesComponents)

export default Router
