import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./../App.css";

const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://swapi.dev/api/vehicles/?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.results);
        setTotalPages(Math.ceil(result.count / 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Item List</h1>
      {loading && <div className="text-xl">Loading...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
      {!loading && !error && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
          <ul className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <li key={index} className="py-2">
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className={`px-4 py-2 rounded ${
                page === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded ${
                page === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
          <p className="text-center mt-4">
            Page {page} of {totalPages}
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemList;
