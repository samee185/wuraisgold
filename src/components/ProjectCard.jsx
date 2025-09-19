import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ image, title, description, category, link }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category Badge */}
        <span className="text-xs uppercase font-medium px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white w-fit shadow-md">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Footer / Link */}
        <div className="mt-3">
          <Link
            to={link}
            className="inline-flex items-center gap-1 text-sm font-medium text-pink-600 hover:text-pink-800 transition"
          >
            View Project
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
