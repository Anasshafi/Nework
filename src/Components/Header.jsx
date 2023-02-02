/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Svgs from "./Svgs";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [dropdownUpload, setDropdownUpload] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [user, setUser] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <div className="w-full sticky top-0 bg-white z-[100] shadow-md">
      <div className="container py-[1.5rem]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[2rem]">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              className="lg:w-auto w-[70%] cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
            />
            <div
              className={`lg:flex hidden items-center gap-4 text-sm nav-bar-menu ${
                mobileMenu ? "nav-toggle" : ""
              }`}
            >
              <p
                className={`${splitLocation[1] === "discover" && "active"}`}
                onClick={() => {
                  navigate("/discover");
                }}
              >
                Discover
              </p>
              <p
                className={`${splitLocation[1] === "find-work" && "active"}`}
                onClick={() => {
                  navigate("/find-work");
                }}
              >
                Find Work
              </p>
              <p
                className={`${
                  splitLocation[1] === "hire-developers" && "active"
                }`}
                onClick={() => {
                  navigate("/hire-developers");
                }}
              >
                Hire Developers
              </p>
              <p
                className={`${splitLocation[1] === "courses" && "active"}`}
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Courses
              </p>
              <p
                className={`${splitLocation[1] === "community" && "active"}`}
                onClick={() => {
                  navigate("/community");
                }}
              >
                Community
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 lg:w-auto w-full justify-end">
            <div
              className="lg:hidden block"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <Svgs.HamburgerMenu />
            </div>
            {user ? (
              <div className="flex items-center gap-2 relative">
                <img
                  onClick={() => {
                    navigate("/profile");
                  }}
                  src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-[2.8rem] w-[2.8rem] rounded-full cursor-pointer"
                />
                <h2
                  onClick={() => {
                    navigate("/profile");
                  }}
                  className="font-semibold lg:block hidden cursor-pointer"
                >
                  {user && user.firstName}
                </h2>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setDropdown(!dropdown);
                    setDropdownUpload(false);
                  }}
                >
                  <Svgs.DownArrow />
                </div>
                {dropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-[0]"
                      onClick={() => {
                        setDropdown(!dropdown);
                      }}
                    ></div>
                    <div className="absolute top-full rounded-lg right-0 w-[17rem] shadow-lg bg-white">
                      <div className="p-3">
                        <div className="px-4 py-3 rounded-lg flex items-center bg-[#35424B] gap-5 text-white">
                          <div className="h-[3rem] w-[3rem] bg-[#80888E] rounded-full flex items-center justify-center">
                            <Svgs.Crown />
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              navigate("/verify");
                            }}
                          >
                            <h2 className="text-sm font-semibold">
                              Limited Account
                            </h2>
                            <p className="text-xs underline">Verify Now</p>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-300" />
                      <div className="p-3 text-[#8E8E8E] text-sm">
                        <div
                          onClick={() => {
                            navigate("/edit-profile");
                          }}
                          className="flex items-center gap-3 py-2 hover-dropdown"
                        >
                          <Svgs.Editprofile />
                          <p>Edit Profile</p>
                        </div>
                        <div
                          className="flex items-center gap-3 py-2 hover-dropdown"
                          onClick={() => {
                            navigate("/my-jobs");
                          }}
                        >
                          <Svgs.Jobs />
                          <p>My Jobs</p>
                        </div>
                        <div
                          className="flex items-center gap-3 py-2 hover-dropdown"
                          onClick={() => {
                            navigate("/login");
                            localStorage.removeItem("user");
                          }}
                        >
                          <Svgs.Logout />
                          <p>Logout</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                className="px-4 py-2 border border-transparent hover:border-gray-500 text-sm rounded-md"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {"Login"}
              </button>
            )}
            <div
              className="flex items-center gap-2 relative"
              onClick={() => {
                setDropdownUpload(!dropdownUpload);
                setDropdown(false);
              }}
            >
              <div className="px-4 py-3 bg-[#248489] text-white rounded-lg flex items-center gap-1">
                <h2 className="font-semibold cursor-pointer text-sm">Upload</h2>
                <div className="cursor-pointer">
                  <Svgs.DownArrow fill="white" />
                </div>
              </div>
              {dropdownUpload && (
                <>
                  <div
                    className="fixed inset-0 z-[0]"
                    onClick={() => {
                      setDropdownUpload(!dropdownUpload);
                    }}
                  ></div>
                  <div className="absolute top-full rounded-lg right-0 w-[12rem] shadow-lg bg-white">
                    <div className="p-3 text-[#8E8E8E] text-sm">
                      <div
                        className="flex items-center gap-3 py-2 hover-dropdown"
                        onClick={() => {
                          navigate("/upload-portfolio");
                        }}
                      >
                        <Svgs.Editprofile />
                        <p>Add Portfolio</p>
                      </div>
                      <div
                        className="flex items-center gap-3 py-2 hover-dropdown"
                        onClick={() => {
                          navigate("/create-job");
                        }}
                      >
                        <Svgs.Jobs />
                        <p>Post Job</p>
                      </div>
                      <div
                        className="flex items-center gap-3 py-2 hover-dropdown"
                        onClick={() => {
                          navigate("/ask-question");
                        }}
                      >
                        <Svgs.Learning />
                        <p>Ask Question</p>
                      </div>
                      <div
                        className="flex items-center gap-3 py-2 hover-dropdown"
                        onClick={() => {
                          navigate("/ask-question");
                        }}
                      >
                        <Svgs.Logout />
                        <p>Logout</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  login: true,
};

export default Header;
