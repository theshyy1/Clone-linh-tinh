import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/users/users-context";
import { Button } from "../../components/common/button";

export const PaginationUserContainer = () => {
  const { allUsers, setFilteredUsers } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(allUsers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = allUsers.slice(startIndex, endIndex);

  useEffect(() => {
    setFilteredUsers(currentUsers);
  }, [currentPage, itemsPerPage]);

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((next) => next + 1);
    }
  };

  return (
    <div className="px-4 py-6 pt-6 text-text-light text-sm flex items-center justify-between border-t-[0.5px] border-gray-400">
      <div className="flex items-center">
        Showing:
        <span className="flex items-center px-4">
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="bg-transparent outline-none"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </span>
        of {allUsers.length}
      </div>
      <div className="flex space-x-5">
        <Button
          onClick={handlePrevPage}
          className="bg-blue-600 text-white rounded"
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 hover:opacity-90 text-white rounded-md px-3 py-2"
                : "bg-white px-3 py-2 block"
            }
            onClick={() => setCurrentPage(index + 1)}
            to={`?page=${index + 1}`}
          >
            {index + 1}
          </NavLink>
        ))}
        <Button
          className="bg-blue-600 text-white rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
