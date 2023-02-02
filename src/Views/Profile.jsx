/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swr from "swr";
import Button from "../Components/Common/Button";
import HomeCard from "../Components/Common/HomeCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Svgs from "../Components/Svgs";
import UsePortfolio from "../hooks/UsePortfolio";
import UseUser from "../hooks/UseUser";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [HomeSection, setHomeSection] = useState("All");
  const navigate = useNavigate();
  const { getUserProfile } = UseUser();
  const { getAllPortfolios } = UsePortfolio();
  const userId = JSON.parse(localStorage.getItem("user"))?._id;
  const { data } = swr("get-profile", async () => await getUserProfile(userId));
  const { data: portfolios } = swr(
    "get-portfolios",
    async () => await getAllPortfolios(userId)
  );

  console.log(portfolios.portfolios);

  return data ? (
    <>
      <Header />
      <div>
        <div className="h-[24rem] bg-gray-100">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profile-bg.png`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <div className="absolute left-0 top-100 -translate-y-1/2">
            <div className="h-[8rem] w-[8rem] rounded-full border-[4px] border-white overflow-hidden">
              <img
                src="https://loremflickr.com/400/400"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="pt-[4rem]">
            <div className="flex items-center justify-end gap-3">
              {!userId && <Button text="Invite Me" />}
              {/* <Button text='Follow' outline /> */}
              <div
                onClick={() => {
                  setEditProfile(true);
                  navigate("/edit-profile");
                }}
                className="h-[2.5rem] w-[2.5rem] cursor-pointer transition-all hover:bg-[#248489] hover-fill-white rounded-full border border-[#7B7B7B] flex items-center justify-center"
              >
                <Svgs.Edit size="20" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[1.5rem]">
                <h1 className="font-extrabold text-[2rem] flex items-center gap-2">
                  {data.firstName} {data.lastName}
                  <span>
                    <Svgs.Verified />
                  </span>
                </h1>
                {/* <Button text='Follows You' disabled /> */}
              </div>
              <div className="flex items-center gap-4 text-[#7B7B7B]">
                <h1 className="font-semibold text-sm">@{data.username}</h1>
                <h1 className="font-semibold text-sm flex items-center gap-1">
                  <Svgs.Location_pin2 />
                  {data.location}
                </h1>
                <h1 className="font-semibold text-sm flex items-center gap-1">
                  <Svgs.Calendar />
                  Member Since Jan, 2021
                </h1>
              </div>
              <div className="flex items-center gap-4 text-[#7B7B7B]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-black">130 </span>{" "}
                  Projects
                </div>
                <Svgs.SmallDot />
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-black">130 </span> Likes
                </div>
                {/* <Svgs.SmallDot />
                                <div className='flex items-center gap-2'>
                                    <span className='font-semibold text-black'>130 </span> Followers
                                </div> */}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {data.skills.map((s, idx) => (
                  <div
                    key={idx}
                    className="rounded-full px-5 py-1 flex items-center gap-2 border text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-[#7B7B7B] text-xs">{s}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 flex gap-3 flex-col border rounded-lg">
                <h1 className="font-semibold text-xl">About</h1>
                <p className="text-sm">{data.about}</p>
                <div className="flex items-center gap-2">
                  <Svgs.Linkedin onClick={() => window.open(data.linkedin)} />
                  <Svgs.FaceBook onClick={() => window.open(data.facebook)} />
                  <Svgs.Twitter onClick={() => window.open(data.twitter)} />
                  <Svgs.Github onClick={() => window.open(data.github)} />
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="py-[2rem] pt-[5rem]">
              <div className="border w-fit mx-auto px-[2rem] py-[0.5rem] rounded-md flex items-center gap-5 lg:gap-[3rem] text-lg text-[#35424B] justify-center overflow-auto whitespace-nowrap flex-wrap">
                <p
                  className={`cursor-pointer ${
                    HomeSection === "All" && "text-[#248489]"
                  }`}
                  onClick={() => {
                    setHomeSection("All");
                  }}
                >
                  All
                </p>
                <p
                  className={`cursor-pointer ${
                    HomeSection === "Mobile" && "text-[#248489]"
                  }`}
                  onClick={() => {
                    setHomeSection("Mobile");
                  }}
                >
                  Mobile App Projects
                </p>
                <p
                  className={`cursor-pointer ${
                    HomeSection === "Website" && "text-[#248489]"
                  }`}
                  onClick={() => {
                    setHomeSection("Website");
                  }}
                >
                  Website Projects
                </p>
                <p
                  className={`cursor-pointer ${
                    HomeSection === "Wordpress" && "text-[#248489]"
                  }`}
                  onClick={() => {
                    setHomeSection("Wordpress");
                  }}
                >
                  Wordpress Projects
                </p>
              </div>
              {HomeSection === "All" && (
                <div className="relative slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
                  {portfolios?.portfolios?.map((p, idx) => (
                    <HomeCard key={idx} job={p} />
                  ))}
                </div>
              )}
              {HomeSection === "Mobile" && (
                <div className="relative slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
                  {/* <HomeCard /> */}
                </div>
              )}
              {HomeSection === "Website" && (
                <div className="relative slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
                  {/* <HomeCard /> */}
                </div>
              )}
              {HomeSection === "Wordpress" && (
                <div className="">
                  <div className="mx-auto w-fit py-[2rem]">
                    <Svgs.NotFound />
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  ) : null;
};

export default Profile;
