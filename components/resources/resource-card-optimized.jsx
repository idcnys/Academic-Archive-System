import Image from "next/image";
import { ResourceCardLinks } from "./resource-card-links";

// Server component for static card structure
export function ResourceCard({ id, title, description, image, links }) {
  return (
    <div className="resource-card mx-auto lg:max-w-[350px] md:max-w-[300px] h-[485px] max-w-full bg-white dark:bg-[#071a26]">
      <Image
        className="w-full h-48 object-cover rounded-t"
        src={image}
        alt={title}
        sizes="(max-width: 768px) 290px, (max-width: 1024px) 300px, 330px"
        placeholder="blur"
        priority={id <= 2} // Prioritize loading for first 2 cards
      />
      <div className="p-5 relative">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-200">
          {title}
        </h5>
        <p className="mb-4 max-h-[150px] text-justify text-gray-700 dark:text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
        <ResourceCardLinks links={links} />
      </div>
    </div>
  );
}
