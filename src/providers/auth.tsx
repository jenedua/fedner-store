"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const AuthProvider = ({children}: SessionProviderProps ) =>{
    return <SessionProvider>{children}</SessionProvider>
}


// export default function App({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }
