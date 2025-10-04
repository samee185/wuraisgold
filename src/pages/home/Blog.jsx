import { Btn } from "../../utils/Button";
import img from "../../assets/become.jpg";
import dp1 from "../../assets/dp1.png";
import dp2 from "../../assets/dp2.png";
import dp3 from "../../assets/dp3.png";
import dp4 from "../../assets/dp4.png";
import dp5 from "../../assets/dp5.png";
import { useBlog } from "../../contexts/BlogContext";

export default function Blog() {
  const { blogs, loading } = useBlog();

  return (
    <main className="flex flex-col gap-10 md:gap-14 py-10 md:py-20">
      {/* Section Header */}
      <div className="px-5 flex flex-col gap-3 mx-auto text-center">
        <p className="text-primary">Our Stories</p>
        <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
          Our Blogs
        </h3>
      </div>

      {/* Blogs Grid */}
      <div className="px-5 md:px-20 flex flex-col md:grid grid-cols-3 gap-10 overflow-hidden">
        {loading.fetch ? (
          <p>Loading blogs...</p>
        ) : blogs?.length > 0 ? (
          blogs.slice(0, 3).map((blog) => (
            <Single
              key={blog._id}
              img={blog?.image} // assuming `images` is an array
              title={blog?.title}
              date={new Date(blog?.createdAt).toDateString()}
              slug={blog?.slug}
              text={blog?.excerpt || blog?.content?.slice(0, 120) + "..."}
            />
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>

      {/* See All Button */}
      <button className="text-primary underline font-bold mx-auto">
        See All
      </button>

      {/* Volunteer Section */}
      <div
        className="w-full min-h-[70vh] relative z-[0] bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 md:py-20 flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.4)] z-[-1]"></div>
        <div className="flex flex-col gap-5 md:w-1/2">
          <h2 className="text-3xl md:text-[44px] font-extrabold leading-normal">
            Become a part of {`WuraisGold's`} impactful journey by
            volunteering your time and skills.
          </h2>
          <Btn name="Become a volunteer" id="/volunteer" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-5 flex flex-col gap-3 mx-auto text-center">
        <p className="text-primary">Testimonial</p>
        <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
          What People Say About Us
        </h3>
      </div>

      <div className="px-5 md:px-20 flex overflow-x-scroll snap gap-6">
        <TestSingle
          icon={dp1}
          title="Volunteer"
          name="Treasure Chris ETuk"
          text="WGCF’s dedication to community empowerment is evident in every project..."
        />
        <TestSingle
          icon={dp2}
          title="Medical Doctor"
          name="Dr. Seun Oluwafemi"
          text="I am privileged to be part of this FOUNDATION..."
        />
        <TestSingle
          icon={dp3}
          title="Volunteer"
          name="Timilehin Atayero"
          text="Participating in WGCF outreach programs was truly a rewarding experience..."
        />
        <TestSingle
          icon={dp4}
          title="Volunteer"
          name="Praise Shaguy"
          text="Participating in the WGCF outreaches has been amazing..."
        />
        <TestSingle
          icon={dp5}
          title="Volunteer"
          name="Oluwabori Atayero"
          text="WGCF is an amazing foundation that takes sharing the gospel..."
        />
      </div>
    </main>
  );
}

function Single({ img, title, date, text, slug }) {
  return (
    <div className="w-full flex flex-col gap-5 bg-white p-5 rounded-xl">
      <img src={img} alt={title} className="w-full object-cover" />
      <div className="flex flex-col gap-2">
        <b className="text-xl text-black">{title}</b>
        <p className="text-primary">{date}</p>
      </div>
      <p className="mb-auto">{text}</p>
      <Btn name="Read More" slug={`/blogs/${slug}`} />
    </div>
  );
}

const TestSingle = ({ icon, title, text, name }) => (
  <nav className="min-w-[90%] w-[90%] md:min-w-[30%] md:w-[30%] bg-white border md:flex flex-col gap-5 px-5 py-5 md:py-10 shad rounded-lg justify-evenly">
    <q className="text-light">{text}</q>
    <div className="flex gap-2 items-center">
      <img
        src={icon}
        alt={name}
        className="h-10 md:h-14 w-10 md:w-14 rounded-[50%] object-cover object-top"
      />
      <p className="flex flex-col gap-1">
        <span className="md:text-xl uppercase font-[500]">{name}</span>
        <small className="text-sm uppercase">{title}</small>
      </p>
    </div>
  </nav>
);
