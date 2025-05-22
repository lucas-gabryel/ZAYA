import { signInWithPopup, User } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "@/firebaseConfig";

export function useGoogleLogin() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      if(err instanceof Error){
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return { user, loginWithGoogle, logout, loading, error };
}