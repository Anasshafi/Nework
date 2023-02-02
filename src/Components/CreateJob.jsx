import React, { useState } from "react";
import UseJob from "../hooks/UseJob";
import Button from "./Common/Button";
import Dropwdown from "./Common/Dropdown";
import FormDescription from "./Common/FormDescription";
import FormInput from "./Common/FormInput";
import FormMultiOption from "./Common/FormMultiOption";
import FormNumber from "./Common/FormNumber";
import Footer from "./Footer";
import Header from "./Header";

const CreateJob = () => {
  const [job, setJob] = useState({
    author: "",
    title: "",
    description: "",
    country: "",
    city: "",
    type: "",
    salaryCurrencyCode: "",
    salaryPeriod: "",
    salaryFrom: "",
    salaryTo: "",
    positionType: "",
    category: "",
    skills: "",
    requiredExperience: "",
    link: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const { createJob } = UseJob();
  const handleClick = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const postJob = { ...job, author: user.id, salaryPeriod: "year" };
    await createJob(postJob).then((d) => console.log("Job Created", d));
  };
  return (
    <>
      <Header />
      <div className="container py-[2rem]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Create Job Post</h1>
          <p className="text-[#7B7B7B] text-sm">
            Lorem Ipsum is simply dummy text of the printing
            <br className="hidden md:block" />
            and typesetting industry.
          </p>
        </div>
        <div className="my-[2rem] flex flex-col gap-8 w-[70%] mx-auto">
          <FormInput
            name={"title"}
            value={job.title}
            onChange={handleChange}
            title="Job Title"
            placeholder="Type Job title to post"
          />
          <FormMultiOption
            onSelect={(e) => {
              setJob({ ...job, type: e });
            }}
            title={"Job Type"}
            data={["On-site", "Remote", "Hybrid"]}
          />
          <div className="grid lg:grid-cols-2 gap-4">
            <Dropwdown
              onChange={(e) => {
                setJob({ ...job, country: e.label });
              }}
              placeholder={"Select Country"}
              padding_control="0.3rem 0.5rem !important"
              titleClass="font-semibold text-base"
              title={"Country"}
              showTitle
            />
            <Dropwdown
              onChange={(e) => {
                setJob({ ...job, city: e.label });
              }}
              placeholder={"Select City"}
              padding_control="0.3rem 0.5rem !important"
              titleClass="font-semibold text-base"
              title={"City"}
              showTitle
            />
          </div>
          <FormMultiOption
            onSelect={(e) => {
              setJob({ ...job, positionType: e });
            }}
            title={"Salary Period"}
            data={["Hourly", "Weekly", "Monthly", "Yearly"]}
          />
          <FormNumber
            title="Salary From"
            name={"salaryFrom"}
            value={job.salaryFrom}
            onChange={handleChange}
            options={[
              { value: "1", label: "USD" },
              { value: "11", label: "RS" },
              { value: "2", label: "AUD" },
              { value: "3", label: "CAD" },
              { value: "4", label: "AED" },
            ]}
            placeholder="Enter Price"
          />

          <FormNumber
            name={"salaryTo"}
            value={job.salaryTo}
            onChange={handleChange}
            title="Salery To"
            options={[
              { value: "1", label: "USD" },
              { value: "11", label: "RS" },
              { value: "2", label: "AUD" },
              { value: "3", label: "CAD" },
              { value: "4", label: "AED" },
            ]}
            placeholder="Enter Price"
          />

          <FormMultiOption
            onSelect={(e) => {
              setJob({ ...job, requiredExperience: e.label });
            }}
            title={"Position Type"}
            data={["Contract", "Full-time", "Part-time"]}
          />
          <FormDescription
            name={"description"}
            value={job.description}
            onChange={handleChange}
            title="Job Description"
          />
          <Dropwdown
            options={[
              { value: "1", label: "Web Development" },
              { value: "2", label: "App Development" },
              { value: "3", label: "Wordpress" },
            ]}
            placeholder={"Select Job Category"}
            padding_control="0.3rem 0.5rem !important"
            titleClass="font-semibold text-base"
            title={"Job category"}
            showTitle
            onChange={(e) => {
              setJob({ ...job, category: e.label });
            }}
          />
          <Dropwdown
            onChange={(jobs) => {
              setJob({ ...job, skills: jobs.map((j) => j.label) });
            }}
            options={[
              { value: "1", label: "ReactJs" },
              { value: "2", label: "NodeJs" },
              { value: "3", label: "NextJs" },
              { value: "4", label: "Flutter" },
              { value: "5", label: "Android" },
            ]}
            isMulti
            placeholder={"Select Skills"}
            padding_control="0.3rem 0.5rem !important"
            titleClass="font-semibold text-base"
            title={"Skills"}
            showTitle
          />
          <Dropwdown
            onChange={(e) => {
              setJob({ ...job, requiredExperience: e.label });
            }}
            options={[
              { value: "1", label: "0-1 Year" },
              { value: "2", label: "2-3 Years" },
              { value: "3", label: "3-5 Years" },
              { value: "4", label: "5-7 Years" },
              { value: "5", label: "10+ Years" },
            ]}
            placeholder={"Select Experience"}
            padding_control="0.3rem 0.5rem !important"
            titleClass="font-semibold text-base"
            title={"Required Experience"}
            showTitle
          />
          <Button
            onClick={handleClick}
            className="py-3 rounded-lg font-semibold"
            text="Create Job"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateJob;
