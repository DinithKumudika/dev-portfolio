// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import Link from "next/link";
import { BsPersonWorkspace, BsLinkedin } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            EXPERIENCE
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pb-5 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} width="65%" />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80 -z-10"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <Image
                          src={experience.companyLogo}
                          alt="company-logo"
                          width={50}
                          height={50}
                        />
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-orange-500">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                          <div className="mt-3 flex gap-4">
                            <Link
                              href={experience.companyURL}
                              target='_blank'
                              className="transition-all text-orange-500 hover:scale-125 duration-300"
                            >
                              <BsLinkedin size={20} />
                            </Link>
                            <Link
                              href={experience.companyURL}
                              target='_blank'
                              className="transition-all text-orange-500 hover:scale-125 duration-300"
                            >
                              <FaGlobe size={20} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;