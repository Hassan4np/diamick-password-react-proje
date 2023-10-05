import { useContext } from "react";
import { AuthContext } from "../AuthContext/Authcontext";
import {  useNavigate } from "react-router-dom";

const Login = () => {
    const {UserLogin,GoogleLogin} = useContext(AuthContext);
    const naveget = useNavigate()
    // console.log(UserLogin)
    const LoginUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        UserLogin(email,password)
        .then(retult=>{
            console.log(retult.user);
            e.target.reset();
            naveget('/');
           
        })
        .then(error=>{
            console.log(error)
        })
    }

    const hendlegooglelogin=()=>{
        GoogleLogin()
        .then(result=>{
            console.log(result.user);
            naveget('/');
        })
        .catch(erroe=>{
            console.log(erroe)
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={LoginUser} >
                            <div className="card-body">
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
                                        <button className="btn " onClick={hendlegooglelogin}>Google Login</button>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input type="submit" className="btn btn-success" value="Login" />
                                </div>
                                {/* {errors && <p className="text-red-700">{errors}</p>}
                            {success && <p className="text-green-600">{success}</p>}
                            <p><NavLink to="/signup">Go resister</NavLink></p> */}
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;