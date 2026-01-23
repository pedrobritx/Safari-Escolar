'use client';

import { ConfirmDeleteModal } from "@/components/ConfirmDeleteModal";
import { CreateUpdateSchoolModal } from "@/components/CreateUpdateSchoolModal";
import { SchoolCard } from "@/components/SchoolCard";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import { SchoolWithCoordinator, User } from "@/lib/types";
import { Plus, LayoutGrid, List } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SettingsPage() {
	const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [schools, setSchools] = useState<SchoolWithCoordinator[]>([])
  const [schoolToDelete, setSchoolToDelete] = useState<SchoolWithCoordinator | null>(null);
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState<boolean>(false);
  const [schoolModalMode, setSchoolModalMode] = useState<'create' | 'edit'>('create');
  const [schoolModal, setSchoolModal] = useState<SchoolWithCoordinator | null>(null)

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');

      if (!token || !userData) {
        router.push('/login');
        return;
      }

      const parsedUser = JSON.parse(userData);
      switch (parsedUser.role) {
        case 'FAMILY':
          router.push('/family');
          return
        case 'COORDINATOR':
          router.push('/dashboard');
          return
      }
      setUser(parsedUser);

      const schoolList = await api.getSchoolsWithCoordinators(token)
	  setSchools(schoolList)
    }

    loadData()
  }, [router]);

  const handleDeleteSchool = (deletedSchool: SchoolWithCoordinator) => {
	setSchools(prev => prev.filter( school => school.id !== deletedSchool.id))
  }

  const handleCreateOrUpdateSchool = (updatedSchool: SchoolWithCoordinator) => {
	const schoolExists = schools.find(school => school.id === updatedSchool.id)

	if(schoolExists) {
		setSchools(prev => prev.map(school => school.id === updatedSchool.id ? updatedSchool : school))
	} else {
		setSchools(prev => [...prev, updatedSchool]);
	}
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b-2 border-[var(--color-border)]">
        <div className="layout-container py-4">
          <div className="flex-between">
            <div>
              <h1 className="text-2xl font-heading font-bold text-primary">🦁 Safari Escolar</h1>
              {/* <p className="text-sm font-medium text-[#57534E]">{user?.name} - {user?.role}</p> */}
            </div>
            <Button
              onClick={handleLogout}
              variant="accent"
            >
              Sair
          </Button>
          </div>
        </div>
      </header>

      <main className="layout-container py-8">
        <div className={`card`}>
          <div className="card-header bg-[var(--color-secondary)]">
            <h2 className="text-xl font-bold text-primary">Listagem de Escolas</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                className="bg-white px-4 py-2 h-[42px] border-2 border-transparent hover:border-[var(--color-border)] mr-2"
                onClick={() => {
                  setSchoolModalMode('create')
				  setSchoolModal(null)
                  setIsSchoolModalOpen(true)
                }}
              >
                <Plus size={20} />
                Adicionar Escola
              </Button>
              <Button 
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                onClick={() => setViewMode('grid')}
                className="p-2"
                title="Visualização em Grade"
              >
              <LayoutGrid size={20} />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'primary' : 'ghost'}
                onClick={() => setViewMode('list')}
                className="p-2"
                title="Visualização em Lista"
              >
                <List size={20} />
              </Button>
            </div>
          </div>

          <div className={viewMode === 'list' ? "divide-y-2 divide-[var(--color-border)]" : "p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>
            {
              schools.map(school => {
                return (

                  <SchoolCard
                    key={school.id}
                    school={school}
                    viewMode={viewMode}
                    onEdit={() => {
                      setSchoolModalMode('edit')
					  setSchoolModal(school)
                      setIsSchoolModalOpen(true)
                    }}
                    onDelete={() => setSchoolToDelete(school)}
                  />
                )
              })
            }
          </div>
        </div>

      </main>

      <ConfirmDeleteModal
        isOpen={!!schoolToDelete}
        school={schoolToDelete}
        onClose={() => setSchoolToDelete(null)}
        onConfirm={handleDeleteSchool}
      />

      <CreateUpdateSchoolModal
	  	school={schoolModal}
        isOpen={isSchoolModalOpen}
        mode={schoolModalMode}
        onClose={() => setIsSchoolModalOpen(false)}
        onSave={(createdSchool) => handleCreateOrUpdateSchool(createdSchool)}
      />
    </div>
  );
}
