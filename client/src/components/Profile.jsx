import jacket1 from "../assets/noavatar.jpg";


export default function Profile() {

  return (
    <div>
      <div>
        <img
          src={jacket1}
          alt=""
          className="w-[45px] h-[45px] border border-black rounded-full object-cover"
        />
      </div> 
    </div>
  );
}
