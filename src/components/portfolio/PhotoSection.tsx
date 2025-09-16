import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Download, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PhotoSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="photo" ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet <span className="text-gradient">Ashok Kumar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            WordPress Developer passionate about creating innovative web solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <Card className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-0 relative">
                {/* Photo placeholder with gradient background */}
                <div className="aspect-[4/5] bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      <Camera className="h-3 w-3 mr-1" />
                      Professional
                    </Badge>
                  </div>
                  
                  {/* Photo placeholder */}
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-glow group-hover:animate-glow-pulse">
                    <span className="text-6xl font-bold text-white">AK</span>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-20 left-8 w-4 h-4 bg-white/30 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-20 right-8 w-6 h-6 bg-white/20 rounded-full"
                  />
                </div>
                
                {/* Photo info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center space-x-2 text-white">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Bangalore, India</span>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Personal Profile</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Full Name:</strong> Ashok Kumar S
                  </p>
                  <p>
                    <strong className="text-foreground">Profession:</strong> WordPress Developer
                  </p>
                  <p>
                    <strong className="text-foreground">Location:</strong> Bangalore, India
                  </p>
                  <p>
                    <strong className="text-foreground">Experience:</strong> 2+ Years
                  </p>
                  <p>
                    <strong className="text-foreground">Specialization:</strong> Custom WordPress themes, React.js, Performance optimization
                  </p>
                </div>
              </div>

              <div className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Projects", value: "15+" },
                    { label: "Clients", value: "10+" },
                    { label: "Technologies", value: "8+" },
                    { label: "Certifications", value: "3" },
                  ].map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20"
                    >
                      <div className="text-2xl font-bold text-primary">{fact.value}</div>
                      <div className="text-sm text-muted-foreground">{fact.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => window.open("mailto:ashoksiva135@gmail.com")}
                className="bg-gradient-primary hover:shadow-primary/30 hover:shadow-lg transition-all duration-300 flex-1"
              >
                <Heart className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("#", "_blank")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}