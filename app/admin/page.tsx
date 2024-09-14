import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import script from "next/script";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

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

        <p className="text-16-semibold">Admin</p>
  
        <a
          href="/"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
        >
          Logout
        </a>
      </header> */}
      <br />

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome Admin 🩺</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
        <a
          href="/"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
        >
          Logout
        </a>
      </main>

      {/* Inline script for header hiding */}
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </div>
  );
};

export default AdminPage;
