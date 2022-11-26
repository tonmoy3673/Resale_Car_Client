import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {

    const {register,handleSubmit,formState: { errors }}=useForm();

    const {createUser,updateUser} =useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('')
    const navigate=useNavigate();

    const handleSignup=data=>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user=result.user;
            
            
            const userInfo={
                displayName:(data.name)
            }
            updateUser(userInfo)
            .then(()=>{
                
                saveUser(data.name,data.email, data.role);
            })
            .catch(err=>{
                console.log(err)
                
            });
           
        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message)
        });

        
        

    }
    const saveUser=(name,email,role)=>{
        const user={name,email,role};
        console.log(user);

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            // getToken(email)

            navigate('/')
            toast.success('User created successfully!!')

        })
        
        // const getToken = email =>{
        //     console.log(email);
        //     fetch(`http://localhost:5000/jwt?email=${email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         localStorage.setItem('Access-token', data.accessToken)
        //     })
        // }


    }
    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-bold text-center mb-4'>Please Signup Here!</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                            
                        </label>
                        <input type="text" {...register("name",{
                            required:'Name is required'
                        })} placeholder='Your Name' className="input input-bordered w-full max-w-xs"/>
                        {errors.name && <p role='alert' className='text-red-600'>{errors?.name?.message}</p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <input {...register("email",{
                            required:"Email is required"
                        })} placeholder='Your email' type="email"  className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role='alert' className='text-red-600'>{errors.email?.message}</p>}
                        
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller/Buyer</span>
                            
                        </label>
                        <select {...register("role",{
                            required:"Please select one option seller/buyer"
                        })} className="select input-bordered w-full">
                        
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                        </select>
                        {errors.seller && <p role='alert' className='text-red-600'>{errors.seller?.message}</p>}
                        
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                            
                        </label>
                        <input type="password" 
                        {...register("password",{
                            required:'Password is required',
                            minLength:{value:6,message: "Password must be 6 character long"},
                            pattern:{value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ , message:'Password must have uppercase number special character'}
                        })} placeholder="Type Password"
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role='alert' className='text-red-600'>{errors.password?.message}</p>}
                        
                    </div>
                    
                   
                   <div className='py-4'>
                   <input type="submit" className='btn btn-primary w-full' value='sing Up'/>
                   </div>
                </form>
                <div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </div>
                <p className='py-2'>Already have an account <Link to='/login' className='text-lime-600 underline'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Login With Google</button>
            </div>
        </div>
    );
};

export default Signup;