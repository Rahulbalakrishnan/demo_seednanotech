import YoutubePlayer from "@/app/lib/videoPlayer";
import { ProductDetails as productDetails } from "@/app/constants";
import * as str from "../../../constants/strings";
import Link from "next/link";

export default function Product() {
  return (
    <div className="w-full h-screen " style={{ userSelect: "none" }}>
      <section id="Product" className=" pt-12 px-8 text-white">
        <div className=" text-gradient text-lg font-bold pt-9 ">
          <h1 className=" z-10 pb-2 md:items-center  lg:pb-8 lg:text-2xl lg:pt-5">
            {str.PRODUCT_SEC_HEADER}
          </h1>
        </div>
        <div
          id="main_product_div"
          className="flex flex-col lg:flex-row lg:justify-between"
        >
          <div id="content_div" className="flex flex-col">
            {productDetails.map((product, index) => (
              <div key={index} id="main_div" className="lg:py-2">
                <h1 className="lg:text-lg">{product.title}</h1>
                <div className="font-light">
                  <ul className="list-disc ps-4 font-thin">
                    <li>{product.firstData}</li>
                    <li>{product.secondData}</li>
                  </ul>
                </div>
              </div>
            ))}
            <Link
              key={"product_key"}
              href={str.PRODUCTS_ROUTE}
              className="text-gradient ps-4 lg:text-lg"
            >
              {str.BTN_ONE}
            </Link>
          </div>

          <div id="video_div" className="flex flex-col  pt-1  ">
            <div id="video_and_btn " className="">
              <div className="block lg:hidden">
                <YoutubePlayer ht={190} wd={300} />
                <div className="pt-2">
                  <Link
                    key={"small_key"}
                    href={str.YT_HREF}
                    target="_blank"
                    className="text-gradient ps-4 lg:text-lg"
                  >
                    {str.BTN_TWO}
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block ">
                <YoutubePlayer ht={315} wd={600} />
                <div className="pt-2">
                  <Link
                    key={"large_key"}
                    href={str.YT_HREF}
                    target="_blank"
                    className="text-gradient ps-4 lg:text-lg"
                  >
                    {str.BTN_TWO}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
