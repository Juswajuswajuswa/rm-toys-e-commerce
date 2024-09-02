import AdminHeader from "../../reusable/Admin/AdminHeader";

export default function AdminOverview() {
  return (
    <section className="bg-yellow h-screen ">
      <AdminHeader title={"Overview"}/>
      <div className="max-w-[90%] py-14 mx-auto flex gap-5 flex-col">


        <div className=" h-[100px] bg-card rounded-[5px] border  relative border-black">
          <div className="absolute bg-card -top-7 right-0 w-[80px] border border-black h-[20px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
