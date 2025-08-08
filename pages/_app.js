import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
