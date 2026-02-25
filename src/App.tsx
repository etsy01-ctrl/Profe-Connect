import React, { useState } from 'react';
import { 
  Home, Users, BookOpen, Calendar, Bookmark, Bell, MessageCircle, 
  Search, ThumbsUp, Share2, MoreHorizontal, Image as ImageIcon, 
  Paperclip, Smile, GraduationCap, TrendingUp, Award
} from 'lucide-react';
import { motion } from 'motion/react';

// Mock Data
const INITIAL_POSTS = [
  {
    id: 1,
    author: {
      name: 'María González',
      role: 'Profesora de Matemáticas - Secundaria',
      avatar: 'https://i.pravatar.cc/150?u=maria'
    },
    time: 'Hace 2 horas',
    content: 'Hoy probé una nueva dinámica para enseñar fracciones usando legos y a los chicos les encantó. ¡La participación aumentó muchísimo! Les dejo el material que preparé en el enlace.',
    tags: ['#Matemáticas', '#Didáctica', '#Secundaria'],
    likes: 45,
    comments: 12,
    shares: 5,
    liked: false
  },
  {
    id: 2,
    author: {
      name: 'Carlos Ruiz',
      role: 'Maestro de Primaria',
      avatar: 'https://i.pravatar.cc/150?u=carlos'
    },
    time: 'Hace 5 horas',
    content: '¿Alguien tiene recomendaciones de libros de literatura infantil para trabajar la empatía en niños de 8-9 años? Estoy armando la biblioteca del aula para este trimestre.',
    tags: ['#LiteraturaInfantil', '#Primaria', '#EducaciónEmocional'],
    likes: 23,
    comments: 34,
    shares: 2,
    liked: true
  },
  {
    id: 3,
    author: {
      name: 'Laura Martínez',
      role: 'Coordinadora Académica',
      avatar: 'https://i.pravatar.cc/150?u=laura'
    },
    time: 'Ayer',
    content: 'Recordatorio para todos los docentes: el próximo viernes tenemos la jornada de capacitación sobre herramientas digitales para la evaluación formativa. ¡No olviden inscribirse!',
    tags: ['#Capacitación', '#Evaluación', '#Docentes'],
    likes: 89,
    comments: 5,
    shares: 15,
    liked: false
  }
];

const GROUPS = [
  { name: 'Recursos Didácticos Primaria', members: '12k' },
  { name: 'Innovación Educativa', members: '8.5k' },
  { name: 'Docentes de Ciencias', members: '5.2k' },
  { name: 'Educación Inclusiva', members: '15k' }
];

const TRENDING = [
  { topic: '#InteligenciaArtificial', posts: '2.4k' },
  { topic: '#VueltaAClases', posts: '1.8k' },
  { topic: '#SaludMentalDocente', posts: '950' }
];

export default function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: Date.now(),
      author: {
        name: 'Tú (Docente)',
        role: 'Profesor/a',
        avatar: 'https://i.pravatar.cc/150?u=current_user'
      },
      time: 'Justo ahora',
      content: newPostContent,
      tags: [],
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2 text-indigo-600">
                <GraduationCap className="h-8 w-8" />
                <span className="font-bold text-xl tracking-tight">ProfeConnect</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-full leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                    placeholder="Buscar recursos, docentes, grupos..."
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                <MessageCircle className="h-6 w-6" />
              </button>
              <div className="ml-3 relative flex-shrink-0">
                <div>
                  <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <img className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://i.pravatar.cc/150?u=current_user" alt="User avatar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <nav className="space-y-1">
              <a href="#" className="bg-indigo-50 text-indigo-700 group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl">
                <Home className="text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-5 w-5" />
                <span className="truncate">Inicio</span>
              </a>
              <a href="#" className="text-slate-700 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors">
                <Users className="text-slate-400 group-hover:text-slate-500 flex-shrink-0 -ml-1 mr-3 h-5 w-5" />
                <span className="truncate">Mis Grupos</span>
              </a>
              <a href="#" className="text-slate-700 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors">
                <BookOpen className="text-slate-400 group-hover:text-slate-500 flex-shrink-0 -ml-1 mr-3 h-5 w-5" />
                <span className="truncate">Recursos</span>
              </a>
              <a href="#" className="text-slate-700 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors">
                <Calendar className="text-slate-400 group-hover:text-slate-500 flex-shrink-0 -ml-1 mr-3 h-5 w-5" />
                <span className="truncate">Eventos</span>
              </a>
              <a href="#" className="text-slate-700 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors">
                <Bookmark className="text-slate-400 group-hover:text-slate-500 flex-shrink-0 -ml-1 mr-3 h-5 w-5" />
                <span className="truncate">Guardados</span>
              </a>
            </nav>

            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Tus Grupos
              </h3>
              <div className="mt-2 space-y-1">
                {GROUPS.map((group, idx) => (
                  <a key={idx} href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-slate-700 rounded-xl hover:text-slate-900 hover:bg-slate-50 transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 font-bold text-xs">
                      {group.name.charAt(0)}
                    </span>
                    <div className="flex flex-col">
                      <span className="truncate">{group.name}</span>
                      <span className="text-xs text-slate-400 font-normal">{group.members} miembros</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-1 lg:col-span-6 space-y-6">
            
            {/* Create Post */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
              <div className="flex gap-4">
                <img className="h-10 w-10 rounded-full object-cover border border-slate-200" src="https://i.pravatar.cc/150?u=current_user" alt="User avatar" />
                <form onSubmit={handlePostSubmit} className="flex-1">
                  <input
                    type="text"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="w-full bg-slate-100 hover:bg-slate-200 focus:bg-white border border-transparent focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 rounded-full px-4 py-2.5 text-sm transition-all outline-none"
                    placeholder="¿Qué recurso o experiencia quieres compartir hoy, profe?"
                  />
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                    <div className="flex gap-1">
                      <button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors">
                        <ImageIcon className="h-5 w-5 text-emerald-500" />
                        <span className="hidden sm:inline">Foto/Video</span>
                      </button>
                      <button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors">
                        <Paperclip className="h-5 w-5 text-blue-500" />
                        <span className="hidden sm:inline">Archivo</span>
                      </button>
                      <button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors">
                        <Smile className="h-5 w-5 text-amber-500" />
                        <span className="hidden sm:inline">Sentimiento</span>
                      </button>
                    </div>
                    <button 
                      type="submit" 
                      disabled={!newPostContent.trim()}
                      className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Publicar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={post.id} 
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img className="h-10 w-10 rounded-full object-cover border border-slate-200" src={post.author.avatar} alt={post.author.name} />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 hover:underline cursor-pointer">{post.author.name}</h4>
                          <div className="flex items-center text-xs text-slate-500">
                            <span>{post.author.role}</span>
                            <span className="mx-1">•</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mt-3 text-sm text-slate-800 whitespace-pre-wrap">
                      {post.content}
                    </div>
                    
                    {post.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs font-medium text-indigo-600 hover:underline cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="px-4 py-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <div className="bg-indigo-100 p-1 rounded-full">
                        <ThumbsUp className="h-3 w-3 text-indigo-600 fill-indigo-600" />
                      </div>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex gap-3">
                      <span>{post.comments} comentarios</span>
                      <span>{post.shares} compartidos</span>
                    </div>
                  </div>
                  
                  <div className="px-2 py-1 border-t border-slate-100 flex items-center gap-1">
                    <button 
                      onClick={() => toggleLike(post.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${post.liked ? 'text-indigo-600 hover:bg-indigo-50' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                      <ThumbsUp className={`h-5 w-5 ${post.liked ? 'fill-indigo-600' : ''}`} />
                      Me gusta
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      Comentar
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors">
                      <Share2 className="h-5 w-5" />
                      Compartir
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            {/* Trending */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <h3 className="font-bold text-slate-900">Tendencias Educativas</h3>
              </div>
              <div className="space-y-4">
                {TRENDING.map((trend, idx) => (
                  <div key={idx} className="cursor-pointer group">
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{trend.topic}</p>
                    <p className="text-xs text-slate-500">{trend.posts} publicaciones</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Connections */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-indigo-600" />
                <h3 className="font-bold text-slate-900">Docentes Destacados</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Ana Silva', role: 'Directora', avatar: 'https://i.pravatar.cc/150?u=ana' },
                  { name: 'Pedro Gómez', role: 'Prof. de Historia', avatar: 'https://i.pravatar.cc/150?u=pedro' }
                ].map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img className="h-8 w-8 rounded-full object-cover border border-slate-200" src={user.avatar} alt={user.name} />
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.role}</p>
                      </div>
                    </div>
                    <button className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 p-1.5 rounded-full transition-colors">
                      <Users className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 py-2 rounded-lg transition-colors">
                Ver más sugerencias
              </button>
            </div>

            {/* Footer Links */}
            <div className="text-xs text-slate-500 flex flex-wrap gap-x-3 gap-y-1 px-2">
              <a href="#" className="hover:underline">Privacidad</a>
              <a href="#" className="hover:underline">Condiciones</a>
              <a href="#" className="hover:underline">Publicidad</a>
              <a href="#" className="hover:underline">Opciones de anuncios</a>
              <a href="#" className="hover:underline">Cookies</a>
              <span>ProfeConnect © 2026</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
