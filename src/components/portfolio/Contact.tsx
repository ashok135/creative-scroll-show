import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9994847167",
    href: "tel:+919994847167",
    description: "Mon-Fri 9am-6pm IST"
  },
  {
    icon: Mail,
    title: "Email",
    value: "ashoksiva135@gmail.com", 
    href: "mailto:ashoksiva135@gmail.com",
    description: "Quick response guaranteed"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bangalore, India",
    href: "#",
    description: "Available for remote work"
  }
];

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    username: "@ashok-kumar",
    href: "https://github.com/ashok-kumar",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Linkedin,
    title: "LinkedIn", 
    username: "ashok-kumar",
    href: "https://linkedin.com/in/ashok-kumar",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    username: "+91 9994847167",
    href: "https://wa.me/919994847167",
    color: "from-green-500 to-green-600"
  }
];

export function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
        action: <CheckCircle className="h-4 w-4" />
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a custom WordPress solution, performance optimization, or 
                want to discuss your next web project, I'm here to help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:animate-glow-pulse">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-foreground">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center shadow-glow`}>
                      <social.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.title}
                      </h5>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-card border-border/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-primary/30 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="h-5 w-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}