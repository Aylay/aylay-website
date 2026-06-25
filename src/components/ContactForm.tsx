"use client";

import { useActionState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { sendContact, type ContactState } from "@/app/actions/contact";

const inputClass =
  "font-sans text-[15px] text-(--text) bg-(--card) border border-(--line) rounded-[9px] px-3.25 py-2.75 w-full transition-colors duration-140 focus:border-cobalt focus:outline-none";
const labelClass = "flex flex-col gap-1.5 text-[13px] font-medium text-(--muted)";

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const t = useTranslations("form");
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(sendContact, initial);

  // Vide le formulaire après un envoi réussi
  useEffect(() => {
    if (state.status === "ok") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-3.5" noValidate>
      <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-3.5">
        <label className={labelClass} htmlFor="cf-firstName">
          <span>{t("firstName")}</span>
          <input id="cf-firstName" className={inputClass} name="firstName" autoComplete="given-name" required />
        </label>
        <label className={labelClass} htmlFor="cf-lastName">
          <span>{t("lastName")}</span>
          <input id="cf-lastName" className={inputClass} name="lastName" autoComplete="family-name" required />
        </label>
      </div>
      <label className={labelClass} htmlFor="cf-email">
        <span>{t("email")}</span>
        <input id="cf-email" className={inputClass} type="email" name="email" autoComplete="email" required />
      </label>
      <label className={labelClass} htmlFor="cf-subject">
        <span>{t("subject")}</span>
        <input id="cf-subject" className={inputClass} name="subject" required />
      </label>
      <label className={labelClass} htmlFor="cf-message">
        <span>{t("message")}</span>
        <textarea id="cf-message" className={`${inputClass} resize-y min-h-24`} name="message" rows={4} required />
      </label>

      {/* Bot trap : champ caché qui doit rester vide */}
      <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-1">
        <button
          type="submit"
          disabled={isPending}
          className="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg cursor-pointer border-2 border-transparent bg-saffron text-cobalt-deep transition-transform duration-140 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-default"
        >
          {isPending ? t("sending") : t("send")}
        </button>
        <p
          className={`text-[13px] font-mono ${
            state.status === "ok" ? "text-teal" : state.status === "error" ? "text-coral" : ""
          }`}
          role="status"
          aria-live="polite"
        >
          {state.status === "ok" ? t("success") : state.status === "error" ? t("error") : ""}
        </p>
      </div>
    </form>
  );
}