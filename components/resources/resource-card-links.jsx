"use client";

import Link from "next/link";
import toast from "react-hot-toast";

// Minimal client component only for interactive links with lazy toast loading
export function ResourceCardLinks({ links }) {
  return (
    <div className="flex gap-3">
      {links.map((link, index) => {
        const isDisabled = !link.url || link.url === "";
        const baseClasses =
          "w-full rounded-md px-3 py-2 text-center font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2";

        if (isDisabled) {
          // Render a non-interactive button for disabled state for better a11y
          return (
            <button
              key={index}
              type="button"
              className={`${baseClasses} bg-transparent border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed`}
              aria-disabled="true"
              tabIndex={-1}
              aria-label={`${link.label} (coming soon)`}
              onClick={(e) => {
                e.preventDefault();
                toast.error("Link not ready yet!");
              }}
            >
              {link.label}
            </button>
          );
        }

        return (
          <Link
            key={index}
            href={link.url}
            className={`${baseClasses} bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-blue-400 dark:focus:ring-blue-600`}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
