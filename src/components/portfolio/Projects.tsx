import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Zap, ShoppingCart, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AstroLive Blog Platform",
    description: "Feature-rich blog platform for astrology content with focus on user engagement and seamless navigation. Implemented custom WordPress theme with SEO optimization and performance enhancements.",
    image: "/placeholder-project1.jpg",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "SEO", "Performance"],
    features: [
      "Custom WordPress theme design",
      "SEO optimization with meta tags",
      "Responsive layout across devices",
      "Content management system",
      "Performance optimization"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Blog Platform",
    status: "Completed",
    icon: Globe
  },
  {
    title: "Bhaktiseva E-commerce",
    description: "Fully functional e-commerce website using WordPress and WooCommerce with automated WhatsApp messaging integration for seamless order notifications and customer engagement.",
    image: "/placeholder-project2.jpg", 
    technologies: ["WordPress", "WooCommerce", "WATI", "PHP", "JavaScript", "MySQL"],
    features: [
      "Complete WooCommerce integration",
      "WhatsApp messaging automation",
      "Custom product pages",
      "Responsive design",
      "Inventory management"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "E-commerce",
    status: "Completed",
    icon: ShoppingCart
  },
  {
    title: "Ceres Platform",
    description: "Modern web platform with enhanced user experience and optimized performance. Focus on clean design and fast loading times.",
    image: "/placeholder-project3.jpg",
    technologies: ["WordPress", "JavaScript", "CSS3", "Performance", "UX"],
    features: [
      "Modern responsive design",
      "Performance optimization", 
      "User experience enhancement",
      "Clean code architecture",
      "Cross-browser compatibility"
    ],
    liveUrl: "#",
    githubUrl: "#", 
    category: "Web Platform",
    status: "Completed",
    icon: Zap
  },
  {
    title: "GariNetwork",
    description: "Network platform with focus on connectivity and user engagement. Implemented with modern web standards and optimized for performance.",
    image: "/placeholder-project4.jpg",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "MySQL"],
    features: [
      "Network connectivity features",
      "User engagement tools",
      "Modern web standards",
      "Database optimization",
      "Scalable architecture"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Network Platform", 
    status: "Completed",
    icon: Star
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of my recent work and professional projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-gradient-card border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-500 overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image/Icon */}
                  <div className="relative h-48 bg-gradient-primary flex items-center justify-center overflow-hidden">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-glow group-hover:animate-glow-pulse">
                      <project.icon className="h-12 w-12 text-white" />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-success/20 text-success border-success/30">
                        {project.status}
                      </Badge>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:animate-slide-in-right" />
                  </div>

                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.5 + techIndex * 0.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="bg-gradient-primary hover:shadow-primary/30 hover:shadow-lg transition-all duration-300 flex-1"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="border-border hover:bg-accent transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>

                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://github.com/ashok-kumar", "_blank")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <Github className="h-5 w-5 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}