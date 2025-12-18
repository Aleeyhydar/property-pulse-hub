import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bunianLogo from "@/assets/bunian-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Agriculture", href: "/agriculture" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={bunianLogo} alt="Bunian Logo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl text-foreground leading-tight">Bunian</span>
            <span className="text-[10px] text-muted-foreground tracking-wide">Real Estate | Agriculture | Investment</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+2341234567890"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+234 123 456 7890</span>
          </a>
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="container-wide py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
