"use client"

// import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from './dashboard/AdminNav';
import AdminSidebar from './dashboard/AdminSidebar';
import { useParams } from 'react-router-dom';



const EditUser= () => {
//   const { auth } = useAuth();
let {id} = useParams()
  // State for form inputs and uploads
  const [profileImage, setProfileImage] = useState(null);
  const [kycDoc1, setKycDoc1] = useState(null);
  const [kycDoc2, setKycDoc2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [otploading, setotpLoading] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('343');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [otperror, setOtpError] = useState('');
  const [auth, setAuth] = useState({});
 // Function to generate a 6-digit OTP
 const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 999999).toString();
  setGeneratedOTP(otp);
  return otp;
};
  // Define initial state types
  const [personalDetails, setPersonalDetails] = useState({
    first_name:  '',
    email: '',
    number: '',
        dob:  '',
        motherName:  '',
        documentNumber:  '',
        address:'',
        accountHolder:'',
        accountNumber:'',
        ifsc:'',
        bankName:'',
        upiName:'',
        upiId:'',
        profilePic:null,
        documentFront:null,
        documentBack:null,
        nomineeName:'',
        nomineeEmail:'',
        nomineeNumber:'',
        nomineeRelationship:'',
        nomineeDocumentNumber:'',
        nomineeDocumentFront:null,
        nomineeDocumentBack:null,
        deposite:'',
        tradeTotalIncome:'',
        status:'',
        activeData:'',
        password:'',
        rewardIncome:'',
        onganizationOne:''
  });

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

  const handlePersonalDetailChange = (e) => {
    const { name, value } = e.target;
   
      setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    
  };

   // Handle OTP submission
   const handleSendOTP = async () => {
    let email = auth.email;
    if (email) {
      const otp = generateOTP();
      try {
        setotpLoading(true)
        await axios.post('https://actl.co.in/vishnu/verifyotp', { email, otp });
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
  async function getUserData() {
    let result = await axios.get(`https://actl.co.in/vishnu/getUserById/${id}`)
    // console.log(result)
    setAuth(result.data)
    setPersonalDetails(result.data)
  }
  useEffect(()=>{
    getUserData()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
    setLoading(true)
    if (auth){
        await axios.put(`https://actl.co.in/vishnu/updateUserById/${auth.id}`,personalDetails,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        })
        alert("Profile Updated")
        window.location.reload()

    }else{
      alert("User Not Found")
    }
   } catch (error) {
    console.log(error)
   }finally{
    setLoading(false)
   }
  };

  return (
   <>
   <AdminNav/>
   <AdminSidebar/>
    <div className="p-5 relative left-[20%] w-[70%]">
     
      {/* Profile Section */}
    <form className="space-y-4 mt-16" onSubmit={handleSubmit}>

      <div className="max-w-4xl mx-auto border background-color rounded-lg shadow-lg p-5 profile-section fade-in">
        <h2 className="text-2xl font-bold mb-5 text-center">User Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src={auth ?  `https://actl.co.in/vishnu_uploads/${auth.profilePic}` : "https://via.placeholder.com/150"}
              alt="Profile"
              className="rounded-full h-32 w-32 object-cover mb-4"
            />
            <input type="file" onChange={handleProfileImageChange} className="mb-2" />
            <div className="text-lg font-semibold uppercase">{auth.first_name ?? 'N/A'}</div>
            <div>Email: {auth?.email ?? 'N/A'}</div>
          </div>
          {/* Sponsor Info */}
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Sponsor Information</h3>
            <p>Referral Name: {auth?.sponsorName ?? 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="max-w-4xl mx-auto border background-color rounded-lg shadow-lg p-5 mt-5 personal-details-section slide-in-left flex flex-col gap-5">
      <h2 className="text-2xl font-bold mb-5 text-center">Update Acount</h2>
          {/* Full Name */}
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            <div>
              <label className="block font-medium">Change Acount Status</label>
              <select name="status" id="" className='w-full p-2 border rounded-lg text-black uppercase' value={personalDetails.status} onChange={handlePersonalDetailChange}>
                <option>verified</option>
                <option>unverified</option>
              </select>
          </div>
          </div>
         
        <h2 className="text-2xl font-bold my-5 text-center">Personal Details</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            <div>
              <label className="block font-medium">Password</label>
              <input
                type="text"
                name="password"
                value={personalDetails.password}
                onChange={handlePersonalDetailChange}
                className="w-full p-2 border rounded-lg text-black uppercase"
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
   </>
  );
};

export default EditUser;
