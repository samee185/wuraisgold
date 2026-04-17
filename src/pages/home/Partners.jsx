import { Btn } from "../../utils/Button";
import nemaLogo from "../../assets/NEMA.jpeg"
import ncdcLogo from "../../assets/ncdc_logo.png";
import davidLogo from "../../assets/david_blaze.jpeg";
import aidraLogo from "../../assets/Aidra.jpeg";
import doLogo from "../../assets/Do.jpeg";
import cirlceLogo from "../../assets/cirle.jpeg";
import careLogo from "../../assets/Care_Aid.jpeg";

export default function Partners() {
  const partners = [
    { name: "NEMA", logo: nemaLogo },
    { name: "David Blaze", logo: davidLogo },
    { name: "NCDC", logo: ncdcLogo },
    { name: "Aidra health", logo: aidraLogo },
    { name: "Do Take Action", logo: doLogo },
    { name: "Plus-Circle CHAO", logo: cirlceLogo },
    { name: "7. Care Aid Support Initiative", logo: careLogo },
  ];

  return (
    <main className="w-full px-5 md:px-20 py-16 md:py-20 flex flex-col gap-16">
      {/* Header Section */}
      <div className="flex flex-col gap-6 md:gap-8 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <p className="text-primary font-semibold text-sm md:text-base tracking-wide uppercase">
            Strategic Partnerships
          </p>
          <div className="w-8 h-1 bg-primary rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-extrabold leading-tight">
          Collaborating with Leaders for Greater Impact
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Our strategic partnerships amplify our reach and deepen our impact. By collaborating with organizations that share our vision, we create synergies that drive meaningful change in communities across the nation.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PartnerBenefit
          number="01"
          title="Extended Reach"
          description="Partner networks enable us to serve more communities and expand our humanitarian efforts across diverse regions."
        />
        <PartnerBenefit
          number="02"
          title="Resource Sharing"
          description="Collaborative resources and expertise strengthen project delivery and ensure sustainable solutions for lasting impact."
        />
        <PartnerBenefit
          number="03"
          title="Innovation"
          description="Partnership synergies foster innovative approaches to addressing societal challenges with creative and effective solutions."
        />
      </div>

      {/* Partners Grid */}
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl text-dark font-bold">Our Strategic Partners</h3>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} logo={partner.logo} name={partner.name} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 p-8 md:p-12 flex flex-col gap-6 items-center text-center border border-primary/20">
        <h3 className="text-2xl md:text-4xl text-dark font-bold">Become Our Partner</h3>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          Join us in creating transformative impact. Together, we can achieve more and reach further in our mission to uplift communities.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Btn name="Partner With Us" slug="/partners" />
          <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-dark text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}

// Partner Benefit Card Component
const PartnerBenefit = ({ number, title, description }) => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-8 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group">
      <div className="text-4xl md:text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
        {number}
      </div>
      <h4 className="text-xl md:text-2xl text-dark font-bold">{title}</h4>
      <p className="text-gray-600 md:text-lg leading-relaxed">{description}</p>
    </div>
  );
};

// Partner Logo Component
const PartnerLogo = ({ logo, name }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md hover:bg-primary/5 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-center w-full h-24 md:h-28">
        <img
          src={logo}
          alt={name}
          className="object-contain max-h-full max-w-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-sm md:text-base font-semibold text-dark text-center">
        {name}
      </p>
    </div>
  );
};
