import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";

export default function Sidebar({ user }) {
  return (
    <div>
      <Image
        src={user?.photoURL}
        alt="Profile Pic"
        width={160}
        height={160}
        className="mt-[12vh] mb-8 mx-auto rounded-full border-4 dark:border-gray-800"
      />
      <h1 className="text-2xl font-bold text-center">
        Hello {"👋"}
        <br /> {user?.displayName}
      </h1>
      <h2 className="text-xl mt-2 font-semibold text-center">
        You are welcome to Dank GC
      </h2>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => {
            signOut(auth);
          }}
          className="bg-white hover:bg-gray-300 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
