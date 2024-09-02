
export default function Buttons({buttonName, icon}) {
  return (
    <button type="button" className="flex relative hover:opacity-95 uppercase justify-center items-center w-full border-black p-2 rounded-[5px] bg-primary text-card" 
    >
    
    {buttonName}

    <span className="absolute right-2">{icon}</span>
    
    </button>
  )
}
