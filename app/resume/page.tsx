"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

const resumeData = {
  name: "Bert Darnell",
  title: "Cybersecurity Professional | Help Desk Specialist",
  contact: {
    email: "bert@helloto.me",
    github: "github.com/berts-repo",
    location: "Beaver, PA",
  },
  summary:
    "Cybersecurity-focused IT professional with hands-on experience in incident detection/escalation, identity and access administration, endpoint recovery, and enterprise authentication support in a HIPAA-regulated healthcare environment. B.S. in Information and Computer Science with Cisco CCNA and Cisco CyberOps Associate certifications. Strong foundation in Active Directory, Imprivata SSO/MFA, networking troubleshooting, and security monitoring through both production support and homelab work (Wazuh/Kibana, Proxmox, Linux, WireGuard). Targeting SOC Analyst, Security Analyst, IAM Analyst, or Junior Cybersecurity roles.",
  experience: [
    {
      title: "Help Desk Specialist — Security / Infrastructure / IAM Support",
      company: "Questeq (contracted to Heritage Valley Health System)",
      period: "October 2024 - Present",
      location: "Beaver, PA",
      description: [
        "Support identity and access requests across enterprise healthcare applications, including user account updates, access changes, and deprovisioning activities.",
        "Administer Active Directory user accounts, workstation policies, and security groups; audit group memberships and enforce least-privilege access in a HIPAA-regulated environment.",
        "Investigated anomalous remote authentication activity by validating user-reported location against active login behavior, initiated immediate credential security steps, escalated to security personnel, and documented the incident through resolution.",
        "Author and distribute formal incident reports to leadership and relevant stakeholders, documenting timelines, actions taken, escalation paths, and follow-up outcomes.",
        "Deploy and troubleshoot Imprivata SSO/MFA across clinical endpoints, workstations, and remote physician offices.",
        "Reimage and restore endpoints after security checks and suspected compromise events to return systems to a known-good state.",
        "Troubleshoot VPN, DNS, and DHCP issues via CLI and support Cisco gateway configurations across 2 hospital campuses and 50+ remote physician offices.",
      ],
    },
    {
      title: "Additional Experience",
      company: "Various",
      period: "2013 - 2023",
      description: [
        "Direct Support Specialist, Nodaway County Services (2023) — maintained detailed records for 20+ clients with strong attention to confidentiality and documentation quality.",
        "Night Auditor, Holiday Inn & Cobblestone Inn & Suites (2021–2022) — nightly financial reconciliations, basic network/printer troubleshooting, overnight operational support.",
        "Crew Lead, Hill Brother Construction (2018–2020) — coordinated up to 3 crews across multiple job sites.",
      ],
    },
  ],
  homelabProjects: [
    {
      title: "Security & Infrastructure Homelab",
      period: "2024 - Present",
      technologies: "Proxmox VE, Wazuh, Kibana, WireGuard, Pi-hole, Unbound, TrueNAS, ZFS, Linux",
      description: [
        "Built and administered a Proxmox VE homelab with 5+ VMs supporting security monitoring, Linux services, storage, and remote access testing.",
        "Deployed Wazuh (SIEM/IDS) with Kibana dashboards and practiced log ingestion, alert analysis, and SOC-style triage workflows.",
        "Simulated attack scenarios (brute-force, lateral movement) to validate detections and tune alerts.",
        "Implemented WireGuard VPN for secure remote access and configured firewall rules and network segmentation for service isolation.",
        "Deployed Pi-hole with Unbound (DNSSEC-capable recursive DNS) and administered TrueNAS SCALE with ZFS, NFS/SMB shares, and automated backup/DR procedures.",
      ],
    },
    {
      title: "Networking & Scripting Practice",
      period: "2024",
      technologies: "Python, Bash, TCP/UDP sockets",
      description: [
        "Developed TCP/UDP client-server socket scripts in Python to reinforce networking fundamentals and packet-flow behavior.",
        "Built a shell utility to collect recent CLI history across Bash/Zsh environments for troubleshooting and workflow auditing.",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. in Information and Computer Science",
      school: "Park University",
      period: "May 2024",
      location: "Parkville, MO",
      achievements: [
        "GPA: 3.34",
        "Earned CCNA/CyberOps-related coursework and labs (15 credit hours)",
        "Hands-on exposure to NIST SP 800-53 concepts and cybersecurity threat/vulnerability assessment activities",
      ],
    },
    {
      degree: "A.A.S. in Business Technology",
      school: "North Central Missouri College",
      period: "2015",
      location: "Trenton, MO",
      achievements: [],
    },
  ],
  hardSkills: [
    "Active Directory & Group Policy",
    "Identity & Access Management (IAM)",
    "Imprivata SSO/MFA",
    "Incident Detection & Triage",
    "Incident Escalation & Reporting",
    "Endpoint Reimaging & Recovery",
    "Wazuh SIEM/IDS",
    "Kibana Dashboards",
    "Log Analysis",
    "Linux System Administration",
    "Proxmox VE",
    "WireGuard VPN",
    "Firewall Configuration (iptables, UFW)",
    "TCP/IP, DNS, DHCP, VLANs",
    "Wireshark / tcpdump",
    "PowerShell & Bash Scripting",
    "Python",
    "NIST SP 800-53",
    "HIPAA-aligned Support Practices",
    "TrueNAS / ZFS",
    "Pi-hole / Unbound / DNSSEC",
  ],
  softSkills: [
    "Technical Documentation",
    "Incident Reporting",
    "Cross-functional Escalation",
    "Critical Thinking",
    "Attention to Detail",
    "Problem Solving",
    "Team Collaboration",
    "Multi-site Coordination",
    "SLA Awareness",
    "Adaptability",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#4682B4]/15 dark:bg-[#5F9EA0]/20 border border-[#4682B4]/25 dark:border-[#5F9EA0]/30">
        <svg className="h-4 w-4 text-[#4682B4] dark:text-[#5F9EA0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
        </svg>
      </span>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-[#4682B4] pl-3">{title}</h2>
      <span className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-[#4682B4]/70 to-transparent" />
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <main className="container mx-auto px-6 py-12 max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.header variants={itemVariants} className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
                {resumeData.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-0">
                <span>Cybersecurity Professional</span>
                <span className="hidden sm:inline mx-2">|</span>
                <span>Help Desk Specialist</span>
              </p>
            </motion.header>
            <div className="resume-layout grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-8">
              <div className="min-w-0">
                {/* Summary */}
                <motion.section variants={itemVariants} className="mb-10">
                  <SectionHeading title="Summary" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-white/80 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm">
                    {resumeData.summary}
                  </p>
                </motion.section>

                {/* Experience */}
                <motion.section variants={itemVariants} className="mb-10">
                  <SectionHeading title="Experience" />
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                    <div className="relative space-y-8 pl-6 before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-[#4682B4]/30 dark:before:bg-[#5F9EA0]/30">
                      {resumeData.experience.map((job, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="relative pl-4 ml-2"
                        >
                          <span className="absolute -left-[25px] top-2.5 h-3.5 w-3.5 rounded-full border-2 border-gray-100 dark:border-gray-800 bg-[#4682B4] dark:bg-[#5F9EA0]" />
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {job.company}
                            </h3>
                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 whitespace-nowrap">
                              {job.period}
                            </span>
                          </div>
                          <p className="text-[#4682B4] dark:text-[#5F9EA0] font-medium mt-1">
                            {job.title}
                          </p>
                          {job.location && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {job.location}
                            </p>
                          )}
                          <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                            {job.description.map((item, i) => (
                              <p key={i}>{item}</p>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Homelab Projects */}
                <motion.section variants={itemVariants} className="mb-10">
                  <SectionHeading title="Personal Projects" />
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                    <div className="relative space-y-8 pl-6 before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-[#4682B4]/30 dark:before:bg-[#5F9EA0]/30">
                      {resumeData.homelabProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="relative pl-4 ml-2"
                        >
                          <span className="absolute -left-[25px] top-2.5 h-3.5 w-3.5 rounded-full border-2 border-gray-100 dark:border-gray-800 bg-[#4682B4] dark:bg-[#5F9EA0]" />
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {project.title}
                            </h3>
                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 whitespace-nowrap">
                              {project.period}
                            </span>
                          </div>
                          <p className="text-sm text-[#4682B4] dark:text-[#5F9EA0] mt-1 font-medium">
                            {project.technologies}
                          </p>
                          <ul className="mt-4 ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                            {project.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.section>

              </div>

              <aside className="md:w-72 lg:w-80">
                <motion.section variants={itemVariants} className="mb-10">
                  <SectionHeading title="Contact" />
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <a href={`mailto:${resumeData.contact.email}`} className="block hover:text-[#4682B4] dark:hover:text-[#5F9EA0] break-words">
                      {resumeData.contact.email}
                    </a>
                    <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="block hover:text-[#4682B4] dark:hover:text-[#5F9EA0]">
                      {resumeData.contact.github}
                    </a>
                    <p>{resumeData.contact.location}</p>
                  </div>
                </motion.section>

                {/* Education */}
                <motion.section variants={itemVariants} className="mb-10">
                  <SectionHeading title="Education" />
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm space-y-5">
                    {resumeData.education.map((edu, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                            {edu.school}
                          </h3>
                          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 whitespace-nowrap">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm text-[#4682B4] dark:text-[#5F9EA0] font-medium mb-1">
                          {edu.degree}
                        </p>
                        {edu.location && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                            {edu.location}
                          </p>
                        )}
                        {edu.achievements && edu.achievements.length > 0 && (
                          <ul className="ml-4 list-disc space-y-1 text-xs text-gray-600 dark:text-gray-400">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Skills */}
                <motion.section variants={itemVariants} className="mb-10">
                  <SectionHeading title="Skills" />
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Technical Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.hardSkills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4682B4]/10 text-[#4682B4] dark:bg-[#4682B4]/20 dark:text-[#5F9EA0] border border-[#4682B4]/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Professional Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.softSkills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4682B4]/10 text-[#4682B4] dark:bg-[#4682B4]/20 dark:text-[#5F9EA0] border border-[#4682B4]/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              </aside>
            </div>

            {/* Download Button */}
            <motion.div variants={itemVariants} className="text-center no-print">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4682B4] text-white rounded-lg hover:bg-[#3a6fa0] shadow-md hover:shadow-lg transition-all duration-200 font-medium"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V4h12v5M6 18h12M7 14h10v6H7z" />
                </svg>
                Download PDF Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </main>
      </div>
      <style jsx global>{`
        @page {
          margin: 0.75in;
        }

        @media print {
          nav,
          .no-print,
          [class*="fixed"] {
            display: none !important;
          }

          .resume-layout {
            display: block !important;
          }

          *,
          *::before,
          *::after {
            background: #fff !important;
            color: #000 !important;
            box-shadow: none !important;
            border-color: transparent !important;
          }

          a[href]::after {
            content: " (" attr(href) ")";
          }
        }
      `}</style>
    </>
  );
}
