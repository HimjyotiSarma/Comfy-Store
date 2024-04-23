import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";
export default function HomeLayout() {
  const navigation = useNavigation();
  let isPageLoading = navigation.state === "loading";
  console.log("Page State : ", isPageLoading);
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}
