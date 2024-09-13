import { columns2 } from "@/components/table/columns2";
import { DataTable } from "@/components/table/DataTable";

import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const ViewAppointmentsPage = async () => {
  const appointments = await getRecentAppointmentList();

  // JavaScript for hiding the header on scroll
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <br />
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
    </div>
  );
};

export default ViewAppointmentsPage;
