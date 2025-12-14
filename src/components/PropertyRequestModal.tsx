import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PropertyRequestForm } from "./forms/PropertyRequestForm";

interface PropertyRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PropertyRequestModal = ({ open, onOpenChange }: PropertyRequestModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Property</DialogTitle>
          <DialogDescription>
            Tell us what you're looking for and our team will find the perfect property for you.
          </DialogDescription>
        </DialogHeader>
        <PropertyRequestForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};
