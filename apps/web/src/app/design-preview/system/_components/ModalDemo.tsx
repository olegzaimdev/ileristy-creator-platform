"use client";

import { useState } from "react";
import { Button, Modal } from "@/components/ui";

export function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)} aria-haspopup="dialog">
        Отвори modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} eyebrow="Modal" title="Премиум, минимален, чист">
        <p className="modal__text">Native &lt;dialog&gt;: фокусът остава вътре, Esc и клик извън панела затварят.</p>
        <div className="modal__actions">
          <Button onClick={() => setOpen(false)}>Разбрах</Button>
        </div>
      </Modal>
    </>
  );
}
