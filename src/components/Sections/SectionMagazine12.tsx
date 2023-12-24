// SectionMagazine12.tsx

import React, { FC } from "react";
import Card2, { TPostCard } from "@/components/Card2/Card2";
import Card20 from "@/components/Card20";
import Empty from "../Empty";

export interface SectionMagazine12Props {
  posts: TPostCard[];
  className?: string;
}

const SectionMagazine12: FC<SectionMagazine12Props> = ({ posts, className = "" }) => {
  return (
    <section id="roto" className={`nc-SectionMagazine12 ${className}`}>
      <div id="rotoTransition" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
        <div className="carousel-inner">
          {posts.map((item, index) => (
            <div key={item.databaseId} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="slide">
                {/* Use your image URL dynamically from the post data */}
                <img src={item.featuredImage?.sourceUrl || ""} alt={`slide-${index + 1}`} className="mainImage" />
                {/* Rest of the slider component remains the same */}
                <div className="roundOuter"><img src={item.featuredImage?.sourceUrl || ""} alt={`slide-${index + 1}`} /></div>
                <div className="roundInner"><img src={item.featuredImage?.sourceUrl || ""} alt={`slide-${index + 1}`} /></div>
                <div className="slideText">
                  <h1 className="animate__animated animate__fadeInUp">Highlands</h1>
                  <p className="animate__animated animate__fadeInUp">Scotland</p>
                  <div className="buttonNav animate__animated animate__fadeInDown">
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev"><i className="fa-solid fa-arrow-left-long"></i></button>
                    <span></span>
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next"><i className="fa-solid fa-arrow-right-long"></i></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!posts.length ? (
        <Empty />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-7">
          {posts[0] && <Card20 size="large" post={posts[0]} />}
          <div className="grid gap-6 2xl:gap-7">
            {posts
              .filter((_, i) => i < 4 && i > 0)
              .map((item) => (
                <Card20 key={item.databaseId} post={item} />
              ))}
          </div>
          {posts
            .filter((_, i) => i >= 4)
            .map((item) => (
              <Card20 key={item.databaseId} post={item} />
            ))}
        </div>
      )}
    </section>
  );
};

export default SectionMagazine12;
