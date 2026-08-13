import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Globe2, MapPin, Package, Printer, ShieldCheck } from "lucide-react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { getCompanyWebsiteUrl, getMapsUrl, siteConfig } from "@/lib/config";

const pillars = [
  {
    title: "تخصيص كامل",
    text: "مقاسات وسماكات وطباعة حسب مواصفاتكم — تغليفكم بطريقتكم.",
  },
  {
    title: "ثقة عالمية",
    text: "توريد لعملاء في الأردن وأفريقيا وأوروبا وأمريكا الشمالية.",
  },
  {
    title: "دقة وجودة",
    text: "خبرة منذ 1991 في أفلام وأكياس HDPE وLDPE وOPP وCPP.",
  },
];

const materials = ["HDPE", "LDPE", "OPP", "CPP"];

const products = [
  "أكياس تسوق بلاستيكية",
  "رولات أفلام",
  "أكياس تجميد",
  "أكياس نفايات",
  "مفارش طاولات",
  "طلبات مخصصة",
];

const values = [
  { title: "الجودة", text: "خامات وحرفية عالية في كل منتج." },
  { title: "التركيز على العميل", text: "احتياجكم هو ما يوجّه الحل." },
  { title: "النزاهة", text: "عمل بوضوح وشفافية." },
  { title: "الابتكار", text: "تقنيات وعمليات تُحدَّث باستمرار." },
  { title: "الاستدامة", text: "إنتاج مسؤول ورعاية للبيئة." },
];

export default function HomePage() {
  const mapsUrl = getMapsUrl();
  const website = getCompanyWebsiteUrl();

  return (
    <div className="brand-glow industrial-grid -mx-4 rounded-2xl px-4 py-4 sm:-mx-6 sm:px-6">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gold/35 bg-[#111111] px-5 py-8 text-white shadow-[0_20px_60px_rgb(0_0_0_/_0.35)] sm:px-10 sm:py-12">
        <div className="animate-brand-rise flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="brand-arch relative h-32 w-[6.25rem] shrink-0 overflow-hidden border border-gold/80 bg-black shadow-[0_12px_40px_rgb(201_162_39_/_0.4)]">
            <Image
              src="/brand/logo.png"
              alt={`${siteConfig.nameAr} — شعار نور العرب`}
              width={100}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">
              Nour Al-Arab · Jordan · منذ {siteConfig.since}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              تغليف ممتاز، نهج متين ومستدام للثقة
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              الشركة الرائدة في الأردن لصناعة التعبئة البلاستيكية منذ {siteConfig.since} —
              أفلام وأكياس مخصّصة من HDPE وLDPE وOPP وCPP للتجزئة والصناعة والأسواق العالمية.
            </p>
          </div>
        </div>

        <p className="animate-brand-rise-delay-1 mt-6 text-sm font-medium text-gold">
          إلى عناية {siteConfig.recipient} — {siteConfig.recipientRole}
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-white/80">
          هذا التصور يقترح منظومة ذكاء صناعي تُبنى حول دورة نور العرب الفعلية، لا حول قالب
          جاهز. نبدأ من واقع المصنع، ثم نربط المبيعات والإنتاج والجودة والإدارة.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {mapsUrl ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-gold underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              <MapPin className="size-3.5" aria-hidden />
              موقع المصنع على خرائط Google
            </a>
          ) : null}
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 text-gold underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            <Globe2 className="size-3.5" aria-hidden />
            nouralarab.com
          </a>
        </div>

        <div className="animate-brand-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="cursor-pointer bg-ochre text-[#111] hover:bg-gold">
            <Link href="/overview">
              استكشف التصور
              <ArrowLeft />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/assessment">ساعدنا على فهم المصنع</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto -mt-5 grid max-w-5xl gap-3 px-1 md:grid-cols-3">
        {pillars.map((item, index) => (
          <div
            key={item.title}
            className={[
              "ochre-panel rounded-xl px-4 py-5 shadow-md",
              index === 0
                ? "animate-brand-rise-delay-1"
                : index === 1
                  ? "animate-brand-rise-delay-2"
                  : "animate-brand-rise-delay-3",
            ].join(" ")}
          >
            <p className="text-xs font-semibold tracking-wide opacity-80">0{index + 1}</p>
            <h2 className="mt-1 font-heading text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 opacity-90">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-gold/25 bg-card/90 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-medium tracking-[0.16em] text-copper uppercase">
          Packaging Solutions
        </p>
        <h2 className="mt-1 font-heading text-2xl font-semibold">حلول تغليف لكل احتياج</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
          من أكياس التسوق إلى البطانات الصناعية ومفارش الطاولات — نكيّف الأبعاد والسماكة
          والطباعة لتبرز علامتكم. هذا الملخص مأخوذ من الموقع الرسمي للشركة.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {materials.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gold/40 bg-[#111111] px-3 py-1.5 font-mono text-xs tracking-wide text-gold"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-3"
            >
              <Package className="size-4 shrink-0 text-copper" aria-hidden />
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-muted/70 px-4 py-4">
            <ShieldCheck className="size-4 text-copper" aria-hidden />
            <p className="mt-2 text-sm font-semibold">متانة واستدامة</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              أفلام وأكياس مصممة لمقاومة التمزق والتسرب، مع خيارات قابلة لإعادة التدوير.
            </p>
          </div>
          <div className="rounded-xl bg-muted/70 px-4 py-4">
            <Printer className="size-4 text-copper" aria-hidden />
            <p className="mt-2 text-sm font-semibold">طباعة تُبرز علامتكم</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              طباعة ملونة عالية الوضوح على الأكياس والأفلام لتبقى الرسالة واضحة ومتسقة.
            </p>
          </div>
          <div className="rounded-xl bg-muted/70 px-4 py-4">
            <Globe2 className="size-4 text-copper" aria-hidden />
            <p className="mt-2 text-sm font-semibold">وصول عالمي</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              خدمة عملاء في الأردن وأفريقيا وكندا والولايات المتحدة وأوروبا.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-5xl rounded-2xl border border-border bg-card p-5 sm:p-7">
        <p className="text-xs font-medium tracking-[0.16em] text-copper uppercase">من نحن</p>
        <h2 className="mt-1 font-heading text-2xl font-semibold">قصة نور العرب</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          تأسست نور العرب للصناعات البلاستيكية عام {siteConfig.since} برؤية لتقديم حلول تعبئة
          عالية الجودة تلبي احتياجات الأعمال في الأردن وخارجه. على مدى أكثر من ثلاثة عقود
          نمت الشركة باستثمار تقنيات الإنتاج وتوسيع الخبرة حتى صارت اسماً موثوقاً في التعبئة
          البلاستيكية.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((item) => (
            <div key={item.title} className="rounded-xl border border-gold/20 px-3 py-3">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-xs leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-5xl rounded-2xl border border-gold/30 bg-[#111111] p-5 text-white sm:p-7">
        <p className="text-xs font-medium tracking-[0.16em] text-gold uppercase">
          Industrial Intelligence
        </p>
        <h2 className="mt-1 font-heading text-2xl font-semibold">نحو مصنع أكثر ذكاءً وترابطاً</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
          بعد فهم دورة نور العرب، يمكن بناء تصور يربط الاستفسارات والعروض والإنتاج والآلات
          والجودة والمواد واللوجستيات والإدارة — مع بقاء التسعير والمشتريات والقرارات الحساسة
          تحت اعتماد بشري.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="cursor-pointer bg-ochre text-[#111] hover:bg-gold">
            <Link href="/dashboard">مركز القيادة</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">التواصل والاكتشاف</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-5xl pb-8">
        <HonestyNote>
          هذه المنصة تصور استكشافي مستقل وليست نظاماً رسمياً لشركة نور العرب. النصوص التعريفية
          أعلاه مستمدة من الموقع العام للشركة، أما أرقام التشغيل داخل المنصة فتجريبية وتحتاج
          تحققاً ميدانياً.
        </HonestyNote>
        <div className="mt-4">
          <Button asChild size="lg" variant="secondary" className="cursor-pointer">
            <Link href="/assessment">ابدأ التقييم الأولي</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
