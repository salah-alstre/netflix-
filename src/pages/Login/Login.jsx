// import React, { useState } from 'react'
// import './Login.css'
// import logo from '../../assets/logo.png'
// import { login, signup } from '../../firebase'

// const Login = () => {

//   const [singState , setSignState] =useState("Sign In")
//   const{name, setName} = useState("");
//   const{email, setEmail} = useState("");
//   const{password, setPassword} = useState("");

//   const user_auth = async (event)=>{
//     event.preventDefault();
//     if (singState=== "Sihn In"){
//       await login(email, password);
//     }else{
//       await signup (name, email ,password)
//     }
//   }


//   return (
//     <div className='login'> 
//       <img src={logo} className='login-logo' alt="" />
//       <div className="login-form">
//         <h1>{singState}</h1>
//         <form >
//           {singState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}}
//            type="text" placeholder='Your name' />:<></>}
//           <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
//            type="email" placeholder='Email' />
//           <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
//            type="password" placeholder='Password' />
//           <button onClick={user_auth} type='submit'>{singState}</button>
//           <div className="from-help">
//             <div className="remember">
//               <input type="checkbox" />
//               <label htmlFor="">Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>
//         <div className="form-switch">
//           {singState==="Sign In"?<p>New to Netflix?
//          <span onClick={()=>{setSignState("Sign Up")}}>
//           Sign UP Now</span></p>:<p>Already have accounte?
//          <span onClick={()=>{setSignState("Sign In")}}> Sign In Now</span></p> }
          
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [singState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // إضافة حالة كلمة المرور
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (singState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false); // تأكد من إعادة تعيين حالة التحميل في النهاية
    }
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    ) : (
      <div className='login'> 
        <img src={logo} className='login-logo' alt="Logo" />
        <div className="login-form">
          <h1>{singState}</h1>
          <form onSubmit={user_auth}>
            {singState === "Sign Up" && (
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder='Your name' 
                required // اجعلها مطلوبة
              />
            )}
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              type="email" 
              placeholder='Email' 
              required // اجعلها مطلوبة
            />
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              placeholder='Password' 
              required // اجعلها مطلوبة
            />
            <button type='submit'>{singState}</button>
            <div className="from-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {singState === "Sign In" ? (
              <p>New to Netflix? 
                <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span>
              </p>
            ) : (
              <p>Already have an account? 
                <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
