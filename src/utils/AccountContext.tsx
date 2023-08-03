import { useContext, createContext, useState } from "react";

const IdContext = createContext<string>(null!);
export function useId() {
  return useContext(IdContext);
}

function AccountProvider({ children }: { children: JSX.Element }) {
  const [id, setId] = useState("");

  return <IdContext.Provider value={id}>{children}</IdContext.Provider>;
}

export default AccountProvider;
