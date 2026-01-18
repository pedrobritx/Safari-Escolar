import { useState, useCallback, useEffect } from 'react';
import { api } from '@/lib/api';
import { DashboardData, Class, User } from '@/lib/types'; // Assuming types are here or need to be moved
import { toast } from 'sonner';

export function useDashboard(user: User | null) {
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentDashboardData,setCurrentDashboardData] = useState<DashboardData | null>(null)

  const loadData = useCallback(async (token: string) => {
    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const [dashboard, classesData] = await Promise.all([
        api.getDashboard(token, formattedDate),
        api.getClasses(token, formattedDate),
      ]);

      setDashboardData(dashboard);
      setClasses(classesData);

      if(currentDashboardData) {
        const newCurrentDashboardData = dashboardData.find(dashboard => dashboard.classId === currentDashboardData.classId)
 
        if(newCurrentDashboardData)
          setCurrentDashboardData(newCurrentDashboardData)

      } else if(dashboardData.length > 0) {
        setCurrentDashboardData(dashboardData[0])
      }

      setSelectedClass((prev) => {
        if (prev) {
          const updatedClass = classesData.find((c: Class) => c.id === prev.id);
          return updatedClass || prev;
        } else if (classesData.length > 0) {
          return classesData[0];
        }
        return null;
      });
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Erro ao carregar dados do dashboard.');
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem('token');
      if (token) loadData(token);
    }
  }, [user, loadData]);

  const refreshData = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) loadData(token);
  }, [loadData]);

  return {
    dashboardData,
    classes,
    selectedClass,
    setSelectedClass,
    loading,
    selectedDate,
    setSelectedDate,
    refreshData,
    setClasses, // Exposed for optimistic updates if needed
    setDashboardData,
    currentDashboardData,
    setCurrentDashboardData,
  };
}
