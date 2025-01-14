// @flow strict
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ project }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group pb-3">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-</div>t-lg">
        <Image
          src={project.cover}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{project.associatedWith}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {project.tools.length > 0 &&
            project.tools.map((tool, i) => (
              <span
                key={i}
                className="bg-[#16f2b3] text-black font-semibold px-2 py-1 rounded-full text-xs"
              >
                {tool}
              </span>
            ))}
        </div>

        <div className="overflow-hidden border-t-[2px] border-indigo-900"></div>

        <p className="my-2 lg:my-3 cursor-pointer text-lg sm:text-xl font-medium text-orange-500">
          {project.name}
        </p>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3 min-h-min">
          {project.description}
        </p>
        <div className="pt-3">
          <Link
            href={project.code}
            target="_blank"
            className="transition-all text-orange-500 hover:scale-125 duration-300"
          >
            <BsGithub size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
