import { IoSearch } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../lib/axios";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
  {
    id: 6,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
  {
    id: 7,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
  {
    id: 8,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
  {
    id: 9,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
  {
    id: 10,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

export default function AdminProductsTable() {
  const {
    data: products = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/product/get-products`);
      return res.data;
    },
  });

  console.log(products)

   

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error loading filters</p>;

  return (
    <div className="font-main border rounded-[5px] border-black bg-card relative ">
      <div className=" border flex-col border-b-black rounded-t-[5px] flex md:flex-row items-center justify-between  p-4">
        <h1>PRODUCTS TABLE</h1>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="search products.."
            className="border md:w-[300px] border-black rounded-[5px] p-1 focus:outline-none"
          />
          <IoSearch className="absolute right-0" size={30} />
        </div>
      </div>
      <div className="overflow-y-auto  h-[600px] py-3">
        <table className="w-full divide-y divide-gray-700">
          <thead>
            <tr className="">
              <th className="font-normal p-2 pb-5">ID</th>
              <th className="font-normal p-2 pb-5">NAME</th>
              <th className="font-normal p-2 pb-5">CATEGORY</th>
              <th className="font-normal p-2 pb-5">PRICE</th>
              <th className="font-normal p-2 pb-5">STOCK</th>
              <th className="font-normal p-2 pb-5">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 ">
            {products.length > 0 && products.map((product) => (
              <tr key={product._id}>
                <td className="px-4 ">{product._id}</td>
                <td className="px-2 py-4 whitespace-nowrap text-sm truncate font-medium flex items-center gap-2	">
                  <img
                    src={product.productImages[0]}
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
                  {product.productName}
                </td>
				
                <td className="px-4 py-4 uppercase whitespace-nowrap text-center text-sm">
					{
						product.filters[0].categories
					}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  PHP{product.price.toFixed(2)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                  {product.stocks}
                </td>
                <td className="px-4 py-4 whitespace-nowrap gap-3 text-sm flex justify-center">
                  <button className="text-green-600 hover:text-indigo-300 mr-2">
                    <CiEdit size={25} />
                  </button>
                  <button className="text-red-600 hover:text-red-300">
                    <MdDelete size={25} />
                  </button>
                  <button className="text-red-600 hover:text-red-300">
                    ADD TO SLIDER
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
