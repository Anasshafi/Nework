import React, { useState } from "react";
import useMedia from "../../hooks/UseMedia";
import Svgs from "../Svgs";

const FormUploadMedia = ({ onUploaded, ...props }) => {
  const { upload } = useMedia();
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");
  const handleUpload = async (e) => {
    if (e.target.files?.length === 0) return;
    const f = e.target.files[0];
    try {
      console.log("File");
      console.log(f);
      setUploading(true);
      const url = await upload(f);
      setUrl(url);
      onUploaded(url);
    } catch (er) {
      console.warn(er);
      alert("Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold">{props.title}</h1>
      <input
        id="upload-input"
        type="file"
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      <div className="rounded-lg text-center border-dashed border-[2px] p-[2rem] flex justify-center items-center flex-col gap-2">
        {url ? (
          <img
            src={"http://localhost:3300" + url}
            style={{ height: "200px", width: "auto" }}
          />
        ) : (
          <>
            <Svgs.Images />
            {/* <h1 className='text-[#7B7B7B] font-semibold text-lg'>Upload maximum 10 images</h1> */}
            {uploading ? (
              <label className="text-[#A1A1A1] text-sm cursor-pointer">
                <span className="text-[#248489] underline">Uploading...</span>
              </label>
            ) : (
              <label
                htmlFor="upload-input"
                className="text-[#A1A1A1] text-sm cursor-pointer"
              >
                <span className="text-[#248489] underline">
                  Browse from computer
                </span>
              </label>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FormUploadMedia;
