import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Swal from 'sweetalert2';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || googleUser);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            // // console.log(user);
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || googleLoading || sending) {
        return <Loading></Loading>
    }

    let erroMsg;
    if (error || googleError) {
        erroMsg = <p className='text-red-500'>Errorrr: {error?.message || googleError?.message} </p>
    }
    // if (token) {
    //     // // console.log(user || googleUser);
    //     navigate(from, { replace: true });
    // }



    const onSubmit = data => {
        // // console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    const resetPassword = async () => {
        const email = getValues('email')
        if (email) {
            await sendPasswordResetEmail(email);
            Swal.fire({
                text: `Check Email for reset password`,
                icon: 'success',
                confirmButtonText: 'Okay'
            })
        }

        if (email === '') {
            return Swal.fire({
                text: `Email is required`,
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        }
    }

    return (
        <div className='flex mt-32 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Emmailll is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Passworddd is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: '6 character must be input'
                                }
                            })}
                                type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    {erroMsg}
                    <small> <p className='text-center mt-2'>New User to Moto-Parts? <Link to='/signup' className='text-primary'>Create New Account</Link> </p></small>

                    <small><p className='text-center mt-2'>Forget Password? <button className='btn-xs btn-link text-primary ' onClick={resetPassword}>Reset Your Password</button></p></small>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;