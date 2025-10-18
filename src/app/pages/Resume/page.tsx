"use client";

import { useEffect } from "react";
import styles from "../../styles/timeline.module.css";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  details: string[];
};

const experiences: Experience[] = [
  {
    title: "Technical Project Manager (SAFe® and PSM I)",
    company: "The Citco Group Limited",
    location: "Toronto, Canada",
    period: "Sep 2017 – Aug 2025",
    details: [
      "Introduced metrics-based delivery and value-stream mapping to reorient teams around measurable business outcomes.",
      "Coordinated global SaaS and data-integration programs, balancing scope, timeline, and quality expectations across regions.",
      "Scaled Agile practices (SAFe and Nexus) to support larger delivery teams while preserving collaboration and flow.",
      "Partnered with product and release leadership to align roadmaps, mitigate delivery risks, and ensure continuous value realization.",
      "Optimized Jira and Confluence workflows to improve backlog refinement, sprint planning accuracy, and stakeholder transparency.",
      "Delivered executive reporting dashboards in Power BI to reduce manual status updates and highlight delivery health in real time."
    ]
  },
  {
    title: "Senior Software Developer / Programmer Analyst",
    company: "eBRP Solutions",
    location: "Toronto, Canada",
    period: "Jun 2015 – Aug 2017",
    details: [
      "Developed feature enhancements that scaled enterprise web platforms supporting business continuity programs.",
      "Led technical redesigns to elevate application performance, resilience, and user adoption for strategic accounts.",
      "Collaborated with cross-functional stakeholders to translate continuity requirements into maintainable technical solutions."
    ]
  },
  {
    title: "Lead / Senior Developer",
    company: "Karafarin Bank",
    location: "Tehran, Iran",
    period: "Sep 2005 – Mar 2015",
    details: [
      "Directed modernization of banking and payment platforms to meet regulatory standards and improve digital experiences.",
      "Managed project planning, vendor negotiations, and delivery risk across mission-critical financial applications.",
      "Championed Agile, CMMI, and DevOps tooling (MS-TFS, Jira) to coordinate releases and maintain system stability.",
      "Architected ASP.NET MVC solutions with DI/IoC patterns, integrating MS-SQL, Oracle, and enterprise services.",
      "Designed services and integrations (WCF, IBM WebSphere MQ) enabling secure communication with core banking systems."
    ]
  },
  {
    title: "Computer Specialist / System Programmer",
    company: "Dara Credit Card Co.",
    location: "Tehran, Iran",
    period: "Mar 2005 – Sep 2005",
    details: [
      "Built .NET applications that generated billing notifications from transactional data and distributed them through email.",
      "Created analytics tools to score client transactions across POS, ATM, and online channels for reporting accuracy.",
      "Delivered Crystal Reports dashboards that visualized transaction trends for business stakeholders."
    ]
  },
  {
    title: "Web Application Developer",
    company: "Toorin Tan Co.",
    location: "Tehran, Iran",
    period: "Jul 2004 – Mar 2005",
    details: [
      "Engineered a Windows-based conversion utility to capture network data streams and persist them for downstream use.",
      "Enhanced custom ASP.NET applications (Framework 1.1 and 2.0) to expand reporting and operational capabilities."
    ]
  },
  {
    title: "Web & Software Developer",
    company: "Nidec Motion Control Engineering (Nidec-MCE)",
    location: "Sacramento, CA, USA",
    period: "Aug 2001 – May 2004",
    details: [
      "Re-engineered legacy elevator control software from C++ into a modern visual, event-driven architecture.",
      "Developed enterprise web applications and internal intranet tools to streamline collaboration and support.",
      "Launched an ASP/ASP.NET e-commerce storefront backed by a SQL database for online sales."
    ]
  },
  {
    title: "Webmaster & Developer",
    company: "Moballeghan",
    location: "Tehran, Iran",
    period: "Jan 1998 – May 2001",
    details: [
      "Delivered the Iranian Yellow Pages information portal using ASP Classic, DHTML, and custom graphics.",
      "Designed e-commerce features and multimedia assets with Photoshop and Macromedia Flash to elevate user engagement."
    ]
  },
  {
    title: "Web Designer",
    company: "Parnam Computer Co.",
    location: "Tehran, Iran",
    period: "Jun 1997 – Jan 1998",
    details: [
      "Produced bespoke static and DHTML websites for a diverse client base and deployed them to production environments.",
      "Implemented intranet web servers on Windows NT 4.0 with IIS and dial-up connectivity to support internal teams."
    ]
  }
];

export default function Resume() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.timelineItem}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className={styles.timelineSection}>
      <div className={styles.inner}>
        <h1 className={styles.sectionTitle}>Professional Experience Timeline</h1>
        <p className={styles.sectionSubtitle}>
          A chronological view of recent achievements and early career milestones, showcasing two decades of delivery leadership,
          software engineering, and agile transformation.
        </p>
        <div className={styles.timeline}>
          {experiences.map((experience, index) => {
            const positionClass = index % 2 === 0 ? styles.left : styles.right;
            return (
              <article
                key={`${experience.title}-${experience.period}`}
                className={`${styles.timelineItem} ${positionClass}`}
              >
                <div className={styles.marker}>
                  <div className={styles.circle}>
                    <span>{experience.period}</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.role}>{experience.title}</h3>
                  <p className={styles.meta}>
                    {experience.company} &middot; {experience.location}
                  </p>
                  <ul className={styles.details}>
                    {experience.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
