"use client";

import { useState } from "react";
import { Button, Modal, Script } from "@/components/ui";
import type { Package } from "../content";

/* Enrollment is not open yet: the CTA explains the next step instead of faking a checkout. */
export function EnrollDialog({ pkg, label, variant = "primary" }: { pkg: Package; label: string; variant?: "primary" | "secondary" | "inverse" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={variant} block arrow onClick={() => setOpen(true)} aria-haspopup="dialog">
        {label}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} eyebrow={`${pkg.code} · ${pkg.descriptor}`} title="Записването скоро отваря">
        <p className="modal__text">
          Подготвяме следващия поток. Датата, цената и срокът на достъп ще бъдат публикувани тук, преди да започне записването.
        </p>
        <Script className="modal__script" size="md">
          твоят нов етап
        </Script>
        <div className="modal__actions">
          <Button href="https://t.me/" variant="primary" arrow>
            Следи новините в Telegram
          </Button>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Назад към пакетите
          </Button>
        </div>
      </Modal>
    </>
  );
}
