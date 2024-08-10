import React, { useEffect } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    useEffect( () =>{
        loadCaptchaEnginge(6);
    },[])
    const handleLogin = event =>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
    }
  return (
    <div className=' text-white'>
        <div className="hero bg-black-200 min-h-screen text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body bg-current ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-jost">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-jost">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login