import React from "react";
import ContentLoader from "react-content-loader";

interface SkeletonProductProps {}

const SkeletonProduct: React.FC<SkeletonProductProps> = (props) => {
  return (
    <ContentLoader 
    speed={1}
    width={1200}
    height={500}
    viewBox="0 0 1200 500"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="291" height="500" />
    <rect x="320" y="0" rx="20" ry="20" width="291" height="500" />
    <rect x="640" y="0" rx="20" ry="20" width="291" height="500" />
  </ContentLoader>
  );
};
export default SkeletonProduct;
