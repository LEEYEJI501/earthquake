import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="text-blue-800 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="ml-3 text-xl"> Windicss + Nextjs</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-blue-800 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Blog</a>
            <a className="mr-5 hover:text-gray-900">About us</a>
            <a className="mr-5 hover:text-gray-900">Contact us</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
