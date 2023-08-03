import { useContext, createContext, useState, useCallback } from "react";

const IdContext = createContext<string>(null!);
export function useId() {
  return useContext(IdContext);
}

const LoginContext = createContext<(user: string, pw: string) => boolean>(
  null!
);
export function useLogin() {
  return useContext(LoginContext);
}

function AccountProvider({ children }: { children: JSX.Element }) {
  const [id, setId] = useState("");

  const loginUser = useCallback((user: string, pw: string): boolean => {
    /**
     * Verify if user and pw exists.
     * If valid, setId and return true.
     * Else, return false.
     */
    setId("123");
    return true;
  }, []);

  return (
    <IdContext.Provider value={id}>
      <LoginContext.Provider value={loginUser}>
        {children}
      </LoginContext.Provider>
    </IdContext.Provider>
  );
}

export default AccountProvider;
