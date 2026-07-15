import { motion } from "framer-motion";

const categories = {
  "Featured Projects": [
    {
      title: "AgrowAssist",
      desc: "An AI-powered agricultural assistance platform with crop recommendations, interactive analytics using BI and an offline-capable mobile app including leaf disease detection, fruit classification and fruit health analysis.",
      github:
        "https://github.com/Gunjankumar55/Agroassist---Smart-Crop-Recommendation-using-ML",
      image: "/projects/1.png",
      tags: ["Python", "Pandas", "Flask", "Power BI", "TensorFlow Lite"],
      cardBg: "#e6f4ec",
      thumbBg: "#e8f5ec", // clean/light — lets the green thumbnail pop
    },
    {
      title: "LSB Steganalysis System",
      desc: "Developed an intelligent image security system that detects hidden malicious payloads embedded within images. The model first distinguishes clean images from stego images, then classifies embedded payloads such as HTML, JavaScript, PowerShell and other malicious code for cybersecurity applications.",
      github: "https://github.com/Gunjankumar55/LSB_steganography_detection",
      image: "/projects/3.png",
      tags: ["Python", "Scikit-learn", "Deep Learning", "Image Processing"],
      cardBg: "#e3e2fe", // rose — echoes the pink accents in the thumbnail
      thumbBg: "#e3e2fe",
    },
    {
      title: "SenseResolver",
      desc: "An intelligent Word Sense Disambiguation system that identifies the intended meaning of ambiguous words by understanding the context of a sentence. It also incorporates a feedback learning mechanism that continuously improves prediction accuracy based on user interactions.",
      github: "https://github.com/Gunjankumar55/LESK_BERT_WSD",
      image: "/projects/2.png",
      tags: ["Python", "Flask", "NLTK", "Lesk Algorithm", "NLP"],
      cardBg: "#fdf1de", // muddy — warm neutral that sits well against the purple/cream thumbnail
      thumbBg: "#fdf1de",
    },
  ],
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 sm:px-6 bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Heading Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-rose text-brand-dark px-4 py-2.5 sm:px-8 sm:py-3 border-3 border-brand-dark neo-shadow sm:neo-shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Projects
            </h2>
          </motion.div>
        </div>

        {/* Categories Stack */}
        <div className="flex flex-col gap-16">
          {Object.entries(categories).map(
            ([categoryName, projects], catIdx) => (
              <div key={catIdx} className="space-y-6">
                {/* Category Tab Header */}
                <div className="flex items-center">
                  <div className="bg-brand-dark text-brand-bg px-5 py-2 font-display font-black text-lg md:text-xl uppercase tracking-wider border-2 border-brand-dark rotate-[-0.5deg]">
                    {categoryName}
                  </div>
                  <div className="h-0.5 bg-brand-dark flex-grow border-t-2 border-brand-dark"></div>
                </div>

                {/* Projects List - horizontal cards, stacked */}
                <div className="flex flex-col gap-8">
                  {projects.map((project, i) => {
                    const isDarkBg =
                      project.cardBg === "#908571" ||
                      project.cardBg === "#182125";
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="border-3 border-brand-dark flex flex-col md:flex-row neo-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] transition-all duration-150 overflow-hidden"
                        style={{ backgroundColor: project.cardBg }}
                      >
                        {/* Thumbnail - left side */}
                        {project.image && (
                          <div
                            className="md:w-2/5 border-b-3 md:border-b-0 md:border-r-3 border-brand-dark shrink-0 flex items-center justify-center"
                            style={{
                              backgroundColor: project.thumbBg || "#FFFFFF",
                            }}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-56 md:h-full object-contain"
                              onError={(e) => {
                                e.target.parentElement.style.display = "none";
                              }}
                            />
                          </div>
                        )}

                        {/* Text - right side */}
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                          <div>
                            <h4
                              className={`text-2xl font-display font-black uppercase tracking-wide mb-3 break-words ${
                                isDarkBg ? "text-brand-bg" : "text-brand-dark"
                              }`}
                            >
                              {project.title}
                            </h4>
                            {project.desc && (
                              <p
                                className={`font-medium text-sm md:text-base leading-relaxed mb-4 ${
                                  isDarkBg
                                    ? "text-brand-bg/90"
                                    : "text-brand-dark/95"
                                }`}
                              >
                                {project.desc}
                              </p>
                            )}
                          </div>

                          <div>
                            {project.tags && (
                              <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.tags.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-xxs md:text-xs font-bold uppercase tracking-wider bg-brand-bg text-brand-dark border border-brand-dark px-1.5 py-0.5"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center py-2.5 px-6 font-display font-extrabold text-sm uppercase bg-brand-dark text-brand-bg border-2 border-brand-dark hover:bg-brand-red hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(24,33,37,1)] transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none inline-block"
                              >
                                View on GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ),
          )}
        </div>

        {/* Global Bottom CTA */}
        <div className="text-center mt-20">
          <motion.a
            href="https://github.com/Gunjankumar55?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-brand-muddy text-brand-bg font-display font-black text-lg border-3 border-brand-dark neo-shadow uppercase tracking-wider transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Explore More Projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
