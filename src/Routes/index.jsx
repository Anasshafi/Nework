import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AskQuestion from "../Components/AskQuestion.jsx";
import ScrollToTop from "../Components/Common/ScrollToTop";
import Community from "../Components/Community.jsx";
import CreateJob from "../Components/CreateJob.jsx";
import Discover from "../Components/Discover";
import FindWork from "../Components/FindWork";
import HireDevelopers from "../Components/HireDevelopers";
import JobDetail from "../Components/JobDetail.jsx";
import MyJobs from "../Components/MyJobs.jsx";
import QuestionDetail from "../Components/QuestionDetail.jsx";
import Quiz from "../Components/Quiz.jsx";
import UploadPortfolio from "../Components/UploadPortfolio";
import Verify from "../Components/Verify.jsx";
import CourseDetail from "../Views/CourseDetail.jsx";
import Courses from "../Views/Courses.jsx";
import Detail from "../Views/Detail.jsx";
import EditProfile from "../Views/EditProfile";
import Home from "../Views/Home";
import Login from "../Views/Login";
import Profile from "../Views/Profile.jsx";
import Register from "../Views/Register";

const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/hire-developers" element={<HireDevelopers />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/upload-portfolio" element={<UploadPortfolio />} />
        <Route path="/community" element={<Community />} />
        <Route path="/question-detail" element={<QuestionDetail />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/discover" element={<Discover />} />

        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default RoutesList;
