import React, { useState, useEffect } from "react";
import "../styles/global.css";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array(6)
    .fill(null)
    .map((_, i) => `./photos/blog-placeholder-${i + 1}.jpg`);

  // Correctly handle clicks within useEffect to ensure code runs on the client side
  useEffect(() => {
    const imgs = document.querySelectorAll(".photo-gallery img");
    imgs.forEach((img) => {
      img.addEventListener("click", function () {
        // Toggle the 'selected' class or handle the logic as needed
        this.classList.toggle("selected");
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      imgs.forEach((img) => {
        img.removeEventListener("click", function () {
          this.classList.toggle("selected");
        });
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="photo-gallery">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Gallery Image ${i + 1}`}
          onClick={() => setSelectedImage(src)}
          className={selectedImage === src ? "selected" : ""}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
