import AdminCategoryTable from '../../components/admin/AdminCategoryTable'
import AdminHeader from '../../reusable/Admin/AdminHeader'

export default function AdminCategory() {
  return (
    <section className="bg-yellow h-screen">
    <AdminHeader title={"Category"}/>
    <div className="max-w-[90%] pt-14 pb-5 mx-auto flex gap-5 flex-col">

      {/* main */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 md:gap-5 relative font-main">
       
        {/* <AdminStatCard title={"TOTAL PRODUCTS"} value={300}/>
        <AdminStatCard title={"TOTAL CATEGORIES"} value={5}/>
        <AdminStatCard title={"STOCKS"} value={300}/>
        <AdminStatCard title={"STOCKS"} value={300}/> */}
      </div>

          <AdminCategoryTable/>
     
    </div>
  </section>
  )
}
