import YoutubePlayer from "@/app/lib/videoPlayer";

export default function Product() {
  return (
    <div className="w-full h-screen">
      <section id="Product" className="pt-12 px-8 text-white">
        <div className="flex text-gradient text-lg font-bold pt-5">
          <h1>PRODUCTS CLASSIFICATION</h1>
        </div>

        <div id="main_product_div" className="flex flex-col md:flex-row md:justify-between">
          <div id="content_div" className="flex flex-col">
            <div id="bqp" className="">
              <h1 className="">Biotechnology & Quantum Photonics</h1>
              <div className="font-light">
                <ul className="list-disc ps-4 font-thin">
                  <li>Biosensor Technology – A Game Changer</li>
                  <li>
                    Early disease detection – SPR, Quantum, Optical Sensors & AI
                  </li>
                </ul>
              </div>
            </div>

            <div id="epm" className="">
              <h1 className="">Environmental Protection & Meteorology</h1>
              <div className="font-light">
                <ul className="list-disc ps-4 font-thin">
                  <li>NO2, Humidity Sensors & AI</li>
                  <li>Magneto-optical Sensors</li>
                </ul>
              </div>
            </div>

            <div id="afp" className="">
              <h1 className=" ">Agriculture & Food Protection </h1>
              <div className="font-light">
                <ul className="list-disc ps-4 font-thin">
                  <li>Pesticide Detection & Optics</li>
                  <li>Chemical & Contamination Detection</li>
                </ul>
              </div>
            </div>

            <a className="text-gradient">Read more...</a>
          </div>

          <div id="video_div" className="flex flex-col  items-start pt-2 pb-1">
            <div id="video_and_btn " className="flex ">
              <div
                id="videoframe"
                className=" border-2 border-white relative overflow-hidden h-48 w-52 "
              >
                <YoutubePlayer ht={200} wd={200} />
              </div>
            </div>
            <a className="text-gradient pt-1">Learn more...</a>
          </div>
        </div>
      </section>
    </div>
  );
}
