import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const contributors = [
    "Ananya V Gowda",
    "Mayuri J Shetty",
    "Sweedel Rodrigues",
    "Rakshitha R L"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-t-2 border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.15),transparent_70%),radial-gradient(circle_at_80%_50%,hsl(var(--secondary)/0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.03)_25%,hsl(var(--primary)/0.03)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.03)_75%)] bg-[length:60px_60px]"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text">MediLocator</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered smart medicine locator that helps you find medicines at the best prices near you. 
              We provide real-time stock availability and price comparison across pharmacies to make 
              healthcare more accessible and affordable for everyone.
            </p>
          </div>

          {/* Middle - Contributors */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contributors</h3>
            <ul className="space-y-2">
              {contributors.map((name, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MediLocator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
