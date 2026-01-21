"use client";

import { useState } from "react";
import { CoordinatorTabs, type CoordinatorTab } from "@/features/coordinator/components/coordinator-tabs";
import { DashboardTab } from "@/features/coordinator/components/dashboard-tab";
import { TurmasTab } from "@/features/coordinator/components/turmas-tab";
import { TeachersTab } from "@/features/coordinator/components/teachers-tab";
import { StudentsTab } from "@/features/coordinator/components/students-tab";

export default function CoordinatorDashboard() {
  const [activeTab, setActiveTab] = useState<CoordinatorTab>("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "turmas":
        return <TurmasTab />;
      case "teachers":
        return <TeachersTab />;
      case "students":
        return <StudentsTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <CoordinatorTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {renderTabContent()}
    </div>
  );
}
