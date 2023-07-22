const NotFound = () => {
  return (
    <div className="p-[90px] bg-orange-200 h-screen">
      <div className="p-[78px] border-4 border-black h-[100%]">
        <div className="bg-page-not-found bg-origin-padding flex flex-col justify-center items-center text-black text-center px-[84px] py-14 border-4 border-black h-[100%] gap-3">
          <h2 className="text-9xl font-semibold">404</h2>
          <p className="text-[68px]">Page Not Found</p>
          <p className="text-2xl leading-[normal] font-medium">
            we’re sorry. the page you requested could no be found
          </p>
          <p className="text-2xl leading-[normal] font-medium">
            Please go back to the home page
          </p>
          <button className="rounded-xl bg-black text-[#FFF7E9] px-8 py-3">
            GO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
