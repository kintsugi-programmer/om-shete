import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              
<div className="flex mob:justify-center desktop:justify-start items-center">
  <div className="w-32 h-40 rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-200 ease-in-out">
     <img
      src="/images/om.jpeg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
  {/* other content to the right */}
</div>
<br></br>

              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
  <h1 className="text-2xl font-bold">Test Scores</h1>
  <div className="mt-4 space-y-3">
    <div>
      <h2 className="text-lg font-semibold">GATE Biotechnology (BT) 2023</h2>
      <p>Score: 31.33 / 100 (Feb 2023)</p>
      <p>Result: Qualified GATE BT 2023</p>
      <p>Institution: Indraprastha Institute of Information Technology, Delhi</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">GAT-B (DBT JRF) 2022</h2>
      <p>Score: 95.5 / 100 (Apr 2022)</p>
      <p>Result: Qualified Graduate Aptitude Test for Biotechnology (DBT JRF)</p>
      <p>Conducted by: Department of Biotechnology, Government of India</p>
    </div>
  </div>


  <div className="mt-5">

     <h1 className="text-2xl font-bold mt-6">Publications</h1>
  <ul className="list-disc ml-5 mt-2 space-y-2">
    <li>
      <strong>Toward a Health-Associated Core Keystone Index for the Human Gut Microbiome</strong>, Cell Reports, March 2, 2025.&nbsp;
      <a href="https://doi.org/..." target="_blank" rel="noopener noreferrer">
        Click here
      </a>
    </li>
    <li>
      <strong>Role of Gut and Urinary Microbiome in Children with Urinary Tract Infections: A Systematic Review</strong>, Diagnostics (MDPI), January 3, 2025.&nbsp;
      <a href="https://doi.org/..." target="_blank" rel="noopener noreferrer">
        Click here
      </a>
    </li>
    <li>
      <strong>Normal Gut Microbiomes in Diverse Populations: Clinical Implications</strong>, Annual Review of Medicine, November 18, 2024.&nbsp;
      <a href="https://doi.org/..." target="_blank" rel="noopener noreferrer">
        Click here
      </a>
    </li>
  </ul>
  <br></br>
  <h1 className="text-2xl font-bold">Projects</h1>
  <div className="mt-4 space-y-6">
    <div>
      <h2 className="text-lg font-semibold">
        Comparative Expression Analysis of Downy Mildew Resistant Grape Varieties
      </h2>
      <p className="text-sm opacity-75">
        ICAR–National Research Centre for Grapes, Pune (Aug 2021 – Mar 2022) | Part of B.Tech Biotechnology dissertation
      </p>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>
          Designed and executed RT-qPCR experiments to quantify gene expression in resistant vs. susceptible cultivars
        </li>
        <li>
          Hands-on experience with RNA isolation, cDNA synthesis, primer design, and data analysis
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-lg font-semibold">4G Biomethane Production from Cactus</h2>
      <p className="text-sm opacity-75">
        College of Agricultural Biotechnology, Loni-Pravara (AVISHKAR Research Convention) (Nov 2019 – Mar 2020)
      </p>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Developed a second-generation biomethane production process using cactus biomass</li>
        <li>
          Presented research at AVISHKAR, enhancing scientific communication and presentation skills
        </li>
        <li>
          Gained proficiency in anaerobic digestion assays, gas chromatography, and bioprocess optimization
        </li>
      </ul>
    </div>
  </div>

 
</div>

                <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>

                {resume.edu.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              {/* <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div> */}
              

  <h1 className="text-2xl font-bold mt-6">Languages</h1>
  <ul className="list-disc ml-5 mt-2 space-y-1">
    <li>English: Professional working proficiency</li>
    <li>Hindi: Limited working proficiency</li>
    <li>Marathi: Native or bilingual proficiency</li>
  </ul>
</div>

              <div className="mt-5">

                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Laboratory & Biotech Techniques</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Data Analysis & Programming & Tools</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-5">
  <h1 className="text-2xl font-bold">Volunteer Experience</h1>
  <div className="mt-4 space-y-6">
    <div>
      <h2 className="text-lg font-semibold">Student Volunteer</h2>
      <p className="text-sm opacity-75">
        Robin Hood Army (May 2021 – Aug 2021 | 4 months) &nbsp;|&nbsp; Category: Social Services
      </p>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Participated in “zero-fundraising” campaigns to distribute meals and essential supplies to underserved communities</li>
        <li>Coordinated logistics and volunteer teams to optimize food collection and delivery</li>
        <li>Enhanced organizational and interpersonal skills while supporting local relief efforts</li>
      </ul>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Student Volunteer</h2>
      <p className="text-sm opacity-75">
        National Service Scheme (Jun 2019 – Jul 2022 | 3 years 2 months) &nbsp;|&nbsp; Category: Social Services
      </p>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Engaged in community service projects—health camps, awareness drives, and environmental clean-ups</li>
        <li>Collaborated with peers and faculty advisors to plan and execute events impacting hundreds of beneficiaries</li>
        <li>Strengthened leadership, project-management, and problem-solving abilities through sustained service activities</li>
      </ul>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
