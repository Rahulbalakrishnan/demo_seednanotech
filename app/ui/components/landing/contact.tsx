import Image from "next/image";
import * as str from "../../../constants/strings";
import { SocialIcons as socialIcons } from "@/app/constants";
import { ContactDetails as contactDetails } from "@/app/constants";
export default function Contact() {
  return (
    <div className="w-full h-screen " style={{ userSelect: "none" }}>
      <section id="Contact" className="pt-20 px-8 text-white">
        <div className="text-gradient text-lg font-bold pt-1">
          <h1 className="z-10 pb-10 md:text-center md:pt-10 md:pb-6">
            {str.CONTACT_SEC_HEADER}
          </h1>
        </div>

        <div id="Main_contact_div" className="flex flex-col   ">
          <div
            id="contact_div"
            className="flex  flex-col items-center pb-16 md:flex-row md:mx-2 md:justify-evenly md:pt-10 "
          >
            {contactDetails.map((contactDetail, index) => (
              <div
                key={index}
                id="content_div"
                className="border-purple-700 border-2 bg-fuchsia-950 my-2 p-4 flex flex-col items-center"
                style={{
                  maxHeight: "300px",
                  maxWidth: "300px",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src={contactDetail.src}
                  alt={contactDetail.alt}
                  width={50}
                  height={50}
                  className=""
                />
                <h1 className="mb-[-0.5rem]">{contactDetail.title}</h1>
                <h1 className="mb-[-0.5rem]">{contactDetail.info}</h1>
              </div>
            ))}
          </div>

          <div id="connect_div ">
            <h1 className="text-center text-gradient font-bold md:pt-10 ">
            {str.CONTACT_SEC_FOOTER}
            </h1>
            <div id="social_icons" className="flex justify-center pt-1">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    className="w-8 h-8 mx-1 "
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
