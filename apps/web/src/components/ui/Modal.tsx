"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { Icon } from "./Icon";

type ModalProps = { open: boolean; onClose: () => void; title: string; eyebrow?: string; children: ReactNode };

/* Native <dialog>: focus trap, Esc and inert background come from the platform. */
export function Modal({ open, onClose, title, eyebrow, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal__panel">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Затвори">
          <Icon name="close" size={22} />
        </button>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={titleId} className="modal__title">
          {title}
        </h2>
        {children}
      </div>
    </dialog>
  );
}
