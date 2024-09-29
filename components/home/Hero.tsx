/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HeroLink from "./HeroLink";

function Hero() {
  return (
    <>
      <div
        className="relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hey, I'm Aman.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
          <span className="heroShiny2 text-fun-pink">designing</span> for the
          web.
          <img
            alt="html"
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
          />
          <img
            alt="nextjs"
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="https://vercel.com/mktng/_next/static/media/nextjs-logo-light.eb473712.svg"
          />
          <img
            alt="coder"
            className="sqD hidden sm:block bottom-[-240px] left-[-100px]"
            style={{ animationDelay: "0.4s", width: "90px", height: "90px" }}
            src="https://images.squarespace-cdn.com/content/v1/50fc177be4b0dcfb3cb3e0b7/1687186663460-MOEVN9K6Y7MYM02HIZO0/Coder-Premade-Logo-4.png"
          />
            <img
  alt="nextjs"
  className="sqD hidden sm:block left-[100px] lg:left-[300px] bottom-[-200px]"
  style={{ animationDelay: "0.5s", width: "90px", height: "90px" }}
  src="https://vercel.com/mktng/_next/static/media/nextjs-logo-light.eb473712.svg"
/>
        <img
  alt="js"
  className="sqD hidden sm:block left-[100px] lg:left-[200px] bottom-[-100px]"
  style={{ animationDelay: "0.5s", width: "90px", height: "90px" }}
  src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
/>
<img
  alt="js"
  className="sqD hidden sm:block left-[100px] lg:left-[600px] bottom-[-150px]"
  style={{ animationDelay: "0.5s", width: "90px", height: "90px" }}
  src="https://cdn.jsdelivr.net/gh/jenkinsci/git-plugin@master/images/jenkins-and-git.png"
/>
          <img
            alt="paintbrush"
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s", width: "150px", height: "150px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg"
          />
          <img
            alt="leetcode"
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            style={{ animationDelay: "0.7s", width: "90px", height: "90px" }}
            src="https://styles.redditmedia.com/t5_3mlga/styles/communityIcon_81fgdqfsnbw91.png"
          />
          <img
            alt="code"
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="https://styles.redditmedia.com/t5_381yu/styles/communityIcon_2f7hhwfs5pk31.png"
          />
        </h1>
        <HeroLink />
      </div>
    </>
  );
}

export default Hero;
