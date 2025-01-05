// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin, BiLogoMedium } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            CONTACT
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#16f2b3] p-2 rounded-full hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#16f2b3] p-2 rounded-full hover:scale-110 transition-all duration-300 font-bold text-black cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#16f2b3] p-2 rounded-full hover:scale-110 transition-all duration-300 font-bold text-black cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-orange-500 p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-orange-500 p-3 rounded-full hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.medium}>
              <BiLogoMedium
                className="bg-orange-500 p-3 rounded-full hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-orange-500 p-3 rounded-full hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;