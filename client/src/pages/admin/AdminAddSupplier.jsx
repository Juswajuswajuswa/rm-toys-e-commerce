import AdminHeader from "../../reusable/Admin/AdminHeader";

export default function AdminAddSupplier() {


  return (
    <section className="bg-yellow h-screen font-main">
      <AdminHeader title={"ADD NEW SUPPLIER"} />

      <div className="max-w-[90%]  pt-14 pb-5 mx-auto flex gap-5 flex-col">
        <form className="border flex flex-col gap-5 relative rounded-[5px] border-black bg-card">
        <div className="absolute bg-card -top-7 right-0 w-[80px] border border-black h-[20px] rounded-full"></div>
            <div className="flex gap-2 p-2 flex-col">

                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="uppercase">Supplier Name: </label>
                    <input type="text" name="supplierName" id="supplierName" 
                    className="border border-black w-full rounded-[5px] p-1 h-[50p] outline-none"
                    />
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="uppercase">Contact Person : </label>
                    <input type="text" name="contactPerson" id="contactPerson" 
                    className="border border-black w-full rounded-[5px] p-1 h-[50p] outline-none"
                    />
                </div>

                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="uppercase">Contact Number: </label>
                    <input type="text" name="contactNumber" id="contactNumber" 
                    className="border border-black w-full rounded-[5px] p-1 h-[50p] outline-none"
                    />
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="uppercase">Bank Method: </label>
                    <input type="text" name="bankMethod" id="bankMethod" 
                    className="border border-black w-full rounded-[5px] p-1 h-[50p] outline-none"
                    />
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="uppercase">Supplier Address: </label>
                    <input type="text" name="supplierAddress" id="supplierAddress" 
                    className="border border-black w-full rounded-[5px] p-1 h-[50p] outline-none"
                    />
                </div>

            </div>


            <div className="flex flex-col">
                <button className="border bg-primary text-card rounded-b-[5px] p-2">ADD SUPPLIER</button>
            </div>
        </form>
      </div>
    </section>
  );
}
