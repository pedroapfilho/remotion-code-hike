// Defer Non-Critical Third-Party Libraries
// ✅ Right: Loads after hydration

import dynamic from "next/dynamic";

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((m) => m.Analytics),
  { ssr: false },
);

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
