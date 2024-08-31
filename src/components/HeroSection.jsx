import React from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

const HeroSection = () => {
  return (
    <section className="hero themeChange grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      {/* Profile Image Section for Small Devices */}
      <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
        <ProfileImage />
      </div>

      {/* Text Section */}
      <div className="textColor order-2 flex-1 space-y-6 md:order-1 md:col-span-7">
        <h4 className="text-2xl font-bold md:text-2xl">
          CEO, Birds of Eden|Adon Venture General Trading LLC
        </h4>
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello I'm{" "}
          <span className="text-green-500">Talat Md. Tawfiq Elahi</span>
        </h1>
        <p className="text-lg md:text-xl">
          Talat Md. Tawfiq Elahi is the visionary leader and CEO of Birds of
          Eden Software Firm, a cutting-edge technology company focused on
          providing innovative software solutions. He also heads Adon Venture
          General Trading LLC, a dynamic enterprise with a broad scope in the
          international trading sector. With extensive expertise in business
          strategy, software development, and corporate management, Talat has
          played a key role in driving both companies towards growth and
          success. His leadership emphasizes innovation, client satisfaction,
          and a commitment to excellence, making him a trusted name in the
          industry. Under his guidance, Birds of Eden has delivered exceptional
          digital products while Adon Venture continues to thrive in the global
          marketplace.
        </p>
        <Button text="Download CV" />
        <div className="social-icons mt-4 flex space-x-4">
          {/* Social media icons can be added here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
