import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { name, price, id } = item;
  return (
    <div className=" bg-gray-900  p-6 flex flex-col my-auto mx-1">
      <div className="flex justify-between items-center py-2  ">
        <h1 className="mx-1">{name}</h1>
        <span className="mx-1">{price}</span>
      </div>
      <Link to={`/items/${id}`}>
        <button className="shadow bg-gray-600 text-base w-auto ml-auto mr-auto items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
