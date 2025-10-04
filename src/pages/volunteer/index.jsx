/* eslint-disable react/no-unescaped-entities */
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Hero from "../../utils/Hero";
import img from "../../assets/volunteer.png";
export default function Index() {
  // const [state, setState] = useState({
  //   project: "",
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   occupation: "",
  //   message: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const [sent, setSent] = useState(false);

  // let params = useParams();
  // useEffect(() => {
  //   const name = params.id.replace(/-/g, " ").toUpperCase();
  //   setState((prevState) => ({
  //     ...prevState,
  //     project: name,
  //   }));
  // }, [params.id]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   fetch("https://formsubmit.co/ajax/info@wuraisgold.org", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: state.name,
  //       email: state.email,
  //       phone: state.phone,
  //       address: state.address,
  //       occupation: state.occupation,
  //       message: state.message,
  //       project: state.project,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setSent(true);
  //       setLoading(false);
  //       setState({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         address: "",
  //         occupation: "",
  //         message: "",
  //         project: "",
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-[#F9F9F9] via-[#e0f7fa] to-[#fceabb]">
      <ScrollToTop />
      <Header />
      {/* Hero Section with overlay */}
      <section className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center mb-[-80px]">
        <img src={img} alt="Volunteer" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-[#fceabb]/80" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in">Become A Volunteer</h1>
          <p className="text-lg md:text-xl font-medium animate-fade-in delay-100">Join us in making a real impact!</p>
        </div>
      </section>

      {/* Card Section */}
      <main className="flex flex-col items-center justify-center px-5 md:px-0 py-10 md:py-20">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-6 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Hello Everyone!</h3>
          <p className="text-gray-700">Trust you are doing great and having a fruitful week ahead.</p>
          <p className="text-gray-700">
            As a result of our upcoming events and outreaches, it's important current volunteers and interested volunteers register via this link. This is to ensure we carry everyone along and ensure active participation and involvement. <span className=" hidden font-semibold text-primary">Non active volunteers who do not fill the form by <span className="underline">20th June, 2024</span> would be removed from the platform.</span> It would be assumed that they are no longer interested to be a part of us if you don't fill this form.
          </p>
          <p className="text-gray-700">We appreciate your dedication and commitment thus far.</p>
          <p className="text-gray-700">Thank you!</p>
          <div className="flex flex-col items-center gap-2 mt-4">
            <span className="font-semibold text-lg">Kindly fill the volunteer form below:</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfo6zC531h3ew4CQUXH3fCxVqI2tvMYRFGOX7skQkpHXxxJsA/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-primary text-white font-bold text-lg shadow-md hover:bg-primary/90 transition-all duration-200 animate-bounce"
            >
              Fill Volunteer Form
            </a>
            <p className="text-sm text-gray-500 mt-2">It takes less than 2 minutes!</p>
          </div>
        </div>
      </main>

      <Subscribe />
      <Footer />
    </main>
  );
}
