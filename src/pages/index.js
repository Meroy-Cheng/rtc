import * as React from "react";

const PageData = {
  intro1:
    "逢甲大學搶先全臺灣頂尖大學，獲得 Apple 認證，成立 Apple RTC 區域教育培訓中心（Apple Regional Training Center）。RTC 是蘋果公司專門設立的一系列培訓中心，旨在透過提供各種教育資源與專業培訓，來提升教育工作者對於蘋果技術的瞭解與應用能力。逢甲大學 Apple RTC 成立之後，也是全臺唯一可以辦理 Apple 認證課程以及「App 移動應用創新賽」的大學。",
  intro2:
    "學習程式設計已成為全球趨勢，希望藉由逢甲 RTC 的成立，讓學生都能透過課程，培養程式設計的基本能力與邏輯觀念。因此相當感謝 Apple 公司以及晶盛科技，與本校一起邁向這個扎根程式教育的理想。",
  WWDC: "2022 蘋果公司全球開發者大會 ( Apple Worldwide Developers Conference, WWDC )，全球頂尖好手朝聖的學生挑戰賽(Swift Student Challenge)又開獎了！逢甲資訊三甲魯敬元同學，同時也是 iOS Club 第五屆活動長，以《Music Learning》脫穎而出獲獎。iOS Club 在學長姐傳承下，年年參賽、年年得獎，不僅為逢甲爭光，也讓全球程式語言菁英刮目相看，Taiwan can win！",
  teachers: [
    {
      name: "許芳榮",
      img: "https://i.imgur.com/5ZQ6Z9e.jpg",
      email: "frhsu@fcu.edu.tw",
      course: "iOS App 程式設計",
    },
    {
      name: "許芳榮",
      img: "https://i.imgur.com/5ZQ6Z9e.jpg",
      email: "frhsu@fcu.edu.tw",
      course: "iOS App 程式設計",
    },
    {
      name: "許芳榮",
      img: "https://i.imgur.com/5ZQ6Z9e.jpg",
      email: "frhsu@fcu.edu.tw",
      course: "iOS App 程式設計",
    },
    {
      name: "許芳榮",
      img: "https://i.imgur.com/5ZQ6Z9e.jpg",
      email: "frhsu@fcu.edu.tw",
      course: "iOS App 程式設計",
    },
  ],
};

const Wave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F4F4F4"
        fill-opacity="1"
        d="M0,192L80,208C160,224,320,256,480,272C640,288,800,288,960,261.3C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  );
};

const WaveUpsideDown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F4F4F4"
        fillOpacity="1"
        d="M0,128L80,154.7C160,181,320,235,480,261.3C640,288,800,288,960,272C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  );
};

const TeacherDetail = ({ name, img, email, course }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <img src={img} className="w-32 h-32 rounded-full" />
      <div className="text-xl font-bold">{name} 教授</div>
      <div className="text-lg">信箱：{email}</div>
      <div className="text-lg">教授課程：{course}</div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <div className="font-serif">
      <nav className="flex w-full shadow-md items-center">
        <div className="pl-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-16 h-16"
          >
            <path
              fill="currentColor"
              d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z"
            />
          </svg>
        </div>
        <h1 className="p-6 text-3xl">Regional Training Center</h1>
      </nav>
      <main>
        <img
          className="w-full h-96 object-cover"
          src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/3220bd65-0dc4-4cbd-78fc-622cecd71500/public"
        ></img>

        <div className="px-4 sm:px-16 md:px-28 lg:px-48 xl:px-56 2xl:px-64 py-32">
          <p className="text-2xl leading-relaxed py-4">{PageData["intro1"]}</p>
          <p className="text-2xl leading-relaxed py-4">{PageData["intro2"]}</p>
        </div>

        {/* 教授資源 */}
        <Wave />

        <div style={{ backgroundColor: "#F4F4F4" }} className="px-52 py-16">
          <h2 className="text-center text-4xl">教授資源</h2>
          <div className="h-5" />
          <div className="grid grid-cols-4 gap-4">
            {PageData["teachers"].map((teacher, index) => {
              return (
                <TeacherDetail
                  key={index}
                  name={teacher.name}
                  img={teacher.img}
                  email={teacher.email}
                  course={teacher.course}
                />
              );
            })}
          </div>
        </div>

        <WaveUpsideDown />
        {/* end 教授資源 */}

        <div className="py-16 px-2 sm:px-10 md:px-16 lg:px-28 xl:px-36">
          <div className="mx-2 md:mx-12 flex flex-col lg:flex-row py-4 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
            <div className="flex flex-col gap-4 xl:w-5/6">
              <h2 className="text-3xl font-bold break-normal">WWDC</h2>
              <p className="py-10 break-normal">{PageData["WWDC"]}</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.fcu.edu.tw/news/2022052702/"
                  className="text-blue-800 text-xl"
                >
                  了解更多 {">"}{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <img
                className="object-contain w-3/4 ml-auto"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/6565bd3a-00d7-401d-e80a-2a7219033c00/public"
              />
            </div>
          </div>
        </div>

        <div className="py-16 px-2 sm:px-10 md:px-16 lg:px-28 xl:px-36">
          <div className="mx-2 md:mx-12 flex flex-col lg:flex-row py-4 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
            <div className="flex flex-col">
              <img
                className="object-contain w-3/4 mr-auto"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/6a3804dc-581b-41b5-6859-9f15866b7900/public"
              />
            </div>
            <div className="flex flex-col gap-4 xl:w-5/6">
              <h2 className="text-3xl font-bold break-normal">
                APP 移動應用創新賽
              </h2>
              <p className="py-10 break-normal">
                APP 移動應用創新賽是為台灣校園團隊揚名大中華區的絕佳舞台，以 iOS
                系統設計開發，設計出極具創意與高實用性的APP作品，本校資訊系「501戰隊」團隊的「安心出遊，平安回家」作品從1,690件參賽作品中，過關斬將，最終獲得三等獎；另外本校iOS
                Club社員也在此次競賽中表現優異，「美賣」和「無痕地球」均獲得佳作的好成績。
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.fcu.edu.tw/news/2022091203/"
                  className="text-blue-800 text-xl"
                >
                  了解更多 {">"}{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>逢甲大學 RTC</title>;
