import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AdminSideBar from '../components/admin/AdminSideBar';


const  RootLayout = () => {
  return (
    <div className="text-primary font-main-text">
      
      <header className=' text-red-700'>
        <Navbar/>
      </header>


        {/* Main Content */}
        <main className="">
          <Outlet />
        </main>

    </div>
  );
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

    </div>
  )
}




export {RootLayout, AdminLayout}