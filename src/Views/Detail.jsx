import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { useNavigate } from "react-router-dom";
import Button from "../Components/Common/Button";
import CircleIcon from "../Components/Common/CircleIcon";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Svgs from "../Components/Svgs";

const Detail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="pt-[2rem] my-[2rem] container flex flex-col gap-[1.5rem]">
        <div className="grid md:grid-cols-2 gap-[2rem] container">
          <div className="max-w-[80vw]">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="detail-swiper"
            >
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
              <div className="absolute top-3 left-3 z-10">
                <CircleIcon>
                  <Svgs.Github size="25" />
                </CircleIcon>
              </div>
              <div className="absolute bottom-3 right-3 z-10">
                {/* <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                                    <h1 className="font-semibold text-[#35424B] text-sm">Tools Used:</h1>
                                    <Svgs.Github size='25' />
                                    <Svgs.Flutter size='25' />
                                </div> */}
              </div>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={"auto"}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="detail-swiper-thumb"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-[2rem]">
              <h1 className="font-semibold text-3xl">
                Pet Care App in Flutter
              </h1>
              <div className="flex items-center gap-3">
                <CircleIcon>
                  <Svgs.Like />
                </CircleIcon>
                <CircleIcon>
                  <Svgs.Share />
                </CircleIcon>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Svgs.Like size="25" fill="#7B7B7B" />
                <p className="text-[#7B7B7B]">1.5 k</p>
              </div>
              {/* <div className="flex items-center gap-2">
                                <Svgs.Eye size='25' />
                                <p className="text-[#7B7B7B]">1.5 k</p>
                            </div> */}
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-black text-xl">Description</h1>
              <p className="text-[#5D5D5D] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                quam velit vero, nobis laboriosam nostrum ex id magnam non
                veniam cumque molestias suscipit vitae tenetur, aspernatur rem,
                hic eos. Vel possimus, placeat, accusantium suscipit atque
                adipisci modi voluptatem explicabo, odio soluta accusamus.
                Molestiae, veritatis ipsa. Excepturi voluptatum laboriosam odio
                aliquid quaerat doloremque quae aperiam vel. Saepe dignissimos
                deleniti sint ipsum consectetur officia reprehenderit ullam
                nobis soluta maxime, debitis eveniet minus odit unde aperiam ad
                dolorum earum ducimus velit quia molestiae alias. Debitis
                inventore consectetur quaerat recusandae fugiat enim dolor?
                Vitae tempora, tempore iure laudantium repudiandae vel quis
                assumenda hic pariatur! Illum sint dolorem praesentium vero
                voluptatibus eos ex fugiat eaque molestiae vitae?
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-black text-xl">Technologies</h1>
              <div className="flex items-center gap-2">
                <Button text="Flutter" disabled className="rounded-full" />
                <Button text="ReactJs" disabled className="rounded-full" />
                <Button text="NodeJs" disabled className="rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#35424b] !h-fit !py-[1.2rem] rounded-md bg-started after:w-[24rem] after:h-[20rem]">
          <div className="flex gap-6 justify-between h-full relative z-[2]">
            <div className="flex items-center gap-4 pl-[3rem]">
              <div>
                <img
                  src="https://loremflickr.com/400/400"
                  className="h-[4rem] w-[4rem] object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <h1 className="text-white text-xl">anas Shafi</h1>
                <p className="text-[#C3C2C2] text-sm">Member since Jan 2022</p>
              </div>
            </div>
            <div className="w-[18rem] flex justify-center items-center">
              <Button
                onClick={() => navigate("/profile")}
                text={
                  <div className="flex items-center gap-2">
                    <h2 className="text-base">View Profile</h2>
                  </div>
                }
                bg="bg-white"
                className="text-black hover:!text-black hover:!bg-white"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold">Comments</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Leave Your Comment</h1>
            <input
              type="text"
              className="bg-[#F4F4F4] border px-5 py-3 text-black/40 rounded-md outline-none text-sm"
              placeholder="Enter Comment"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="h-[4rem] w-[4rem] flex items-center justify-center rounded-full cursor-pointer overflow-hidden">
                <img
                  src="https://loremflickr.com/400/400"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 class="font-semibold">Irtaza Zaidi</h1>
                <p class="text-[#181818] text-sm">
                  Co-Founder & Senior Recruitment consultant | IT recruiters
                </p>
                <p class="text-[#a9a9a9] text-sm">5 months ago</p>
              </div>
            </div>
            <p className="text-[#181818]">
              I'm more experienced in eCommerce web projects and mobile banking
              apps, but also like to work with creative projects.
            </p>
            <div className="flex items-center gap-3 text-[#181818] text-sm">
              <p className="cursor-pointer">Like</p>
              {/* <p className="cursor-pointer">Reply</p> */}
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="h-[4rem] w-[4rem] flex items-center justify-center rounded-full cursor-pointer overflow-hidden">
                <img
                  src="https://loremflickr.com/400/400"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 class="font-semibold">Irtaza Zaidi</h1>
                <p class="text-[#181818] text-sm">
                  Co-Founder & Senior Recruitment consultant | IT recruiters
                </p>
                <p class="text-[#a9a9a9] text-sm">5 months ago</p>
              </div>
            </div>
            <p className="text-[#181818]">
              I'm more experienced in eCommerce web projects and mobile banking
              apps, but also like to work with creative projects.
            </p>
            <div className="flex items-center gap-3 text-[#181818] text-sm">
              <p className="cursor-pointer">Like</p>
              {/* <p className="cursor-pointer">Reply</p> */}
            </div>
          </div>
          <div className="text-center my-[1rem]">
            <p className="underline text-[#35424B] cursor-pointer">View More</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">More by Irtaza Zaidi</h1>
          <div className="relative slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
            {/* <HomeCard /> */}
            {/* <HomeCard /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
