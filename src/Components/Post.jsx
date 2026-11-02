
import explore from "../assets/explore.jpg";
import Button from "./Button";
import branded from "../assets/branded.jpg";

function Post() {
  return (
    <section className="max-w-329.5 w-full mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <div
          className="max-w-[615px] h-[620px] rounded-[24px] bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${explore})` }}
        >
          <div className="max-w-[380px] z-10 absolute p-5 bottom-[60px] flex flex-col gap-1">
            <p className="font-medium text-2xl font-Raleway text-[#FFFFFF]">
              Explore the totebag fashion
            </p>
            <p className="font-Raleway text-sm text-[#FFFFFF] mt-2">
              Totes are reliable carriage that adds to the details of your dress
              fashion with contradicting your fashion sense.
            </p>
            <Button
              name={"Shop"}
              className={
                "w-[150px] h-[79px] rounded-[50px] bg-[#F7FEFE] font-semibold text-[18px]"
              }
            />
          </div>
          <div className="absolute bg-black/50 inset-0 z-0"></div>
        </div>
      </div>

      <div className="flex gap-5">
              <div
        className="w-[300px] h-[620px] rounded-[24px] bg-cover bg-center overflow-hidden relative"
        style={{ backgroundImage: `url(${branded})` }}
      >
        <div className="w-[280px] absolute z-10 bottom-49 it p-3 flex flex-col gap-1">
          <p className="font-Raleway font-medium text-2xl text-[#FFFFFF]">Branded Collections</p>
          <p className="font-Raleway text-sm text-[#FFFFFF]">Cuustomize your style and brandshere on thetotebagshop.</p>
        </div>
        <div className="absolute bg-black/50 inset-0 z-0"></div>
      </div>

      <div
        className="w-[300px] h-[620px] rounded-[24px] bg-cover bg-center overflow-hidden relative"
        style={{ backgroundImage: `url(${branded})` }}
      >
        <div className="w-[280px] absolute z-10 bottom-49 it p-3 flex flex-col gap-1">
          <p className="font-Raleway font-medium text-2xl text-[#FFFFFF]">Totes as Office wears.</p>
          <p className="font-Raleway text-sm text-[#FFFFFF]">Totes can be worn to workspacesand to the office likewise.</p>
        </div>
        <div className="absolute bg-black/50 inset-0 z-0"></div>
      </div>
      </div>
    </section>
  );
}

export default Post;
