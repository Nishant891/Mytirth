import Image from "next/image";
import React from "react";
type CardProps = {
  id: number;
  name: string;
  discount: string;
  price: string;
  url: string;
};
const Card = ({name, discount, price, url }: CardProps) => {
  return (
    <div>
      <a
        href="#"
        className="relative block rounded-tr-3xl border border-gray-100"
      >
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          Save {discount}
        </span>

        <Image
          src={url}
          alt="A pilgrim"
          className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900">
            {" "}
            {name}{" "}
          </strong>

          <p className="mt-2 text-pretty text-gray-700">{price}</p>

          <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
            Learn More
          </span>
        </div>
      </a>
    </div>
  );
};

export default Card;
