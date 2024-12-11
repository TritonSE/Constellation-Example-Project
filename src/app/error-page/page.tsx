"use client";

import { ErrorPage, Footer, TopNavigation } from "@tritonse/tse-constellation";

export default function Page() {
  return (
    <ErrorPage
      icon="ic_search"
      errorHeader="Page Not Found"
      errorMessage="Sorry, we couldn't find the page you're looking for."
      errorCode="404"
      footer={<Footer />}
      navbar={
        <TopNavigation
          navItems={[
            {
              label: "Dashboard",
              path: "",
              icon: "ic_cart"
            },
            {
              label: "Search",
              path: "",
              icon: "ic_search"
            },
            {
              label: "Settings",
              path: "",
              icon: "ic_settings"
            },
            {
              label: "Help",
              path: "",
              icon: "ic_help"
            }
          ]}
          logoSrc="https://raw.githubusercontent.com/TritonSE/TSE-Constellation/main/public/constellation.png"
          renderLink={(_, className, children, key) => (
            <a key={key} className={className}>
              {children}
            </a>
          )}
        />
      }
    />
  );
}
