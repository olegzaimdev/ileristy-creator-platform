"use client";

import { useState } from "react";
import { Button, Modal, Script } from "@/components/ui";
import type { LandingDictionary, Package } from "../types";

type EnrollDialogProps = {
  pkg: Package;
  t: LandingDictionary["enroll"];
  closeLabel: string;
  variant?: "primary" | "secondary" | "inverse";
};

/* Enrollment is not open yet: the CTA explains the next step instead of faking a checkout. */
export function EnrollDialog({ pkg, t, closeLabel, variant = "primary" }: EnrollDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={variant} block arrow onClick={() => setOpen(true)} aria-haspopup="dialog">
        {pkg.cta}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} closeLabel={closeLabel} eyebrow={`${pkg.code} · ${pkg.descriptor}`} title={t.title}>
        <p className="modal__text">{t.text}</p>
        <Script className="modal__script" size="md">
          {t.script}
        </Script>
        <div className="modal__actions">
          <Button href="https://t.me/" variant="primary" arrow>
            {t.telegram}
          </Button>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            {t.back}
          </Button>
        </div>
      </Modal>
    </>
  );
}
