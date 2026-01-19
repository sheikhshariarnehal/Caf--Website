import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { FeaturedItem } from "@/components/FeaturedItem";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import featuredCoffee from "@/assets/featured-coffee.jpg";
import featuredAvocado from "@/assets/featured-avocado.jpg";
import featuredDessert from "@/assets/featured-dessert.jpg";
import featuredTea from "@/assets/featured-tea.jpg";

const featuredItems = [
  {
    image: featuredCoffee,
    title: "Signature Latte",
    description: "Smooth espresso with velvety steamed milk",
  },
  {
    image: featuredAvocado,
    title: "Avocado Toast",
    description: "Fresh avocado on artisan bread with poached eggs",
  },
  {
    image: featuredDessert,
    title: "Chocolate Dream",
    description: "Rich chocolate cake with fresh berries",
  },
  {
    image: featuredTea,
    title: "Garden Iced Tea",
    description: "Refreshing blend with lemon and mint",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-foreground/60" />
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCafe})` }}
        >
          <div className="absolute inset-0 bg-foreground/50 sm:bg-foreground/45 md:bg-foreground/40" />
          <div className="container relative mx-auto flex h-full min-h-screen flex-col items-center justify-center px-5 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 md:py-28 text-center">
            <h1 className="font-serif text-3xl xs:text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight tracking-tight max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
              Welcome to The Brew Haven
            </h1>
            <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Your cozy neighborhood café where every cup tells a story and every moment feels like home.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col gap-3 sm:gap-4 w-full max-w-[280px] sm:max-w-none sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto text-base sm:text-sm lg:text-base px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 h-auto">
                <Link to="/menu">
                  View Our Menu
                  <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 w-full sm:w-auto text-base sm:text-sm lg:text-base px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 h-auto backdrop-blur-sm">
                <Link to="/contact">Find Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Banner */}
      <section className="bg-primary py-4">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-primary-foreground">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-medium">Mon - Fri: 7am - 8pm</span>
          </div>
          <div className="hidden h-4 w-px bg-primary-foreground/30 sm:block" />
          <div className="flex items-center gap-2 text-primary-foreground">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-medium">Sat - Sun: 8am - 9pm</span>
          </div>
          <div className="hidden h-4 w-px bg-primary-foreground/30 sm:block" />
          <div className="flex items-center gap-2 text-primary-foreground">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">123 Coffee Lane, Downtown</span>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Customer Favorites
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Discover what our regulars love most. From perfectly crafted coffee to delicious homemade treats.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item) => (
              <FeaturedItem key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/menu">
                See Full Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Come Visit Us Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Whether you're looking for the perfect cup of coffee, a quiet spot to work, or a place to catch up with friends - we've got you covered.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
