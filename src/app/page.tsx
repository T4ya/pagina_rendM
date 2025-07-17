"use client"

import { useState, useEffect } from "react"
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  BookOpen, 
  Globe, 
  Award, 
  Lightbulb, 
  GraduationCap,
  Building,
  TrendingUp,
  Heart,
  Cpu,
  FlaskConical,
  Phone,
  Star,
  Target,
  Zap,
  Calendar,
  FileText,
  DollarSign,
  BarChart3,
  Building2,
  Handshake,
  Leaf,
  Eye,
  Briefcase,
  BookOpenCheck,
  Beaker,
  Cog,
  Presentation,
  Clock
} from "lucide-react"

interface SlideProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  children: React.ReactNode
  bgGradient?: string
}

interface ChartData {
  year: string
  ing: number
  dis: number
  cs: number
  cb: number
}

interface PieChartData {
  label: string
  value: number
}

interface CustomPieChartProps {
  data: PieChartData[]
  title: string
  colors: string[]
  size?: number
}

interface SlideData {
  id: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
  bgGradient?: string
  content: React.ReactNode
}

function Slide({ title, subtitle, icon, children, bgGradient = "from-blue-600 via-purple-600 to-pink-600" }: SlideProps) {
  return (
    <section className={`min-h-screen flex flex-col justify-center px-8 md:px-16 py-16 bg-gradient-to-br ${bgGradient} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-pink-300 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center space-x-4 mb-4">
            {icon && (
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-white shadow-lg border border-white/20 animate-bounce">
                {icon}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl tracking-tight font-bold text-white drop-shadow-lg animate-slide-in-left">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 font-light animate-slide-in-right delay-300">
              {subtitle}
            </p>
          )}
        </div>
        <div className="text-lg leading-relaxed text-white animate-fade-in-up delay-500">
          {children}
        </div>
      </div>
    </section>
  )
}

// Chart Component for Academic Programming
function AcademicChart() {
  const data: ChartData[] = [
    { year: "2019-1", ing: 96, dis: 64, cs: 59, cb: 32 },
    { year: "2019-2", ing: 84, dis: 63, cs: 54, cb: 26 },
    { year: "2020-1", ing: 90, dis: 60, cs: 61, cb: 25 },
    { year: "2020-2", ing: 93, dis: 62, cs: 55, cb: 28 },
    { year: "2021-1", ing: 89, dis: 58, cs: 62, cb: 26 },
    { year: "2021-2", ing: 87, dis: 59, cs: 61, cb: 23 },
    { year: "2022-1", ing: 88, dis: 59, cs: 64, cb: 22 },
    { year: "2022-2", ing: 85, dis: 60, cs: 57, cb: 24 },
    { year: "2023-1", ing: 94, dis: 61, cs: 58, cb: 23 },
    { year: "2023-2", ing: 82, dis: 61, cs: 59, cb: 25 },
    { year: "2024-1", ing: 75, dis: 62, cs: 64, cb: 18 },
    { year: "2024-2", ing: 74, dis: 61, cs: 49, cb: 18 }
  ]

  const maxValue = Math.max(...data.flatMap((d: ChartData) => [d.ing, d.dis, d.cs, d.cb]))

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        Asignaturas Ofertadas por Período Académico (2019-2024)
      </h3>
      <div className="relative h-64 flex items-end justify-center space-x-1">
        {data.map((period: ChartData, index: number) => (
          <div key={period.year} className="flex flex-col items-center space-y-1">
            <div className="text-xs text-white/80 writing-mode-vertical transform rotate-90 origin-bottom">
              {period.year}
            </div>
            <div className="flex space-x-1 items-end">
              <div 
                className="w-3 bg-blue-400 rounded-t animate-grow-up"
                style={{ height: `${(period.ing / maxValue) * 200}px`, animationDelay: `${index * 0.1}s` }}
                title={`Ingeniería: ${period.ing}`}
              />
              <div 
                className="w-3 bg-green-400 rounded-t animate-grow-up"
                style={{ height: `${(period.dis / maxValue) * 200}px`, animationDelay: `${index * 0.1 + 0.05}s` }}
                title={`Diseño: ${period.dis}`}
              />
              <div 
                className="w-3 bg-yellow-400 rounded-t animate-grow-up"
                style={{ height: `${(period.cs / maxValue) * 200}px`, animationDelay: `${index * 0.1 + 0.1}s` }}
                title={`Ciencias Sociales: ${period.cs}`}
              />
              <div 
                className="w-3 bg-pink-400 rounded-t animate-grow-up"
                style={{ height: `${(period.cb / maxValue) * 200}px`, animationDelay: `${index * 0.1 + 0.15}s` }}
                title={`Ciencias Básicas: ${period.cb}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-4 text-sm">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-400 rounded"></div>
          <span className="text-white">Ingeniería</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-green-400 rounded"></div>
          <span className="text-white">Diseño</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-yellow-400 rounded"></div>
          <span className="text-white">Ciencias Sociales</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-pink-400 rounded"></div>
          <span className="text-white">Ciencias Básicas</span>
        </div>
      </div>
    </div>
  )
}

// Custom Pie Chart Component
function CustomPieChart({ data, title, colors, size = 200 }: CustomPieChartProps) {
  const total = data.reduce((sum: number, item: PieChartData) => sum + item.value, 0)
  let cumulativePercentage = 0

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {data.map((item: PieChartData, index: number) => {
            const percentage = (item.value / total) * 100
            const strokeDasharray = `${percentage} ${100 - percentage}`
            const strokeDashoffset = -cumulativePercentage
            cumulativePercentage += percentage
            
            return (
              <circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - 20}
                fill="none"
                stroke={colors[index % colors.length]}
                strokeWidth="40"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="animate-draw-circle"
                style={{ animationDelay: `${index * 0.5}s` }}
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{total}</div>
            <div className="text-sm text-white/80">Total</div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item: PieChartData, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-white text-sm">{item.label}: {item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const slides: SlideData[] = [
  {
    id: "title",
    title: "Balance Social",
    subtitle: "Facultad de Ingeniería y Administración - UNAL Palmira",
    icon: <GraduationCap className="w-10 h-10" />,
    bgGradient: "from-purple-600 via-pink-600 to-red-600",
    content: (
      <div className="space-y-10 text-center">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-pulse-slow">
            <h3 className="text-3xl font-bold text-yellow-300 mb-6">Vigencia 2024-2025</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white">Autoridades Académicas</h4>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="font-semibold text-yellow-300">Decano</p>
                  <p className="text-sm">Carlos Humberto Mora Bejarano</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="font-semibold text-yellow-300">Vicedecano</p>
                  <p className="text-sm">Raúl Antonio Díaz Pacheco</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="font-semibold text-yellow-300">Secretario</p>
                  <p className="text-sm">Carlos Segundo Pitre Andrade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-white/70 font-mono text-sm animate-blink">
            Universidad Nacional de Colombia - Sede Palmira
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "programacion-academica",
    title: "Programación Académica",
    subtitle: "Historial 2019-2024",
    icon: <BarChart3 className="w-10 h-10" />,
    bgGradient: "from-blue-600 via-indigo-600 to-purple-600",
    content: (
      <div className="space-y-8">
        <AcademicChart />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-left">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
              Tendencias Destacadas
            </h4>
            <ul className="space-y-2 text-white">
              <li>• Ingeniería: Liderazgo en oferta académica</li>
              <li>• Diseño: Crecimiento sostenido</li>
              <li>• Ciencias Sociales: Participación estable</li>
              <li>• Ciencias Básicas: Oferta focalizada</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-right">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-yellow-400" />
              Logros 2024
            </h4>
            <ul className="space-y-2 text-white">
              <li>• Adaptación exitosa a nuevas modalidades</li>
              <li>• Mantenimiento de calidad académica</li>
              <li>• Diversificación de la oferta</li>
              <li>• Fortalecimiento interdisciplinario</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "estructura",
    title: "Nueva Estructura",
    subtitle: "Vicedecanatura de Investigación y Extensión",
    icon: <Building className="w-10 h-10" />,
    bgGradient: "from-green-600 via-teal-600 to-blue-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-zoom-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Building2 className="w-8 h-8 mr-3 text-yellow-400" />
            Propuesta de Modificación
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            Con la creación de la Vicedecanatura de Investigación y Extensión, la estructura de la FIA 
            quedaría modificada para potencializar las oportunidades en el medio, siendo la representación 
            de la FIA en asuntos de Investigación y Extensión cuando la Decanatura está ausente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-black mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              Nuevas Unidades
            </h4>
            <ul className="space-y-3 text-black">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Vicedecanatura de Investigación y Extensión</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Comité de Investigación y Extensión</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Unidad de Educación Continua</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Comité de Ética</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2" />
              Beneficios Esperados
            </h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Mayor representación en investigación</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Mejor gestión de extensión</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Fortalecimiento académico</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Optimización de recursos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "movilidad",
    title: "Movilidad Estudiantil",
    subtitle: "Internacionalización y Intercambio",
    icon: <Globe className="w-10 h-10" />,
    bgGradient: "from-purple-600 via-pink-600 to-red-600",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-green-400" />
              Movilidad Saliente
            </h3>
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-yellow-300 animate-count-up">38</div>
              <div className="text-white text-lg">Estudiantes</div>
            </div>
            <div className="space-y-3 text-white text-sm">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                <span>Movilidad nacional</span>
                <span className="font-bold">24 estudiantes</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                <span>Movilidad internacional</span>
                <span className="font-bold">12 estudiantes</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                <span>Instancia investigativa</span>
                <span className="font-bold">1 estudiante</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-600/20 rounded-lg">
              <h5 className="font-bold text-blue-300 mb-2">Principales Destinos:</h5>
              <ul className="text-white text-sm space-y-1">
                <li>• Pontificia Universidad Javeriana: 21</li>
                <li>• Universidad ICESI: 3</li>
                <li>• Universidad del Valle: 2</li>
              </ul>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3 text-blue-400" />
              Movilidad Entrante
            </h3>
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-yellow-300 animate-count-up">15</div>
              <div className="text-white text-lg">Estudiantes</div>
            </div>
            <div className="space-y-3 text-white text-sm">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                <span>Universidades internacionales</span>
                <span className="font-bold">3 universidades</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-600/20 rounded-lg">
              <h5 className="font-bold text-green-300 mb-2">Universidades de Origen:</h5>
              <ul className="text-white text-sm space-y-1">
                <li>• Universidad Nacional de Agricultura: 8</li>
                <li>• Universidad Técnica de Manabí: 6</li>
                <li>• Universidad Internacional de la Rioja: 1</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
          <p className="text-white italic flex items-center justify-center">
            <Handshake className="w-5 h-5 mr-2 text-yellow-400" />
            Con apoyo de la Oficina de Relaciones Interinstitucionales
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "conversatorio",
    title: "Conversatorio",
    subtitle: "Feminismos, Género y Naturaleza",
    icon: <Heart className="w-10 h-10" />,
    bgGradient: "from-pink-600 via-purple-600 to-indigo-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Heart className="w-8 h-8 mr-3 text-pink-400" />
            Objetivo del Evento
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            La Vicedecanatura propició este conversatorio como un escenario de reconocimiento 
            y de diálogo, promoviendo un espacio de crecimiento y aprendizaje para la comprensión, 
            el posicionamiento y el desarrollo del pensamiento crítico.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              Impacto Esperado
            </h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Comprensión de interrelaciones complejas</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Generación de soluciones locales</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Influencia en contexto latinoamericano</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Enriquecimiento de discusiones globales</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Detalles del Evento
            </h4>
            <div className="space-y-3 text-white">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-yellow-300" />
                <span>Fecha: 4 de julio de 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-300" />
                <span>Hora: 10:00 a.m.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-yellow-300" />
                <span>Lugar: Edificio 200 - Bienestar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-yellow-300" />
                <span>Auditorio Principal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "steam",
    title: "Aula STEAM",
    subtitle: "Ciencia, Tecnología, Ingeniería, Arte y Matemáticas",
    icon: <Cpu className="w-10 h-10" />,
    bgGradient: "from-cyan-600 via-blue-600 to-purple-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-zoom-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Cpu className="w-8 h-8 mr-3 text-cyan-400" />
            ¿Qué es un Aula STEAM?
          </h3>
          <p className="text-white text-lg text-center leading-relaxed mb-6">
            Un espacio educativo diseñado para integrar ciencia, tecnología, ingeniería, arte y matemáticas. 
            Más que un espacio físico, es un enfoque pedagógico integral que transforma el pensamiento 
            de los estudiantes hacia la resolución de problemas reales.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold">Ciencia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold">Tecnología</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold">Ingeniería</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Presentation className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold">Arte</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold">Matemáticas</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-black mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              Actividades Realizadas
            </h4>
            <ul className="space-y-3 text-black">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Implementación del Aula STEAM</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Sensibilización del aula STEAM</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Torneo de robótica y videojuegos IDIBOT</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Inauguración oficial</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Proyecto BPUN 614-C4
            </h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Ecosistema de innovación académica</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Apoyo a industrias locales</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Inteligencia artificial y automatización</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Transformación del aprendizaje</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "posgrado",
    title: "Incremento Posgrado",
    subtitle: "Convocatoria 933 MinCiencias",
    icon: <TrendingUp className="w-10 h-10" />,
    bgGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-yellow-400" />
            Convocatoria MinCiencias 933
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            Formación en doctorados nacionales con enfoque territorial, étnico y de género. 
            El Ministerio de Ciencia, Tecnología e Innovación lideró y financió esta convocatoria 
            beneficiando a estudiantes de la facultad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-6">Total Beneficiarios</h4>
            <div className="text-8xl font-bold text-black animate-count-up mb-4">12</div>
            <div className="text-black text-xl">Estudiantes</div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2" />
              Distribución por Programa
            </h4>
            <div className="space-y-4 text-white">
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Beaker className="w-5 h-5 text-yellow-400" />
                  <span>Doctorado en Ciencia y Tecnología de Alimentos</span>
                </div>
                <span className="font-bold text-2xl">2</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-green-400" />
                  <span>Doctorado en Estudios Ambientales</span>
                </div>
                <span className="font-bold text-2xl">10</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
          <p className="text-white text-lg font-semibold">
            Enfoque territorial, étnico y de género en la formación doctoral
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "blearning",
    title: "Proyecto B-Learning",
    subtitle: "Educación Híbrida Fase 1",
    icon: <BookOpen className="w-10 h-10" />,
    bgGradient: "from-indigo-600 via-purple-600 to-pink-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-zoom-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <BookOpen className="w-8 h-8 mr-3 text-blue-400" />
            CONEXIUN - Aula Invertida
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            Modelo basado en la premisa de que el aprendizaje se enriquece cuando se establece 
            una red de conexiones sólidas entre estudiantes, docentes, egresados, investigadores, 
            empresas y la comunidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-black mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Detalles del Proyecto
            </h4>
            <ul className="space-y-3 text-black">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Código: BPUN 614-C8-F1</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Apropiación: $230.000.000</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Ejecución: 60%</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span>Líder: Oscar Yovany Checa Cerón</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2" />
              Beneficios del Modelo
            </h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Inversión del proceso enseñanza-aprendizaje</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Estudio autónomo en casa</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Actividades prácticas en clase</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Mayor participación estudiantil</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
          <p className="text-white italic">
            Autorizada la trascendencia para 2025 mediante Resolución de Rectoría No 1085 de 2024
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "acreditacion",
    title: "Acreditación",
    subtitle: "Programas de Alta Calidad",
    icon: <Award className="w-10 h-10" />,
    bgGradient: "from-yellow-500 via-orange-500 to-red-500",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            Reconocimiento Nacional
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            Reconocida por la calidad de su enseñanza y por ser una de las universidades 
            con mayor producción científica en Colombia, gracias a sus cinco programas 
            de pregrado acreditados con estándares de alta calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-3 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Administración de Empresas
            </h4>
            <div className="text-white">
              <p className="text-sm opacity-90">Renovación: 2021</p>
              <p className="text-lg font-bold">8 años</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-3 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Ingeniería Ambiental
            </h4>
            <div className="text-white">
              <p className="text-sm opacity-90">Renovación: 2018</p>
              <p className="text-lg font-bold">8 años</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-3 flex items-center">
              <Cog className="w-5 h-5 mr-2" />
              Ingeniería Agroindustrial
            </h4>
            <div className="text-white">
              <p className="text-sm opacity-90">Renovación: 2023</p>
              <p className="text-lg font-bold">8 años</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-3 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Ingeniería Agrícola
            </h4>
            <div className="text-white">
              <p className="text-sm opacity-90">Renovación: 2023</p>
              <p className="text-lg font-bold">6 años</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-3 flex items-center">
              <Presentation className="w-5 h-5 mr-2" />
              Diseño Industrial
            </h4>
            <div className="text-white">
              <p className="text-sm opacity-90">Renovación: 2024</p>
              <p className="text-lg font-bold">4 años</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "especializaciones",
    title: "Especializaciones",
    subtitle: "Procesos de Convenio",
    icon: <BookOpenCheck className="w-10 h-10" />,
    bgGradient: "from-teal-600 via-cyan-600 to-blue-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <BookOpenCheck className="w-8 h-8 mr-3 text-cyan-400" />
            Nuevas Especializaciones en Desarrollo
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            La facultad está adelantando procesos de convenio para la apertura de nuevas especializaciones 
            que respondan a las necesidades del sector productivo y social.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-black mb-4 flex items-center">
              <Briefcase className="w-6 h-6 mr-2" />
              Especialización en Gerencia Estratégica de Proyectos
            </h4>
            <p className="text-black text-sm">
              Orientada al desarrollo de competencias en gestión integral de proyectos 
              con enfoque estratégico y organizacional.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-4 flex items-center">
              <Heart className="w-6 h-6 mr-2" />
              Especialización en Seguridad y Salud en el Trabajo
            </h4>
            <p className="text-white text-sm">
              Enfocada en la prevención de riesgos laborales y la promoción de 
              ambientes de trabajo seguros y saludables.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Especialización en Derecho Administrativo
            </h4>
            <p className="text-white text-sm">
              Destinada a fortalecer conocimientos jurídicos en el ámbito del 
              derecho público y la administración estatal.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "convenios",
    title: "Convenios y Alianzas",
    subtitle: "Fortalecimiento Institucional",
    icon: <Handshake className="w-10 h-10" />,
    bgGradient: "from-purple-600 via-indigo-600 to-blue-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Handshake className="w-8 h-8 mr-3 text-yellow-400" />
            Universidad del Pacífico
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            Se han adelantado reuniones con los directivos de la Universidad del Pacífico con 
            el objetivo de lograr alianzas que favorezcan a las dos universidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Leaf className="w-6 h-6 mr-2" />
              Diplomado en Energías Renovables
            </h4>
            <p className="text-white text-sm mb-4">
              Inicialmente se realizó una encuesta para conocer el interés en el diplomado 
              de los estudiantes de la universidad y del personal externo.
            </p>
            <div className="bg-white/20 p-3 rounded-lg">
              <p className="text-white text-sm">
                <strong>Estado:</strong> En desarrollo conjunto con la Dirección de Investigación 
                y Extensión para ofrecerlo a partir del mes de septiembre.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Visita a Cenicaña
            </h4>
            <p className="text-white text-sm mb-4">
              Visita al Centro de Investigación de la Caña de Azúcar de Colombia 
              para la difusión de programas de pregrado y posgrado de la Facultad.
            </p>
            <div className="bg-white/20 p-3 rounded-lg">
              <p className="text-white text-sm">
                <strong>Objetivo:</strong> Fortalecer vínculos con el sector productivo 
                y promover la oferta académica de la FIA.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "difusion",
    title: "Difusión Empresarial",
    subtitle: "Ofertas Académicas de Pregrado",
    icon: <Briefcase className="w-10 h-10" />,
    bgGradient: "from-indigo-600 via-purple-600 to-pink-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Briefcase className="w-8 h-8 mr-3 text-yellow-400" />
            Actividad de Difusión Empresarial
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            Se realizaron contactos con importantes empresas del sector para difundir 
            los programas académicos de pregrado de la facultad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2" />
              Respuestas Positivas
            </h4>
            <div className="space-y-3 text-white text-sm">
              <div className="p-3 bg-white/20 rounded-lg">
                <p className="font-bold">Riopaila - Castilla</p>
                <p>Reunión virtual realizada, manifiestan interés en convenio</p>
              </div>
              <div className="p-3 bg-white/20 rounded-lg">
                <p className="font-bold">D1 S.A.S.</p>
                <p>Solicitaron información de programas técnicos y tecnólogos</p>
              </div>
              <div className="p-3 bg-white/20 rounded-lg">
                <p className="font-bold">Inelma S.A.S.</p>
                <p>Jornada de difusión realizada el 23 de diciembre de 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Building className="w-6 h-6 mr-2" />
              Empresas Contactadas
            </h4>
            <div className="space-y-2 text-white text-sm">
              <div className="flex justify-between p-2 bg-white/10 rounded">
                <span>Incauca S.A.S.</span>
                <span className="text-yellow-300">Contactado</span>
              </div>
              <div className="flex justify-between p-2 bg-white/10 rounded">
                <span>Ingenio Providencia</span>
                <span className="text-yellow-300">Contactado</span>
              </div>
              <div className="flex justify-between p-2 bg-white/10 rounded">
                <span>Agrosavia</span>
                <span className="text-yellow-300">Contactado</span>
              </div>
              <div className="flex justify-between p-2 bg-white/10 rounded">
                <span>Ecoline Agrícola</span>
                <span className="text-yellow-300">Contactado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "pic",
    title: "Plan Integral de Cobertura",
    subtitle: "Universidad en Tu Territorio",
    icon: <DollarSign className="w-10 h-10" />,
    bgGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <DollarSign className="w-8 h-8 mr-3 text-green-400" />
            Recursos Asignados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center bg-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-400 animate-count-up">$52.782.578.188</div>
              <div className="text-white text-lg">Total Universidad Nacional</div>
            </div>
            <div className="text-center bg-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-400 animate-count-up">$4.840.266.381</div>
              <div className="text-white text-lg">Sede Palmira</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl">
          <h4 className="text-xl font-bold text-white mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-2" />
            Distribución FIA - 2024
          </h4>
          <div className="space-y-3 text-white text-sm">
            <div className="flex justify-between p-3 bg-white/20 rounded">
              <span>Docentes ocasionales</span>
              <span className="font-bold">$142.000.000</span>
            </div>
            <div className="flex justify-between p-3 bg-white/20 rounded">
              <span>Equipos laboratorio</span>
              <span className="font-bold">$170.000.000</span>
            </div>
            <div className="flex justify-between p-3 bg-white/20 rounded">
              <span>Insumos laboratorios</span>
              <span className="font-bold">$95.000.000</span>
            </div>
            <div className="flex justify-between p-3 bg-white/20 rounded">
              <span>Equipos de cómputo</span>
              <span className="font-bold">$72.000.000</span>
            </div>
            <div className="flex justify-between p-3 bg-white/10 rounded border-t-2 border-white/30">
              <span className="font-bold">TOTAL</span>
              <span className="font-bold text-lg">$648.000.000</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "concurso-profesoral",
    title: "Concurso Profesoral",
    subtitle: "FIA 2024",
    icon: <Users className="w-10 h-10" />,
    bgGradient: "from-blue-600 via-indigo-600 to-purple-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Users className="w-8 h-8 mr-3 text-blue-400" />
            Resolución No 770 de 2024
          </h3>
          <p className="text-white text-lg text-center leading-relaxed">
            Se establece la lista de elegibles para proveer cargos docentes en dedicación 
            Tiempo Completo y Dedicación Cátedra 0.7. De 12 cargos convocados, 
            resultaron 8 ganadores y 4 cargos desiertos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Docentes Posesionados
            </h4>
            <div className="space-y-4 text-white text-sm">
              <div className="p-3 bg-white/20 rounded-lg">
                <p className="font-bold">Área de Física y Educación</p>
                <p>Juan Alejandro Vinasco Suarez</p>
                <p className="text-xs opacity-80">Énfasis en Enseñanza de la Física</p>
              </div>
              <div className="p-3 bg-white/20 rounded-lg">
                <p className="font-bold">Área de Matemáticas</p>
                <p>Edwin Barrios Rivera</p>
                <p>Luis Fernando Mejía Rodríguez</p>
                <p className="text-xs opacity-80">2 docentes posesionados</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2" />
              Resultados del Concurso
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/20 rounded">
                <span className="text-white">Cargos Convocados</span>
                <span className="text-2xl font-bold text-white">12</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/20 rounded">
                <span className="text-white">Ganadores</span>
                <span className="text-2xl font-bold text-green-200">8</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/20 rounded">
                <span className="text-white">Cargos Desiertos</span>
                <span className="text-2xl font-bold text-red-200">4</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/20 rounded">
                <span className="text-white">Posesionados</span>
                <span className="text-2xl font-bold text-yellow-200">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "investigacion",
    title: "Investigación",
    subtitle: "Proyectos y Semilleros",
    icon: <FlaskConical className="w-10 h-10" />,
    bgGradient: "from-cyan-600 via-blue-600 to-purple-600",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center animate-zoom-in">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <FlaskConical className="w-8 h-8 mr-3 text-cyan-400" />
              Semilleros de Investigación
            </h3>
            <div className="text-8xl font-bold text-cyan-400 animate-count-up mb-4">22</div>
            <div className="text-white text-xl">Registrados en HERMES</div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Logros 2024
            </h4>
            <div className="space-y-3 text-white">
              <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                <span>Movilidad estudiantes</span>
                <span className="font-bold text-green-200">400% (12 vs 3 meta)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                <span>Movilidad docentes</span>
                <span className="font-bold text-green-200">500% (10 vs 2 meta)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                <span>Equipos mantenidos</span>
                <span className="font-bold text-green-200">100% (4 laboratorios)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                <span>Incentivos</span>
                <span className="font-bold text-yellow-200">Docentes investigadores</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl">
          <h4 className="text-xl font-bold text-black mb-4 flex items-center">
            <DollarSign className="w-6 h-6 mr-2" />
            Ejecución Presupuestal UGI
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">$327.381.803</div>
              <div className="text-black text-lg">Apropiación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">$201.479.703</div>
              <div className="text-black text-lg">Ejecución</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "extension",
    title: "Extensión",
    subtitle: "Proyectos Solidarios",
    icon: <Users className="w-10 h-10" />,
    bgGradient: "from-pink-600 via-purple-600 to-indigo-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Users className="w-8 h-8 mr-3 text-pink-400" />
            Proyectos Ganadores
          </h3>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-400 animate-count-up">$150.000.000</div>
            <div className="text-white text-xl">Total en proyectos de extensión solidaria</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-black mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Integración Generacional
            </h4>
            <p className="text-black text-sm mb-3">Entornos campesinos - Roldanillo</p>
            <div className="text-center">
              <p className="text-black text-2xl font-bold">$50.000.000</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-3 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Acuaponía Familiar
            </h4>
            <p className="text-white text-sm mb-3">Transición energética - Yotoco</p>
            <div className="text-center">
              <p className="text-white text-2xl font-bold">$50.000.000</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-white mb-3 flex items-center">
              <Building className="w-5 h-5 mr-2" />
              Galería Pradera
            </h4>
            <p className="text-white text-sm mb-3">Revitalización plaza de mercado</p>
            <div className="text-center">
              <p className="text-white text-2xl font-bold">$50.000.000</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "nuevos-programas",
    title: "Nuevos Programas",
    subtitle: "Química Farmacéutica e Ingeniería Mecatrónica",
    icon: <Lightbulb className="w-10 h-10" />,
    bgGradient: "from-teal-600 via-cyan-600 to-blue-600",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Beaker className="w-8 h-8 mr-3" />
              Química Farmacéutica
            </h3>
            <p className="text-white text-lg leading-relaxed">
              Responde a la importancia de la biodiversidad local, particularmente 
              con el estudio de plantas aromáticas y medicinales, integrando 
              saberes ancestrales con soluciones innovadoras para el sector farmacéutico.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Cog className="w-8 h-8 mr-3" />
              Ingeniería Mecatrónica
            </h3>
            <p className="text-white text-lg leading-relaxed">
              Buscará atender las necesidades tecnológicas del sector industrial 
              y agrícola mediante la formación en bioingeniería, robótica e 
              inteligencia artificial, preparando profesionales para la industria 4.0.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl">
          <h4 className="text-xl font-bold text-black mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 mr-2" />
            Otras Propuestas de Pregrado
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-black/10 p-4 rounded-lg">
              <h5 className="font-bold text-black mb-2">Gestión Cultural y Comunicativa</h5>
              <p className="text-black text-sm">Sede Manizales</p>
            </div>
            <div className="text-center bg-black/10 p-4 rounded-lg">
              <h5 className="font-bold text-black mb-2">Ing. Mecatrónica</h5>
              <p className="text-black text-sm">Sede Bogotá</p>
            </div>
            <div className="text-center bg-black/10 p-4 rounded-lg">
              <h5 className="font-bold text-black mb-2">Química Farmacéutica</h5>
              <p className="text-black text-sm">Sede Bogotá</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "gestion-2025",
    title: "Gestión 2025",
    subtitle: "Plan Global de Desarrollo 2025-2027",
    icon: <Calendar className="w-10 h-10" />,
    bgGradient: "from-purple-600 via-indigo-600 to-blue-600",
    content: (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Calendar className="w-8 h-8 mr-3 text-yellow-400" />
            Nuevo Plan de Desarrollo
          </h3>
          <p className="text-white text-lg text-center leading-relaxed italic">
            &ldquo;Por una Universidad Pública y Nacional que Garantice el Acceso 
            al Bien Común del Conocimiento y el Derecho Fundamental a la Educación Superior.&rdquo;
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold text-black mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2" />
              Recaudo UGI 2025
            </h4>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-black">$242.145.186</div>
              <div className="text-black text-lg">Recursos recaudados</div>
            </div>
            <div className="space-y-2 text-black text-sm">
              <div className="flex justify-between p-2 bg-black/10 rounded">
                <span>Recursos del Balance</span>
                <span className="font-bold">56%</span>
              </div>
              <div className="flex justify-between p-2 bg-black/10 rounded">
                <span>Derechos Académicos</span>
                <span className="font-bold">35%</span>
              </div>
              <div className="flex justify-between p-2 bg-black/10 rounded">
                <span>Rendimientos</span>
                <span className="font-bold">9%</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Proyectos Activos
            </h4>
            <div className="space-y-3 text-white text-sm">
              <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                <span>Extensión</span>
                <span className="font-bold">$200.060.349</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                <span>Extensión Externa</span>
                <span className="font-bold">$269.439.209</span>
              </div>
              <div className="p-3 bg-white/20 rounded">
                <p>• Continuidad de proyectos 2024</p>
                <p>• Nuevas iniciativas académicas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    subtitle: "Facultad de Ingeniería y Administración",
    icon: <Phone className="w-10 h-10" />,
    bgGradient: "from-gradient-to-r from-purple-600 via-pink-600 to-red-600",
    content: (
      <div className="space-y-10 text-center">
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 animate-zoom-in">
          <h3 className="text-4xl font-bold text-white mb-8">¡Gracias por su atención!</h3>
          <div className="space-y-6 text-white">
            <div className="flex justify-center items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="w-8 h-8" />
              </div>
              <p className="text-2xl">2868888 Ext.: 31502</p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <FileText className="w-8 h-8" />
              </div>
              <p className="text-2xl">fia_pal@unal.edu.co</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-2xl shadow-2xl">
          <h4 className="text-3xl font-bold text-black mb-4">Universidad Nacional de Colombia</h4>
          <p className="text-black text-xl">Sede Palmira - Valle del Cauca</p>
        </div>
        <div className="text-center">
          <p className="text-white/70 font-mono text-lg animate-blink">Balance Social - Vigencia 2024</p>
        </div>
      </div>
    ),
  },
]

export default function FIABalanceSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide, isTransitioning])

  // Touch/swipe navigation
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes grow-up {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        
        @keyframes count-up {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.5; }
        }
        
        @keyframes draw-circle {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out;
        }
        
        .animate-grow-up {
          animation: grow-up 1s ease-out forwards;
          transform-origin: bottom;
        }
        
        .animate-count-up {
          animation: count-up 1s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 2s ease-in-out infinite;
        }
        
        .animate-draw-circle {
          animation: draw-circle 1.5s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Navigation Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-3">
        <span className="text-white/80 font-mono text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0 || isTransitioning}
          className="rounded-full bg-white/20 hover:bg-white/30 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 p-3 backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1 || isTransitioning}
          className="rounded-full bg-white/20 hover:bg-white/30 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 p-3 backdrop-blur-sm border border-white/20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-40">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Content */}
      <div className={`transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
        <Slide 
          title={currentSlideData.title} 
          subtitle={currentSlideData.subtitle} 
          icon={currentSlideData.icon}
          bgGradient={currentSlideData.bgGradient}
        >
          {currentSlideData.content}
        </Slide>
      </div>

      {/* Navigation Hint */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 font-mono text-xs text-white/60 hidden md:block bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
        Usa las flechas ← → o los botones para navegar en la página
      </div>

      {/* Slide Navigation Dots */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
        {slides.map((_: SlideData, index: number) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentSlide(index)
                  setIsTransitioning(false)
                }, 150)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
