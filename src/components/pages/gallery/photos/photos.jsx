import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import './photos.css';

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { regex: "/gallery\/amsterdam-2023/" }
          extension: { regex: "/(jpg|jpeg|png|webp)/" }
        }
        sort: { name: ASC }
      ) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 400, height: 300, placeholder: BLURRED)
            full: gatsbyImageData(width: 1920, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes;

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  if (images.length === 0) {
    return (
      <section className="safe-paddings py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary-1 mb-4">Amsterdam 2023</h2>
          <p className="text-xl text-gray-600">
            No photos available yet. Photos will appear here once they are added to the gallery.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="safe-paddings py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary-1 mb-10 text-center">Amsterdam 2023</h2>
          <div className="photo-grid">
            {images.map((image) => {
              const thumbnailImage = getImage(image.childImageSharp);
              return (
                <button
                  key={image.id}
                  className="photo-item"
                  onClick={() => openLightbox(image)}
                  type="button"
                  aria-label={`View ${image.name}`}
                >
                  <GatsbyImage
                    image={thumbnailImage}
                    alt={image.name}
                    className="photo-thumbnail"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox} role="button" tabIndex={0}>
          <button className="lightbox-close" onClick={closeLightbox} type="button">
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <GatsbyImage
              image={getImage(selectedImage.childImageSharp.full)}
              alt={selectedImage.name}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Photos;
