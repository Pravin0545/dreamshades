"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

interface CarouselProps {
  images: { src: string; alt: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper { width: 100%; padding-bottom: 40px; }
    .swiper-slide { display:flex; align-items:center; justify-content:center; }
    /* enforce a consistent framed area for every image */
    .slide-frame {
      width: clamp(220px, 40vw, 560px);
      aspect-ratio: 4 / 5; /* portrait-friendly. change to 16/9 or 3/2 if you prefer landscape */
      border-radius: 0.75rem;
      overflow: hidden;
      display:block;
      box-shadow: 0 6px 18px rgba(0,0,0,0.12);
      background: var(--muted);
    }
    /* make Next/Image cover the frame */
    .slide-frame > img, .slide-frame .next-image {
      width:100% !important;
      height:100% !important;
      object-fit: cover !important;
      display:block;
    }
    /* remove unwanted Swiper shadows produced by 3D effect */
    .swiper-3d .swiper-slide-shadow-left,
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }

    /* simple styling for nav buttons so they are present in DOM and clickable */
    .swiper-button-next, .swiper-button-prev {
      color: var(--primary);
    }
  `;

  return (
    <section>
      <style>{css}</style>

      <div className="mx-auto w-full max-w-5xl rounded-[20px] border border-[color:var(--primary)] p-3 bg-[color:var(--background)] shadow-sm">
        <div className="relative mx-auto flex w-full flex-col rounded-[16px] bg-[color:var(--muted)] p-4">
          <div className="flex items-start justify-between gap-4 pb-4">
            <div className="flex gap-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)]">
                  Awards and Achievements
                </h3>
                <p className="text-[color:var(--muted-foreground)]">
                  Over 10+ years of experience in Industry and Training students
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <Swiper
              spaceBetween={24}
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={images.length > 1}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.1 },
                900: { slidesPerView: 1.4 },
                1200: { slidesPerView: 1.6 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.2,
                slideShadows: false,
              }}
              pagination={showPagination}
              navigation={
                showNavigation
                  ? {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }
                  : undefined
              }
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <figure className="slide-frame">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      // keep width/height as placeholders; object-fit will cover the frame
                      width={800}
                      height={1000}
                      className="next-image"
                      loading="lazy"
                      quality={80}
                    />
                  </figure>
                </SwiperSlide>
              ))}

              {/* navigation controls rendered so Swiper can bind to them */}
              {showNavigation && (
                <>
                  <div
                    className="swiper-button-prev"
                    aria-label="Previous slide"
                  />
                  <div className="swiper-button-next" aria-label="Next slide" />
                </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
