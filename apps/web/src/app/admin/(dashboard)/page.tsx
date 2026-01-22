"use client";

import { useState } from "react";
import { AdminTabs, type AdminTab } from "@/features/admin/components/admin-tabs";
import { DashboardTab } from "@/features/admin/components/dashboard-tab";
import { UsersTab } from "@/features/admin/components/users-tab";
import { TurmasManagementTab } from "@/features/admin/components/turmas-management-tab";
import { StudentsManagementTab } from "@/features/admin/components/students-management-tab";
import { FamiliesTab } from "@/features/admin/components/families-tab";
import { ActivityLogTab } from "@/features/admin/components/activity-log-tab";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "users":
        return <UsersTab />;
      case "turmas":
        return <TurmasManagementTab />;
      case "students":
        return <StudentsManagementTab />;
      case "families":
        return <FamiliesTab />;
      case "logs":
        return <ActivityLogTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <AdminTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {renderTabContent()}
    </div>
  );
}
