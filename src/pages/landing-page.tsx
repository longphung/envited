import React from "react";
import { Link } from "wouter";
import landingPageImage from "../assets/landing-page-image.png";

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto bg-purple-3">
      <h1 className="mx-auto text-primary font-bold text-4xl">
        Imagine if
        <div className="bg-envited-gradient bg-clip-text text-transparent">
          Snapchat
        </div>
        had events.
      </h1>

      <p className="mt-8 font-light max-w-lg mx-auto">
        Easily host and share events with your friends across any social media.
      </p>

      <img src={landingPageImage} alt="landing-page" className="mb-8.5 mt-9 mx-auto" />

      <Link href="/create">
        <a className="bg-envited-gradient text-white font-bold py-4 px-5.1 rounded-xl max-w-xs">
          🎉 Create my event
        </a>
      </Link>
    </div>
  );
};

export default LandingPage;
