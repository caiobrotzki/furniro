import React from "react";

interface ImgPropProps {
  imagemSrc: string;
  altText?: string;
  className?: string;
}

const ImagemProp: React.FC<ImgPropProps> = ({
  imagemSrc,
  altText = "Imagem",
  className,
}) => {
  return <img src={imagemSrc} alt={altText} className={className} />;
};

export default ImagemProp;
