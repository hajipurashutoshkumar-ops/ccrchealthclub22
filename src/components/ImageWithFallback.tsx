import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

// Utility to resolve im.ge web view URLs into direct CDN image URLs
export function getDirectImageUrl(url: string): string {
  if (!url) return '';
  if (url.includes('QMZe7z8')) {
    return 'https://i.im.ge/QMZe7z8/symbol.jpg-t600.webp';
  }
  if (url.includes('QMZeIOh')) {
    return 'https://i.im.ge/QMZeIOh/WhatsApp_Image_2026-06-24_at_10.20.59_AM.jpg';
  }
  return url;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  ...props
}) => {
  const initialSrc = getDirectImageUrl(src);
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(getDirectImageUrl(src));
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      const resolvedFallback = fallbackSrc ? getDirectImageUrl(fallbackSrc) : '';
      if (resolvedFallback) {
        setImgSrc(resolvedFallback);
      } else {
        // High quality fallback medical / campus stock image
        setImgSrc('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80');
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

