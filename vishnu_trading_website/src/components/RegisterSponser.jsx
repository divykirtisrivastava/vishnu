"use client";
import React, { useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'

import { cn } from "../lib/utils.js";
import axios from "axios";
import { Label } from "./designComponents/Label.jsx";
import { Input } from "./designComponents/Input.jsx";
import Navbar from "./Navbar.jsx";

export default function RegisterSponser() {
  let navigation = useNavigate();
  let sponser = useParams()

  const [generatedOTP, setGeneratedOTP] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [otploading, setotpLoading] = useState(false);

  const [formData, setFormData] = useState({
    sponsorEmail: sponser.sponser,
    firstName: "",
    lastName: "",
    dob: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 999999).toString();
    setGeneratedOTP(otp);
    return otp;
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.number) newErrors.number = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!enteredOTP) newErrors.enteredOTP = "Fill OTP";
    
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSendOTP = async () => {
    let email = formData.email;
    if (email) {
      setotpLoading(true);
      const otp = generateOTP();

      try {
        await axios.post('https://actl.co.in/vishnu/verifyotp', { email, otp });
        alert('OTP has been sent to your email');
      } catch (err) {
        console.error('Error sending OTP:', err);
        alert('Failed to send OTP');
      } finally {
        setotpLoading(false);
      }
    } else {
      alert("Please Enter Email");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'documentFrontFile' || key === 'documentBackFile') {
        if (formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      setLoading(true);
      if (enteredOTP === generatedOTP) {
        let result = await axios.get(`https:///actl.co.in/vishnu/verifyEmail/${formData.email}`);
        if (result.data) {
          await axios.post("https:///actl.co.in/vishnu/saveUser", formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
          navigation('/login');
        } else {
          alert("Email Already Registered..!");
        }
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="bg-black py-10 object-center w-full flex justify-center flex-col items-center gap-5">
     <div className="w-[95%] md:w-3/4 mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0D0B1A] backdrop-blur-xl mt-[100px]">
      <div className="w-full flex flex-col items-center">
        <img src="/group-3-13@2x.png" className="w-32" alt="" />
        <h2 className="text-white font-semibold font-lora text-3xl tracking-wider text-center">Registration Form</h2>
      </div>
      <form className="my-10" onSubmit={handleSubmit}>
        {/* <div className="flex "> */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstName" >Referral Link (optional)</Label>
            <Input
              id="sponsorEmail"
              placeholder="Referral Link"
              type="text"
              value={formData.sponsorEmail}
            />
            {errors.sponsorEmail && <p className="text-red-500 text-sm">{errors.sponsorEmail}</p>}
          </LabelInputContainer>
        {/* </div> */}
        {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"> */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="Enter First Name"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Enter Last Name"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </LabelInputContainer>
        {/* </div> */}

        <LabelInputContainer className="mb-4">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </LabelInputContainer>

        

        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Phone Number</Label>
          <Input
            id="number"
            placeholder="123-456-7890"
            type="tel"
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Enter Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Verify Email Address By OTP</Label>
          <div className="flex w-full">
          <Input
            id="enteredOTP"
            placeholder="Enter OTP"
            type="text"
            value={enteredOTP}
            onChange={(e) => setEnteredOTP(e.target.value)}
            className=""
          />
          <button onClick={handleSendOTP} disabled={otploading} className="bg-blue-900 text-white px-2 rounded ml-2 text md:text-lg font-[600]">
            {otploading ? 'Sending..' : 'Send OTP'}
          </button>
          </div>
          {errors.enteredOTP && <p className="text-red-500 text-sm">{errors.enteredOTP}</p>}
        </LabelInputContainer>

       
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </LabelInputContainer>

        <button
          className={cn("py-3 mt-4 rounded-lg font-[500] text-lg w-full text-white bg-blue-900", {
            " cursor-not-allowed": loading,
          })}
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
   </div>
  );
}

function LabelInputContainer({ children, className }) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
