import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className=" max-w-7xl mx-auto p-10 m-10 flex items-center justify-center flex-col gap-y-6">
        <p className=" text-xs bg-blue-700/30 px-4 py-2 rounded-full flex items-center gap-3 ">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Work
        </p>
        <h1 className=" text-7xl font-medium text-center bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent ">
          Let&apos;s create <br /> your next big idea.
        </h1>
        <Link href={"https://cal.com/shanka-visal"}>
          <Button className=" mt-6 bg-white text-black rounded-full hover:text-white">
            Contact Me
          </Button>
        </Link>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100009443564668"
              className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://x.com/Shanka_Visal"
              className="text-gray-400 hover:text-white">
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shankavisa"
              className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://github.com/ShankaVisal"
              className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/shanka_visal__/"
              className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </Link>
          </div>
          {/* Copyright Section */}
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
