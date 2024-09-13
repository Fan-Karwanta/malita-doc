import Image from "next/image";
import Link from "next/link";

import { columns2 } from "@/components/table/columns2";
import { DataTable } from "@/components/table/DataTable";

import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const ViewAppointmentsPage = async () => {
  const appointments = await getRecentAppointmentList();

  // JavaScript for hiding the header on scroll
  const script = `
    (function() {
      let lastScrollTop = 0;
      const header = document.querySelector('.admin-header');

      window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down
          header.style.transform = 'translateY(-100%)'; // Hide header
        } else {
          // Scrolling up
          header.style.transform = 'translateY(0)'; // Show header
        }
        lastScrollTop = scrollTop;
      });
    })();
  `;

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      {/*<header className="admin-header flex items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-header.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-20 w-40"
          />
        </Link>

        <p className="text-16-semibold">Appointments</p>
  </header> */}

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Hello Dear Patients 👋</h1>
          <p className="text-dark-700">
            These are the Recent Requested Appointments. Feel free to choose the
            best schedule that is available for you.
          </p>
        </section>

        <DataTable columns={columns2} data={appointments.documents} />
      </main>

      {/* Inline script for header hiding */}
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </div>
  );
};

export default ViewAppointmentsPage;
