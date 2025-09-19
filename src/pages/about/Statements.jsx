import icon from "../../assets/icon.png";

export default function Statements() {
  return (
    <main className="px-5 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white text-center">
      <div className="flex flex-col gap-5 justify-center items-center px-5">
        <img src={icon} alt="" />
        <h4 className="text-2xl md:text-[40px] text-dark font-semibold">
          Our Mission
        </h4>
        <p>
          To empower vulnerable children & young adult with access to health
          care and the capacity to transform their wellbeing.
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center px-5">
        <img src={icon} alt="" />
        <h4 className="text-2xl md:text-[40px] text-dark font-semibold">
          Our Vision
        </h4>
        <p>Reducing vulnerable children and young adults in Nigeria.</p>
      </div>
    </main>
  );
}
