import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log("Contact form:", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Page Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 py-16">
        <div className="container mx-auto px-4">
          {/* Contact Cards */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Office Address</h3>
                <p className="text-sm text-muted-foreground">
                  4517 Washington Ave.<br />
                  Chester, Kentucky 39495
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Call Us</h3>
                <p className="text-sm text-muted-foreground">
                  Telephone: (603) 555-0123<br />
                  Mobile: (316) 555-0116
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Email Address</h3>
                <p className="text-sm text-muted-foreground">
                  hello@wheretogo.com<br />
                  support@wheretogo.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        placeholder="John Doe"
                        className="mt-1.5"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        placeholder="john@example.com"
                        className="mt-1.5"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="How can we help?"
                      className="mt-1.5"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="mt-1.5"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-0">
                <div className="flex h-96 items-center justify-center bg-muted">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />
                    <p className="text-muted-foreground">Map integration placeholder</p>
                    <p className="text-sm text-muted-foreground">Configure with your Mapbox or Leaflet API key</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
