import React from "react";


const SECTORS = [
  {
    name: "Health",
    subSectors: [
      "Maternal and Child Health: Antenatal care, safe delivery, postnatal support, and infant care, including nutrition and immunization.",
      "Public Health & Disease Prevention: Campaigns on hygiene, sanitation, and disease prevention (e.g., malaria, HIV/AIDS, tuberculosis).",
      "Community Health Services: Running clinics, mobile health units, and providing essential medical supplies and treatments.",
      "Mental Health and Psychosocial Support (MHPSS): Counseling services, awareness campaigns to reduce stigma, and support groups for individuals and communities.",
      "Health Infrastructure & Capacity Building: Training of local health workers, building and equipping health facilities, and strengthening local health systems."
    ],
    icon: "🩺",
  },
  {
    name: "Education",
    subSectors: [
      "Basic and Primary Education: School enrollment support, provision of learning materials, and school infrastructure development (building classrooms, libraries).",
      "Literacy and Numeracy: Adult literacy programs, and reading initiatives for children.",
      "Vocational and Skills Training: Equipping youth and women with practical skills for economic self-reliance (e.g., tailoring, coding, carpentry).",
      "Girls' Education: Specific programs to address barriers to female education, providing them with psychosocial support that ensure gender-sensitive approaches.",
      "Special Needs Education: Providing resources and support for children with learning disabilities or physical impairments.",
      "STEM Club: A platform where young people, especially students, explore science, technology, engineering, and math in fun, practical, and innovative ways that prepare them for the future."
    ],
    icon: "📚",
  },
  {
    name: "Mission Support",
    subSectors: [
      "Spiritual and Material Aid: Providing religious materials (e.g., Bibles, religious texts), and supporting missionaries with resources.",
      "Evangelism and Outreach: Supporting local missions with resources for community outreach and spiritual development programs."
    ],
    icon: "🙏",
  },
  {
    name: "WASH (Water, Sanitation, and Hygiene)",
    subSectors: [
      "Safe Water Access: Digging boreholes, installing water pumps, and purifying water sources in rural and urban poor communities.",
      "Sanitation Infrastructure: Building public and household latrines and promoting safe waste disposal methods.",
      "Hygiene Promotion: Educational campaigns on proper handwashing, menstrual hygiene management, and general hygiene practices to prevent the spread of diseases."
    ],
    icon: "�",
  },
  {
    name: "Developmental",
    subSectors: [
      "Community Development: Supporting communities in identifying their needs and implementing sustainable projects, such as building schools or clinics.",
      "Economic Empowerment: Entrepreneurship training, access to micro-loans or grants, and mentorship for business development.",
      "Climate Action and Environmental Sustainability: Projects focused on afforestation, waste management, and renewable energy to build resilient communities.",
      "Life Skills and Mentorship: Workshops on communication, financial literacy, and personal development to build confidence and resilience.",
      "Leadership and Civic Engagement: Training programs that encourage youth and women to participate in community leadership and advocacy.",
      "Agriculture and Livelihoods: Training farmers in modern techniques, providing seeds and tools, and connecting them to markets to improve food security and income."
    ],
    icon: "�",
  },
  {
    name: "Nutrition",
    subSectors: [
      "Child Malnutrition Programs: Providing therapeutic food and supplements for severely malnourished children and implementing school feeding programs.",
      "Maternal Nutrition: Educating pregnant and lactating women on balanced diets and providing nutritional supplements.",
      "Food Security: Working with communities to improve local food production and distribution to ensure a consistent supply of nutritious food."
    ],
    icon: "🥗",
  },
];

const Sectors = () => (
  <section className="py-10 px-5 md:px-20 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Sectors & Thematic Areas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SECTORS.map((sector) => (
        <div
          key={sector.name}
          className="flex flex-col bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{sector.icon}</span>
            <h3 className="text-xl font-semibold text-black">{sector.name}</h3>
          </div>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
            {sector.subSectors.map((sub, idx) => (
              <li key={idx}>{sub}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Sectors;
