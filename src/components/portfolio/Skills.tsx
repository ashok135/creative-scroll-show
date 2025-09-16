import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Palette, 
  Zap, 
  Database, 
  Figma, 
  Smartphone,
  Globe,
  Settings
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 88 },
      { name: "Responsive Design", level: 92 }
    ]
  },
  {
    title: "WordPress Development",
    icon: Globe,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "WordPress", level: 95 },
      { name: "Custom Themes", level: 90 },
      { name: "Plugin Development", level: 85 },
      { name: "WooCommerce", level: 88 },
      { name: "WordPress Security", level: 80 }
    ]
  },
  {
    title: "Performance & SEO",
    icon: Zap,
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Performance Optimization", level: 90 },
      { name: "SEO", level: 85 },
      { name: "Page Speed", level: 88 },
      { name: "Core Web Vitals", level: 80 },
      { name: "Analytics", level: 75 }
    ]
  },
  {
    title: "Design & Tools",
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "Figma", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "Adobe Tools", level: 70 },
      { name: "Wireframing", level: 78 },
      { name: "Prototyping", level: 72 }
    ]
  }
];

const certifications = [
  {
    title: "Website Developer",
    issuer: "Edureka!",
    grade: "Grade A",
    icon: Code2
  },
  {
    title: "jQuery UI Development", 
    issuer: "Edureka!",
    grade: "Grade A",
    icon: Settings
  },
  {
    title: "HTML/CSS Basics",
    issuer: "Open Weaver",
    grade: "Certified",
    icon: Palette
  }
];

function SkillProgress({ skill, delay = 0, inView }: { 
  skill: { name: string; level: number }; 
  delay?: number; 
  inView: boolean; 
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-muted"
      />
    </div>
  );
}

export function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to create exceptional web experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full bg-gradient-card border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center shadow-glow group-hover:animate-glow-pulse`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + skillIndex * 0.1 }}
                      >
                        <SkillProgress 
                          skill={skill} 
                          delay={300 + skillIndex * 100}
                          inView={inView}
                        />
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            <span className="text-gradient">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="bg-gradient-card border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:animate-glow-pulse">
                      <cert.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {cert.grade}
                    </div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}