"use client";
import SecTitle from "@/components/common/SecTitle";
import useLanguage from "@/hook/useLanguage";
import React from "react";
import { lanPortfolio } from "../language/Lan-protfolio";
import WebItems from "./compontes/WebItems";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// import Swiper core and required modules
import hrbee from "@/utils/images/product/hrbee.png";
import apartpro from "@/utils/images/product/apartpro.png";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lan = useLanguage(lanPortfolio);
  return (
    <div className="bg-gray-100 lg:mx-18">
      <SecTitle title={lan?.title} subtitle="" />
      <p className="lg:mx-0 mx-3 pb-8">{lan?.subtitle}</p>
      <section className="bg-white pt-4">
        <SecTitle title={lan?.sec1.title} subtitle={lan?.sec1.subtitle} />

        <div className="py-4">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <WebItems
                BgImage={hrbee.src}
                title="HR Bee"
                siteLink="https://hrbee.xyz"
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <WebItems
                BgImage={apartpro.src}
                title="Apart Pro"
                siteLink="https://apartpro.xyz"
              />
            </SwiperSlide>{" "}
           
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default page;
