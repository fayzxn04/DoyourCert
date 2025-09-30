function Button() {
  return (
    <div className="flex py-[5px] px-[8px] gap-[10px] flex-col items-start rounded-[8px] border border-white/20 bg-white/10 backdrop-blur-[81.6px] w-fit mt-[36px]">
      <div className="flex gap-[16px] items-center self-stretch">
        <p className="text-white">Explore Popular Cabins</p>
        <div className="flex justify-center items-center w-[32px] h-[32px] p-[8.7px] rounded bg-[linear-gradient(0deg,#00000033_0%,#00000033_100%),#FFFFFF1F] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <img
            src="/right-arrow.png"
            alt="arrow"
            className="h-[14.4px] w-[14.4px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Button;
