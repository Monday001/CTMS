"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { MdConfirmationNumber } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";



export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
    yearOfStudy: "",
    course: "",
    registrationNumber: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success('Account created successfully!');
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0 && user.yearOfStudy.length > 0 &&
      user.course.length > 0 &&
      user.registrationNumber.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#50765F]">
      <h1 className="text-black font-bold text-5xl mb-5">{loading ? "Processing" : "Create Account"}</h1>
      <hr />
      <div className="flex items-center  border border-gray-300 rounded-full bg-white w-[300px] px-4 mb-4">
        <FaUser className="text-black  w-5 h-5 ml-1 " />
        <input
          className=" p-2 rounded-r-lg focus:outline-none focus:border-gray-600 text-black"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
      </div>
      <div className="flex items-center  border border-gray-300 rounded-full bg-white w-[300px] px-4 mb-4">
        <MdConfirmationNumber className="text-black  w-5 h-5 ml-1 " />
        <input
          className="p-2 rounded-lg focus:outline-none focus:border-gray-600 text-black"
          type="number"
          value={user.yearOfStudy}
          onChange={(e) => setUser({ ...user, yearOfStudy: e.target.value })}
          placeholder="Year Of Study"
        />
      </div>
      <div className="flex items-center  border border-gray-300 rounded-full bg-white w-[300px] px-4 mb-4">
        <FaUserGraduate className="text-black  w-5 h-5 ml-1 " />
        <input
          className="p-2  rounded-lg focus:outline-none focus:border-gray-600 text-black"
          type="text"
          value={user.course}
          onChange={(e) => setUser({ ...user, course: e.target.value })}
          placeholder="Your Course"
        />
      </div>
      <div className="flex items-center  border border-gray-300 rounded-full bg-white w-[300px] px-4 mb-4">
        <FaUserGraduate className="text-black  w-5 h-5 ml-1 " />
        <input
          className="p-2 rounded-lg focus:outline-none focus:border-gray-600 text-black"
          type="text"
          value={user.registrationNumber}
          onChange={(e) => setUser({ ...user, registrationNumber: e.target.value })}
          placeholder="Registration Number"
        />
      </div>
      <div className="flex items-center  border border-gray-300 rounded-full bg-white w-[300px] px-4 mb-4">
        <MdEmail className="text-black  w-5 h-5 ml-1 " />
        <input
          className="p-2 rounded-lg focus:outline-none focus:border-gray-600 text-black"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </div>
      <div className="flex items-center  border border-gray-300 rounded-full bg-white w-[300px] px-4 mb-4">
        <RiLockPasswordFill className="text-black  w-5 h-5 ml-1 " />
        <input
          className="p-2 rounded-lg focus:outline-none focus:border-gray-600 text-black"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </div>
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-full w-[300px] mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link href="/login" className="font-semibold">Visit login page</Link>
    </div>
  );
}
