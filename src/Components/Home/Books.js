import React from "react";
import image from "../../Image/Books/attachment_154724509.jpeg";
import { FaArrowRight } from "react-icons/fa6";

const Books = () => {
  return (
    <main className={`w-full h-full relative`}>
      <div className="w-full pt-[2rem] [@media(min-width:420px)]:pb-[3rem] pb-[2rem]">
        <div className="w-full text-center text-black relative z-10 pb-[30px]">
          <h1 className="[@media(min-width:750px)]:text-[40px] [@media(min-width:420px)]:text-[30px] text-[25px] font-[700] [@media(min-width:750px)]:pb-[10px] pb-[5px] Poppins">
            Books
          </h1>
          <p className="text-[#ffa200] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] font-[500] mx-auto">
            Take A Look At Our Latest Books
          </p>
        </div>
        <div
          className={`w-[98%] h-[100%] flex justify-center items-center mx-auto`}
        >
          <div className=" xl:w-[1230px] w-[96%] relative z-[1] flex flex-col justify-center items-center">
            <div className="flex [@media(min-width:920px)]:flex-row flex-col items-center w-full [@media(min-width:920px)]:justify-center justify-start text-black z-10 py-[1.5rem]">
              <div className="[@media(min-width:920px)]:w-[235px] [@media(min-width:725px)]:w-[80%] w-[100%]  [@media(min-width:725px)]:px-0 [@media(min-width:440px)]:px-[1rem] px-[0.3rem]">
                <div className="[@media(min-width:470px)]:w-[235px] w-[205px] [@media(min-width:470px)]:h-[350px] h-[320px] overflow-hidden flex justify-center items-center mx-0 relative shadow-[0px_0px_4px_0px_#0000002e]">
                  <img
                    src={image}
                    className={`w-[145%] h-[143%] object-cover object-center mx-auto`}
                    alt=""
                  />
                </div>
              </div>
              <div className="[@media(min-width:1240px)]:w-[55%] [@media(min-width:920px)]:w-[65%] [@media(min-width:725px)]:w-[80%] w-[100%] h-full grid items-center [@media(min-width:725px)]:px-0 [@media(min-width:440px)]:px-[1rem] px-[0.3rem] text-black text-left  [@media(min-width:920px)]:!mt-[0px] [@media(min-width:560px)]:mt-[2rem] mt-[1.5rem] relative [@media(min-width:920px)]:ml-[2rem] ml-0">
                <div className="w-full h-auto">
                  <div className="w-full [@media(min-width:560px)]:pb-[15px] pb-[12px]">
                    <h1 className="[@media(min-width:920px)]:!text-[25px] [@media(min-width:560px)]:text-[23px] [@media(min-width:460px)]:text-[20px] text-[17px] font-[700]  WorkSans text-[#313030] pb-[8px] ">
                      The Off-Grid Living Lifestyle
                    </h1>
                    <p className="[@media(min-width:560px)]:text-[18px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[600] text-[#000000c7] KarlaFont">
                      - A Step-By-Step Guide to Self-Sufficiency, Environmental
                      Sustainability, Cost Efficiency and Survival Preparedness
                    </p>
                  </div>
                  <p className="[@media(min-width:560px)]:text-[18px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[400] text-[#000000d9] [@media(min-width:560px)]:leading-[30px] [@media(min-width:460px)]:leading-[25px] leading-[23px] pb-[15px] KarlaFont">
                    This book is a comprehensive overview of transitioning to
                    off-grid living. It includes overviews of sustainable energy
                    solutions, water management, food production / growing,
                    shelter construction and waste management. This book aims to
                    empower people to start their off-grid journey and gives
                    detailed instructions in each topic for the transition.
                  </p>
                  <button className="text-[#ffa200] hover:text-white bg-transparent hover:bg-[#ffa200] [@media(min-width:920px)]:w-[150px] [@media(min-width:560px)]:w-[145px] [@media(min-width:400px)]:w-[140px] w-[139px] flex items-center border-[2px] border-[#ffa200] py-[7px] px-[25px] rounded-[5px] transition-[0.3s] relative booksMoreInfoArrowAnimation">
                    <span className="[@media(min-width:920px)]:text-[17px] [@media(min-width:560px)]:text-[15px] text-[14px] font-[500]">
                      More Info
                    </span>
                    <FaArrowRight className="[@media(min-width:920px)]:text-[16px] [@media(min-width:560px)]:text-[15px] [@media(min-width:460px)]:text-[14px] text-[13px] absolute right-[28px] [@media(min-width:560px)]:top-[30%] top-[33%] booksMoreInfoArrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex [@media(min-width:920px)]:flex-row flex-col items-center w-full [@media(min-width:920px)]:justify-center justify-start text-black z-10 py-[1.5rem]">
              <div className="[@media(min-width:920px)]:w-[235px] [@media(min-width:725px)]:w-[80%] w-[100%]  [@media(min-width:725px)]:px-0 [@media(min-width:440px)]:px-[1rem] px-[0.3rem]">
                <div className="[@media(min-width:470px)]:w-[235px] w-[205px] [@media(min-width:470px)]:h-[350px] h-[320px] overflow-hidden flex justify-center items-center mx-0 relative shadow-[0px_0px_4px_0px_#0000002e]">
                  <img
                    src={image}
                    className={`w-[145%] h-[143%] object-cover object-center mx-auto`}
                    alt=""
                  />
                </div>
              </div>
              <div className="[@media(min-width:1240px)]:w-[55%] [@media(min-width:920px)]:w-[65%] [@media(min-width:725px)]:w-[80%] w-[100%] h-full grid items-center [@media(min-width:725px)]:px-0 [@media(min-width:440px)]:px-[1rem] px-[0.3rem] text-black text-left  [@media(min-width:920px)]:!mt-[0px] [@media(min-width:560px)]:mt-[2rem] mt-[1.5rem] relative [@media(min-width:920px)]:ml-[2rem] ml-0">
                <div className="w-full h-auto">
                  <div className="w-full [@media(min-width:560px)]:pb-[15px] pb-[12px]">
                    <h1 className="[@media(min-width:920px)]:!text-[25px] [@media(min-width:560px)]:text-[23px] [@media(min-width:460px)]:text-[20px] text-[17px] font-[700]  WorkSans text-[#313030] pb-[8px] ">
                      The Off-Grid Living Lifestyle
                    </h1>
                    <p className="[@media(min-width:560px)]:text-[18px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[600] text-[#000000c7] KarlaFont">
                      - A Step-By-Step Guide to Self-Sufficiency, Environmental
                      Sustainability, Cost Efficiency and Survival Preparedness
                    </p>
                  </div>
                  <p className="[@media(min-width:560px)]:text-[18px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[400] text-[#000000d9] [@media(min-width:560px)]:leading-[30px] [@media(min-width:460px)]:leading-[25px] leading-[23px] pb-[15px] KarlaFont">
                    This book is a comprehensive overview of transitioning to
                    off-grid living. It includes overviews of sustainable energy
                    solutions, water management, food production / growing,
                    shelter construction and waste management. This book aims to
                    empower people to start their off-grid journey and gives
                    detailed instructions in each topic for the transition.
                  </p>
                  <button className="text-[#ffa200] hover:text-white bg-transparent hover:bg-[#ffa200] [@media(min-width:920px)]:w-[150px] [@media(min-width:560px)]:w-[145px] [@media(min-width:400px)]:w-[140px] w-[139px] flex items-center border-[2px] border-[#ffa200] py-[7px] px-[25px] rounded-[5px] transition-[0.3s] relative booksMoreInfoArrowAnimation">
                    <span className="[@media(min-width:920px)]:text-[17px] [@media(min-width:560px)]:text-[15px] text-[14px] font-[500]">
                      More Info
                    </span>
                    <FaArrowRight className="[@media(min-width:920px)]:text-[16px] [@media(min-width:560px)]:text-[15px] [@media(min-width:460px)]:text-[14px] text-[13px] absolute right-[28px] [@media(min-width:560px)]:top-[30%] top-[33%] booksMoreInfoArrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;
