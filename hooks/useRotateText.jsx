import React, { useEffect, useState } from "react";

const useRotateText = (length) => {
  let i = 1;
  const [id, setId] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setId(i);
      i = (i + 1) % length;
    }, 2000);
    return () => clearInterval(time);
  }, []);
  return id;
};

export default useRotateText;
