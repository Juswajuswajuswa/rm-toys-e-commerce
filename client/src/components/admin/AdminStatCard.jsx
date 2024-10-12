export default function AdminStatCard({title, value}) {
  return (
    <div className='bg-card border-black border rounded-[5px] '>
        <div className='px-4 py-3 md:py-5 flex flex-col gap-2'>
				<span className=' text-sm  md:text-xl'>
					{title}
				</span>
				<p className='text-2xl md:text-3xl'>{value}</p>
			</div>
    </div>
  )
}
