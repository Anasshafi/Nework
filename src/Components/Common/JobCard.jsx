import React from "react";
import { useNavigate } from "react-router-dom";
import Svgs from "../Svgs";
import Button from "./Button";
import ProfileStack from "./ProfileStack";

const JobCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="border p-3 rounded-md shadow-md flex flex-col gap-4 cursor-pointer"
      onClick={() => {
        navigate("/job-detail");
      }}
    >
      <div className="flex items-center gap-3 cursor-pointer">
        <div>
          <img
            src="https://loremflickr.com/400/400"
            className="h-[4.5rem] w-[5rem] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="">{props.title || "Anas Shafi"}</h1>
          <p className="text-xs text-[#7B7B7B] pointer">
            {props.desc || "Senior Android Developer"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-1">
          <Svgs.Location_pin2 />
          <p className="text-xs text-[#7B7B7B]">Lahore, Pakistan</p>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {props.projects ? (
          props.projects.map((p, idx) => (
            <Button
              text={p}
              key={idx}
              className="border-[#579FAE] border font-semibold !py-1 text-sm !px-4 text-[#579FAE]"
              bg="bg-[#DBEEF2]"
            />
          ))
        ) : (
          <>
            <Button
              text="25 Projects"
              className="border-[#579FAE] border font-semibold !py-1 text-sm !px-4 text-[#579FAE]"
              bg="bg-[#DBEEF2]"
            />
            <Button
              text="1.5k Likes"
              className="border-[#579FAE] border font-semibold !py-1 text-sm !px-4 text-[#579FAE]"
              bg="bg-[#DBEEF2]"
            />
          </>
        )}
      </div>
      <p className="text-sm text-[#7B7B7B]">{props.description}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {props.candidate ? (
          <>
            <Button
              text={
                <div className="flex items-center gap-2">
                  <Svgs.Flutter size="12" />
                  <p className="text-[#7B7B7B] text-xs">Flutter</p>
                  <div className="text-xs flex items-center gap-1">
                    {/* <Svgs.LvlBasic /> */}
                    <p className="font-semibold text-black text-[0.6rem]">
                      Basic
                    </p>
                    <p className="text-[#8E8E8E]">Lvl</p>
                  </div>
                </div>
              }
              className="!py-1 text-sm !px-2 rounded-full border-gray-200"
              bg="bg-white"
            />
            <Button
              text={
                <div className="flex items-center gap-2">
                  <Svgs.Flutter size="12" />
                  <p className="text-[#7B7B7B] text-xs">Flutter</p>
                  <div className="text-xs flex items-center gap-1">
                    {/* <Svgs.LvlInter /> */}
                    <p className="font-semibold text-black text-[0.6rem]">
                      Basic
                    </p>
                    <p className="text-[#8E8E8E]">Lvl</p>
                  </div>
                </div>
              }
              className="!py-1 text-sm !px-2 rounded-full border-gray-200"
              bg="bg-white"
            />
            <Button
              text={
                <div className="flex items-center gap-2">
                  <Svgs.Flutter size="12" />
                  <p className="text-[#7B7B7B] text-xs">Flutter</p>
                  <div className="text-xs flex items-center gap-1">
                    {/* <Svgs.LvlExpert /> */}
                    <p className="font-semibold text-black text-[0.6rem]">
                      Basic
                    </p>
                    <p className="text-[#8E8E8E]">Lvl</p>
                  </div>
                </div>
              }
              className="!py-1 text-sm !px-2 rounded-full border-gray-200"
              bg="bg-white"
            />
          </>
        ) : (
          <>
            <Button text="Android" className="!py-1 text-sm !px-4" disabled />
          </>
        )}
      </div>
      {props.candidate && (
        <div className="flex items-center gap-2">
          <Button text="View Profile" outline className="w-full" />
          <Button text="Send Invite" className="w-full" />
        </div>
      )}

      {props.applied && (
        <Button
          text={
            <>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Svgs.Attachment />
                  <h1>My Resume.pdf</h1>
                </div>
                <Svgs.Download />
              </div>
            </>
          }
          className="border-none !text-[#248489] !bg-[#F2F8FA]"
        />
      )}

      {props.posted && (
        <div className="flex items-center gap-4 justify-between">
          <ProfileStack />
          <div className="flex items-center gap-2">
            <div className="h-[2rem] cursor-pointer w-[2rem] rounded-full bg-[#F9F9F9] border flex items-center justify-center">
              <Svgs.Delete />
            </div>
            <div className="h-[2rem] cursor-pointer w-[2rem] rounded-full bg-[#F9F9F9] border flex items-center justify-center">
              <Svgs.Edit />
            </div>
          </div>
        </div>
      )}

      {props.invites && (
        <div className="flex items-center gap-2">
          <Button
            text="Accept"
            outline
            className="w-full border-[#0F9675] !text-[#0F9675] !bg-[#CDEEF0]"
          />
          <Button
            text="Reject"
            outline
            className="w-full !text-[#CE1818] border-[#CE1818] !bg-[#FFEEEE]"
          />
        </div>
      )}

      {!props.applied &&
        !props.candidate &&
        !props.posted &&
        !props.invites && <Button text="Apply For Job" className="w-full" />}
    </div>
  );
};

export default JobCard;
