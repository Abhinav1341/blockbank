import React from "react";
import { cn } from "../../lib/utils";
import Marquee from "../../components/marquee";

const reviews = [
  {
    name: "Anita Devi",
    username: "Farmer",
    body: "Struggling with droughts, Anita accessed a loan through the platform to install a drip irrigation system for her small farm. Now, her crop yield has doubled, and her family's income is steady, even in dry seasons..",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Ramesh Kumar",
    username: "Tailor",
    body: "Ramesh, a skilled tailor, could only afford a single sewing machine. With a small loan from the platform, he bought additional machines and hired apprentices. His tailoring business now serves the entire village, providing employment and a steady income.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Geeta Patel",
    username: "Grocery Store Owner",
    body: "Geeta used to travel miles to buy supplies for her store. A loan through the platform allowed her to bulk-purchase stock, increasing her profits and reducing travel expenses. Her shop is now a reliable source of goods for her community.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Manoj Singh",
    username: "Carpenter",
    body: "Manoj was skilled but lacked the tools to grow his carpentry business. The platform’s loan enabled him to purchase modern tools, allowing him to take on larger projects and increase his family’s income significantly.",
    img: "https://avatar.vercel.sh/jhill",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={`relative w-72 cursor-pointer overflow-hidden bg-white rounded-xl border p-4
         `}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-emerald-800">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-emerald-800/70">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Success() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden border bg-transparent md:shadow-xl ">
      <Marquee pauseOnHover className="[--duration:5s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:5s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 border-none bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4  border-none bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default Success;
