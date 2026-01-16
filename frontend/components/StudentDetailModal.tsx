import { useState, useEffect } from 'react';
import { Phone, Mail, Cake, MessageSquare, Trash2, Save, X } from 'lucide-react';
import { Student, FeedbackEvent } from '../lib/types';
import EmojiPicker from './EmojiPicker';
import { api } from '../lib/api';
import { toast } from 'sonner';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface StudentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
  onUpdate: (data: Partial<Student>) => void;
  onDelete?: () => void;
}

export default function StudentDetailModal({ 
  isOpen, 
  onClose, 
  student, 
  onUpdate,
  onDelete 
}: StudentDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'feedback' | 'contact'>('feedback');
  const [feedbacks, setFeedbacks] = useState<FeedbackEvent[]>([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(false);

  // Contact Form State
  const [name, setName] = useState('');
  const [animalAvatar, setAnimalAvatar] = useState('🦁');
  const [avatarColor, setAvatarColor] = useState('#FFFFFF');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    if (isOpen && student) {
      setName(student.name);
      setAnimalAvatar(student.animalAvatar);
      setAvatarColor(student.avatarColor || '#FFFFFF');
      setWhatsapp(student.whatsapp || '');
      setEmail(student.email || '');
      setBirthday(student.birthday || '');
      setActiveTab('feedback'); // Default tab
      
      // Fetch Feedbacks
      fetchFeedbacks(student.id);
    }
  }, [isOpen, student]);

  const fetchFeedbacks = async (studentId: string) => {
    setLoadingFeedbacks(true);
    try {
      const data = await api.get(`/feedback/${studentId}`);
      setFeedbacks(data);
    } catch {
      toast.error('Erro ao carregar histórico de feedback');
    } finally {
      setLoadingFeedbacks(false);
    }
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({
      name,
      animalAvatar,
      avatarColor,
      whatsapp,
      email,
      birthday
    });
    toast.success('Informações atualizadas!');
  };

  const handleDeleteFeedback = async (feedbackId: string) => {
    if (!confirm('Tem certeza que deseja apagar este feedback?')) return;
    try {
        const token = localStorage.getItem('token');
        if (token) {
            await api.deleteFeedbackEvent(token, feedbackId);
            setFeedbacks(prev => prev.filter(f => f.id !== feedbackId));
            toast.success('Feedback removido!');
        }
    } catch {
        toast.error('Erro ao remover feedback');
    }
  };

  if (!isOpen || !student) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerColorClass="hidden" // Hiding default header to use Custom Green Header
      maxWidth="md"
    >
        {/* Custom Header - Safari Green */}
        <div className="bg-[#4D7C0F] pt-8 pb-12 px-6 flex flex-col items-center relative shrink-0 -mx-6 -mt-6 rounded-b-[2.5rem] shadow-lg mb-6">
           <Button 
             variant="accent"
             onClick={onClose}
             className="absolute top-4 right-4 p-2 rounded-xl !border-b-4 active:!border-b-0 shadow-lg"
           >
             <X size={24} strokeWidth={3} />
           </Button>

           <div className="relative group cursor-pointer" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <div 
                className="w-28 h-28 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-6xl bg-white"
                style={{ backgroundColor: avatarColor }}
              >
                {animalAvatar}
              </div>
              <div className="absolute -bottom-3 -right-2 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-[#4D7C0F]">
                Mudar
              </div>
           </div>
           
           {showEmojiPicker && (
              <div className="absolute top-full z-50 mt-2">
                 <EmojiPicker 
                   onSelectEmoji={(emoji) => { setAnimalAvatar(emoji); setShowEmojiPicker(false); }}
                   onSelectColor={setAvatarColor}
                   onClose={() => setShowEmojiPicker(false)}
                   currentColor={avatarColor}
                 />
              </div>
           )}

           <h2 className="text-2xl font-black text-white mt-4 text-center leading-tight tracking-wide drop-shadow-md">
             {name}
           </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 relative z-10 shrink-0 px-2 mb-4">
          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex-1 py-3 rounded-xl font-black text-lg shadow-md transition-all ${
              activeTab === 'feedback'
               ? 'bg-[#EAB308] text-white ring-2 ring-[#EAB308] ring-offset-2'
               : 'bg-[#E5E7EB] text-gray-400 hover:bg-gray-200'
            }`}
          >
            Feedback
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-3 rounded-xl font-black text-lg shadow-md transition-all ${
              activeTab === 'contact'
               ? 'bg-[#EAB308] text-white ring-2 ring-[#EAB308] ring-offset-2'
               : 'bg-[#E5E7EB] text-gray-400 hover:bg-gray-200'
            }`}
          >
            Contato
          </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[300px]">
          
          {activeTab === 'feedback' && (
            <div className="space-y-4">
              {loadingFeedbacks ? (
                <div className="text-center py-10 text-gray-400">Carregando...</div>
              ) : feedbacks.length === 0 ? (
                <div className="text-center py-10 text-gray-400 flex flex-col items-center gap-2">
                   <MessageSquare size={40} className="opacity-20" />
                   <p>Nenhum feedback registrado.</p>
                </div>
              ) : (
                feedbacks.map((event) => (
                  <div key={event.id} className="bg-white border-2 border-[#C8C6A7] rounded-2xl p-3 flex items-center justify-between shadow-sm">
                     <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${event.type === 'positive' ? 'bg-[#ECFCCB]' : 'bg-[#FFEDD5]'}`}>
                          {event.description.includes('Tarefa') ? '📝' : 
                           event.description.includes('Equipe') ? '🧩' :
                           event.description.includes('Ajudando') ? '🤝' :
                           event.description.includes('Participando') ? '🙋' : 
                           event.description.includes('Esforçando') ? '💪' : '📋'}
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 leading-tight">{event.description}</h4>
                           <span className="text-xs text-gray-500 font-medium">
                             {new Date(event.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}
                           </span>
                        </div>
                     </div>
                     <div className="flex gap-2 items-center">
                        <div className={`font-black text-white rounded-lg h-9 w-12 flex items-center justify-center ${event.type === 'positive' ? 'bg-[#4D7C0F]' : 'bg-[#EA580C]'}`}>
                          {event.type === 'positive' ? '+1' : '-1'}
                        </div>
                        <Button 
                            variant="accent"
                            onClick={() => handleDeleteFeedback(event.id)}
                            className="!p-0 h-9 w-12"
                            title="Apagar"
                        >
                          <Trash2 size={20} strokeWidth={3} />
                        </Button>
                     </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'contact' && (
            <form onSubmit={handleSaveContact} className="space-y-6 pt-2">
               
               <Input 
                  label="Nome Completo"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="border-[#4D7C0F]"
               />

               <div>
                 <label className="text-sm font-bold text-[#4D7C0F] mb-2 block">WhatsApp</label>
                 <div className="relative">
                   <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                     type="text" 
                     value={whatsapp}
                     onChange={e => setWhatsapp(e.target.value)}
                     placeholder="+55 (99) 9 9999-9999"
                     className="input-field pl-12 border-[#4D7C0F]"
                   />
                 </div>
               </div>

               <div>
                 <label className="text-sm font-bold text-[#4D7C0F] mb-2 block">E-mail</label>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                     type="email" 
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     placeholder="email@exemplo.com"
                     className="input-field pl-12 border-[#4D7C0F]"
                   />
                 </div>
               </div>

               <div>
                 <label className="text-sm font-bold text-[#4D7C0F] mb-2 block">Aniversário</label>
                 <div className="relative">
                   <Cake className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                     type="text" 
                     value={birthday}
                     onChange={e => setBirthday(e.target.value)}
                     placeholder="Ex: 14 fevereiro 2019"
                     className="input-field pl-12 border-[#4D7C0F]"
                   />
                 </div>
               </div>
               
               <div className="flex gap-3 pt-6">
                 {onDelete && (
                   <Button 
                     type="button"
                     variant="accent"
                     onClick={() => {
                        if(confirm('Tem certeza que deseja excluir este aluno?')) onDelete();
                     }}
                     className="p-4 rounded-xl"
                   >
                     <Trash2 size={24} />
                   </Button>
                 )}
                 <Button 
                   type="submit"
                   variant="primary"
                   className="flex-1 font-bold text-lg p-4 h-auto"
                 >
                   <Save size={24} /> Salvar Alterações
                 </Button>
               </div>
            </form>
          )}

        </div>
    </Modal>
  );
}
