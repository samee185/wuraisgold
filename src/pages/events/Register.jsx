import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hero from "../../utils/Hero";

export default function Register() {
  const [state, setState] = useState({
    event: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  let params = useParams();
  useEffect(() => {
    const name = params.id.replace(/-/g, " ").toUpperCase();
    setState((prevState) => ({
      ...prevState,
      event: name,
    }));
  }, [params.id]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("https://formsubmit.co/ajax/info@wuraisgold.org", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        phone: state.phone,
        address: state.address,
        event: state.event,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSent(true);
        setLoading(false);
        setState({
          event: "",
          name: "",
          email: "",
          phone: "",
          address: "",
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero title="Event Registration" />
      <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-4 md:w-1/2 mx-auto bg-white p-5 md:p-10 border rounded-xl shadow-xl">
          {sent && (
            <div className="flex flex-col gap-8 text-center items-center mt-10">
              <h3 className="text-2xl md:text-[32px] font-[600]">
                Thank You For Joining Us
              </h3>
              <p className="md:text-[22px] md:w-1/2 w-full">
                Thank you for taking the first step towards a healthier and
                happier you by registering for the {`"Unlock A Healthier You"`}
                Virtual Event! We are thrilled to have you join us on this
                transformative journey to wellness. You will receive all
                information on how to join the webinar in your mail.
              </p>
              <Link
                to="/"
                className="font-[600] bg-secondary text-white h-10 w-fit md:w-1/3 rounded-full px-14 flex justify-center items-center"
              >
                GO BACK HOME
              </Link>
            </div>
          )}
          {!sent && (
            <>
              <div className="flex flex-col text-center items-center justify-center w-full pb-2 mb-10">
                <h4
                  className="text-xl md:text-2xl font-[600] leading-none"
                >
                  Registration Form
                </h4>
                <p>Fill in the form to book your spot for the event </p>
              </div>
              <form
                className="w-full flex flex-col gap-4 md:gap-10"
                onSubmit={handleSubmit}
              >
                <label className="flex flex-col gap-3 w-full">
                  <span className="flex items-center gap-1">Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-12 px-3 border z-10 w-full outline-none rounded border-[#A4A4A4]"
                    value={state.name}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                  />
                </label>
                <label className="flex flex-col gap-3 w-full">
                  <span className="flex items-center gap-1">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-12 px-3 border z-10 w-full outline-none rounded border-[#A4A4A4]"
                    value={state.email}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }))
                    }
                  />
                </label>
                <label className="flex flex-col gap-3 w-full">
                  <span className="flex items-center gap-1">Phone Number</span>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="h-12 px-3 border z-10 w-full outline-none rounded border-[#A4A4A4]"
                    value={state.phone}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        phone: e.target.value,
                      }))
                    }
                  />
                </label>
                <label className="flex flex-col gap-3 w-full">
                  <span className="flex items-center gap-1">Address</span>
                  <input
                    type="text"
                    placeholder="Address"
                    className="h-12 px-3 border z-10 w-full outline-none rounded border-[#A4A4A4]"
                    value={state.address}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        address: e.target.value,
                      }))
                    }
                  />
                </label>
                <button
                  className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] text-white bg-primary mx-auto flex items-center justify-center px-8 ${
                    loading && "opacity-50 animate-pulse"
                  }`}
                  disabled={loading}
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </main>

      <Subscribe />
      <Footer />
    </main>
  );
}
