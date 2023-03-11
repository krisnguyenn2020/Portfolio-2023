import React from 'react';
import useLinkNewTab from '../hooks/useLinkNewTab';

const Blog = () => {
  // them cai ten khac cho contentRef la demoRef
  const {contentRef: demoRef} = useLinkNewTab();
  return (
    <div ref={demoRef}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima, itaque provident consequatur explicabo officia, at laborum iure optio reprehenderit labore possimus animi incidunt, sit et maxime aut perferendis. Culpa.</p>
    </div>
  );
};

export default Blog;<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima, itaque provident consequatur explicabo officia, at laborum iure optio reprehenderit labore possimus animi incidunt, sit et maxime aut perferendis. Culpa.</p>