import AdminCategoriesAdd from "../../components/admin/AdminCategoriesAdd";
import AdminCategoriesTable from "../../components/admin/AdminCategoriesTable";
import AdminStatCard from "../../components/admin/AdminStatCard";
import AdminHeader from "../../reusable/Admin/AdminHeader";





export default function AdminCategories() {
  return (
    <section className="bg-yellow h-screen">
      <AdminHeader title={"CATEGORIES"} />
      <div className=" max-w-[90%] pt-14 pb-5  mx-auto flex flex-col gap-5    ">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 md:gap-5 relative font-main">
          <div className="absolute bg-card -top-7 right-0 w-[80px] border border-black h-[20px] rounded-full"></div>
          {/* CARD */}
          <AdminStatCard title={"JACKET"} value={300} />
          <AdminStatCard title={"SHORTS"} value={5} />
          <AdminStatCard title={"SHIRT"} value={300} />
          <AdminStatCard title={"SHOES"} value={300} />
        </div>


        <div className="flex  flex-wrap gap-2">
          <div className="flex flex-col gap-2 flex-1">
           <AdminCategoriesTable/> 
           {/* <AdminCategoriesTable/> 
           <AdminCategoriesTable/>  */}

          </div>
          
        

          <AdminCategoriesAdd/>   

      

        </div>

       
      </div>
    </section>
  );
}
