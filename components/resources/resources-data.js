import image0 from "@/public/images/resources/image0.jpg";
import image1 from "@/public/images/resources/image1.jpg";
import image2 from "@/public/images/resources/image2.jpg";
import image3 from "@/public/images/resources/image3.jpg";
import image4 from "@/public/images/resources/image4.jpg";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
import {nodename} from "@/details/details.js";

// Static images mapping
const resourceImages = [image0, image1, image2, image3, image4];
const NODE_NAME = nodename;

// Fallback static data (used if Firebase fails) - Updated structure
const fallbackResourcesData = [
  {
    id: 1,
    title: "1st Year Resources",
    description:
      "Just entered the matrix? Here's your starter pack: C programming, logic gates, and enough math to question your existence. Escape infinite loops early!",
    image: image0,
    links: [
      { label: "1 - 1", url: "" },
      { label: "1 - 2", url: "" },
    ],
  },
  {
    id: 2,
    title: "2nd Year Resources",
    description:
      "You've compiled your basics — now get ready for bugs that don't show errors! Dive into 'why won't this code run?!' energy.",
    image: image1,
    links: [
      { label: "2 - 1", url: "" },
      { label: "2 - 2", url: "" },
    ],
  },
  {
    id: 3,
    title: "3rd Year Resources",
    description:
      "Code is life now. OS deadlocks, Git merge conflicts, and your first real project where 'it works on my machine' is a valid excuse. Enjoy the chaos!",
    image: image2,
    links: [
      { label: "3 - 1", url: "" },
      { label: "3 - 2", url: "" },
    ],
  },
  {
    id: 4,
    title: "4th Year Resources",
    description:
      "You're almost out! But wait — there's ML models, thesis panic, final year projects, and last-minute internship hunts. Now's the time to pretend you know everything.",
    image: image3,
    links: [
      { label: "4 - 1", url: "" },
      { label: "4 - 2", url: "" },
    ],
  },
  {
    id: 5,
    title: "Higher Studies & Internship Details",
    description:
      "Want to escape the 9-to-5 matrix? Whether it's GRE stress or internship ghosting — we got the hacks. Also, don't forget to update your LinkedIn.",
    image: image4,
    links: [{ label: "Read more", url: "" }],
  },
];

// Function to fetch resources data from Firebase
export async function getResourcesData() {
  try {
    const resourcesRef = ref(db, `resources/${NODE_NAME}/resources`);
    const pageDataRef = ref(db, `resources/${NODE_NAME}/pageData/cards`);
    
    const [resourcesSnapshot, pageDataSnapshot] = await Promise.all([
      get(resourcesRef),
      get(pageDataRef)
    ]);
    
    // Get card titles and descriptions from pageData if available
    let cardData = [
      {
        title: "1st Year Resources",
        description: "Just entered the matrix? Here's your starter pack: C programming, logic gates, and enough math to question your existence. Escape infinite loops early!"
      },
      {
        title: "2nd Year Resources", 
        description: "You've compiled your basics — now get ready for bugs that don't show errors! Dive into 'why won't this code run?!' energy."
      },
      {
        title: "3rd Year Resources",
        description: "Code is life now. OS deadlocks, Git merge conflicts, and your first real project where 'it works on my machine' is a valid excuse. Enjoy the chaos!"
      },
      {
        title: "4th Year Resources",
        description: "You're almost out! But wait — there's ML models, thesis panic, final year projects, and last-minute internship hunts. Now's the time to pretend you know everything."
      },
      {
        title: "Higher Studies & Internship Details",
        description: "Want to escape the 9-to-5 matrix? Whether it's GRE stress or internship ghosting — we got the hacks. Also, don't forget to update your LinkedIn."
      }
    ];

    // Override with admin-edited data if available
    if (pageDataSnapshot.exists()) {
      const adminCardData = pageDataSnapshot.val();
      cardData = adminCardData;
    }
    
    if (resourcesSnapshot.exists()) {
      const firebaseData = resourcesSnapshot.val();
      
      // Convert Firebase structure (resources/1-1/A) to resources data
      const resourcesWithLinks = cardData.map((cardInfo, index) => ({
        id: index + 1,
        title: cardInfo.title,
        description: cardInfo.description,
        image: resourceImages[index],
        links: []
      }));

      // Map Firebase data to resources structure
      // 1st Year: 1-1, 1-2
      const firstYearSemesters = ['1-1', '1-2'];
      firstYearSemesters.forEach(semester => {
        if (firebaseData[semester]) {
          ['A', 'B', 'C'].forEach(variant => {
            if (firebaseData[semester][variant]) {
              resourcesWithLinks[0].links.push({
                label: `${semester} - ${variant}`,
                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
              });
            }
          });
        }
      });

      // 2nd Year: 2-1, 2-2  
      const secondYearSemesters = ['2-1', '2-2'];
      secondYearSemesters.forEach(semester => {
        if (firebaseData[semester]) {
          ['A', 'B', 'C'].forEach(variant => {
            if (firebaseData[semester][variant]) {
              resourcesWithLinks[1].links.push({
                label: `${semester} - ${variant}`,
                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
              });
            }
          });
        }
      });

      // 3rd Year: 3-1, 3-2
      const thirdYearSemesters = ['3-1', '3-2'];
      thirdYearSemesters.forEach(semester => {
        if (firebaseData[semester]) {
          ['A', 'B', 'C'].forEach(variant => {
            if (firebaseData[semester][variant]) {
              resourcesWithLinks[2].links.push({
                label: `${semester} - ${variant}`,
                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
              });
            }
          });
        }
      });

      // 4th Year: 4-1, 4-2
      const fourthYearSemesters = ['4-1', '4-2'];
      fourthYearSemesters.forEach(semester => {
        if (firebaseData[semester]) {
          ['A', 'B', 'C'].forEach(variant => {
            if (firebaseData[semester][variant]) {
              resourcesWithLinks[3].links.push({
                label: `${semester} - ${variant}`,
                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
              });
            }
          });
        }
      });

      // Higher Studies
      if (firebaseData['higher-studies']) {
        ['A', 'B', 'C'].forEach(variant => {
          if (firebaseData['higher-studies'][variant]) {
            resourcesWithLinks[4].links.push({
              label: variant === 'A' ? 'Higher Studies' : variant === 'B' ? 'Internships' : 'Career Guide',
              url: `/drive/${firebaseData['higher-studies'][variant]}` // Convert to internal drive URL
            });
          }
        });
      }

      // Add fallback empty links if no links found
      resourcesWithLinks.forEach((resource, index) => {
        if (resource.links.length === 0) {
          if (index < 4) {
            const year = index + 1;
            resource.links = [
              { label: `${year} - 1`, url: "" },
              { label: `${year} - 2`, url: "" }
            ];
          } else {
            resource.links = [{ label: "Read more", url: "" }];
          }
        }
      });
      
      return resourcesWithLinks;
    } else {
      console.warn('No resources data found in Firebase, using fallback data');
      return cardData.map((cardInfo, index) => ({
        id: index + 1,
        title: cardInfo.title,
        description: cardInfo.description,
        image: resourceImages[index],
        links: index < 4 ? [
          { label: `${index + 1} - 1`, url: "" },
          { label: `${index + 1} - 2`, url: "" }
        ] : [{ label: "Read more", url: "" }]
      }));
    }
  } catch (error) {
    console.error('Error fetching resources from Firebase:', error);
    return fallbackResourcesData;
  }
}

// Export static data for backward compatibility
export const resourcesData = fallbackResourcesData;

// SEO-friendly metadata
export const resourcesMetadata = {
  title: "Academic Resources || RUET CSE Archive",
  description:
    "Access comprehensive study materials, course resources, and academic guides for all years of your CSE journey at RUET.",
  keywords: [
    "RUET",
    "CSE",
    "academic resources",
    "study materials",
    "computer science",
    "engineering",
  ],
};
