import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import swr from "swr";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { useNavigate } from "react-router-dom";
import Button from "../Components/Common/Button";
import CircleIcon from "../Components/Common/CircleIcon";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Svgs from "../Components/Svgs";
import UseJob from "../hooks/UseJob";
import UsePortfolio from "../hooks/UsePortfolio";

const Detail = (props) => {
  let { id } = useParams();
  const type = window.location.search.substring(1).split("=")[1];
  //   const type = query.get("type");
  const { getPortfolio } = UsePortfolio();
  console.log("type = ", type);
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const navigate = useNavigate();
  const { getJob } = UseJob();
  const { data } = swr("get-job-" + id, async () => {
    if (type === "portfolio") {
      return await getPortfolio(id);
    } else {
      return await getJob(id);
    }
  });
  console.log("data = ", data);
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
                  src={
                    data?.attachments?.length > 0
                      ? "http://127.0.0.1:3300" + data?.attachments[0]
                      : "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  }
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
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center justify-between gap-[2rem]">
              <h1 className="font-semibold text-3xl">
                {data?.title || "Loading..."}
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
                {data?.description || "Loading..."}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-black text-xl">Technologies</h1>
              <div className="flex items-center gap-2">
                {data &&
                  data?.skills &&
                  data?.skills.map((tech, index) => (
                    <Button
                      text={tech}
                      disabled
                      className="rounded-full"
                      key={index}
                    />
                  ))}
                {/* <Button text="Flutter" disabled className="rounded-full" />
                <Button text="ReactJs" disabled className="rounded-full" />
                <Button text="NodeJs" disabled className="rounded-full" /> */}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ marginTop: "50px" }}
          className="bg-[#35424b] !h-fit !py-[1.2rem] rounded-md bg-started after:w-[24rem] after:h-[20rem]"
        >
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
