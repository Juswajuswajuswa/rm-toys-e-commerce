import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AdminSideBar from '../components/admin/AdminSideBar';
import { Toaster } from 'react-hot-toast';
import { useUserStore } from '../stores/useUserStore';


const  RootLayout = () => {
  return (
    <div className=" font-main-text">
      
      <header>
        <Navbar/>
      </header>


        {/* Main Content */}
        <main className="">
          <Outlet />
        </main>
        <Toaster/>
    </div>
  );
}


const RequiredAuth = () => {
  
  const currentUser = useUserStore(state => state.currentUser)

  return !currentUser ? (
    <Navigate to={`/sign-in`} />
  ) : (
    <div className="font-main-text">
      
    <header>
      <Navbar/>
    </header>
  
  
      {/* Main Content */}
      <main className="">
        <Outlet />
      </main>
      <Toaster/>
  </div>
  )

}


const AdminLayout = () => {
  return (
    <div className="flex">
      
      <div className=''>
          <AdminSideBar/>
      </div>


        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
        <Toaster/>
    </div>
  )
}




export {RootLayout, AdminLayout, RequiredAuth}