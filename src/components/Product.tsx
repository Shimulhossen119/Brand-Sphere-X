import amazonLogo from "../assets/amazon1.png";
import La from "../assets/Lal.jpg";
import Wow from "../assets/COLOR.jpg";
import Medicube from "../assets/Medicube.jpg";
import Title from "./Title";
import EOS from "../assets/EOS.jpg";
import Mighty from "../assets/Mighty.jpg";
import ClenSkin from "../assets/CleanSkin.jpg";

export default function Product() {
  return (
    <section
      id="beauty-personal-care"
      className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <Title
          title="Products"
          heading="Premium & Reliable Products for Everyday Use"
          description="Expertly crafted for your everyday needs. Built to last, designed to impress. Experience the quality you truly deserve."
        />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          
          * {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 auto-rows-max">
          {/* card 1 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={Wow}
                alt="Lal"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 30.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                COLOR WOW Dream Coat – Anti-Humidity Frizz Control Spray for
                Glass Hair
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Say goodbye to frizz and hello to flawless shine 🌟! COLOR WOW
                Dream Coat is an award-winning anti-humidity treatment that
                smooths, protects, and delivers silky, glass-like hair for up to
                3–4 washes. With built-in heat protection 🔥, it keeps your
                style sleek, shiny, and humidity-proof.
              </p>

              <a href="https://amzn.to/4j0ligb" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/4j0ligb" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product Details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={La}
                alt="Lal"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 24.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                🌿 La Roche-Posay Face Moisturizers
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                , La Roche-Posay is usually the first name mentioned. Originally
                a French pharmacy brand
              </p>

              <a href="https://amzn.to/3U8MLCb" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/3U8MLCb" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 3 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={Medicube}
                alt="Medicube"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 18.90
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                medicube Toner Pads Zero Pore Pad 2.0 for Exfoliation and Pore
                Care
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Dual-Textured Facial Pad with 4.5% AHA Lactic Acid, 0.45% BHA
                Salicylic Acid - For All, Korean Skin Care, 70 Pads, 1 Pack
              </p>

              <a href="https://amzn.to/3TFWyj2" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/3TFWyj2" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 4 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={EOS}
                alt="EOS"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 9.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                eos Shea Better Body Lotion- Vanilla Cashmere, 24-Hour Moisture,
                16 fl oz
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Natural Shea Butter & Oil, Whipped Vanilla & Caramel, Lasting
                Hydration, 100% Vegan & Cruelty-Free, Apply to Dry Skin
              </p>

              <a href="https://amzn.to/3W8MnUP" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/3W8MnUP" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 5 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={Mighty}
                alt="Mighty"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 11.97
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Mighty Patch Hero Cosmetics Original Nighttime Acne Pimple
                Patches, 36 Ct
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                #1 Hydrocolloid Acne Patches, Shrinking Zits & Whiteheads in 1
                Use, Spot Treatment, Pimple Stickers for Face
              </p>

              <a href="https://amzn.to/471LYpG" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/471LYpG" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product detailst</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 6 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={ClenSkin}
                alt="Clean Skin Club"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 17.97
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Clean Skin Club Clean Towels XL®
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                100% USDA Biobased Face Towel, Disposable Face Towelette, Eczema
                Association Accepted, Makeup Remover Dry Wipes, Ultra Soft, 1
                Pack, 50 Ct
              </p>

              <a href="https://amzn.to/3Vybnok" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/3Vybnok" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </section>
  );
}
