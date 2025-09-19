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
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero title="Become A Volunteer" />
      <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10">
        <img src={img} alt="" />
        <h3 className="text-2xl font-semibold">Hello Everyone!</h3>
        <p>Trust you are doing great and having a fruitful week ahead.</p>
        <p>
          As a result of our upcoming events and outreaches, it's important
          current volunteers and interested volunteers register via this link.
          This is to ensure we carry everyone along and ensure active
          participation and involvement. Non active volunteers who do not fill
          the form by *20th June, 2024* would be removed from the platform. It
          would be assumed that they are no longer interested to be a part of
          us.
        </p>
        <p>We appreciate your dedication and commitment thus far.</p>
        <p>Thank you</p>
        <b>Kindly find below the form link to fill below</b>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfo6zC531h3ew4CQUXH3fCxVqI2tvMYRFGOX7skQkpHXxxJsA/viewform?usp=pp_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
        <p>
          Kindly take out just less than 2 Minutes of your time to fill the
          form.
        </p>
      </main>

      <Subscribe />
      <Footer />
    </main>
  );
}
