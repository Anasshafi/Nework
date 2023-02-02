/* eslint-disable array-callback-return */
import React, { useMemo, useState } from "react";
import swr from "swr";
import UseJob from "../hooks/UseJob";
import Button from "./Common/Button";
import Dropwdown from "./Common/Dropdown";
import HomeCard from "./Common/HomeCard";
import Footer from "./Footer";
import Header from "./Header";
import Svgs from "./Svgs";
const Discover = () => {
  const [HomeSection, setHomeSection] = useState("All");
  const { getJobs } = UseJob();
  const { data } = swr("get-jobs", async () => await getJobs());
  const jobPostings = data?.jobPostings;
  const [search, setSearch] = useState("");

  const renderJobCard = useMemo(() => {
    const d = jobPostings?.filter((job) => {
      if (search === "") {
        return job;
      } else if (
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase())
      ) {
        return job;
      }
    });
    return d?.map((job) => {
      return <HomeCard key={job.id} job={job} />;
    });
  }, [jobPostings, search]);

  return (
    <>
      <Header />
      <div className="container pt-[2rem] flex flex-col gap-5">
        <div className="text-center p-3 h-[24rem] lg:h-[20rem] rounded-lg bg-cover bg-discover text-white w-full flex justify-center flex-col gap-4">
          <h1 className="font-extrabold text-[1.8rem] lg:text-[2.2rem]">
            Explore World’s Leading Web & <br className="md:block hidden" /> App
            Portfolio
          </h1>
          <div className="pt-[1rem] w-[90%] lg:w-[80%] mx-auto">
            <div className="px-4 py-2 rounded-md bg-white flex items-center gap-4 lg:flex-row flex-col">
              <div className="flex-1 flex items-center gap-3">
                <div>
                  <div className="flex items-center justify-center h-[2.8rem] w-[2.8rem] bg-[#248489] rounded-full">
                    <Svgs.Search />
                  </div>
                </div>
                <div className="w-full">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    className="text-[#35424B] outline-none p-3 rounded-md border-transparent border focus:border-gray-200 w-full"
                    placeholder="Search Portfolio by tool, category & Title"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Dropwdown
                  options={[
                    { value: "1", label: "Web Development" },
                    { value: "2", label: "App Development" },
                    { value: "3", label: "Wordpress" },
                  ]}
                  placeholder={"By Category"}
                  backgroundColor="#F2F2F2"
                />
                <Dropwdown
                  placeholder={"By Location"}
                  backgroundColor="#F2F2F2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container py-[2rem] pt-[5rem]">
          <div className="flex items-center flex-wrap text-center gap-6 border w-fit mx-auto px-4 py-3 text-lg text-[#A6A3A3] rounded-lg justify-center overflow-auto whitespace-nowrap">
            <p
              className={`cursor-pointer ${
                HomeSection === "All" && "text-black"
              }`}
              onClick={() => {
                setHomeSection("All");
              }}
            >
              All
            </p>
            <p
              className={`cursor-pointer ${
                HomeSection === "Mobile" && "text-black"
              }`}
              onClick={() => {
                setHomeSection("Mobile");
              }}
            >
              Mobile App Projects
            </p>
            <p
              className={`cursor-pointer ${
                HomeSection === "Website" && "text-black"
              }`}
              onClick={() => {
                setHomeSection("Website");
              }}
            >
              Website Projects
            </p>
            <p
              className={`cursor-pointer ${
                HomeSection === "Wordpress" && "text-black"
              }`}
              onClick={() => {
                setHomeSection("Wordpress");
              }}
            >
              Wordpress Projects
            </p>
          </div>
          {HomeSection === "All" && (
            <div className="slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
              {renderJobCard}
            </div>
          )}
          {HomeSection === "Mobile" && (
            <div className="slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
              {renderJobCard}
            </div>
          )}
          {HomeSection === "Website" && (
            <div className="slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
              {renderJobCard}
            </div>
          )}
          {HomeSection === "Wordpress" && (
            <div className="slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]">
              {renderJobCard}
            </div>
          )}
          <div className="flex items-center justify-center">
            <Button text="Explore More" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Discover;
