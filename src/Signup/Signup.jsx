import { useContext } from "react";
import { AuthContext } from "../AuthContext/Authcontext";
import {  useNavigate } from "react-router-dom";



const Signup = () => {
    const { CreateUser } = useContext(AuthContext);
    const naveget = useNavigate()
    
    console.log(CreateUser)

    
    const Register = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const name = e.target.name.value;
        CreateUser(email, password)
            .then(retult => {
                console.log(retult.user);
                e.target.reset();
                naveget('/login');
            })
            .chath(error => {
                console.log(error)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={Register} >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Name"

                                    name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="email"

                                    name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" className="btn btn-success" value="Register" />
                            </div>
                            {/* {errors && <p className="text-red-700">{errors}</p>}
                            {success && <p className="text-green-600">{success}</p>}
                            <p><NavLink to="/signup">Go resister</NavLink></p> */}
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default Signup;