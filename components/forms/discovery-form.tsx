"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type UseFormRegister, type UseFormSetValue, type UseFormWatch } from "react-hook-form";
import { toast } from "sonner";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getDiscoveryFormUrl } from "@/lib/config";
import {
  channelOptions,
  defaultAssessment,
  loadAssessment,
  pricingOptions,
  saveAssessment,
  specOptions,
  systemOptions,
  type AssessmentValues,
} from "@/lib/assessment";

const steps = [
  "المبيعات",
  "المواصفات",
  "التسعير",
  "الإنتاج",
  "الجودة",
  "المواد",
  "المخزون",
  "اللوجستيات",
  "المندوبون",
  "الأنظمة",
  "تقارير الإدارة",
];

export function DiscoveryForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const formUrl = getDiscoveryFormUrl();
  const form = useForm<AssessmentValues>({
    defaultValues: defaultAssessment,
  });

  useEffect(() => {
    form.reset(loadAssessment());
  }, [form]);

  function persist() {
    saveAssessment(form.getValues());
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="تقييم اكتشاف المصنع"
        description="كل إجابة تساعدنا على تحويل هذا التصور من نموذج عام إلى مقترح مبني على واقع المصنع."
        demo={false}
      />
      <HonestyNote>
        يمكن حفظ التقدم محلياً في هذا المتصفح. النموذج الكامل على Google Form يُستخدم عندما يكون الرابط مضبوطاً.
      </HonestyNote>
      <p className="text-sm text-muted-foreground">
        القسم {step + 1} من {steps.length}: {steps[step]}
      </p>
      <div className="h-1 overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-primary" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{steps[step]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 0 ? (
            <>
              <Multi name="requestChannels" label="كيف تصل طلبات العملاء حالياً؟" options={channelOptions} form={form} />
              <Field name="monthlyQuotes" label="تقريباً كم طلب عرض يصل شهرياً؟" form={form} />
              <Field name="whoPrices" label="من يُعد عروض الأسعار؟" form={form} />
              <Area name="pricingInfo" label="ما الذي يجب معرفته قبل التسعير؟" form={form} />
              <Field name="missingSpecsFreq" label="كم يتكرر نقص المواصفات في الطلب؟" form={form} />
              <Field name="quotesManual" label="هل تُعد العروض يدوياً؟" form={form} />
              <Field name="followUp" label="كيف تُتابع العروض بعد الإرسال؟" form={form} />
              <Field name="hasCrm" label="هل يوجد نظام إدارة عملاء؟" form={form} />
              <Field name="oldQuotesSearchable" label="هل يمكن البحث في العروض القديمة؟" form={form} />
              <Area name="returningCustomers" label="كيف تُعامل طلبات العملاء العائدين؟" form={form} />
            </>
          ) : null}
          {step === 1 ? (
            <>
              <Multi name="relevantSpecs" label="أي المواصفات ذات صلة بمنتجاتكم؟ (لا نفترض أنها كلها تنطبق)" options={specOptions} form={form} />
              <Area name="specNotes" label="ملاحظات على طريقة توصيف المنتج" form={form} />
            </>
          ) : null}
          {step === 2 ? (
            <>
              <Multi name="pricingMethod" label="كيف يُحسب السعر حالياً؟" options={pricingOptions} form={form} />
              <Field name="pricesFollowMarket" label="هل يتغير السعر مع سوق الخامات؟" form={form} />
              <Field name="approvalNeeded" label="هل يحتاج العرض اعتماداً؟" form={form} />
              <Field name="discountApprover" label="من يعتمد الخصم؟" form={form} />
            </>
          ) : null}
          {step === 3 ? (
            <>
              <Area name="machineCountTypes" label="عدد وأنواع خطوط الإنتاج (بدون حاجة لأرقام دقيقة إن لم تكن جاهزة)" form={form} />
              <Area name="machineProcesses" label="ماذا تؤدي كل آلة؟" form={form} />
              <Field name="capacityUnits" label="وحدة الطاقة المستخدمة (كغ/ساعة، طن/يوم، قطعة/ساعة...)" form={form} />
              <Field name="shifts" label="هيكل الورديات" form={form} />
              <Field name="changeover" label="زمن التجهيز / تغيير المواصفة" form={form} />
              <Field name="downtimeTracked" label="هل يُتتبع التوقف؟" form={form} />
              <Field name="planVsActual" label="هل يُقارن المخطط بالفعلي؟" form={form} />
              <Field name="scrapTracked" label="هل يُتتبع الهدر؟" form={form} />
              <Field name="stopReasons" label="أسباب التوقف المعروفة" form={form} />
              <Field name="maintenanceRecords" label="سجلات الصيانة" form={form} />
              <Field name="scheduling" label="كيف تُجدول الأوامر وتُحدَّد الأولوية؟" form={form} />
              <Area name="urgentOrders" label="كيف تُعامل الأوامر العاجلة؟" form={form} />
            </>
          ) : null}
          {step === 4 ? (
            <>
              <Area name="qualityChecks" label="ما فحوصات الجودة؟" form={form} />
              <Field name="qualityStages" label="في أي مراحل؟" form={form} />
              <Field name="defectRecording" label="كيف تُسجَّل العيوب؟" form={form} />
              <Field name="rejectCategorized" label="هل يُصنَّف المرفوض حسب السبب؟" form={form} />
              <Field name="qualityDigital" label="هل السجلات رقمية؟" form={form} />
              <Field name="certificates" label="هل تُصدر شهادات أو تقارير؟" form={form} />
              <Area name="qualityTrace" label="هل يمكن تتبع المشكلة إلى آلة/دفعة/خامة/مشغّل؟" form={form} />
            </>
          ) : null}
          {step === 5 ? (
            <>
              <Field name="materialCategories" label="فئات الخامات الرئيسية" form={form} />
              <Area name="supplierManagement" label="كيف تُدار علاقة الموردين؟ (لا حاجة لأسماء سرية)" form={form} />
              <Field name="multiSupplier" label="هل يوجد أكثر من مورد لنفس الخامة؟" form={form} />
              <Field name="leadTimes" label="مدد التوريد التقريبية" form={form} />
              <Field name="minStock" label="الحد الأدنى / نقطة إعادة الطلب" form={form} />
              <Field name="poProcess" label="مسار أمر الشراء" form={form} />
              <Field name="priceHistory" label="هل يُحفظ تاريخ أسعار الخامات؟" form={form} />
              <Field name="lotTracking" label="تتبع الدفعات" form={form} />
              <Field name="supplierPerformance" label="هل يُقاس أداء المورد أو جودة توريده؟" form={form} />
            </>
          ) : null}
          {step === 6 ? (
            <>
              <Field name="inventoryRaw" label="تتبع الخامات" form={form} />
              <Field name="inventoryWip" label="تتبع تحت التشغيل" form={form} />
              <Field name="inventoryFg" label="تتبع تام الصنع" form={form} />
              <Field name="warehouseLocations" label="مواقع المستودع" form={form} />
              <Field name="stockAccuracy" label="دقة الجرد والمخزون الراكد وتنبيهات الأمان" form={form} />
            </>
          ) : null}
          {step === 7 ? (
            <>
              <Field name="fleet" label="أسطول خاص أم ناقل خارجي؟" form={form} />
              <Field name="vehicles" label="عدد/نوع المركبات إن وُجد أسطول" form={form} />
              <Field name="deliveryScheduling" label="جدولة التسليم وتعيين المندوب" form={form} />
              <Field name="shipmentTracking" label="تتبع الشحنة وتأكيد التسليم والتأخير" form={form} />
              <Area name="exportDocs" label="مسار التصدير والمستندات المطلوبة إن وُجد" form={form} />
            </>
          ) : null}
          {step === 8 ? (
            <>
              <Field name="hasReps" label="هل يوجد مندوبو مبيعات؟" form={form} />
              <Field name="leadAssignment" label="كيف تُوزَّع الفرص؟" form={form} />
              <Field name="visitRecording" label="كيف تُسجَّل الزيارات وربطها بالعروض؟" form={form} />
              <Field name="salesTargets" label="الأهداف والمناطق وقياس التحويل" form={form} />
            </>
          ) : null}
          {step === 9 ? (
            <>
              <Multi name="systems" label="ما الأنظمة المستخدمة اليوم؟" options={systemOptions} form={form} />
              <Field name="hasApi" label="هل توجد واجهات ربط (API)؟" form={form} />
              <Field name="canExport" label="هل يمكن التصدير إلى Excel/CSV؟" form={form} />
            </>
          ) : null}
          {step === 10 ? (
            <>
              <Area name="dailyReports" label="ماذا تريد الإدارة رؤيته يومياً؟" form={form} />
              <Area name="weeklyReports" label="أسبوعياً؟" form={form} />
              <Area name="monthlyReports" label="شهرياً؟ (مبيعات، تحويل، إنتاج، استغلال، توقف، هدر، جودة، مخزون، تسليم، ربحية...)" form={form} />
            </>
          ) : null}
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" disabled={step === 0} onClick={() => { persist(); setStep((s) => s - 1); }}>
          السابق
        </Button>
        {step < steps.length - 1 ? (
          <Button type="button" onClick={() => { persist(); setStep((s) => s + 1); }}>
            التالي
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => {
              persist();
              toast.success("حُفظ التقييم على هذا الجهاز.");
              router.push("/assessment/results");
            }}
          >
            إرسال التقييم
          </Button>
        )}
        {formUrl ? (
          <Button asChild variant="secondary">
            <a href={formUrl} target="_blank" rel="noreferrer">
              فتح النموذج الكامل
            </a>
          </Button>
        ) : (
          <Button type="button" variant="secondary" onClick={() => toast.message("سيظهر هذا الزر بعد ضبط رابط Google Form.")}>
            فتح النموذج الكامل
          </Button>
        )}
      </div>
    </div>
  );
}

type FormBits = {
  register: UseFormRegister<AssessmentValues>;
  watch: UseFormWatch<AssessmentValues>;
  setValue: UseFormSetValue<AssessmentValues>;
};

function Field({
  name,
  label,
  form,
}: {
  name: keyof AssessmentValues;
  label: string;
  form: FormBits;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...form.register(name)} />
    </div>
  );
}

function Area({
  name,
  label,
  form,
}: {
  name: keyof AssessmentValues;
  label: string;
  form: FormBits;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea id={name} rows={3} {...form.register(name)} />
    </div>
  );
}

function Multi({
  name,
  label,
  options,
  form,
}: {
  name: "requestChannels" | "relevantSpecs" | "pricingMethod" | "systems";
  label: string;
  options: string[];
  form: FormBits;
}) {
  const selected = form.watch(name);
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={(checked) => {
                const next = checked
                  ? [...selected, option]
                  : selected.filter((item) => item !== option);
                form.setValue(name, next);
              }}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
