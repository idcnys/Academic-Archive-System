'use client';

import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
import {nodename} from "@/details/details.js";

const NODE_NAME = nodename;

// Server component for static header
export function ResourcesHeader() {
  const [headerData, setHeaderData] = useState({
    title: "Academic Resources",
    description: "Access comprehensive study materials, course resources, and academic guides for all years of your CSE journey at RUET."
  });

  useEffect(() => {
    const loadHeaderData = async () => {
      try {
        const pageRef = ref(db, `resources/${NODE_NAME}/pageData/header`);
        const snapshot = await get(pageRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          setHeaderData(data);
        }
      } catch (error) {
        console.error('Failed to load header data:', error);
        // Keep default data
      }
    };

    loadHeaderData();
  }, []);

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-nowrap">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-gray-500 dark:to-neutral-400 dark:from-neutral-200">
          {headerData.title}
        </span>
      </h1>
      <p className="text-md font-normal text-gray-500 lg:text-xl dark:text-gray-400 max-w-3xl mx-auto">
        {headerData.description}
      </p>
    </div>
  );
}
