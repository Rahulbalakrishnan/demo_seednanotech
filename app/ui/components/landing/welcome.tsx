import Image from "next/image";
import * as str from "../../../constants/strings";
import { SocialIcons as socialIcons } from "../../../constants/index.js";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants.js";

export default function Welcome() {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: 'url("/Assets/bg-main.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        userSelect: "none",
      }}
    >
      {/* Welcome page */}
      <section id="Welcome" className="pt-32  w-full  ">
        <div
          id="container"
          className="flex flex-col items-center pt-10 sm:items-start sm:ps-8"
        >
          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.3)}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            id="image"
            className="flex"
          >
            <Image
              src={str.COMPANY_LOGO_MAIN}
              width={250}
              height={250}
              alt="Logo"
              className="rounded-full  bg-transparent border-2 shadow-2xl border-purple-600 "
            />
          </motion.div>
          <div
            id="social_details"
            className="flex  flex-col items-center sm:items-start sm:ps-3 "
          >
            <div id="social_icons" className="flex  pt-4 ">
              {socialIcons.map((icon, index) => (
                <motion.a
                  initial="hidden"
                  variants={fadeIn("up", 0.4)}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
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
                    className="w-8 h-8 mx-1"
                  />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial="hidden"
              variants={fadeIn("up", 0.5 )}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              id="gmail"
              className="flex pt-2  text-white font-semibold text-lg sm:ps-1"
            >
              <Image
                src={str.GMAIL_ICON}
                alt={str.GMAIL_ALT}
                width={20}
                height={20}
              />
              <a className="ps-2">{str.GMAIL_ID}</a>
            </motion.div>

            <motion.div
              initial="hidden"
              variants={fadeIn("up", 0.6)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              id="phone"
              className=" flex text-white  font-semibold text-lg sm:ps-1"
            >
              <Image
                src={str.MOBILE_ICON}
                alt={str.MOBILE_ALT}
                width={20}
                height={20}
              />
              <a className="ps-2">{str.MOBILE_NO}</a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
