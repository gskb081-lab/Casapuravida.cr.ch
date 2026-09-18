import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Wifi, UtensilsCrossed, Eye } from "lucide-react";
import BookingWidget from "../components/BookingWidget";
import TrustBadges from "../components/TrustBadges";
import ReviewCard from "../components/ReviewCard";
import SectionHeading from "../components/SectionHeading";
import { useLang } from "@/lib/LanguageContext";

const HERO_IMG = "https://media.base44.com/images/public/6a1863f55880ae85a72b0fe6/217729487_generated_a7937b7e.png";
const BEDROOM_IMG = "https://media.base44.com/images/public/6a1863f55880ae85a72b0fe6/39c905801_generated_02ea0751.png";
const OUTDOOR_IMG = "https://media.base44.com/images/public/6a1863f55880ae85a72b0fe6/220c0d446_generated_c35a2de9.png";
const POOL_IMG = "https://media.base44.com/images/public/6a1863f55880ae85a72b0fe6/d8d56ff71_generated_18fe4849.png";

const amenities = [
  { icon: Waves, label: "Pool with Nature View", desc: "Relax with stunning nature views" },
  { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Starlink 500 Mbps satellite" },
  { icon: UtensilsCrossed, label: "Outdoor Kitchen", desc: "Full gourmet setup" },
  { icon: Eye, label: "Nature View", desc: "Breathtaking natural panoramas" },
];

const reviews = [
  { name: "Sarah & James M.", location: "Austin, TX", rating: 5, text: "The most magical stay we've ever had. Waking up to howler monkeys and that infinity pool view... pure paradise. The hosts thought of everything.", date: "Mar 2026" },
  { name: "Lucia Fernandez", location: "Madrid, Spain", rating: 5, text: "We saved so much booking direct! The welcome basket with local fruits and coffee was such a lovely touch. Already planning our return.", date: "Feb 2026" },
  { name: "David Chen", location: "Vancouver, BC", rating: 5, text: "Perfect for remote work — fast Wi-Fi, quiet mornings, and then you close the laptop and you're in paradise. Genuinely life-changing.", date: "Jan 2026" },
];

export default function Home() {
  const { t } = useLang();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Casa Pura Vida villa at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-6">
                {t("hero_location")}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                {t("hero_title")}
              </h1>
              <p className="mt-6 text-lg text-white/80 font-body max-w-lg leading-relaxed">
                {t("hero_subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/rates">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2 h-12 px-8">
                    {t("hero_check_avail")} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body h-12 px-8">
                    {t("hero_view_gallery")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-white/60 text-sm font-body">
                <span>{t("hero_rating")}</span>
                <span>{"·"}</span>
                <span>{t("hero_reviews")}</span>
                <span>{"·"}</span>
                <span>{t("hero_superhost")}</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <BookingWidget variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile booking widget */}
      <section className="lg:hidden px-4 -mt-8 relative z-10">
        <BookingWidget variant="hero" />
      </section>

      {/* Urgency banner */}
      <div className="bg-accent/10 border-y border-accent/20 py-3">
        <p className="text-center text-sm font-body font-medium text-foreground">
          {t("urgency_text")}{" "}<span className="text-primary font-semibold">{t("urgency_viewers")}</span>
        </p>
      </div>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TrustBadges />
      </section>

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={BEDROOM_IMG} alt="Luxury bedroom" className="rounded-xl w-full h-48 lg:h-64 object-cover" />
            <img src={POOL_IMG} alt="Infinity pool" className="rounded-xl w-full h-48 lg:h-64 object-cover mt-8" />
            <img src={OUTDOOR_IMG} alt="Outdoor dining" className="rounded-xl w-full h-48 lg:h-64 object-cover col-span-2" />
          </div>
          <div>
            <SectionHeading
              eyebrow={t("why_eyebrow")}
              title={t("why_title")}
              description={t("why_desc")}
              center={false}
            />
            <ul className="space-y-4 font-body text-sm">
              {t("why_perks")?.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("amenities_eyebrow")} title={t("amenities_title")} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {amenities.map((a) => (
              <div key={a.label} className="bg-card rounded-xl p-6 border border-border/50 group hover:shadow-lg transition-shadow">
                <a.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-body font-semibold text-foreground">{a.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading eyebrow={t("reviews_eyebrow")} title={t("reviews_title")} description={t("reviews_desc")} />
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Villa at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">{t("cta_title")}</h2>
          <p className="mt-4 text-white/80 font-body text-lg">{t("cta_desc")}</p>
          <Link to="/rates">
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2 h-12 px-10">
              {t("cta_btn")} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}