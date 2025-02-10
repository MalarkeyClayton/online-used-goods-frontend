import { Category } from "@/types/category.types";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

// type Category = {
//   title: string;
//   slug: string;
// };

// const categoriesData: Category[] = [
//   {
//     title: "T-shirts",
//     slug: "/shop?category=t-shirts",
//   },
//   {
//     title: "Shorts",
//     slug: "/shop?category=shorts",
//   },
//   {
//     title: "Shirts",
//     slug: "/shop?category=shirts",
//   },
//   {
//     title: "Hoodie",
//     slug: "/shop?category=hoodie",
//   },
//   {
//     title: "Jeans",
//     slug: "/shop?category=jeans",
//   },
// ];

const CategoriesSection = ({ data }: { data: Category[] }) => {


  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {data.length > 0 && data.map((category, index) => (
        <Link
          key={index}
          href={`${process.env.NEXT_PUBLIC_API_URL}/shop?${category.title}`}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>)
      )}
    </div>
  );
};

export default CategoriesSection;
