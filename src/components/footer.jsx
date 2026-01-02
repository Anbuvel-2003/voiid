import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black lg:!p-20 md:!p-15 !p-10">
      <div className="!pb-10 flex ">
        <div className="w-[100%]">
          <div>
            <h3 className="text-[#B8BFC6] uppercase text-[18px] font-black !pb-3">
              V<span className="text-[#42C10F]">o</span>iid
            </h3>
          </div>
          <div className="">
            <p className="text-[16px] text-[#6e6e6e]">
              We provide end-to-end digital solutions tailored to modern
              business needs, combining technology and marketing expertise under
              one roof. Our software development services cover everything from
              intuitive UI/UX design, website and mobile app development, to
              thorough testing and reliable DevOps support, ensuring
              performance, scalability, and long-term stability. With a focus on
              innovation and user experience, we build digital products that
              deliver real value and enhance business efficiency. At the same
              time, our digital marketing solutions empower brands to grow
              online through SEO optimization, social media strategies, engaging
              content, and result-driven paid campaigns. We help businesses
              boost visibility, generate leads, and establish a strong presence
              across multiple digital platforms. By integrating development and
              marketing, we deliver a complete ecosystem that not only creates
              powerful applications but also ensures they reach the right
              audience. Our mission is simple — to help businesses build, grow,
              and thrive online with authenticity, creativity, and impact.
            </p>
          </div>
        </div>
      </div>
      {/* quick links */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="">
          <div className="">
            <div>
              <h3 className="text-[#B8BFC6] font-semibold text-[18px] uppercase">
                Quick Links
              </h3>
            </div>
            <div className="!py-2">
              <a href="/">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  home
                </h2>
              </a>
              <a href="/portfolio">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  Portfolio
                </h2>
              </a>
              <a href="/gallery">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  blogs
                </h2>
              </a>
              <a href="/aboutus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  About Us
                </h2>
              </a>
              <a href="/contactus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F] ">
                  Contact Us
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div>
              <h3 className="text-[#B8BFC6] font-semibold text-[18px] uppercase">
                Software Development
              </h3>
            </div>
            <div className="!py-2">
              <a href="/">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  UI/UX Design
                </h2>
              </a>
              <a href="/portfolio">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  Website Development
                </h2>
              </a>
              <a href="/aboutus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  Mobile App Development
                </h2>
              </a>
              <a href="/contactus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F] ">
                  Testing Services
                </h2>
              </a>
              <a href="/contactus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F] ">
                  DevOps Services
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="">
            <div>
              <h3 className="text-[#B8BFC6] font-semibold text-[18px] uppercase">
                Digital Marketing
              </h3>
            </div>
            <div className="!py-2">
              <a href="/">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  SEO Optimization
                </h2>
              </a>
              <a href="/portfolio">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  Social Media Marketing
                </h2>
              </a>
              <a href="/aboutus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F]">
                  Content Marketing
                </h2>
              </a>
              <a href="/contactus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F] ">
                  Google Ads / PPC
                </h2>
              </a>
              <a href="/contactus">
                <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 hover:text-[#42C10F] ">
                  Email Campaigns
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className=" ">
          <div>
            <div className="">
              <h3 className="text-[#B8BFC6] font-semibold text-[18px] uppercase">
                Address
              </h3>
            </div>
            <div className="!py-2">
              <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 ">
                H-22, Peelamedu,
                <br />
                HUDCO Colony, Coimbatore,
                <br />
                Tamil Nadu-641004
              </h2>
              <h2 className="text-[16px] capitalize text-[#6e6e6e] !pb-2 ">
                Ph : +91 6379108978
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* saprator */}
        <div className="h-[1px] w-[100%] bg-[#6e6e6e] !my-5"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex gap-4 items-center ">
            <FaFacebookF
              className="text-[#6e6e6e]  hover:text-[#42C10F]"
              size={25}
            />
            <FaInstagram
              className="text-[#6e6e6e]  hover:text-[#42C10F]"
              size={25}
            />
            <FaLinkedin
              className="text-[#6e6e6e]  hover:text-[#42C10F]"
              size={25}
            />
            <IoMdMail
              className="text-[#6e6e6e]  hover:text-[#42C10F]"
              size={25}
            />
          </div>
          <div>
            <div className="flex flex-row items-center !mt-5 !gap-5">
              <a
                href="/privacy"
                className="text-[#6e6e6e] hover:text-[#42C10F] hover:underline cursor-pointer"
              >
                Privacy Policy
              </a>
              <p className="text-[#6e6e6e]">|</p>
              <a
                href="/terms"
                className="text-[#6e6e6e] hover:text-[#42C10F] hover:underline cursor-pointer"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="bg-transparent h-auto lg:h-[50px] flex flex-col lg:flex-row justify-center items-center text-[#6E6E6E] !text-[14px] sm:!text-[16px] !px-6 !py-4">
          <h4 className="text-[#6e6e6e] ">
            © 2025{" "}
            <a href="/" className="text-[#B8BFC6] hover:text-[#42C10F]">
              V<span className="text-[#42C10F]">O</span>IID .
            </a>{" "}
            All Rights Reserved.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
