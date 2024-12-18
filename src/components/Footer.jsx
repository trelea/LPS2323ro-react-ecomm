import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Slack,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='bg-primary text-white shadow-2xl px-60'>
      <section className='flex justify-between py-10'>
        <div>
          <Slack className='size-16' />
        </div>

        <div>
          <ul className='flex flex-col gap-4 text-lg font-normal'>
            <li className='hover:underline'>
              <Link to={`#`}>Home</Link>
            </li>
            <li className='hover:underline'>
              <Link to={`#`}>Products</Link>
            </li>
            <li className='hover:underline'>
              <Link to={`#`}>About Us</Link>
            </li>
            <li className='hover:underline'>
              <Link to={`#`}>Contacts</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col gap-4 text-lg font-normal'>
            <li className='hover:underline'>
              <Link to={`#`}>Home</Link>
            </li>
            <li className='hover:underline'>
              <Link to={`#`}>Products</Link>
            </li>
            <li className='hover:underline'>
              <Link to={`#`}>About Us</Link>
            </li>
            <li className='hover:underline'>
              <Link to={`#`}>Contacts</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col gap-4 text-lg font-normal'>
            <li className='flex items-center gap-4 hover:underline'>
              <Facebook className='size-6' />
              Facebook
            </li>

            <li className='flex items-center gap-4 hover:underline'>
              <Instagram className='size-6' />
              Instagram
            </li>

            <li className='flex items-center gap-4 hover:underline'>
              <Linkedin className='size-6' />
              Linkedin
            </li>

            <li className='flex items-center gap-4 hover:underline'>
              <Twitter className='size-6' />
              Twitter
            </li>
          </ul>
        </div>
      </section>
      <section className='flex justify-center items-center py-2 border-t'>
        <p className='flex items-center gap-2'>
          <Copyright />
          Copyright 2024 | New Service.
        </p>
      </section>
    </footer>
  );
}
