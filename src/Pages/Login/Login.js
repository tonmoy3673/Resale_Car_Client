
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {signIn,logInWithGoogle}=useContext(AuthContext);
    const [loginError,setLoginError]=useState('');
    const location =useLocation();
    const navigate = useNavigate ();

    const from=location.state?.from?.pathname || '/';

    
    const handleLogin=data=>{

        

        setLoginError('');
        signIn(data.email, data.password)
        .then(result=>{
            const user=result.user;

            toast.success('Login Successfully!!')
            navigate(from,{replace:true});
            

            
           
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message)
        });

    }
        const googleProvider=new GoogleAuthProvider();
        const handleSignInWithGoogle=()=>{
            logInWithGoogle(googleProvider)
            .then((result)=>{
                const user=result.user;
                
            })
            .catch(error=>console.error(error))
        }

    
    return (
        <div className='h-[800px] flex justify-center items-center bg-[]'>
            <div className='w-96 p-10 bg-[#00a8ff] rounded'>
                <h2 className='text-2xl font-bold text-center mb-4'>Please Login Here!</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                            
                        </label>
                        <input type="email" {...register("email",{required:"Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                            
                        </label>
                        <input type="password" {...register("password",{required:"Password is required",
                        minLength:{value:2,message:'Password must be 6 character or longer'}
                        
                        })} className="input input-bordered w-full max-w-xs"/>
                        
                        <label className="label">
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                            <span className="label-text">Forget Password?</span>
                            
                        </label>
                    </div>
                    
                   
                    <input type="submit" className='btn w-full' value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='py-2'>New to Seller/Buyer? <Link to='/signup' className='text-lime-700 underline'>Create an account</Link></p>
                <div className="divider text-xl font-semibold">OR</div>
                <button onClick={handleSignInWithGoogle} className='btn btn-outline w-full'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;