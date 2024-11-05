'use client';

import React from 'react';

interface FixedBottomRightWrapperProps {
  children: React.ReactNode;
}

const FixedBottomRightWrapper: React.FC<FixedBottomRightWrapperProps> = ({
  children,
}) => {
  return (
    <div className='fixed bottom-8 right-8 flex flex-col items-end space-y-2 z-50'>
      {children}
    </div>
  );
};

export default FixedBottomRightWrapper;
