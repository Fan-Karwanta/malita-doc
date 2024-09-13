import Link from "next/link";
import { Button } from "@/components/ui/button";

const FloatingViewAppointmentsButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Button
        variant="outline"
        className="text-white bg-[#DAA520] hover:bg-[#B8860B] w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
      >
        <Link href={`/view-appointment`} className="text-center">
          View Appointments
        </Link>
      </Button>
    </div>
  );
};

export default FloatingViewAppointmentsButton;
