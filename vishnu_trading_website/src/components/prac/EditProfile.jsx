"use client"

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';



const EditProfile = () => {
  const { auth } = useContext(UserContext);

  // State for form inputs and uploads
  const [profileImage, setProfileImage] = useState(null);
  const [kycDoc1, setKycDoc1] = useState(null);
  const [kycDoc2, setKycDoc2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [otploading, setotpLoading] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('343');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [otperror, setOtpError] = useState('');
 // Function to generate a 6-digit OTP
 const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 999999).toString();
  setGeneratedOTP(otp);
  return otp;
};
  // Define initial state types
  const [personalDetails, setPersonalDetails] = useState({
    first_name: auth.userData?.first_name || '',
    email: auth.userData?.email || '',
    number: auth.userData?.number || '',
        dob: auth.userData?.dob || '',
        motherName: auth.userData?.motherName || '',
        documentNumber: auth.userData?.documentNumber || '',
        address: auth.userData?.address || '',
        accountHolder: auth.userData?.accountHolder || '',
        accountNumber: auth.userData?.accountNumber || '',
        ifsc: auth.userData?.ifsc || '',
        bankName: auth.userData?.bankName || '',
        upiName: auth.userData?.upiName || '',
        upiId: auth.userData?.upiId || '',
        profilePic: auth.userData?.profilePic || null,
        documentFront: auth.userData?.documentFront || null,
        documentBack: auth.userData?.documentBack || null,
        nomineeName: auth.userData?.nomineeName || '',
        nomineeEmail: auth.userData?.nomineeEmail || '',
        nomineeNumber: auth.userData?.nomineeNumber || '',
        nomineeRelationship: auth.userData?.nomineeRelationship || '',
        nomineeDocumentNumber: auth.userData?.nomineeDocumentNumber || '',
        nomineeDocumentFront: auth.userData?.nomineeDocumentFront || null,
        nomineeDocumentBack: auth.userData?.nomineeDocumentBack || null
  });

  useEffect(() => {
    if (auth.userData) {
      setPersonalDetails((prev) => ({
        ...prev,
        first_name: auth.userData.first_name || '',
        email: auth.userData.email || '',
        number: auth.userData?.number || '',
        dob: auth.userData?.dob || '',
        motherName: auth.userData?.motherName || '',
        documentNumber: auth.userData?.documentNumber || '',
        address: auth.userData?.address || '',
        accountHolder: auth.userData?.accountHolder || '',
        accountNumber: auth.userData?.accountNumber || '',
        ifsc: auth.userData?.ifsc || '',
        bankName: auth.userData?.bankName || '',
        upiName: auth.userData?.upiName || '',
        upiId: auth.userData?.upiId || '',
        profilePic: auth.userData?.profilePic || null,
        documentFront: auth.userData?.documentFront || null,
        documentBack: auth.userData?.documentBack || null,
        nomineeName: auth.userData?.nomineeName || '',
        nomineeEmail: auth.userData?.nomineeEmail || '',
        nomineeNumber: auth.userData?.nomineeNumber || '',
        nomineeRelationship: auth.userData?.nomineeRelationship || '',
        nomineeDocumentNumber: auth.userData?.nomineeDocumentNumber || '',
        nomineeDocumentFront: auth.userData?.nomineeDocumentFront || null,
        nomineeDocumentBack: auth.userData?.nomineeDocumentBack || null
      }));
    }
  }, [auth]);

  // Handlers for file upload
  const handleProfileImageChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
    }
    const { name, files } = e.target;
      if (files) {
        setPersonalDetails((prev) => ({ ...prev, profilePic: files[0] }));
      } 
  };

  const handleKycDoc1Change = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setKycDoc1(URL.createObjectURL(file));
    }
    const { name, files } = e.target;
    if (files) {
      setPersonalDetails((prev) => ({ ...prev, documentFront: files[0] }));
    } 
  };

  const handleKycDoc2Change = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setKycDoc2(URL.createObjectURL(file));
    }
    const { name, files } = e.target;
    if (files) {
      setPersonalDetails((prev) => ({ ...prev, documentBack: files[0] }));
    } 
  };
  const handlenomineefront = (e) => {
    const { name, files } = e.target;
    if (files) {
      setPersonalDetails((prev) => ({ ...prev, nomineeDocumentFront: files[0] }));
    } 
  };
  const handlenomineeback = (e) => {

    const { name, files } = e.target;
    if (files) {
      setPersonalDetails((prev) => ({ ...prev, nomineeDocumentBack: files[0] }));
    } 
  };

  // Handle input changes for personal details
  // const handlePersonalDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  // };
  const handlePersonalDetailChange = (e) => {
    const { name, value } = e.target;
   
      setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    
  };

   // Handle OTP submission
   const handleSendOTP = async () => {
    let email = auth.userData.email;
    if (email) {
      const otp = generateOTP();

      try {
        setotpLoading(true)
        await axios.post('https:///actl.co.in/vishnu/verifyotp', { email, otp });
        alert('OTP has been sent to your email');
      } catch (err) {
        console.error('Error sending OTP:', err);
        alert('Failed to send OTP');
      }finally{
        setotpLoading(false)
      }
    } else {
      alert("Please Enter Email");
    }
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(personalDetails)
   try {
    setLoading(true)
    if (enteredOTP === generatedOTP){
      if(auth.userData && auth.userData.status == 'verified' && auth.userData.deposite > 20){
        await axios.put(`https:///actl.co.in/vishnu/updateUser/${auth.userData.email}`,personalDetails,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        })
        alert("Profile Updated")
        window.location.reload()
       }else{
        alert("You are Not Eligible For Update..")
       }
    }else{
      setOtpError("Verify OTP")
      alert("please verify Email by OTP")
    }
   } catch (error) {
    console.log(error)
    // setLoading(false)
   }finally{
    setLoading(false)
   }
  };
  // console.log(auth.userData.deposite)

  return (
    <div className="p-5 mt-20 md:mt-0">
      <h1 className='text-center text-red-600 text-xl py-3'>* For Every Update in Profile 20 $ will be Deduct from Deposite Balance.</h1>
      {/* Profile Section */}
    <form className="space-y-4" onSubmit={handleSubmit}>

      <div className="max-w-4xl mx-auto border background-color rounded-lg shadow-lg p-5 profile-section fade-in">
        <h2 className="text-2xl font-bold mb-5 text-center">User Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src={auth.userData ?  `https://filixo.com/uploads/${auth.userData.profilePic}` : "https://via.placeholder.com/150"}
              alt="Profile"
              className="rounded-full h-32 w-32 object-cover mb-4"
            />
            <input type="file" onChange={handleProfileImageChange} className="mb-2" />
            <div className="text-lg font-semibold uppercase">{auth.userData?.first_name ?? 'N/A'}</div>
            <div>Email: {auth.userData?.email ?? 'N/A'}</div>
          </div>
          {/* Sponsor Info */}
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Referral Information</h3>
            <p>Referral Name: {auth.userData?.sponsorName ?? 'N/A'}</p>
            <p>Joining Date: {auth.userData?.activeData ?? 'unverified status'}</p>
          </div>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="max-w-4xl mx-auto border background-color rounded-lg shadow-lg p-5 mt-5 personal-details-section slide-in-left flex flex-col gap-5">
        <h2 className="text-2xl font-bold mb-5 text-center">Personal Details</h2>
          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={personalDetails.first_name}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black uppercase"
              />
            </div>
          </div>

          {/* Email and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">Email ID</label>
              <input
                type="email"
                name="email"
                value={personalDetails.email}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">Mobile Number</label>
              <input
                type="tel"
                name="number"
                placeholder="Enter your mobile number"
                value={personalDetails.number}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
          </div>

          {/* DOB and Mother's Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={personalDetails.dob}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">Father Name</label>
              <input
                type="text"
                name="mothersName"
                placeholder="Enter Father name"
                value={personalDetails.motherName}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
          </div>

          {/* KYC Document Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">KYC Document 1</label>
              <input type="file" onChange={handleKycDoc1Change} />
              {auth.userData && <img src={`https://filixo.com/uploads/${auth.userData.documentFront}`} alt="KYC Doc 1" className="w-36 mt-2 h-36 object-fit" /> }
            </div>
            <div>
              <label className="block font-medium">KYC Document 2</label>
            <input type="file" onChange={handleKycDoc2Change} />
              {auth.userData && <img src={`https://filixo.com/uploads/${auth.userData.documentBack}`} alt="KYC Doc 2" className="w-36 mt-2 h-36 object-fit" />}
            </div>
          </div>

          {/* Document Number and Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">Document Number</label>
              <input
                type="text"
                name="documentNumber"
                placeholder="Enter document number"
                value={personalDetails.documentNumber}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={personalDetails.address}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
          </div>

          {/* OTP Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">Enter OTP</label>
              <input
                type="text"
                name='enteredOTP'
                value={enteredOTP}
                onChange={(e) => setEnteredOTP(e.target.value)}
                className="w-full p-2 border rounded-lg text-black"
                placeholder='Enter OTP'
              />
             
              {otperror &&  <span className='text-red-700'>*{otperror}</span>}
            </div>
            <button type="button" onClick={handleSendOTP} disabled={otploading} className="mt-6 bg-green-500 text-white p-2 rounded-lg">{otploading ? 'Sending..': 'Send OTP'}</button>
          </div>

          <h2 className="text-2xl font-bold mb-5 text-center">Add Nominee Details</h2>
          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            <div>
              <label className="block font-medium">Nominee Name</label>
              <input
                type="text"
                name="nomineeName"
                value={personalDetails.nomineeName}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black uppercase"
              />
            </div>
          </div>

          {/* Email and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">Nominee Email ID</label>
              <input
                type="email"
                name="nomineeEmail"
                value={personalDetails.nomineeEmail}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">Nominee Mobile Number</label>
              <input
                type="tel"
                name="nomineeNumber"
                value={personalDetails.nomineeNumber}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
          </div>

          {/* DOB and Mother's Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
            <label className="block font-medium">Nominee Relationship</label>
              <input
                type="text"
                name="nomineeRelationship"
                value={personalDetails.nomineeRelationship}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">Nominee Document Number</label>
              <input
                type="text"
                name="nomineeDocumentNumber"
                value={personalDetails.nomineeDocumentNumber}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
          </div>

          {/* KYC Document Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">Nominee KYC Document Front</label>
              <input type="file" onChange={handlenomineefront} />
              {auth.userData && <img src={`https://filixo.com/uploads/${auth.userData.nomineeDocumentFront}`} alt="KYC Doc" className="w-36 mt-2 h-36 object-fit" /> }
            </div>
            <div>
              <label className="block font-medium">Nominee KYC Document Back</label>
            <input type="file" onChange={handlenomineeback} />
              {auth.userData && <img src={`https://filixo.com/uploads/${auth.userData.nomineeDocumentBack}`} alt="KYC Doc 1" className="w-36 mt-2 h-36 object-fit" />}
            </div>
          </div>

          <h2 className="text-2xl font-bold py-8 text-center">Add New Bank Detail</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">Holder Name</label>
              <input
                type="text"
                name="accountHolder"
                placeholder="Enter Holder Name"
                value={personalDetails.accountHolder}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">A/c Number</label>
              <input
                type="text"
                name="accountNumber"
                placeholder="Enter A/c Number"
                value={personalDetails.accountNumber}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
          </div>

          {/* IFSC Code and Bank Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium">IFSC Code</label>
              <input
                type="text"
                name="ifsc"
                placeholder="Enter IFSC Code"
                value={personalDetails.ifsc}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">Bank Name</label>
              <select
                name="bankName"
                value={personalDetails.bankName}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              >
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                {/* Add more banks as needed */}
              </select>
            </div>
          </div>

        <h2 className="text-2xl font-bold py-6 text-center">Add New UPI</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block font-medium">UPI Name</label>
              <input
                type="text"
                name="upiName"
                placeholder="Enter UPI Name"
                value={personalDetails.upiName}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block font-medium">UPI ID</label>
              <input
                type="text"
                name="upiId"
                placeholder="Enter UPI ID"
                value={personalDetails.upiId}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
          </div>

          {/* Update and Edit Buttons */}
          <div className="flex justify-center mt-9">
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg" disabled={loading}>{loading ? 'proccesing' : ' Update'}</button>
          </div>
      </div>
        </form>

      
    </div>
  );
};

export default EditProfile;
