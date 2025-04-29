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
  }
];
