import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    //useContext for receive all the context from authProvider
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    //state for show error message while login
    const [error, setError] = useState('')

    //state for show success message while login
    const [success, setSuccess] = useState('');

    //google provider ofr login with google button
    const googleProvider = new GoogleAuthProvider();

    //useNavigate hook for the navigate user from his truth place
    const navigate = useNavigate();

    //useLocation hook for send user his current location
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //handle login with email and password
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then((result) => {

                const loggedUser = result.user;
                form.reset()
                setSuccess('User Login successfully complete');
                setError('')
                navigate(from, { replace: true })

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccess('')
            });
    }

    //handle login with google login
    const handleGoogleSignIn = () => {

        signInWithGoogle(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })

                setSuccess('User Login Successful By  google Account');
                setError('');

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccess('');
            })
    }






    return (
        <div className="my-container">

            <div className="hero-content p-0">
                <div className="card lg:w-[1200px] p-8 flex-shrink-0 w-full max-w-sm outline outline-offset-2 outline-pink-500  bg-base-100">
                    <form onSubmit={handleSignIn} >
                        <h1 className="title">Login Please </h1>
                        <hr className="long-line" />
                        <hr className="short-line" />

                        <div className="w-full">
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text  font-semibold">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <small className="font semibold">New to Golden Food House ?  <Link to="/register" className="underline text-orange-500 ">Register</Link></small>
                                </label>
                            </div>
                            <div className="form-control ">

                                <p className="mb-2 font-semibold text-xl text-green-600">{success}</p>
                                <p className="mb-2 font-semibold text-xl text-red-600">{error}</p>
                                <button className="button">Login</button>

                            </div>
                        </div>

                    </form>
                    <div className="flex items-center">
                        <hr className="short-line" /> <p className="font-semibold">or</p> <hr className="short-line" />
                    </div>
                    <button onClick={handleGoogleSignIn} className="button mt-2"><FaGoogle className="mr-1 text-primary "></FaGoogle>Login With Google</button>


                </div>


            </div>

        </div>

    );
};

export default Login;


