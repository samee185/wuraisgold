import event1 from "../assets/event1.png";
import event2 from "../assets/immunization.jpg";
import { Anchor } from "../utils/Button";
export const events = [
  {
    title: "Unlock A Healthier You",
    text: "Healthy beginning: Building habits for a thriving and priceless future",
    slug: "unlock-a-healthier-you",
    date: "Jan 20 -24",
    time: "3:00pm (WAT)",
    location: "Zoom",
    type: "manual",
    hero: event1,
    about: `Unlock A Healthier You," an immersive virtual event dedicated to enlightening individuals about building and sustaining healthy habits for a vibrant life!`,
    webinar: (
      <div className="flex flex-col gap-3">
        <p>
          The WuraisGold Charity Foundation is excited to invite you to
          participate in our upcoming webinar, {`"Healthy Beginnings: Building
          Habits for a Thriving Priceless Future."`}
        </p>
        <p>
          Your involvement is crucial to the success of this event, and we
          believe your commitment to our cause will greatly be contributed in
          spreading awareness and knowledge about cultivating healthy habits for
          a brighter future.
        </p>
        <p>
          We kindly request your participation in this course. Please feel free
          to share this invite within your network.
        </p>
        <p>
          Kindly find attached the event flyer for your reference. I am looking
          forward to welcoming you.
        </p>
      </div>
    ),
  }, {
    title: "Immunization Truth: Separating Fact from Fiction",
    text: "Join Us for a FREE Health Webinar: Immunization Truth: Separating Fact from Fiction",
    slug: "immunization-truth-separating-fact",
    date: "May 31 -25",
    time: "4:00pm (WAT)",
    location: "Zoom",
    type: "google",
    link: 'https://forms.gle/iPGpnVZ42oqJLKBE7',
    hero: event2,
    about: `Wuraisgold Charity Foundation invites you to a vital and informative webinar focused on understanding the truth about immunization. In a world where misinformation can easily spread, it's crucial to equip ourselves with accurate, evidence-based knowledge to protect our health and the well-being of our communities.`,
    webinar: (
      <div className="flex flex-col gap-3 text-left">
        <h2 className="text-3xl font-bold text-left">What You&apos;ll Learn:</h2>
        <p>
          This webinar, &quot;Immunization Truth: Separating Fact from Fiction,&quot; will delve into the key aspects of immunization, helping you:
        </p>
        <ul className="list-disc list-inside">
          <li>Distinguish between common myths and scientific facts about vaccines.</li>
          <li>Understand the importance of immunization for individual and public health.</li>
          <li>Gain insights into the strategies for promoting vaccine awareness and uptake.</li>
          <li>Learn about the challenges of reaching underserved populations with crucial immunization information.</li>
        </ul>
        <h2 className="text-3xl font-bold text-left">Meet Our Expert Speakers:</h2>
        <p>
          We are honored to host two leading experts in the field:
        </p>
        <ul className="list-disc list-inside">
          <li>Dr. Olayinka Ilesanmi: Regional Program Lead, West Africa Regional Coordinating Centre Africa (CDC), a seasoned Public Health Specialist with extensive experience in disease prevention and health systems strengthening.</li>
          <li>Sunday Oko: Programme Officer, Nigeria Health Watch, a dedicated health policy strategist focused on combating health misinformation and promoting informed decision-making.</li>
        </ul>
        <h2 className="text-3xl font-bold text-left">Hosted by:</h2>
        <p>
          Wuraola Onigbogi Jackson: CEO, Wuraisgold Charity Foundation, a passionate advocate for global health and community empowerment.
        </p>
        <h2 className="text-3xl font-bold text-left">Why Attend?</h2>
        <p>
          This webinar is essential for parents, caregivers, community leaders, healthcare workers, and anyone seeking reliable information about immunization. By attending, you will gain the knowledge and confidence to make informed decisions, protect yourself and your loved ones, and contribute to a healthier Nigeria.
        </p>
        <p className="flex items-center gap-2"><Anchor name="Register Now" slug="https://forms.gle/iPGpnVZ42oqJLKBE7" /> (It&apos;s FREE!)</p>
        
        <p>Don&apos;t miss this opportunity to get the facts straight and be part of this important conversation! </p>
        <p>
          Share this webinar with your network and help us spread the truth about immunization.
        </p>
      </div>
    ),
  },
];
