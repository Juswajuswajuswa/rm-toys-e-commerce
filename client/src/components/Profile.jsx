import { useUserStore } from "../stores/useUserStore";

export default function Profile() {

  const currentUser = useUserStore(state => state.currentUser)

  return (
    <div>
      <div>
        <img
          src={currentUser.avatar}
          alt="avatar"
          className="w-[45px] h-[45px] border border-black rounded-full object-cover"
        />
      </div> 
    </div>
  );
}
