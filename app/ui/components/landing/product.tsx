export default function Product() {
  return (
    <div className="w-full h-screen">
      <section id="Product" className="pt-16 px-8">
        <div className="flex flex-col  ">
          <div id="product_classification" className="flex">
            <div>
              <h1 className="text-gradient font-bold pt-5">
                PRODUCTS CLASSIFICATION
              </h1>
              <h3 className="text-lg pt-2">
                Biotechnology & Quantum Photonics
              </h3>
              <ul>
                <li className="text-sm">
                  Biosensor Technology – A Game Changer
                </li>
                <li className="text-sm">
                  Early disease detection – SPR, Quantum, Optical Sensors & AI
                </li>
              </ul>
              <h3 className="text-lg">
                Environmental Protection & Meteorology
              </h3>
              <ul>
                <li>NO2, Humidity Sensors & AI</li>
                <li>Magneto-optical Sensors</li>
              </ul>
              <h3>Agriculture & Food Protection</h3>
              <ul>
                <li>Pesticide Detection & Optics</li>
                <li>Chemical & Contamination Detection</li>
              </ul>
            </div>
          </div>
          <div id="product_video" className="flex">
            <div>
              <h1 className="text-black font-bold">hello_video</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
