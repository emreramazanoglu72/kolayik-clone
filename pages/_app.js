import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import AppProvider from "../context/AppProvider";
import "../styles/globals.css";
import NProgress from "nprogress";
import Router from "next/router";
import "react-big-calendar/lib/css/react-big-calendar.css"
import "moment/locale/tr"; // without this line it didn't work

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
         <Component {...pageProps} />  
      </AppProvider>
    </>
  );
}

export default MyApp;
