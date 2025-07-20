import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

export default function SuccessMessageModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded">
        <DialogHeader>
          <div className="flex justify-center mb-3">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <DialogTitle className="text-center text-3xl lg:text-5xl font-bold text-neutral-800 leading-[1.2]">
            Thank You!
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-600 mt-2 leading-[1.2]">
            Your message has been sent successfully. We'll get back to you as
            soon as possible!
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-center">
          <Button
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors duration-200 py-2 px-6"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
