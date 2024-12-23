import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { scan } from "react-scan";
import "./globals.css";
// import {
//   DynamicContextProvider,
//   DynamicWidget,
// } from "@dynamic-labs/sdk-react-core";
// import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
// import { IsBrowser } from "@dynamic-labs/sdk-react-core";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context";
import { headers } from "next/headers";

scan({
  enabled: true,
  log: true, // logs render info to console (default: false)
  clearLog: false, // clears the console per group of renders (default: false)
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiztos",
  description: "Create decentralized quizzes using AI in seconds",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       {/* <DynamicContextProvider
//         settings={{
//           environmentId: "b9824ce4-ba83-4d05-a8d2-404de8fb2eb4",
//           walletConnectors: [EthereumWalletConnectors],
//         }}
//       > */}
//         {/* <IsBrowser><Bg /></IsBrowser> */}
//         <body
//           className={
//             inter.className + " dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
//           }
//         >
//           <div className="w-full p-8 flex justify-center items-center fixed top-3 z-20">
//             <Navbar />
//           </div>
//           <div className="pt-10">{children}</div>
//         </body>
//       {/* </DynamicContextProvider> */}
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" className="bg-black">
      <body
        className={
          inter.className + "  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
        }
      >
        <NextTopLoader showSpinner={false} color="#7c3aed" />
        <Web3ModalProvider initialState={initialState}>
          <div className="w-full p-8 flex justify-end items-center absolute top-3 z-20">
            <w3m-button />
          </div>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
