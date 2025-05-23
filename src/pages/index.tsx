import Image from "next/image";

const Home = () => {
  return (
    <main className="relative mx-auto min-w-80 max-w-md bg-red-400">
      {/* 이미지, 말풍선 텍스트 */}
      <section className="relative mx-auto h-[2081px] w-[375px]">
        <Image src={"/background.png"} alt="이미지" width={375} height={2081} />
        {/* 첫번째 말풍선 */}
        <div className="text-md absolute left-[70px] top-[658px] inline-block text-black">
          <div className="flex flex-col items-center justify-center">
            <p>이제 본격적으로</p>
            <p>OO님의 사주팔자를</p>
            <p>분석해볼 차례네요.</p>
          </div>
        </div>
        {/* 두번째 말풍선 */}
        <div className="text-md absolute left-[62px] top-[1023px] inline-block text-black">
          <div className="flex flex-col items-center justify-center">
            <p>제가 oo님의 사주를</p>
            <p>보기 쉽게 표로 정리했어요</p>
          </div>
        </div>
      </section>

      {/* 사주팔자 */}
      <section className="absolute bottom-0 left-1/2 h-[621px] w-[351px] translate-x-[-50%] bg-blue-200 text-[#424242]">
        {/* 사주팔자 이미지 */}
        <div className="absolute left-0 top-0 z-10 h-full w-full">
          <Image src={"/saju.image.png"} alt="사주팔자 배경 이미지" fill />
        </div>

        {/* 사주팔자 타이틀 */}
        <div className="absolute left-1/2 top-[40px] z-20 translate-x-[-50%]">
          <div className="flex flex-col items-center justify-center">
            <p>김로켓님의 사주</p>
            <p className="text-lg font-bold">1980년 8월27일 08:10</p>
          </div>
        </div>

        {/* 사주팔자 컨텐츠 */}
        <div>사주팔자 컴포넌트 영역</div>
      </section>
    </main>
  );
};

export default Home;
