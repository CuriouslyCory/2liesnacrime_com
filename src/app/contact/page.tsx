import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default async function ContactPage() {
  return (
    <>
      <div className="flex w-full justify-center bg-slate-800">
        <div className="flex w-full max-w-6xl justify-start px-5 py-10 md:px-0">
          <h1 className="font-serif text-4xl text-white">Contact</h1>
        </div>
      </div>
      <div className="flex w-full justify-center bg-amber-300">
        <div className="hero mx-5 mb-10 mt-20 flex w-full max-w-6xl flex-col justify-around gap-x-5 gap-y-5 rounded-lg bg-amber-200 p-10">
          <span className="font-sans text-xl">Follow us on</span>
          <Link href="https://www.facebook.com/2-Lies-in-a-Crime-106656542129241">
            <div className="flex cursor-pointer flex-row items-center gap-x-3">
              <FaInstagram /> Instagram
            </div>
          </Link>
          <Link href="https://www.facebook.com/2-Lies-in-a-Crime-106656542129241">
            <div className="flex cursor-pointer flex-row items-center gap-x-3">
              <FaFacebook /> Facebook
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
