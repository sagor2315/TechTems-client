import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [remainingData, setRemainingData] = useState([]);

  const fetchData = useCallback(() => {
    fetch("http://localhost:6500/carts")
      .then((res) => res.json())
      .then((data) => setRemainingData([...data]));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleMode = () => {
    setMode(!mode);
  };

  const handleDelete = useCallback(
    (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:6500/carts/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                const remainingDataAll = remainingData.filter(
                  (data) => data._id !== id
                );
                setRemainingData(remainingDataAll);

                Swal.fire({
                  title: "Deleted!",
                  text: "Your product has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      });
    },
    [remainingData]
  );

  const Info = {
    handleMode,
    mode,
    handleDelete,
    remainingData,
    fetchData,
  };

  return <DataContext.Provider value={Info}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
