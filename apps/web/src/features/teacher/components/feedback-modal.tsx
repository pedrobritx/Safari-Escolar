import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (note: string) => void;
  studentName: string;
  templateName: string;
}

export function FeedbackModal({ isOpen, onClose, onSubmit, studentName, templateName }: FeedbackModalProps) {
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    onSubmit(note);
    setNote("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar nota para {studentName}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-[var(--text-muted)] mb-2">
            Feedback: <span className="font-semibold text-[var(--primary)]">{templateName}</span>
          </p>
          <Textarea
            placeholder="Escreva uma observação (opcional)..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Enviar Feedback</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
