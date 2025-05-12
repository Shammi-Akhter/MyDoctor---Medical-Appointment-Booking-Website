

import React, { useEffect, useState } from "react";


const GlobalLoader = ({ show }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;
    if (show) {
      setVisible(true);
      timeout = setTimeout(() => {
        setVisible(false); 
      }, 200);
    } else {
      
      timeout = setTimeout(() => {
        setVisible(false);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [show]);

  if (!visible) return null;

  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default GlobalLoader;
