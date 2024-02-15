import Image from "next/image";
import { ProjectDetails as projectDetails } from "@/app/constants";
import * as str from "../../../constants/strings";
export default function Blogs() {
  return (
    <div className="w-full h-screen" style={{ userSelect: "none" }}>
      <section id="Project" className=" pt-12 px-8 text-white">
        <div className=" text-gradient text-lg font-bold pt-9 ">
          <h1 className="z-10 pb-5 md:items-center  lg:pb-8 lg:text-2xl lg:pt-5">
            {str.PROJECT_SEC_HEADER}
          </h1>
        </div>

        <div id="Main_project_div" className="">
          {/* groups  */}
          <div
            id="groups"
            className="flex flex-col md:flex-row justify-center items-center "
          >
            {/* item */}

            {projectDetails.map((projectDetail, index) => (
              <div
                key={index}
                id="item"
                className="flex flex-col py-3 md:px-2 md:pt-24 lg:pt-16 lg:mx-10  "
              >
                {/* Lower than xl size contianer - start */}
                <div
                  className="xl:hidden flex flex-col border-2 border-accent transform transition-transform hover:scale-105 group relative overflow-hidden cursor-pointer hover:group-hover"
                  style={{ maxWidth: "300px", width: "100%" }}
                >
                  <div className="bg-black/70 w-full h-full absolute z-10 transition-all duration-300 "></div>
                  <Image
                    src={projectDetail.src}
                    alt={projectDetail.alt}
                    width={300}
                    height={10}
                    className="h-40 cursor-pointer scale-10 object-cover transition-all duration-500"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />

                  <div className=" px-2 flex  flex-col absolute  text-start transition-all duration-500 z-20">
                    <h1 className="text-gradient  font-bold text-lg  text-start pt-16  transition-all duration-500 transform group-hover:translate-y-[-10%]">
                      {projectDetail.title}
                    </h1>
                    <h1 className="text-white  text-sm  text-start transition-all duration-500 transform group-hover:translate-y-[-30%] ">
                      {projectDetail.content}
                    </h1>
                  </div>
                </div>

                {/* Lower than xl size contaianer - end */}

                {/* Higher than xl size container - start */}
                <div
                  className="hidden xl:flex flex-col border-2 border-accent transform transition-transform hover:scale-105 group relative overflow-hidden cursor-pointer hover:group-hover "
                  style={{ maxWidth: "300px", width: "100%" }}
                >
                  <div className="bg-black/70 w-full h-full absolute z-10 transition-all flex  duration-300 "></div>
                  <Image
                    src={projectDetail.src}
                    alt={projectDetail.alt}
                    width={300}
                    height={10}
                    className="h-40 cursor-pointer scale-10 object-cover transition-all duration-500"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />

                  <div className="px-2 flex flex-col absolute  text-start transition-all duration-500 z-20">
                    <h1 className="text-gradient  font-bold text-lg text-start pt-16  transition-all duration-500 transform group-hover:translate-y-[-10%]">
                      {projectDetail.title}
                    </h1>
                    <h1 className=" text-white text-sm text-start transition-all duration-500 transform group-hover:translate-y-[-30%] ">
                      {projectDetail.content}
                    </h1>
                  </div>
                </div>
                {/* Higher than xl size container - end */}
              </div>
            ))}
            {/* group -end */}
          </div>
        </div>
      </section>
    </div>
  );
}
