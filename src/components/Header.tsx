import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage (where transparent header should apply)
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic header styles based on scroll position and page
  const headerClasses = isHomePage
    ? scrolled
      ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      : "bg-transparent border-transparent"
    : "bg-background/95 backdrop-blur-md border-b border-border";

  // Dynamic text colors for visibility
  const logoTextClass = isHomePage && !scrolled
    ? "text-white drop-shadow-md"
    : "text-primary";

  const logoIconClass = isHomePage && !scrolled
    ? "text-white drop-shadow-md"
    : "text-primary";

  const navLinkClass = (isActive: boolean) => {
    if (isHomePage && !scrolled) {
      return isActive
        ? "text-white font-semibold drop-shadow-md"
        : "text-white/90 hover:text-white drop-shadow-md";
    }
    return isActive
      ? "text-primary"
      : "text-muted-foreground hover:text-primary";
  };

  const mobileButtonClass = isHomePage && !scrolled
    ? "text-white hover:bg-white/10"
    : "";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${headerClasses}`}
    >
      <div className="container mx-auto flex h-16 md:h-18 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-all hover:opacity-80">
          <Coffee className={`h-7 w-7 md:h-8 md:w-8 transition-colors duration-300 ${logoIconClass}`} />
          <span className={`font-serif text-lg md:text-xl font-semibold transition-colors duration-300 ${logoTextClass}`}>
            The Brew Haven
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 ${navLinkClass(location.pathname === link.path)}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden transition-colors duration-300 ${mobileButtonClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isHomePage && !scrolled ? "text-white" : ""}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isHomePage && !scrolled ? "text-white" : ""}`} />
          )}
        </Button>
      </div>

      {/* Mobile Navigation - always has solid background for readability */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background/98 backdrop-blur-lg md:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary ${location.pathname === link.path
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
