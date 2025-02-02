import React from 'react';

interface SpanProps {
  index: number; // You can name this property based on its purpose
}

const Itag: React.FC<SpanProps> = ({ index }) => {
  return (
    <span style={{ '--i': index } as React.CSSProperties}></span>
  );
};

export default Itag;