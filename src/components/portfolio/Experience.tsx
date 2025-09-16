import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Chingari (Tech4billion Media PVT.LTD.)",
    position: "WordPress Developer",
    location: "Bangalore",
    period: "Present",
    type: "Full-time",
    achievements: [
      "Custom Theme Development – Designed and implemented custom WordPress themes to align with client requirements, ensuring responsiveness and visual appeal",
      "Plugin Customization – Created and modified WordPress plugins to enhance website functionality",
      "Performance Optimization – Optimized website speed and SEO, reducing page load time and improving organic traffic",
      "Content Management – Managed content updates, migrations, and CMS integration",
      "Collaboration & Support – Worked with designers and project managers to deliver high-quality projects on time"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "MySQL"]
  },
  {
    company: "Altruist Technology",
    position: "Customer Care Executive",
    location: "Bangalore", 
    period: "Aug '24",
    type: "Full-time",
    achievements: [
      "Resolved an average of 50+ customer queries daily via phone and email, achieving a 97% customer satisfaction rate",
      "Managed customer accounts using CRM software, ensuring all information was accurate and up-to-date",
      "Assisted in developing new call scripts, improving response times and customer experience"
    ],
    technologies: ["CRM Software", "Customer Support", "Communication"]
  }
];

const education = {
  degree: "Bachelor of Computer Application",
  institution: "Hindustan College of Arts and Science",
  location: "Chennai",
  period: "Aug '19 - May '21",
  cgpa: "7.2",
};

export function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in web development and technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="bg-gradient-card border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-8">
                    {/* Company Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary mt-1">
                          <Building2 className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.3 + achIndex * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.6 + techIndex * 0.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              <span className="text-gradient">Education</span>
            </h3>
            
            <Card className="bg-gradient-card border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-500 overflow-hidden group">
              <CardContent className="p-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {education.degree}
                  </h4>
                  <div className="flex items-center justify-center space-x-2 text-primary mb-2">
                    <Building2 className="h-4 w-4" />
                    <span className="font-semibold">{education.institution}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{education.location}</span>
                    </div>
                    <div>
                      <Badge variant="outline" className="border-primary text-primary">
                        CGPA: {education.cgpa}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}