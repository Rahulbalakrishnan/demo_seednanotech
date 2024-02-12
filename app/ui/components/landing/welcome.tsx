import Image from "next/image";
import * as str from "../../../constants/strings";
import { SocialIcons as socialIcons } from "../../../constants/index.js";

export default function Welcome() {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: 'url("/Image/bg-main.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        userSelect: "none",
      }}
    >
      <section
        id="Welcome"
        className="pt-32  sm:pt-40 md:pt-20 lg:pt-20 w-full "
      >
        <div className=" flex flex-col p-14  text-white ">
          <div className="flex pt-8 ps-0">
            <Image
              src={"/Image/logo.jpg"}
              width={250}
              height={250}
              alt="Logo"
              className="rounded-full  bg-transparent border-2 shadow-2xl border-purple-600 "
            />
          </div>

          <div className="flex px-4 pt-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="mx-2  sm:w-8 sm:h-8"
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col ps-6  pt-4">
            <div className="flex">
              <Image
                src={str.GMAIL_ICON}
                alt={str.GMAIL_ALT}
                width={20}
                height={20}
              />
              <a className="px-2 text-lg">{str.GMAIL_ID}</a>
            </div>

            <div className="flex">
              <Image
                src={str.MOBILE_ICON}
                alt={str.MOBILE_ALT}
                width={20}
                height={20}
              />
              <a className="ps-2 font-light">{str.MOBILE_NO}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
