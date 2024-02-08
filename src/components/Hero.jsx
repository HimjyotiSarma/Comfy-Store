import { Link } from "react-router-dom";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";

const carousel = [hero5, hero2, hero3, hero4, hero1];

const Hero = () => {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Step into Style Where Comfort meets Fashion.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Explore our shoe store's diverse collection, featuring trendy styles,
          comfortable classics, and premium brands. Step into fashion and
          comfort today!
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="carousel-center hidden h-[30rem] space-x-4 rounded-box bg-neutral p-4 lg:carousel">
        {carousel.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="h-full w-80 rounded-box object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
