"use client";
import React, { useRef } from "react";
import { GrSend } from "react-icons/gr";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { useState } from "react";
import { auth, db } from "@/utils/firebase";
import Chats from "./Chats";

export default function Chatbox () {
  const [snapshot] = useCollectionData(
    query(collection(db, "messages"), orderBy("createdAt", "asc"))
  );
    const snapshotTrimmed = snapshot?.slice(-25);

  const [formValue, setFormValue] = useState("");

  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });
    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-3 flex flex-col flex-grow w-full max-w-xl rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto no-scrollbar">
        {snapshotTrimmed &&
          snapshotTrimmed.map((msg) => <Chats key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <form onSubmit={sendMessage}>
        <div className="flex flex-row gap-x-2 mb-1 mx-1">
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm text-black bg-gray-300 dark:bg-white "
            placeholder="Type your message…"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button
            disabled={!formValue}
            type="submit"
            className="bg-gray-300 dark:bg-white hover:bg-gray-300 text-black font-semibold hover:text-black py-1 px-4 hover:border-transparent rounded"
          >
            <GrSend />
          </button>
        </div>
      </form>
    </div>
  );
}
