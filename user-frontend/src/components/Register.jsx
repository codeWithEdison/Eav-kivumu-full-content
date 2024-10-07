import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEyeSlash } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaEye } from 'react-icons/fa6';
import axiosInstance from '../utils/axiosInstance'; 

const Register = () => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);  
    const[nameError, setNameError] = useState(null);
    const [success, setSuccess] = useState(null); 
    const [showPassword, setShowPassword] = useState(true);  
    const [showConfirmPassword, setShowConfirmPassword] = useState(true); // Added state for confirm password visibility
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {

            setLoading(true)
           const {name, email, password, confirmPassword} = formData; 
           if(name ===""){
            setNameError("this name is required")
            setLoading(null);
           }
           if(email === "" ||  name === "" || password === "" || confirmPassword === "") {
             setError('All fields are required'); 
             setLoading(null)
             return;
            }
            
            // if(password.trim().length() < 8){
            //  setError('Password should be at least 8 characters long');
            //  return;
            // } 
            
            if(password !== confirmPassword){
             setError('Passwords do not match');
             setLoading(null)
             return;
            }
            
            const response =  await axiosInstance.post('/users/register', {name: name, email:email, password:password});
            if(response.status === 201){
                setSuccess(response.message); 
                setLoading(null)
            }
           
            
          
           
        } catch (error) {
            console.error('Error:', error);
            setError( error.message); 
            setLoading(false); 
        }   
    }
    // console.log(formData);  
    
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-600 mt-2">Enter your details to register</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-2 border border-gra-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                            {nameError && <p className='text-2xl text-red-600'>{nameError}</p>}  
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-2 border border-gra-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className='flex relative  items-center'> 
                                <input
                                    type={!showPassword ? 'text' : 'password'}
                                    id="password"
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-2 border border-gra-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                                {
                                    showPassword ? 
                                        <FaEye className='absolute right-6 cursor-pointer' onClick={() => setShowPassword(false)} /> : 
                                        <FaEyeSlash className='absolute right-6 cursor-pointer' onClick={() => setShowPassword(true)} /> 
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className='flex relative items-center'> 
                                <input
                                    type={!showConfirmPassword ? 'text' : 'password'} // Toggle between text and password
                                    id="confirm-password"
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-2 border border-gra-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                                {
                                    showConfirmPassword ?   
                                        <FaEye className='absolute right-6 cursor-pointer' onClick={() => setShowConfirmPassword(false)} /> : 
                                        <FaEyeSlash className='absolute right-6 cursor-pointer' onClick={() => setShowConfirmPassword(true)} /> 
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            {loading ? "Loading..." : "Register"} 
                        </button>
                        {error && 
                            <p className='p-2 mt-4 border border-red-500 text-xl rounded-md  text-red-800 flex justify-between items-center'>
                                {error} 
                                <IoIosCloseCircle className='text-4xl cursor-pointer' onClick={() => { setError(null); }} /> 
                            </p> 
                        }
                        {success && 
                            <p className='p-2 mt-4 border border-green-500 text-xl rounded-md  text-green-800 flex justify-between items-center'>
                                {success} 
                                <IoIosCloseCircle className='text-4xl cursor-pointer' onClick={() => { setError(null); }} /> 
                            </p> 
                        }
                    </div> 
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Register;
 