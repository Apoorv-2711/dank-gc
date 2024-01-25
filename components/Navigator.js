"use client";
import { cva } from "class-variance-authority";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useAuthUser from "@/hooks/useAuthUser";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase";
import Chatbox from "./Chatbox";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Navigator = () => {
  const [active, setActive] = useState(false);
  const user = useAuthUser();
  // const [signInWithGoogle] = useSignInWithGoogle(auth)
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const toggleSidebar = () => {
    setActive((x) => !x);
  };

  if (!user)
    return (
      <main className="relative min-h-screen overflow-x-hidden flex w-full justify-center items-center bg-[#1c1c1c]">
        <button
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                  GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
              })
              .catch((error) => {});
          }}
          className="bg-white hover:bg-gray-300 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded"
        >
          Sign in with Google
        </button>
      </main>
    );

  return (
    <main className="relative min-h-screen overflow-x-hidden flex w-full">
      <div className={sidebar({ active })}>
        <Sidebar user={user} />
      </div>
      <div className={content({ active })}>
        <Header isActiveNav={active} onButtonClick={toggleSidebar} />
        <Chatbox user={user} />
      </div>
    </main>
  );
};

export default Navigator;

const sidebar = cva(
  [
    "bg-[#ccc] dark:bg-[#111] absolute top-0 w-3/4 h-full transition-all duration-300",
  ],
  {
    variants: {
      active: {
        true: ["left-0"],
        false: ["-left-3/4"],
      },
    },
    defaultVariant: {
      active: false,
    },
  }
);

const content = cva(
  [
    "absolute top-0 flex flex-col w-full h-screen p-4 transition-all duration-300",
  ],
  {
    variants: {
      active: {
        true: ["left-3/4"],
        false: ["left-0"],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
