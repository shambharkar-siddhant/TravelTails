export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  date?: string;
  description?: string;
}

export interface GalleryLocation {
  id: number;
  name: string;
  slug: string;
  coverImage: string;
  description: string;
  date: string;
  images: GalleryImage[];
}

export const galleryLocations: GalleryLocation[] = [
  {
    id: 1,
    name: "Meghalaya",
    slug: "meghalaya",
    coverImage: "/images/meghalaya/blog_3.jpeg",
    description: "Known as the 'abode of clouds', this northeastern state is home to living root bridges, stunning waterfalls, and lush green hills.",
    date: "October 2022",
    images: [
      {
        id: 101,
        src: "/images/meghalaya/gallery_2.jpeg",
        alt: "Gibbon Backpackers Hostel",
        date: "October 8, 2022",
        description: "Hall of Hostel. On the wall every traveller written their story, motto or just some random quote to motivate you."
      },
      {
        id: 112,
        src: "/images/meghalaya/blog_3.jpeg",
        alt: "A beautiful lake by the park",
        date: "October 8, 2022",
        description: ""
      },
      {
        id: 102,
        src: "/images/meghalaya/gallery_10.jpeg",
        alt: "Just stop to have a tea",
        date: "October 8, 2022",
        description: ""
      },
      {
        id: 103,
        src: "/images/meghalaya/gallery_11.jpeg",
        alt: "Misty mountains of Meghalaya",
        date: "October 8, 2022",
        description: "Chai Stop"
      },
      {
        id: 104,
        src: "/images/meghalaya/gallery_12.jpeg",
        alt: "Misty mountains of Meghalaya",
        date: "October 8, 2022",
        description: "Me and mountains"
      },
      {
        id: 105,
        src: "/images/meghalaya/gallery_14.jpeg",
        alt: "Seven Sisters Waterfall",
        date: "October 8, 2022",
        description: ""
      },
      {
        id: 106,
        src: "/images/meghalaya/gallery_16.jpeg",
        alt: "Random Shop giving 90's vibe",
        date: "October 8, 2022",
        description: ""
      },
      {
        id: 107,
        src: "/images/meghalaya/gallery_17.jpeg",
        alt: "Random Shop selling masale, random people buying masale",
        date: "October 8, 2022",
        description: ""
      },
      {
        id: 108,
        src: "/images/meghalaya/gallery_19.jpeg",
        alt: "Night View of Shillong",
        date: "October 8, 2022",
        description: ""
      },
      {
        id: 109,
        src: "/images/meghalaya/gallery_22.jpeg",
        alt: "Lady Hydari Park",
        date: "October 8, 2022",
        description: "left skull is of Rhino, middle and right is of Elephant"
      },
      {
        id: 110,
        src: "/images/meghalaya/gallery_24.jpeg",
        alt: "Lady Hydari Park",
        date: "October 8, 2022",
        description: "Good looking closed restaurant"
      },
      {
        id: 113,
        src: "/images/meghalaya/blog_5.jpeg",
        alt: "Authentic momo shop — cheap mayo, ketchup, and meat you probably don’t want to ask about.",
        date: "October 8, 2022",
        description: ""
      },
      {
        id: 111,
        src: "/images/meghalaya/gallery_27.jpeg",
        alt: "Me trying to enjoy momo, while other person wants to click picture first",
        date: "October 8, 2022",
        description: ""
      }
    ]
  },
  {
    id: 2,
    name: "Pondicherry",
    slug: "Puducherry",
    coverImage: "/images/pondicherry/gallery_cover.jpg",
    description: "Slice of French in India.",
    date: "May 2025",
    images: [
      {
        id: 201,
        src: "/images/pondicherry/gallery_1.jpg",
        alt: "French Breakfast",
        date: "May 17, 2025",
        description: "location: Coromandel Cafe"
      },
      {
        id: 202,
        src: "/images/pondicherry/gallery_2.jpg",
        alt: "All types of sugar and maida",
        date: "May 18, 2025",
        description: "location: Baker Streets Cafe"
      },
      {
        id: 203,
        src: "/images/pondicherry/gallery_3.jpeg",
        alt: "Some random resturant in Pondicherry",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 204,
        src: "/images/pondicherry/gallery_4.jpeg",
        alt: "All time Candid Pose of Boys",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 205,
        src: "/images/pondicherry/gallery_5.jpeg",
        alt: "Matrimandir design plan",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 206,
        src: "/images/pondicherry/gallery_6.jpeg",
        alt: "New camera clicking picture of Old Camera",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 207,
        src: "/images/pondicherry/gallery_7.jpeg",
        alt: "Random Majestic Tree",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 208,
        src: "/images/pondicherry/gallery_8.jpeg",
        alt: "Me getting enlightenment",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 209,
        src: "/images/pondicherry/gallery_9.jpeg",
        alt: "Inside of Sphere",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 210,
        src: "/images/pondicherry/gallery_10.jpeg",
        alt: "Good Place to Eat",
        date: "May 17, 2025",
        description: ""
      },
      {
        id: 211,
        src: "/images/pondicherry/gallery_11.jpeg",
        alt: "Church",
        date: "May 17, 2025",
        description: ""
      },
      {
        id: 212,
        src: "/images/pondicherry/gallery_12.jpeg",
        alt: "Streets of french colony",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 213,
        src: "/images/pondicherry/gallery_13.jpg",
        alt: "Me, looking sexy af",
        date: "May 18, 2025",
        description: ""
      },
      {
        id: 214,
        src: "/images/pondicherry/gallery_14.jpg",
        alt: "Me, trying to look mysterious",
        date: "May 18, 2025",
        description: ""
      }
    ]
  },
  {
    id: 3,
    name: "Goa",
    slug: "sober-in-goa",
    coverImage: "/images/goa/cover.jpg",
    description: "Went for a detox, ended up at a beach rave with seafood in one hand and a mojito in the other. Classic Goa.",
    date: "December 2022",
    images: [
      {
        id: 301,
        src: "/images/goa/gallery_1.jpg",
        alt: "Vibing with Statue",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 302,
        src: "/images/goa/gallery_2.jpg",
        alt: "Mandatory Goa PIcture",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 303,
        src: "/images/goa/gallery_3.jpg",
        alt: "Beach Pose",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 304,
        src: "/images/goa/gallery_4.jpg",
        alt: "The famous Beach",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 305,
        src: "/images/goa/gallery_5.jpg",
        alt: "I think they look cool",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 306,
        src: "/images/goa/gallery_6.jpg",
        alt: "Desi Boys",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 307,
        src: "/images/goa/gallery_7.jpg",
        alt: "Now thats a good look",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 309,
        src: "/images/goa/gallery_9.jpg",
        alt: "Discussing if its a log or crocodile",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 311,
        src: "/images/goa/gallery_11.jpg",
        alt: "Just me looking at couples",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 312,
        src: "/images/goa/gallery_12.jpg",
        alt: "The Gangs of Goa",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 313,
        src: "/images/goa/gallery_14.jpg",
        alt: "The Gangs of Goa 2",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 314,
        src: "/images/goa/gallery_15.jpg",
        alt: "Dil Chahta hai 2",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 315,
        src: "/images/goa/gallery_17.jpg",
        alt: "Love Civil Engineering so much that trying to merge in the smooth road",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 316,
        src: "/images/goa/gallery_18.jpg",
        alt: "Now I can go fishing",
        date: "Dec 14, 2022",
        description: ""
      },
      {
        id: 317,
        src: "/images/goa/gallery_19.jpg",
        alt: "Highly expensive hotel, can only afford to look",
        date: "Dec 14, 2022",
        description: ""
      },
    ]
  }
];
