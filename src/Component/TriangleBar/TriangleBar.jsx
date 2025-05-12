import React from 'react';

const TriangleBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <path
        d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
        stroke="none"
        fill={fill}
      />
    );
  };

export default TriangleBar;