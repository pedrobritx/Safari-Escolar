import { useState, useEffect } from 'react';
import { X, Save, Trash2, Pencil, Phone, Mail, Cake, MessageSquare } from 'lucide-react';
import { Student, FeedbackEvent } from '../lib/types';
import EmojiPicker from './EmojiPicker';
import { api } from '../lib/api';
import { toast } from 'sonner';

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
    } catch (err) {
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
    } catch (err) {
        toast.error('Erro ao remover feedback');
    }
  };

  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden flex flex-col h-[85vh] animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header - Safari Green */}
        <div className="bg-[#4D7C0F] pt-8 pb-12 px-6 flex flex-col items-center relative shrink-0">
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 bg-[#EA580C] text-white p-2 rounded-xl border-b-4 border-[#9A3412] hover:bg-[#c2410c] active:border-b-0 active:translate-y-1 transition-all shadow-lg"
           >
             <X size={24} strokeWidth={3} />
           </button>

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
        <div className="flex px-6 -mt-6 gap-4 relative z-10 shrink-0">
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
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-white">
          
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
                        <button 
                            onClick={() => handleDeleteFeedback(event.id)}
                            className="bg-[#EA580C] rounded-lg text-white hover:bg-[#c2410c] transition-colors shadow-sm h-9 w-12 flex items-center justify-center"
                            title="Apagar"
                        >
                          <Trash2 size={20} strokeWidth={3} />
                        </button>
                     </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'contact' && (
            <form onSubmit={handleSaveContact} className="space-y-6 pt-2">
               <div>
                 <label className="text-xs font-bold text-[#4D7C0F] uppercase ml-1 mb-1 block">Nome Completo</label>
                 <input 
                   type="text" 
                   value={name}
                   onChange={e => setName(e.target.value)}
                   className="w-full border-2 border-[#4D7C0F] rounded-xl px-4 py-3 font-bold text-gray-800 outline-none focus:ring-4 focus:ring-[#4D7C0F]/20"
                 />
               </div>

               <div>
                 <label className="text-xs font-bold text-[#4D7C0F] uppercase ml-1 mb-1 block">WhatsApp</label>
                 <div className="relative">
                   <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                     type="text" 
                     value={whatsapp}
                     onChange={e => setWhatsapp(e.target.value)}
                     placeholder="+55 (99) 9 9999-9999"
                     className="w-full border-2 border-[#4D7C0F] rounded-xl pl-12 pr-4 py-3 font-bold text-gray-800 outline-none focus:ring-4 focus:ring-[#4D7C0F]/20"
                   />
                 </div>
               </div>

               <div>
                 <label className="text-xs font-bold text-[#4D7C0F] uppercase ml-1 mb-1 block">E-mail</label>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                     type="email" 
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     placeholder="email@exemplo.com"
                     className="w-full border-2 border-[#4D7C0F] rounded-xl pl-12 pr-4 py-3 font-bold text-gray-800 outline-none focus:ring-4 focus:ring-[#4D7C0F]/20"
                   />
                 </div>
               </div>

               <div>
                 <label className="text-xs font-bold text-[#4D7C0F] uppercase ml-1 mb-1 block">Aniversário</label>
                 <div className="relative">
                   <Cake className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                     type="text" 
                     value={birthday}
                     onChange={e => setBirthday(e.target.value)}
                     placeholder="Ex: 14 fevereiro 2019"
                     className="w-full border-2 border-[#4D7C0F] rounded-xl pl-12 pr-4 py-3 font-bold text-gray-800 outline-none focus:ring-4 focus:ring-[#4D7C0F]/20"
                   />
                 </div>
               </div>
               
               <div className="flex gap-3 pt-6">
                 {onDelete && (
                   <button 
                     type="button"
                     onClick={() => {
                        if(confirm('Tem certeza que deseja excluir este aluno?')) onDelete();
                     }}
                     className="bg-[#EA580C] text-white p-4 rounded-xl hover:bg-[#c2410c] transition-colors"
                   >
                     <Trash2 size={24} />
                   </button>
                 )}
                 <button 
                   type="submit"
                   className="flex-1 bg-[#4D7C0F] text-white font-bold text-lg p-4 rounded-xl hover:bg-[#365314] transition-colors flex items-center justify-center gap-2 shadow-lg"
                 >
                   <Save size={24} /> Salvar Alterações
                 </button>
               </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
