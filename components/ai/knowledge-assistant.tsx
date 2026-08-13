"use client";

import { useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fallbackKnowledgeAnswer, knowledgeAnswers, sampleQuestions } from "@/data/knowledge";
import type { KnowledgeAnswer } from "@/types";

export function KnowledgeAssistant() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<KnowledgeAnswer | null>(null);

  function ask(question: string) {
    const match = knowledgeAnswers.find((item) => item.question === question);
    setActive(match ?? { ...fallbackKnowledgeAnswer, question });
    setQuery(question);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="Nour Factory Knowledge Assistant"
        description="مساعد يجيب من مستندات المصنع المعتمدة بعد فهرستها. الإجابات هنا محاكاة وتُظهر المصدر دائماً."
        demoLabel="إجابات محاكاة"
      />
      <HonestyNote>
        يجب أن تستند الإجابة إلى وثيقة داخلية مع ذكر المصدر. لا تُعامل هذه الردود كإجراءات رسمية للمصنع.
      </HonestyNote>
      <div className="flex flex-wrap gap-2">
        {sampleQuestions.map((question) => (
          <Button key={question} type="button" variant="outline" size="sm" onClick={() => ask(question)}>
            {question}
          </Button>
        ))}
      </div>
      <form
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          if (query.trim()) ask(query.trim());
        }}
      >
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="اسأل سؤالاً تجريبياً"
          aria-label="سؤال المساعد"
        />
        <Button type="submit">اسأل</Button>
      </form>
      {active ? (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{active.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-7">
            <p>{active.answer}</p>
            <div>
              <p className="text-xs text-muted-foreground">المصادر</p>
              {active.citations.map((citation) => (
                <p key={citation.title}>
                  {citation.title} — {citation.note}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}
      <Accordion type="single" collapsible>
        <AccordionItem value="rag">
          <AccordionTrigger>كيف سيُبنى المساعد لاحقاً؟</AccordionTrigger>
          <AccordionContent className="text-sm leading-7 text-muted-foreground">
            المستندات تُقرأ وتُقسَّم إلى مقاطع، ثم تُحوَّل إلى تمثيل قابل للبحث، وتُحفظ في قاعدة متجهات مع
            صلاحيات. عند السؤال يُسترجع المقطع المناسب ويُمرَّر إلى النموذج مع إلزام ذكر المصدر. التفاصيل
            التقنية تبقى في هذه الطبقة ولا تظهر في خطاب الإدارة.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
