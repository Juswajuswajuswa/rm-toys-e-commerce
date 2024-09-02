import { FaStar } from 'react-icons/fa';

export default function StarsRating({rating, setRating}) {

    // const handleClick = (index) => {
    //     setRating(index + 1)
    // }

  return (
    <div className='flex'>

        {
            Array.from({length: 5}).map((_, index) => (
                <FaStar
                key={index}
                // onClick={() => handleClick(index)}
                className={`h-4 w-4 md:w-6 cursor-pointer ${index < rating ? "text-main": "text-gray-300"}`}
                
                />
            ))
        }

    </div>
  )
}
