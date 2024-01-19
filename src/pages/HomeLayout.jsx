import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
export default function HomeLayout() {
  const navigation = useNavigation();
  let isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        {isPageLoading ? (
          <div className="loading loading-spinner loading-lg size-10 place-items-center">
            Loading...
          </div>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
}
