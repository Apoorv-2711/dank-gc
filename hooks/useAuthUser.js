import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useAuthUser() {
  const [user] = useAuthState(auth);

  return user;
}