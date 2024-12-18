import { ShoppingCart, Slack } from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className='flex py-4 items-center px-60 justify-between bg-primary text-white shadow-2xl'>
      <div>
        <Link to={"/"}>
          <Slack className='size-16' />
        </Link>
      </div>

      <div>
        <ul className='flex gap-12 text-xl font-normal'>
          <li className='hover:animate-bounce hover:underline'>
            <Link to={"/"}>Home</Link>
          </li>
          <li className='hover:animate-bounce hover:underline'>
            <Link to={"/"}>Products</Link>
          </li>
          <li className='hover:animate-bounce hover:underline'>
            <Link to={"/"}>AboutUs</Link>
          </li>
          <li className='hover:animate-bounce hover:underline'>
            <Link to={"/"}>Contacts</Link>
          </li>
        </ul>
      </div>

      <div>
        <Link to={`/cart`}>
          <ShoppingCart className='size-10' />
        </Link>
      </div>
    </nav>
  );
}
