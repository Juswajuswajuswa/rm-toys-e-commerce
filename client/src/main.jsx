import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AdminLayout, RootLayout} from './layout/RootLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SignIn from './routes/SignIn.jsx'
import SignUp from './routes/SignUp.jsx'
import Shop from './routes/Shop.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Reviews from './pages/Reviews.jsx'
import PopularPage from './pages/PopularPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import CartPage from './pages/CartPage.jsx'
import WishListPage from './pages/WishListPage.jsx'


// USE CONTEXT
import users from './dummyData/UserData.js'
import { UserContext } from './userContext/UserContext.js'
import { ProtectedAdminRoute } from './routes/ProtectedRoutes/ProtectedAdminRoute.jsx'
import AdminOverview from './pages/admin/AdminOverview.jsx'
import AdminProducts from './pages/admin/AdminProducts.jsx'
import AdminCategories from './pages/admin/AdminCategories.jsx'
import AdminAddProducts from './pages/admin/AdminAddProducts.jsx'



const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: `/`,
        element: <LandingPage/>
      },
      {
        path: `/sign-in`,
        element: <SignIn/>
      },
      {
        path: `/sign-up`,
        element: <SignUp/>
      },
      {
        path: `/shop`,
        element: <Shop/>
      },
      {
        path: `/product`,
        element: <ProductDetails/>
      },
      {
        path: `/reviews`,
        element: <Reviews/>
      },
      {
        path: `/popular`,
        element: <PopularPage/>
      },
      {
        path: `/profile`,
        element: <ProfilePage/>
      },
      {
        path: `/cart`,
        element: <CartPage/>
      },
      {
        path: `/wishlist`,
        element: <WishListPage/>
      },
    ]
  },
  {
    path: "admin",
    element: <ProtectedAdminRoute><AdminLayout/></ProtectedAdminRoute>,
    children: [
      {
        path: "",
        element: <AdminOverview/>
      },
      {
        path: "/admin/overview",
        element: <AdminOverview/>
      },
      {
        path: "/admin/products",
        element: <AdminProducts/>
      },
      {
        path: "/admin/categories",
        element: <AdminCategories/>
      },
      {
        path: "/admin/addProducts",
        element: <AdminAddProducts/>
      },
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <UserContext.Provider value={users}>
        <RouterProvider router={router}/>
      </UserContext.Provider>
  </StrictMode>,
)
