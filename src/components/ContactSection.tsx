import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_50%/0.04),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-2">
          Let's connect and build something great
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />

        <div className="max-w-lg mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border card-shadow">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <a
                href="mailto:bipinka01@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    bipinka01@gmail.com
                  </span>
                </div>
              </a>
              <a
                href="tel:+9779807592749"
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    (+977) 98-07592749
                  </span>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                  <span className="text-sm text-foreground">Nepal</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com/bipin-karmacharya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-border bg-background flex items-center justify-center hover:border-primary/50 hover:text-primary hover:scale-105 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/bipin-karmacharya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-border bg-background flex items-center justify-center hover:border-primary/50 hover:text-primary hover:scale-105 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
