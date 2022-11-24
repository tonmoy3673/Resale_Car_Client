

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {signIn}=useContext(AuthContext);
    const [loginError,setLoginError]=useState('');
    const location =useLocation();
    const navigate = useNavigate ();

    const from=location.state?.from?.pathname || '/';

    
    const handleLogin=data=>{

        setLoginError('');
        signIn(data.email, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true});
            toast.success('Login Successfully!!')
           
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message)
        });

        

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <input type="email" {...register("email",{required:"Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                            
                        </label>
                        <input type="password" {...register("password",{required:"Password is required",
                        minLength:{value:2,message:'Password must be 6 character or longer'}
                        
                        })} className="input input-bordered w-full max-w-xs"/>
                        
                        <label className="label">
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                            <span className="label-text">Forget Password?</span>
                            
                        </label>
                    </div>
                    
                   
                    <input type="submit" className='btn btn-primary w-full' value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='py-2'>New to Seller/Buyer? <Link to='/signup' className='text-lime-600 underline'>Create an account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;