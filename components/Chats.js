import { auth } from "@/utils/firebase";
import Image from "next/image";
import React from "react";

export default function Chats({ message }) {
  const { text, uid, photoURL, displayName } = message;

  if (uid === auth.currentUser.uid) {
    return (
      <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        <div>
          <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
            <p className="text-sm">{text}</p>
          </div>
          <span className="text-xs text-gray-500 leading-none">
            {displayName}
          </span>
        </div>
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
          <Image
            src={photoURL}
            width={160}
            height={160}
            alt="Profile Pic"
            className="mb-8 mx-auto rounded-full border-4 dark:border-gray-800"
          />
        </div>
      </div>
    );
  } else
    return (
      <div className="flex w-full mt-2 space-x-3 max-w-xs">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
          <Image
            src={photoURL}
            width={160}
            height={160}
            alt="Profile Pic"
            className="mb-8 mx-auto rounded-full border-4 dark:border-gray-800"
          />
        </div>
        <div>
          <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
            <p className="text-sm text-black">{text}</p>
          </div>
          <span className="text-xs text-gray-500 leading-none">
            {displayName}
          </span>
        </div>
      </div>
    );
}
