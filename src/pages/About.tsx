import { Layout } from "@/components/Layout";
import { Heart, Coffee, Users, Leaf } from "lucide-react";
import aboutInterior from "@/assets/about-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "Every bean is carefully selected, every drink crafted with love.",
  },
  {
    icon: Coffee,
    title: "Artisan Excellence",
    description: "Our baristas are trained in the art of perfect coffee making.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We believe in creating spaces where connections flourish.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and ethical sourcing.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Our Story
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A labor of love that started with a simple dream: to create the perfect neighborhood gathering spot.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={aboutInterior}
                alt="The Brew Haven cozy interior with vintage furniture and warm lighting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                How It All Began
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Brew Haven was born in 2018 from the shared vision of two coffee-loving friends who believed that a café should be more than just a place to grab a quick cup. It should be a sanctuary – a warm, inviting space where the aroma of freshly roasted beans mingles with the sound of friendly conversation.
                </p>
                <p>
                  After years of searching for the perfect location, we found our home in the heart of downtown. The exposed brick walls and large windows captured exactly what we envisioned: a blend of rustic charm and modern comfort.
                </p>
                <p>
                  Today, we're proud to serve as a gathering place for students, professionals, families, and friends. Every cup we serve carries our commitment to quality, community, and the simple joy of a well-made coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our core values guide everything we do, from sourcing our beans to serving our community.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg bg-primary p-8 text-center md:p-12">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              "To craft exceptional coffee experiences while fostering a welcoming community space where every guest feels at home. We are dedicated to quality, sustainability, and the art of bringing people together one cup at a time."
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
