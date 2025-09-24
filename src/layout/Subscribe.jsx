export default function Subscribe() {
  return (
    <section className="px-6 md:px-20 py-16 bg-dark text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Stay in the Loop 🚀
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Join our community and receive exclusive insights into our
            initiatives, success stories, and opportunities to make a difference.
            Be part of our journey towards creating positive change.
          </p>
        </div>

        {/* Right Section (Form) */}
        <form className="w-full md:w-1/2 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 h-14 px-5 rounded-xl border border-gray-600 bg-dark text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <button
            type="submit"
            className="h-14 px-8 rounded-xl bg-primary text-white font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
