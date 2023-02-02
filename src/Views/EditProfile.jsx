/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Common/Button";
import Dropwdown from "../Components/Common/Dropdown";
import FormDescription from "../Components/Common/FormDescription";
import FormInput from "../Components/Common/FormInput";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Svgs from "../Components/Svgs";
import UseUser from "../hooks/UseUser";

const EditProfile = () => {
  const navigate = useNavigate();
  const [editTypeTech, setEditTypeTech] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    location: "",
    placeholder: "",
    about: "",
    skills: [],
    github: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    other: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const { updateUserProfile } = UseUser();
  const handleSaveProfile = async () => {
    await updateUserProfile(profile).then(() => navigate("/profile"));
  };

  return (
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
              <div className="absolute top-full right-0 -translate-x-0 -translate-y-full h-[3rem] w-[3rem] flex items-center justify-center rounded-full border-[4px] border-white bg-[#248489]">
                <Svgs.Camera />
              </div>
            </div>
          </div>
          <div className="pt-[3rem]">
            <div className="flex items-center justify-end gap-3">
              <Button
                text="Cancel"
                disabled
                onClick={() => {
                  navigate("/profile");
                }}
              />
              <Button
                text="Save"
                onClick={async () => await handleSaveProfile()}
              />
            </div>
          </div>

          <div className="flex flex-col gap-7 pt-[2rem]">
            <div className="px-4 py-3 border rounded-lg flex flex-col gap-4">
              <div className="flex flex-col gap-2 pb-[1rem]">
                <h1 className="text-xl">Basic Information</h1>
                <p className="text-sm text-[#7B7B7B]">
                  Edit your basic information
                </p>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                <FormInput
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  title={"First Name"}
                  placeholder={"Enter First Name"}
                />
                <FormInput
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  title={"Last Name"}
                  placeholder={"Enter Full Name"}
                />
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                <FormInput
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  title={"Username"}
                  placeholder={"Enter Username"}
                />
                <FormInput
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  title={"Location"}
                  placeholder={"Enter Location"}
                />
              </div>
              <FormInput
                name="placeholder"
                value={profile.placeholder}
                onChange={handleChange}
                title={"Placeholder Text"}
                placeholder={"Enter Placeholder Text"}
              />
              <FormDescription
                name="about"
                value={profile.about}
                onChange={handleChange}
                placeholder={"Add About"}
                title={"About"}
              />
            </div>
            <div className="px-4 py-3 border rounded-lg flex flex-col gap-4">
              <div className="flex justify-between items-center pb-[1rem]">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl">Skills & Technologies</h1>
                  <p className="text-sm text-[#7B7B7B]">
                    Edit and Add your skills and technologies
                  </p>
                </div>
                <div className="">
                  <Button
                    onClick={() => {
                      setEditTypeTech(!editTypeTech);
                    }}
                    text={editTypeTech ? "Save" : "Add Skill"}
                  />
                </div>
              </div>
              {profile.skills.length > 0 &&
                profile.skills.map((skill) => (
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-1">
                          <h1 className="text-lg">{skill}</h1>
                        </div>
                      </div>
                      <h1
                        onClick={() => {
                          setProfile({
                            ...profile,
                            skills: profile.skills.filter(
                              (item) => item !== skill
                            ),
                          });
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        x
                      </h1>
                    </div>
                  </div>
                ))}
              {editTypeTech && (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-[1rem]">
                  <Dropwdown
                    onChange={(e) => {
                      setProfile({
                        ...profile,
                        skills: [...profile.skills, e.label],
                      });
                    }}
                    options={[
                      { value: "1", label: "ReactJs" },
                      { value: "2", label: "NodeJs" },
                      { value: "4", label: "NextJs" },
                      { value: "5", label: "React Native" },
                      { value: "6", label: "Flutter" },
                      { value: "7", label: "Android" },
                      { value: "8", label: "Swift" },
                    ]}
                    showTitle
                    title={"Skill & Technology"}
                    placeholder="Select Skill & Technology"
                  />
                </div>
              )}
            </div>

            <div className="px-4 py-3 border rounded-lg flex flex-col gap-4 mb-[3rem]">
              <div className="flex flex-col gap-2 pb-[1rem]">
                <h1 className="text-xl">Social Media</h1>
                <p className="text-sm text-[#7B7B7B]">
                  Edit and connect your social media accounts with Nework
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <FormInput
                  name="github"
                  value={profile.github}
                  onChange={handleChange}
                  title={"Github"}
                  placeholder={"Enter Github URL"}
                />
                <FormInput
                  name="linkedin"
                  value={profile.linkedin}
                  onChange={handleChange}
                  title={"Linked In"}
                  placeholder={"Enter Linked In URL"}
                />
                <FormInput
                  name="facebook"
                  value={profile.facebook}
                  onChange={handleChange}
                  title={"Facebook"}
                  placeholder={"Enter Facebook URL"}
                />
                <FormInput
                  name="twitter"
                  value={profile.twitter}
                  onChange={handleChange}
                  title={"Twitter"}
                  placeholder={"Enter Twitter URL"}
                />
                <FormInput
                  name="instagram"
                  value={profile.instagram}
                  onChange={handleChange}
                  title={"Instagram"}
                  placeholder={"Enter Instagram URL"}
                />
                <FormInput
                  name="other"
                  value={profile.other}
                  onChange={handleChange}
                  title={"Other"}
                  placeholder={"http://"}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default EditProfile;
