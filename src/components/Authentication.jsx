import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

const AuthState = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const PasswordState = {
  HIDDEN: "hidden",
  VISIBLE: "visible",
};

function AuthOrMockUp() {
  return (
    <div>
      <div className="my-8 w-full flex items-center">
        <span className="flex-1 h-px bg-gray-400"></span>
        <span className="mx-3 text-center text-gray-300 font-medium">OR</span>
        <span className="flex-1 h-px bg-gray-400"></span>
      </div>
      <div className="w-full">
        <button className="w-full text-sm font-semibold rounded-md bg-indigo-600 py-2 flex items-center justify-center" type="submit"><FontAwesomeIcon className="text-2xl mr-4" icon={faGoogle} /> Continue with Google</button>
      </div>
      <div className="mt-8 mb-6 w-full flex items-center">
        <span className="flex-1 h-px bg-gray-400"></span>
        <span className="mx-3 text-center text-gray-300">If you haven't already, also join us here</span>
        <span className="flex-1 h-px bg-gray-400"></span>
      </div>
      <div>
        <a className="block text-sm font-medium rounded w-full flex justify-center my-2 py-2.5 bg-primary/10" href="/">Join our Discord Community &#8594;</a>
        <a className="block text-sm font-medium rounded w-full flex justify-center mt-3 py-2.5 bg-primary/10" href="/">Join our Whatsapp Group &#8594;</a>
      </div>
    </div>
  );
}

function LogInForm() {
  const [pwdState, setPWDState] = useState(PasswordState.HIDDEN);

  const togglePWDState = () => {
    if (pwdState === PasswordState.HIDDEN) setPWDState(PasswordState.VISIBLE);
    else setPWDState(PasswordState.HIDDEN);
  }

  return (
    <div className="mt-10 mb-4">
      <form>
        <div>
          <div>
            <label for="email" className="text-sm font-medium text-gray-100">Enter email</label>
          </div>
          <div>
            <input className="mt-1 rounded-md shadow-sm w-full bg-indigo-400/20 border-2 border-transparent focus-within:border-indigo-400 text-sm text-zinc-100 focus:outline-none pl-3 py-2" type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label for="password" className="text-sm font-medium text-gray-100">Password</label>
          </div>
          <div className="mt-1 rounded-md shadow-sm w-full bg-indigo-400/20 border-2 border-transparent focus-within:border-indigo-400 flex justify-evenly items-center">
            <input className="text-sm text-zinc-100 bg-transparent w-5/6 focus:outline-none py-2" type={pwdState === PasswordState.HIDDEN ? "password" : "text"} id="password" name="password" required />
            <span className="cursor-pointer" onClick={togglePWDState}>
              <FontAwesomeIcon icon={pwdState === PasswordState.HIDDEN ? faEye : faEyeSlash} />
            </span>
          </div>
        </div>
        <div className="w-full mt-10">
          <button className="w-full font-semibold rounded-md bg-indigo-600 py-2" type="submit">Log In</button>
        </div>
      </form>
      <AuthOrMockUp />
    </div>
  );
}

function SignUpForm() {
  const [pwdState, setPWDState] = useState(PasswordState.HIDDEN);

  const togglePWDState = () => {
    if (pwdState === PasswordState.HIDDEN) setPWDState(PasswordState.VISIBLE);
    else setPWDState(PasswordState.HIDDEN);
  };

  const submitForm = (e) => {
    // e.preventDefault();
  };

  return (
    <div className="mt-10 mb-4">
      <form onSubmit={submitForm}>
        <div>
          <div>
            <label for="name" className="text-sm font-medium text-gray-100">Enter Name</label>
          </div>
          <div>
            <input className="mt-1 rounded-md shadow-sm w-full bg-indigo-400/20 border-2 border-transparent focus-within:border-indigo-400 text-sm text-zinc-100 focus:outline-none pl-3 py-2" type="text" id="name" name="name" required/>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label for="email" className="text-sm font-medium text-gray-100">Enter email</label>
          </div>
          <div>
            <input className="mt-1 rounded-md shadow-sm w-full bg-indigo-400/20 border-2 border-transparent focus-within:border-indigo-400 text-sm text-zinc-100 focus:outline-none pl-3 py-2" type="email" id="email" name="email" required/>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label for="password" className="text-sm font-medium text-gray-100">Password</label>
          </div>
          <div className="mt-1 rounded-md shadow-sm w-full bg-indigo-400/20 border-2 border-transparent focus-within:border-indigo-400 flex justify-evenly items-center">
            <input className="text-sm text-zinc-100 bg-transparent autofill:bg-transparent w-5/6 focus:outline-none py-2" type={pwdState === PasswordState.HIDDEN ? "password" : "text"} id="password" name="password" required/>
            <span className="cursor-pointer" onClick={togglePWDState}>
              <FontAwesomeIcon icon={pwdState === PasswordState.HIDDEN ? faEye : faEyeSlash}/>
            </span>
          </div>
        </div>
        <div className="w-full mt-6">
          <button className="w-full font-semibold rounded-md bg-indigo-600 py-2" type="submit">Sign Up</button>
        </div>
      </form>
      <AuthOrMockUp />
    </div>
  );
}

export default function Authentication() {
  const [AuthToggle, setAuthToggle] = useState(AuthState.LOGIN);

  const changeAuthState = (button, state) => {
    document.querySelector("button.active-auth-button-toggle").classList.remove("active-auth-button-toggle");
    // Changing the state
    button.classList.add("active-auth-button-toggle");
    setAuthToggle(state);
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full mx-auto scrollbar">
      <div className="my-12 z-50 sm:mx-auto sm:w-full sm:max-w-md bg-gray-950 rounded-lg bg-opacity-40">
        <div className="w-full overflow-hidden rounded-t-lg">
          <button
            className="bg-primary/10 w-1/2 py-4 text-xl text-center shadow-none focus:outline-none active-auth-button-toggle"
            onClick={(e) => changeAuthState(e.target, AuthState.LOGIN)}
          >Log In</button>
          <button
            className="bg-primary/10 w-1/2 py-4 text-xl text-center shadow-none focus:outline-none"
            onClick={(e) => changeAuthState(e.target, AuthState.SIGNUP)}
          >Sign Up</button>
        </div>
        <div className="pb-12 px-8 md:px-12">
          {AuthToggle === AuthState.LOGIN ? <LogInForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
};