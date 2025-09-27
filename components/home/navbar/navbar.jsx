'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
import title from "@/details/title.js";
import nodename from "@/details/nodename.js";

import { inter } from "@/app/ui/fonts";

const NODE_NAME = nodename;

//bg-[#ffffff]/80 dark:bg-[#071a26]/80
export function Navbar() {
  const [brandImageUrl, setBrandImageUrl] = useState("/images/logo.png");

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        const navbarRef = ref(db, `resources/${NODE_NAME}/pageData/navbar`);
        const snapshot = await get(navbarRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.brandImageUrl && data.brandImageUrl.trim()) {
            setBrandImageUrl(data.brandImageUrl);
          }
        }
      } catch (error) {
        console.error('Failed to load navbar data:', error);
        // Keep default image
      }
    };

    loadNavbarData();
  }, []);
  return (
    <nav
      className={`${inter.className} bg-gray-200/80 dark:bg-[#071a26f1]/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 font-normal text-md navbar sticky top-0 w-full z-50`}
    >
      <div className="w-full mx-auto px-3 md:px-5 lg:px-8 xl:px-10 flex items-center justify-between h-[70px]">
        {/* <!-- Logo  --> */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            {brandImageUrl.startsWith('http') ? (
              <img
                src={brandImageUrl}
                alt="RUET CSE Archive Logo"
                className="h-[80px] w-[80px] object-contain"
                onError={(e) => {
                  e.target.src = "/images/logo.png";
                }}
              />
            ) : (
              <Image
                src={brandImageUrl}
                priority
                alt="RUET CSE Archive Logo"
                height={80}
                width={80}
                className="object-contain"
              />
            )}
            <div className="ml-3">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                {title}
              </span>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Powered by CSE Archive
              </div>
            </div>
          </Link>
        </div>

      </div>
    </nav>
  );
}
