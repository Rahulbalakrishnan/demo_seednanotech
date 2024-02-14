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
    <div className="w-full h-screen" style={{ userSelect: "none" }}>
      <section id="Project" className=" pt-12 px-8 text-white">
        <div className=" text-gradient text-lg font-bold pt-9 ">
          <h1 className="pb-4 md:items-center  lg:pb-8 lg:text-2xl lg:pt-5">
            PROJECT PORTFOLIO
          </h1>
        </div>

        <div id="Main_project_div" className="">
          {/* groups  */}
          <div id="groups" className="flex flex-col md:flex-row ">
            {/* item */}

            {projectDetails.map((projectDetail, index) => (
              <div
                key={index}
                id="item"
                className="flex flex-col py-2 md:px-2 md:pt-24 lg:pt-16 lg:mx-10 "
              >
                {/* Lower than xl size contianer - start */}
                <div
                  className=" xl:hidden flex flex-col border-4 border-accent transform transition-transform hover:scale-105 group relative overflow-hidden cursor-pointer"
                  style={{ maxWidth: "300px", width: "100%" }}
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  <Image
                    src={projectDetail.src}
                    alt={projectDetail.alt}
                    width={300}
                    height={10}
                    className=" h-40 cursor-pointer group-hover:scale-125 object-cover transition-all duration-500  "
                  />

                  <div
                    id="item-content"
                    className=" flex  absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-500 z-50"
                  >
                    <span className="text-gradient font-bold text-lg px-4 ">
                      {projectDetail.title}
                    </span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-12  transition-all duration-700 z-50">
                    <h1 className="text-sm font-normal text-start px-4  text-white">
                      {projectDetail.content}
                    </h1>
                  </div>
                </div>
                {/* Lower than xl size contaianer - end */}

                {/* Higher than xl size container - start */}
                <div
                  className="xl:block hidden border-4 border-accent  transform transition-transform hover:scale-105 group relative overflow-hidden cursor-pointer"
                  style={{ maxWidth: "500px", width: "100%" }}
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                  <Image
                    src={projectDetail.src}
                    alt={projectDetail.alt}
                    width={400}
                    height={100}
                    className="h-66 cursor-pointer group-hover:scale-125 object-cover transition-all duration-500"
                  />

                  <div className="absolute -bottom-full left-12 lg:group-hover:bottom-28 md:group-hover:bottom-28 transition-all duration-500 z-50">
                    <span className="text-gradient font-bold text-lg ">
                      {projectDetail.title}
                    </span>
                  </div>

                  <div className="absolute -bottom-full left-12 lg:group-hover:bottom-20 md:group-hover:bottom-20 transition-all duration-700 z-50">
                    <h1 className="text-sm font-normal   text-white">
                      {projectDetail.content}
                    </h1>
                  </div>
                </div>

                {/* Higher than xl size container - start */}
              </div>
            ))}

            {/* item */}

            {/* group -end */}
          </div>
        </div>
      </section>
    </div>
  );
}
