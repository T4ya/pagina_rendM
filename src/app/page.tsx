"use client"
import { useState, useEffect, useCallback, useRef, MutableRefObject } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight, ChevronLeft, ChevronRight, Menu } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const propuestasRef = useRef(null)
  const experienciaRef = useRef(null)
  const contactoRef = useRef(null)

  const scrollToSection = (ref: MutableRefObject<null>) => {
    if (ref.current) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfffd]">
      {/* Header */}
      <motion.header 
        className="container mx-auto px-4 py-6 flex justify-between items-center top-0 bg-[#fcfffd] z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row items-center space-x-4">
          <motion.svg
            id="Capa_2"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 301.2 146.6"
            className="w-16 md:w-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            <path
              fill="#9725c5"
              d="m141,113.2h-25.6l-8.4,33.4h-38l8.4-33.4h-14.8l-8,33.4H16.6l8.2-33.4H0l7.8-34.8h25.6l2.4-12H11l8.8-34.2h24.8L52.8,0h38.2l-8.2,32.2h14L105.4,0h38.2l-8.4,32.2h25.6l-8.8,34.2h-25.4l-2.8,12h25.6l-8.4,34.8Zm-51.6-46.8h-15.4l-2.6,12h14.8l3.2-12Z"
            />
            <path
              fill="#9725c5"
              d="m301.2,82.4v35.8h-15.6v28.4h-43.6v-28.4h-67v-33.4L250.4.2h35.2v82.2h15.6Zm-59.2-23.6l-21,23.6h21v-23.6Z"
            />
          </motion.svg>
          <div>
            <span className="font-bold text-lg md:text-xl">Carlos Humberto
              <span className="font-bold text-lg md:text-xl text-[#9725c5]"> Mora</span>
            </span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-4 border-[#9725c5] border-2 p-2 rounded-full">
          <a href="#" onClick={() => scrollToSection(propuestasRef)} className="hover:text-[#f3b226] transition-colors">
            Propuestas
          </a>
          <a href="#" onClick={() => scrollToSection(experienciaRef)} className="hover:text-[#f3b226] transition-colors">
            Experiencia
          </a>
          <a href="#" className="hover:text-[#f3b226] transition-colors text-[#f3b226] font-bold" onClick={() => scrollToSection(experienciaRef)}>
            ¿Sabías que ya fuí decano?
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-6">
              <a href="#" onClick={() => scrollToSection(propuestasRef)} className="hover:text-[#f3b226] transition-colors">
                Propuestas
              </a>
              <a href="#" onClick={() => scrollToSection(experienciaRef)} className="hover:text-[#f3b226] transition-colors">
                Experiencia
              </a>
              <a href="#" onClick={() => scrollToSection(contactoRef)} className="hover:text-[#f3b226] transition-colors">
                Contacto
              </a>
              <a href="#" className="hover:text-[#f3b226] transition-colors text-[#f3b226] font-bold">
                ¿Sabías que ya fuí decano?
              </a>
              <Button className="mt-4 border-[#9725c5] text-[#9725c5] hover:bg-[#9725c5] hover:text-[#fcfffd]">
                ¿Sabes cómo votar a MORA? <span className="text-[#f3b226]">😍</span>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="relative flex flex-col md:flex-row items-center justify-center container mx-auto px-4 py-10 md:py-20 text-center gap-6 md:gap-12 bg-cover bg-center w-full h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contenido */}
        <motion.h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-[#9725c5] relative z-10" variants={itemVariants}>
          LIDERAZGO
          QUE <span className="text-[#f3b226]">TRANSFORMA</span>
          <br />
          LA EDUCACIÓN
        </motion.h1>
        <motion.img 
          src="/Images/Upbanner.webp" 
          alt="Upbanner" 
          className="w-full md:w-1/2 rounded-lg shadow-lg relative z-10" 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.section>

      <motion.section 
      className="bg-[#9725c5] py-10 md:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-6xl font-bold mb-8 md:mb-10 text-center text-[#f3b226]"
          variants={itemVariants}
        >
          Nuestras Propuestas
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            className="bg-[#fcfffd] p-4 md:p-6 rounded-lg" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#9725c5]">Bienestar Estudiantil</h3>
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Creación de una mesa étnica para abordar problemáticas de minorías</li>
              <li>Estudiar y abordar necesidades de estudiantes PEAMA, PAES, PAET y estratos 0, 1 y 2</li>
              <li>Acompañamiento estudiantil con grupos de estudio autónomo y apoyo psicológico</li>
              <li>Aumentar recursos económicos para salidas académicas</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-[#fcfffd] p-4 md:p-6 rounded-lg" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#9725c5]">Innovación Académica</h3>
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Fortalecimiento e inclusión de lenguas extranjeras</li>
              <li>Modernización académica con bases en big data, inteligencia artificial, electrónica y robótica</li>
              <li>Implementación de tecnologías emergentes como realidad virtual o aumentada</li>
              <li>Acreditación institucional de Alta Calidad</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-[#fcfffd] p-4 md:p-6 rounded-lg" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#9725c5]">Investigación y Desarrollo</h3>
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Aumentar los semilleros de investigación</li>
              <li>Promover propuestas en convocatorias estratégicas para alianzas entre grupos de investigación</li>
              <li>Apoyo a jóvenes investigadores y cofinanciación de semilleros de investigación</li>
              <li>Incentivar investigaciones interdisciplinares centradas en el bienestar y salud mental</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-[#fcfffd] p-4 md:p-6 rounded-lg" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#9725c5]">Desarrollo Regional</h3>
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Articulación estratégica con actores del ecosistema de innovación en el Suroccidente colombiano</li>
              <li>Fortalecimiento de vínculos con empresas privadas y el Estado</li>
              <li>Liderar investigaciones y proyectos en el Pacífico con asociaciones internacionales</li>
              <li>Emplear programas de extensión solidaria para acercamiento a comunidades externas</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
      <motion.section 
      className="container mx-auto px-4 py-10 md:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center" variants={itemVariants}>Mi Experiencia</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-[#f3b226] p-6 rounded-lg shadow-lg border-4 border-[#9725c5]"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#9725c5]">Decano de la Facultad de Ingeniería y Administración (2012-2014)</h3>
          <p className="font-semibold">Logré importantes avances en la calidad educativa y la internacionalización de nuestra facultad durante mi período como decano.</p>
        </motion.div>
        <motion.div 
          className="bg-[#67c179] p-6 rounded-lg shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#fcfffd]">Coordinador del Programa Curricular de Ingeniería Ambiental (2019-2024)</h3>
          <p className="text-[#fcfffd] font-semibold">Lideré el programa curricular, impulsando mejoras significativas en la formación de ingenieros ambientales.</p>
        </motion.div>
        <motion.div 
          className="bg-[#9725c5] p-6 rounded-lg shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#fcfffd]">Candidato a la Rectoría (2024)</h3>
          <p className="text-[#fcfffd] font-semibold">Candidato a la rectoría de la Universidad Nacional de Colombia para el período 2024-2027.</p>
        </motion.div>
        <motion.div 
          className="bg-[#f3b226] p-6 rounded-lg shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#9725c5]">Miembro del Consejo Nacional del IDEA (2012-2014)</h3>
          <p>Contribuí al desarrollo de políticas y estrategias para el Instituto de Estudios Ambientales.</p>
        </motion.div>
        <motion.div 
          className="bg-[#67c179] p-6 rounded-lg shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#fcfffd]">Coordinador Nacional del Sistema de Gestión Ambiental (2010-2012)</h3>
          <p className="text-[#fcfffd]">Lideré la implementación de políticas ambientales en todas las sedes de la Universidad Nacional de Colombia.</p>
        </motion.div>
        <motion.div 
          className="bg-[#9725c5] p-6 rounded-lg shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#fcfffd]">Otras Experiencias Relevantes</h3>
          <ul className="text-[#fcfffd] list-disc pl-5">
            <li>Coordinador del Laboratorio de Análisis Ambiental (2007-2008)</li>
            <li>Coordinador del Programa Curricular de Ingeniería Ambiental (2009-2012)</li>
            <li>Miembro de la Junta Directiva Nacional de Unisalud (2012-2014)</li>
            <li>Miembro del Comité Nacional de Admisiones (2012-2014)</li>
            <li>Coordinador del Laboratorio de Mecanización Agrícola y Mecanismos (2018-2020)</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>

      {/* Logros Anteriores Section */}
      <motion.section 
        className="bg-[#9725c5] py-10 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-6xl font-bold mb-8 md:mb-10 text-center text-[#f3b226]"
            variants={itemVariants}
          >
            Logros en la Decanatura Anterior
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              className="bg-[#fcfffd] p-4 md:p-6 rounded-lg" 
              variants={itemVariants}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#9725c5]">Membresías y Visibilidad frente a la industria</h3>
              <p className="text-sm md:text-base">
                Logramos membresías en <span className="font-bold text-[#9725c5]">ASCOLFA</span>, <span className="font-bold text-[#9725c5]">CLADEA</span>,
                <span className="font-bold text-[#9725c5]">ACOFI</span>, <span className="font-bold text-[#9725c5]">RAD</span>, aumentando la visibilidad de nuestros pregrados.
              </p>

              {/* Carousel with logos */}
              <Carousel 
                className="w-full mt-4"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent className="-ml-1 w-full">
                  <CarouselItem className="pl-1 basis-1/2 md:basis-1/4">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                          <img 
                            src="https://media.licdn.com/dms/image/v2/C560BAQFOBJpMcrtvjg/company-logo_200_200/company-logo_200_200/0/1630357045338?e=1732752000&v=beta&t=NvRXE5FXvbI_wwUxYg5eXq8De83kfQqijUj06tt14UM" 
                            alt="ASCOLFA Logo" 
                            className="h-16 md:h-20 mx-auto" 
                          />
                          <span className="text-lg md:text-xl font-semibold mt-2">ASCOLFA</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 basis-1/2 md:basis-1/4">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                          <img 
                            src="https://media.licdn.com/dms/image/v2/D4E0BAQGnnTH1TFMf6A/company-logo_200_200/company-logo_200_200/0/1695058550884/cladeaorg_logo?e=1732752000&v=beta&t=26iZA-aIYeQv_hrwvUdnzG2XOhISdtRISR6nlb4wA5o" 
                            alt="CLADEA Logo" 
                            className="h-16 md:h-20 mx-auto" 
                          />
                          <span className="text-lg md:text-xl font-semibold mt-2">CLADEA</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 basis-1/2 md:basis-1/4">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                          <img 
                            src="https://www.acofi.edu.co/wp-content/uploads/2022/02/ACOFI-WEB.png" 
                            alt="ACOFI Logo" 
                            className="h-12 md:h-16 mx-auto" 
                          />
                          <span className="text-lg md:text-xl font-semibold mt-2">ACOFI</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-1 basis-1/2 md:basis-1/4">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                          <img 
                            src="https://www.rad-d7.radcolombia.org/sites/default/files/archivos/generales/logo_rad.png" 
                            alt="RAD Logo" 
                            className="h-12 md:h-16 mx-auto" 
                          />
                          <span className="text-lg md:text-xl font-semibold mt-2">RAD</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </motion.div>
            
            <motion.div className="flex flex-col bg-[#fcfffd] p-4 md:p-6 rounded-lg text-[#9725c5]" variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Apoyo a Estudiantes</h3>
              <p className="text-sm md:text-base">
                192 auxiliares y 278 apoyos a pregrado y posgrado, invirtiendo más de 255 millones en innovación social.
              </p>
              <img src="/Images/todosmod.webp" alt="Estudiantesmora" className="rounded-lg shadow-lg w-full my-4" />
            </motion.div>
            
            <motion.div className="bg-[#fcfffd] p-4 md:p-6 rounded-lg text-[#9725c5]" variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Salidas Académicas</h3>
              <p className="text-sm md:text-base">
                Facilitamos 286 salidas académicas, enriqueciendo la experiencia educativa de nuestros estudiantes.
              </p>
            </motion.div>
            
            <motion.div className="bg-[#fcfffd] p-4 md:p-6 rounded-lg text-[#9725c5]" variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Inversión en Equipamiento</h3>
              <p className="text-sm md:text-base">
                Invertimos más de 140 millones en equipos, incluyendo nuevos equipos de cómputo para docentes.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="container mx-auto px-4 py-10 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10" variants={itemVariants}>NUESTRO COMPROMISO CONTIGO</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {[
            { title: "INNOVACIÓN EDUCATIVA", color: "bg-[#f3b226]" },
            { title: "INCLUSIÓN", color: "bg-[#67c179]" },
            { title: "DESARROLLO PROFESIONAL", color: "bg-[#9725c5]" },
            { title: "BIENESTAR ESTUDIANTIL", color: "bg-[#f3b226]" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className={`${item.color} rounded-lg p-4 md:p-6 text-[#fcfffd]`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h3>
              <p className="text-sm md:text-base">Un enfoque centrado en el estudiante, diseñado para tu éxito académico y personal.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <footer className="bg-[#9725c5] text-[#fcfffd] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm md:text-base font-semibold">
          &ldquo;Tu voto por Carlos Mora es un voto por un futuro brillante para nuestra facultad&rdquo;
        </p>
        <p className="text-xs md:text-sm">
          Hecho por Jeferson Yesid Ortiz
        </p>
      </div>
    </footer>
   </div>
  )
}