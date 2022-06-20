import { signIn } from 'next-auth/react';
import React from 'react';

const Login = () => {
  return (
    <div className="max-w-md border mx-auto mt-5">
      <div className="text-center p-6 flex flex-col items-center ">
        <img
          src="https://links.papareact.com/5me"
          className="w-20 h-20 text-center"
        />
        <button
          className="bg-facebook text-primary mt-8 py-2 px-6 rounded-full font-semibold border border-facebook hover:bg-transparent hover:text-facebook transition-all duration-150 ease-out"
          onClick={() => signIn()}
        >
          Sign In with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
