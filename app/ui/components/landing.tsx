import Navigation from "../navigation/navigation";
import Blogs from "./landing/blogs";
import Contact from "./landing/contact";
import Product from "./landing/product";
import Project from "./landing/project";
import Research from "./landing/research";
import Welcome from "./landing/welcome";

export default function Landing() {
  return (
    <>
      <Welcome />
      <Product />
      <Project />
      <Blogs />
      <Research />
      <Contact />
      <Navigation/>
    </>
  );
}
