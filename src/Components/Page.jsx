import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Page = ({ handleGetStarted }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-40"
    >
      <div className="container z-10 text-center flex flex-col items-center justify-center space-y-6">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-primary-foreground opacity-0 animate-fade-in"> BILL</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {""}Buddy
          </span>
        </h1>
        <div className="relative w-full max-w-md my-8">
          <img 
            src="" 
            alt="Your Image" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-6">
        One App, Many Bills, Zero Hassle
      </h2>

      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 mt-5">
        Manage multiple bills and split payments with ease—all in one app. No more transferring back and forth, just simple, fair sharing.
      </p>

      <div className="pt-4 opacity-0 animate-fade-in-delay-4 mt-3">
        <button
          onClick={handleGetStarted}
          className="green-button text-lg sm:text-xl md:text-2xl px-6 py-3"
        >
          Get started
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm sm:text-base text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
      </div>
    </section>
  );
};
