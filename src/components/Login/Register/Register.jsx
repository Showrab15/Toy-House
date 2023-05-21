import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import dynamicTitle from '../../../hooks/DynamicTitle';

const Register = () => {

    dynamicTitle('Register')

    const { createUser, logOut ,userUpdateProfile } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const navigate = useNavigate();

    const handleRegister = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserData(loggedUser, name, photoURL)
                form.reset()
                setSuccess('Account has been created successfully');
                setError('');
                logOut()
                navigate('/login')


            })
            .catch(error => {
                console.log(error)
                setError(error.message);
                setSuccess('')
            })
    }



    const updateUserData = (user, name, photoURL) => {
        userUpdateProfile(user, name, photoURL)
            .then(() => {
                setSuccess(name)
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
                setError(error.message)
            });

    }

    return (
        <div className="my-container">



            <div className="hero-content  mt-8 p-0 ">

                <form onSubmit={handleRegister} className="card lg:w-[1200px] p-8 flex-shrink-0 w-full max-w-sm outline outline-offset-2 outline-pink-500  bg-base-100">
                    <h1 className="title">Create An Account In Toy House </h1>
                    <hr className="long-line" />
                    <hr className="short-line" />
                    <div className="w-full">
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo url" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <small className="font-semibold">Already Have An Account? <Link to="/login" className="underline text-orange-500 ">Login</Link></small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="button">Sign up</button>


                            <p className="mt-2 font-semibold text-xl text-green-600">{success}</p>
                            <p className="mt-2 font-semibold text-xl text-red-600">{error}</p>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};


export default Register;