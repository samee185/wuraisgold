export default function Subscribe() {
  return (
    <main className="px-5 md:px-20 flex flex-col md:flex-row gap-10 py-12 w-full leading-loose justify-between items-start text-white bg-dark">
      <div className="w-full md:w-1/3 flex flex-col gap-5 md:gap-10">
        <b className="text-xl md:text-[60px] font-[500] text-white">
          Newsletter
        </b>
        <p className="lato">
          Join our community and receive exclusive insights into our
          initiatives, success stories, and opportunities to make a difference.
          Subscribe now and be part of our journey towards creating positive
          change and transforming lives.
        </p>
        <label className="flex h-14 w-full">
          <input
            type="text"
            className="w-full h-full px-5 border bg-inherit outline-none text-sm"
            placeholder="Enter your email address"
          />
          <button className="text-white bg-primary font-[600] px-5 h-full border border-primary min-w-fit">
            Subscribe
          </button>
        </label>
      </div>
    </main>
  );
}
