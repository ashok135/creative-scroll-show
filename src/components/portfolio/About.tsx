import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Zap, Users, Trophy, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "WordPress Expert",
    description: "Custom theme development and plugin customization with modern best practices"
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Optimizing websites for speed, SEO, and user experience"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach working with designers and project managers"
  },
  {
    icon: Trophy,
    title: "Certified Professional",
    description: "Edureka certified developer with Grade A achievements"
  }
];

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
  { icon: Phone, label: "Phone", value: "+91 9994847167" },
  { icon: Mail, label: "Email", value: "ashoksiva135@gmail.com" },
  { icon: Calendar, label: "Experience", value: "2+ Years" },
];

export function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative web solutions and delivering exceptional user experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a results-driven WordPress developer with a strong passion for React.js and innovation. 
                  My journey in web development has been focused on creating seamless user experiences and 
                  delivering high-quality, efficient solutions.
                </p>
                <p>
                  Currently working at <strong className="text-foreground">Chingari (Tech4billion Media PVT.LTD.)</strong> 
                  in Bangalore, I specialize in custom WordPress theme development, plugin customization, 
                  and performance optimization. I've successfully reduced page load times and improved 
                  organic traffic for multiple client projects.
                </p>
                <p>
                  With a Bachelor's degree in Computer Application and multiple certifications, I'm 
                  dedicated to staying current with the latest web technologies and best practices. 
                  I believe in collaborative teamwork and delivering projects that exceed expectations.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg border border-border/50"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group"
              >
                <Card className="h-full bg-gradient-card border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:animate-glow-pulse">
                        <highlight.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}