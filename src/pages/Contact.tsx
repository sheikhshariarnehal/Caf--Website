import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We'd love to hear from you! Drop us a message or stop by for a cup of coffee.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="rounded-lg bg-card p-6 shadow-sm md:p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 space-y-8 lg:order-2">
              {/* Address */}
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Visit Us
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      123 Coffee Lane<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        Call Us
                      </h3>
                      <a
                        href="tel:+12125551234"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        (212) 555-1234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        Email Us
                      </h3>
                      <a
                        href="mailto:hello@brewhaven.com"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        hello@brewhaven.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Opening Hours
                    </h3>
                    <div className="mt-2 space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 7:00am - 8:00pm</p>
                      <p>Saturday - Sunday: 8:00am - 9:00pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Follow Us
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Stay connected for updates and special offers!
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary/10 p-3 transition-colors hover:bg-primary/20"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary/10 p-3 transition-colors hover:bg-primary/20"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary/10 p-3 transition-colors hover:bg-primary/20"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343035!2d-74.00425872397644!3d40.74076987138718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1704931200000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Brew Haven Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
