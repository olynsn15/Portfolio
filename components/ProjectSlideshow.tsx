"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectSlideshowProps {
  images: string[];
  title: string;
}

export default function ProjectSlideshow({
  images,
  title,
}: ProjectSlideshowProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-slideshow">
      <div className="project-slideshow-window">
        <div
          className="project-slideshow-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="project-slide" key={`${image}-${index}`}>
              <Image
                src={image}
                alt={`${title} preview ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 86vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="project-slideshow-controls">
        <span>
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>

        <div className="project-slideshow-arrows">
          <button onClick={previous} aria-label="Previous image">
            ←
          </button>

          <button onClick={next} aria-label="Next image">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
