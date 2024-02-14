import Image from "next/image";

export default function Project() {
  const projectDetails = [
    {
      src: "/Assets/Images/Images_project/project_item1.jpg",
      alt: "item1",
      title: "Bio-sensor:",
      content: "Improved Bio-sensor: Magneto-optics is on the rise.",
    },
    {
      src: "/Assets/Images/Images_project/project_item2.jpg",
      alt: "item2",
      title: "Micro-structure:",
      content: "Where Micro-structure matters in magneto-optics sensing.",
    },
    {
      src: "/Assets/Images/Images_project/project_item3.jpg",
      alt: "item3",
      title: "Limits:",
      content: "Where sensitivity and detection limit, reach their limits.",
    },
  ];
  return (
    <div className="w-full h-screen " style={{ userSelect: "none" }}>
      <section id="Project" className=" pt-12 px-8 text-white">
        <div className=" text-gradient text-lg font-bold pt-9 ">
          <h1 className="z-10 pb-5 md:items-center lg:text-2xl lg:pb-8  lg:pt-5">
            PROJECT PORTFOLIO
          </h1>
        </div>

        <div id="Main_project_div" className="flex flex-col ">
          {/* groups  */}
          <div id="groups" className="flex flex-col md:flex-row ">
            {/* item */}

            {projectDetails.map((projectDetail, index) => (
              <div
                key={index}
                id="item"
                className="flex flex-col py-3 md:px-2 md:pt-24 lg:pt-16 lg:mx-10 "
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

                  <div className="flex absolute bottom-20 transition-all duration-500 z-20">
                    <h1 className="text-gradient font-bold text-lg px-4 transition-all duration-500 transform group-hover:translate-y-[-50%] ">
                      {projectDetail.title}
                    </h1>
                  </div>
                  <div className="absolute bottom-12 transition-all duration-700 z-20">
                    <h1 className="text-sm font-normal text-start px-4 text-white transition-all duration-500 transform group-hover:translate-y-[-30%]">
                      {projectDetail.content}
                    </h1>
                  </div>
                </div>

                {/* Lower than xl size contaianer - end */}

                {/* Higher than xl size container - start */}
                <div
                  className="xl:block hidden border-2 border-accent  transform transition-transform hover:scale-105 group relative overflow-hidden cursor-pointer hover:group-hover"
                  style={{ maxWidth: "500px", width: "100%" }}
                >
                  <div className="bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>

                  <Image
                    src={projectDetail.src}
                    alt={projectDetail.alt}
                    width={400}
                    height={100}
                    className="h-66 cursor-pointer scale-10 object-cover transition-all duration-500"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />

                  <div className="absolute  left-12 bottom-28 transition-all duration-500 z-20">
                    <h1 className="text-gradient font-bold text-lg  transition-all duration-500 transform group-hover:translate-y-[-50%]">
                      {projectDetail.title}
                    </h1>
                  </div>

                  <div className="absolute left-12  bottom-20 transition-all duration-700 z-20">
                    <h1 className="text-sm font-normal   text-white transition-all duration-500 transform group-hover:translate-y-[-30%]">
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
