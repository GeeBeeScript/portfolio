import { MoveRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    date: "2023",
    projectCategories: "Mobile App, Website & Admin Panel",
    title:
      "Designed and Developed an EdTech Platform to Simplify Student Learning and Engagement",
    comments:
      "Built the website, mobile application, and administrative platform with a focus on accessibility, usability, and streamlined learning experiences.",
    image: "/resources/ak-site-img.png",
    colour: "#67f58d",
    href: "",
  },
  {
    date: "2025",
    projectCategories: "Website",
    title:
      "High-Converting Website for Lackverket, a Swedish Paint and Surface Finishing Company",
    comments:
      "Developed the website, implemented technical SEO, and managed Google Ads campaigns that continue to generate strong business results.",
    image: "/resources/lackverket-site.png",
    colour: "#fc7784",
    href: "https://www.lackverket.se",
  },
  {
    date: "2025",
    projectCategories: "Website & Admin Panel",
    title:
      "Custom Website and Content Management System for Anna Katarina Interior",
    comments:
      "Built a conversion-focused website with a custom admin panel and managed Google Ads campaigns to drive qualified customer enquiries.",
    image: "/resources/ak-site-img.png",
    colour: "#fadb75",
    href: "https://www.annakatarinainterior.se",
  },
  {
    date: "2026",
    projectCategories: "Website & Admin Panel",
    title:
      "Multi-Language Christian Web Application Built for Global Audiences",
    comments:
      "Developed a dynamic platform that automatically adapts content based on device language and user preferences, supported by a secure content management system.",
    image: "/resources/wisdom-room-site.png",
    colour: "#fc7cfc",
    href: "https://www.thewisdomroom.net",
  },
];

const PortfolioProjects = () => {
  return (
    <section
      id="portfolio"
      className="relative w-full my-5 py-5 px-4 border-zinc-950/10 border"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-brico mb-4 w-full font-bold text-transparent bg-clip-text bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950 text-center">
          A few of my Projects
        </h2>
        <div className="cursor-pointer grid grid-cols-1 grid-rows-1 relative py-2">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`z-${index + 5} bg-${project.colour} col-start-1 row-start-1 rounded-lg w-full flex flex-col space-y-4 px-3 py-3 sm:px-9`}
              style={{
                backgroundColor: project.colour,
                marginTop: ((index < 2 ? index : index ** 2.3) + 1) * 50,
                zIndex: index + 5,
                boxShadow: `0px -5px 20px ${project.colour}`,
              }}
            >
              <div className="w-full font-hanken flex justify-between items-center text-[#444] text-sm gap-5 border-b-olive-400 border-b pb-2">
                <div>
                  {project.date} {index}
                </div>
                <div>{project.projectCategories}</div>
              </div>
              <Link href={project.href} target="_blank" className="space-y-4">
                <div className="w-full font-space flex justify-between items-center">
                <p className="text-[#222] font-bold text-2xl">
                  {project.title}
                </p>
                <div className="hidden sm:block">
                  <MoveRight className="size" />
                </div>
              </div>
              <div className="font-nunito">{project.comments}</div>
              <div
                className="min-h-[40vh] bg-center sm:min-h-[70vh] sm:bg-top-left w-full h-50 bg-cover rounded-lg"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="sm:hidden flex justify-end items-center">
                <MoveRight className="size" />
              </div>
              
              </Link>
            </div>
          ))}

          <div></div>
          <div></div>
        </div>
      </div>

      <div className="absolute w-5 h-5 top-0 left-0 border-t-2 border-l-2"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2"></div>
    </section>
  );
};

export default PortfolioProjects;
