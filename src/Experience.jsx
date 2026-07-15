import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, ExternalLink, X, ZoomIn } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst Trainee",
    company: "KasNet Technologies Pvt Ltd.",
    duration: "April 2024 - July 2024 · 4 months",
    location: "Pune, India",
    description:
      "Gained hands-on experience in SQL and Python for improving data handling and basic script writing. Generated dashboards and reports using Power BI for data visualization and analysis. Applied machine learning techniques to build simple predictive models and understand data trends.",
  },
];

const certifications = [
  {
    title: "AWS Academy Cloud Architecting",
    image: "/certs/aws.png",
    links: ["https://www.credly.com/go/Sq9GMxP2"],
    skills: "AWS · Cloud Architecture · EC2 · S3 · IAM",
  },
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    image: "/certs/azure.png",
    links: [
      "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=lfukYkiZm4B0AFeiNNBH/g==",
    ],
    skills: "Azure Fundamentals · Cloud Computing · Cloud Services",
  },
  {
    title: "Introduction to SQL",
    image: "/certs/ibm-sql.png",
    links: [
      "https://courses.edx.org/certificates/e031a8bd2f7643a38a02f88c65efecb4",
    ],
    skills: "SQL · Relational Databases · Querying",
  },
  {
    title: "Machine Learning Fundamentals",
    image: "/certs/alteryx.png",
    links: [
      "https://drive.google.com/file/d/1nDAtDx2qQC_VM2U2VKaITRs5ZYydXNev/view?usp=sharing",
    ],
    skills: "Machine Learning · Data Analytics · Alteryx",
  },
  {
    title: "Intel Unnati Training on AI",
    image: "/certs/intel.png",
    links: [
      "https://drive.google.com/file/d/17Aydz1a4DRuk3Q4VfDlItBnpZ3xeRmeK/view?usp=sharing",
    ],
    skills: "Artificial Intelligence · Machine Learning · AI Fundamentals",
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI",
    image: "/certs/oracle.png",
    links: [
      "https://drive.google.com/file/d/1P7lUPSXAcAya8CWuAwS7EmkPScJbiQKT/view?usp=sharing",
    ],
    skills: "Generative AI · LLMs · Oracle Cloud Infrastructure (OCI)",
  },
];

export default function Experience() {
  const [previewCert, setPreviewCert] = useState(null);

  return (
    <section
      id="experience"
      className="relative w-full py-24 px-4 sm:px-6 bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern"
    >
      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Heading Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#E0A0A1] text-brand-dark px-4 py-2.5 sm:px-8 sm:py-3 border-3 border-brand-dark neo-shadow sm:neo-shadow-lg"
          >
            <h2 className="text-xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Experience & Credentials
            </h2>
          </motion.div>
        </div>

        {/* Experience Section */}
        <div className="space-y-8 mb-16">
          {/* Subheading Tab */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-dark text-brand-bg px-3 py-1 sm:px-4 sm:py-1.5 font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wider border-2 border-brand-dark flex items-center gap-2">
              <Briefcase size={16} strokeWidth={2.5} />
              <span>Work Experience</span>
            </div>
            <div className="h-0.5 bg-brand-dark flex-grow border-t-2 border-brand-dark"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FBFAF7] border-3 border-brand-dark p-6 neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,33,37,1)] transition-all duration-150"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-black uppercase tracking-wide text-brand-dark">
                      {exp.role}
                    </h3>
                    <span className="inline-block mt-2 bg-brand-rose text-brand-dark border-2 border-brand-dark px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                      {exp.company}
                    </span>
                  </div>
                  <div className="bg-brand-muddy text-brand-bg border-2 border-brand-dark px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-wider shrink-0 self-start md:self-auto">
                    {exp.duration}
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-4">
                  {exp.location}
                </div>

                <p className="text-brand-dark/90 text-sm md:text-base leading-relaxed font-medium bg-[#FBFAF7] border-2 border-brand-dark/25 p-4 neo-shadow-sm">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          {/* Subheading Tab */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-dark text-brand-bg px-3 py-1 sm:px-4 sm:py-1.5 font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wider border-2 border-brand-dark flex items-center gap-2">
              <Award size={16} strokeWidth={2.5} />
              <span>Certifications & Badges</span>
            </div>
            <div className="h-0.5 bg-brand-dark flex-grow border-t-2 border-brand-dark"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#FBFAF7] border-3 border-brand-dark neo-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] transition-all duration-150 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-display font-black uppercase tracking-wide text-brand-dark leading-tight mb-3">
                      {cert.title}
                    </h3>

                    <div className="mt-2 p-3 bg-brand-bg border-2 border-brand-dark/30 text-xs font-semibold text-brand-dark/80 leading-relaxed mb-6">
                      <span className="font-bold text-brand-dark uppercase block mb-1">
                        Topics Covered:
                      </span>
                      {cert.skills}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    {cert.image && (
                      <button
                        type="button"
                        onClick={() => setPreviewCert(cert)}
                        className="flex-1 text-center py-2.5 px-3 bg-brand-dark text-brand-bg border-2 border-brand-dark font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-muddy transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px]"
                      >
                        <ZoomIn size={14} strokeWidth={2.5} />
                        <span>View Certificate</span>
                      </button>
                    )}

                    {cert.links.length > 0 ? (
                      <a
                        href={cert.links[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 px-3 bg-brand-red text-brand-bg border-2 border-brand-dark font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-dark hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(24,33,37,1)] transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                      >
                        <span>Verify</span>
                        <ExternalLink size={12} strokeWidth={2.5} />
                      </a>
                    ) : (
                      <div className="flex-1 text-center py-2.5 px-3 bg-brand-gray/20 text-brand-dark/60 border-2 border-dashed border-brand-dark/40 font-display font-extrabold text-xs uppercase tracking-wider">
                        Self-Study
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Preview Modal */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
            className="fixed inset-0 z-50 bg-brand-dark/80 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#FBFAF7] border-3 border-brand-dark neo-shadow-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="absolute top-3 right-3 z-10 p-1.5 bg-brand-dark text-brand-bg border-2 border-brand-dark hover:bg-brand-red transition-colors"
              >
                <X size={18} strokeWidth={2.5} />
              </button>

              <img
                src={previewCert.image}
                alt={previewCert.title}
                className="w-full h-auto object-contain border-b-3 border-brand-dark bg-white"
              />

              <div className="p-6">
                <h3 className="text-xl font-display font-black uppercase tracking-wide text-brand-dark mb-2">
                  {previewCert.title}
                </h3>
                <p className="text-sm text-brand-dark/70 font-semibold">
                  {previewCert.skills}
                </p>
                {previewCert.links.length > 0 && (
                  <a
                    href={previewCert.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 py-2 px-4 bg-brand-red text-brand-bg border-2 border-brand-dark font-display font-extrabold text-xs uppercase tracking-wider hover:bg-brand-dark transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}