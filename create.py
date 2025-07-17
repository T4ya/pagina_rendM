#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador de Excel - Balance Social FIA UNAL Palmira
Crea un archivo Excel con todas las tablas de datos organizadas
"""

import pandas as pd
from datetime import datetime

def crear_excel_balance_social():
    """
    Crea un archivo Excel con todas las tablas del Balance Social FIA
    """
    
    # Crear un objeto ExcelWriter
    fecha_actual = datetime.now().strftime("%Y%m%d")
    nombre_archivo = f"Balance_Social_FIA_Datos_{fecha_actual}.xlsx"
    
    with pd.ExcelWriter(nombre_archivo, engine='openpyxl') as writer:
        
        # ==================== TABLA 1: ASIGNATURAS POR PERÍODO ====================
        asignaturas_data = {
            'Período': ['2019-1', '2019-2', '2020-1', '2020-2', '2021-1', '2021-2', 
                       '2022-1', '2022-2', '2023-1', '2023-2', '2024-1', '2024-2'],
            'Ingeniería': [96, 84, 90, 93, 89, 87, 88, 85, 94, 82, 75, 74],
            'Diseño': [64, 63, 60, 62, 58, 59, 59, 60, 61, 61, 62, 61],
            'Ciencias_Sociales': [59, 54, 61, 55, 62, 61, 64, 57, 58, 59, 64, 49],
            'Ciencias_Básicas': [32, 26, 25, 28, 26, 23, 22, 24, 23, 25, 18, 18]
        }
        df_asignaturas = pd.DataFrame(asignaturas_data)
        df_asignaturas.to_excel(writer, sheet_name='Asignaturas_Periodo', index=False)
        
        # ==================== TABLA 2: MOVILIDAD SALIENTE ====================
        movilidad_saliente_data = {
            'Universidad_Institución': [
                'Pontificia Universidad Javeriana', 'Universidad ICESI', 'Universidad del Valle',
                'Universidad Pontificia Bolivariana', 'Doctorado en Estudios Ambientales',
                'Universidad Nacional de Agricultura', 'Universidad de Málaga', 'Universitá di Bologna',
                'Universitá Juav di Venezia', 'Universidad Federal de Minas Gerais',
                'Universidad de Guadalajara', 'Universidad de Sao Paulo (USP)',
                'Escola Superior de Agricultura Luis de Queiroz (ESALQ)',
                'Universidad Nacional Autónoma de México'
            ],
            'Estudiantes': [21, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
        df_movilidad_saliente = pd.DataFrame(movilidad_saliente_data)
        df_movilidad_saliente.to_excel(writer, sheet_name='Movilidad_Saliente', index=False)
        
        # ==================== TABLA 3: MOVILIDAD ENTRANTE ====================
        movilidad_entrante_data = {
            'Universidad': ['Universidad Nacional de Agricultura', 'Universidad Técnica de Manabí', 
                           'Universidad Internacional de la Rioja'],
            'Estudiantes': [8, 6, 1]
        }
        df_movilidad_entrante = pd.DataFrame(movilidad_entrante_data)
        df_movilidad_entrante.to_excel(writer, sheet_name='Movilidad_Entrante', index=False)
        
        # ==================== TABLA 4: RESUMEN MOVILIDAD ====================
        resumen_movilidad_data = {
            'Tipo_Movilidad': ['Movilidad Nacional', 'Movilidad Internacional', 'Instancia Investigativa', 
                              'TOTAL SALIENTE', 'TOTAL ENTRANTE'],
            'Cantidad': [24, 12, 1, 38, 15]
        }
        df_resumen_movilidad = pd.DataFrame(resumen_movilidad_data)
        df_resumen_movilidad.to_excel(writer, sheet_name='Resumen_Movilidad', index=False)
        
        # ==================== TABLA 5: POSGRADO MINCIENCIAS ====================
        posgrado_minciencias_data = {
            'Programa_Doctorado': ['Doctorado en Ciencia y Tecnología de Alimentos', 
                                  'Doctorado en Estudios Ambientales', 'TOTAL'],
            'Estudiantes_Beneficiados': [2, 10, 12]
        }
        df_posgrado = pd.DataFrame(posgrado_minciencias_data)
        df_posgrado.to_excel(writer, sheet_name='Posgrado_MinCiencias', index=False)
        
        # ==================== TABLA 6: PROGRAMAS ACREDITADOS ====================
        acreditacion_data = {
            'Programa': ['Administración de Empresas', 'Ingeniería Ambiental', 'Ingeniería Agroindustrial',
                        'Ingeniería Agrícola', 'Diseño Industrial'],
            'Año_Renovación': [2021, 2018, 2023, 2023, 2024],
            'Vigencia_años': [8, 8, 8, 6, 4],
            'Resolución': ['007438 del 30 abril 2021', '18814 del 11 diciembre 2018',
                          '022256 del 23 noviembre 2023', '022257 del 23 noviembre 2023',
                          '003103 del 18 marzo 2024']
        }
        df_acreditacion = pd.DataFrame(acreditacion_data)
        df_acreditacion.to_excel(writer, sheet_name='Programas_Acreditados', index=False)
        
        # ==================== TABLA 7: CONCURSO PROFESORAL ====================
        concurso_general_data = {
            'Concepto': ['Cargos Convocados', 'Ganadores', 'Cargos Desiertos', 'Posesionados'],
            'Cantidad': [12, 8, 4, 3]
        }
        df_concurso_general = pd.DataFrame(concurso_general_data)
        df_concurso_general.to_excel(writer, sheet_name='Concurso_General', index=False)
        
        # ==================== TABLA 8: DOCENTES POSESIONADOS ====================
        docentes_posesionados_data = {
            'Área': ['Física y Educación con énfasis en Enseñanza de la Física', 'Matemáticas', 'Matemáticas'],
            'Docente': ['Juan Alejandro Vinasco Suarez', 'Edwin Barrios Rivera', 'Luis Fernando Mejía Rodríguez'],
            'Cargos_Área': [1, 2, 2]
        }
        df_docentes = pd.DataFrame(docentes_posesionados_data)
        df_docentes.to_excel(writer, sheet_name='Docentes_Posesionados', index=False)
        
        # ==================== TABLA 9: LOGROS INVESTIGACIÓN 2024 ====================
        logros_investigacion_data = {
            'Indicador': ['Movilidad estudiantes', 'Movilidad docentes', 'Equipos mantenidos (laboratorios)', 
                         'Semilleros registrados HERMES'],
            'Meta': [3, 2, 4, 'N/A'],
            'Logrado': [12, 10, 4, 22],
            'Porcentaje': ['400%', '500%', '100%', 'N/A']
        }
        df_logros = pd.DataFrame(logros_investigacion_data)
        df_logros.to_excel(writer, sheet_name='Logros_Investigacion', index=False)
        
        # ==================== TABLA 10: EJECUCIÓN UGI 2024 ====================
        ejecucion_ugi_data = {
            'Código_Quipú': ['207010038889', '207010038332', '207010038319', '207010038880', '207010038871', 'TOTAL'],
            'Proyecto': [
                'Cofinanciar proyectos de investigación',
                'Equipos de investigación',
                'Eventos científicos',
                'Desarrollo de laboratorios',
                'Soporte administrativo UGI',
                'TOTAL'
            ],
            'Apropiación': [35000000, 87036111, 120000000, 53590400, 31755292, 327381803],
            'Ejecución': [35000000, 26839735, 119319568, 38754400, 16566000, 201479703],
            'Saldo': [0, 60196376, 680432, 17836000, 15189292, 128902100]
        }
        df_ejecucion_ugi = pd.DataFrame(ejecucion_ugi_data)
        df_ejecucion_ugi.to_excel(writer, sheet_name='Ejecucion_UGI_2024', index=False)
        
        # ==================== TABLA 11: EXTENSIÓN SOLIDARIA 2024 ====================
        extension_solidaria_data = {
            'Proyecto': [
                'Integración generacional - Roldanillo',
                'Acuaponía familiar - Yotoco',
                'Galería Pradera',
                'TOTAL'
            ],
            'Director': [
                'Rodrigo Enrique Cárdenas Acevedo',
                'Luz Stella Cadavid Rodríguez',
                'Víctor Manuel Díaz Carrero',
                ''
            ],
            'Valor': [50000000, 50000000, 50000000, 150000000]
        }
        df_extension = pd.DataFrame(extension_solidaria_data)
        df_extension.to_excel(writer, sheet_name='Extension_Solidaria_2024', index=False)
        
        # ==================== TABLA 12: PLAN INTEGRAL COBERTURA ====================
        pic_data = {
            'Concepto': [
                'Total Universidad Nacional',
                'Sede Palmira',
                'Docentes ocasionales',
                'Equipos laboratorio',
                'Insumos laboratorios',
                'Equipos de cómputo',
                'Infraestructura laboratorios',
                'Mantenimiento equipos',
                'Mobiliario laboratorios y aulas',
                'TOTAL FIA'
            ],
            'Valor': [
                52782578188,
                4840266381,
                142000000,
                170000000,
                95000000,
                72000000,
                55000000,
                60000000,
                54000000,
                648000000
            ],
            'Tipo': [
                'Total Nacional',
                'Total Sede',
                'FIA',
                'FIA',
                'FIA',
                'FIA',
                'FIA',
                'FIA',
                'FIA',
                'Total FIA'
            ]
        }
        df_pic = pd.DataFrame(pic_data)
        df_pic.to_excel(writer, sheet_name='PIC_2024', index=False)
        
        # ==================== TABLA 13: RECAUDO UGI 2025 ====================
        recaudo_2025_data = {
            'Fuente': ['Recursos del Balance', 'Derechos Académicos', 'Rendimientos Financieros', 'TOTAL'],
            'Valor': [148841931, 93303255, 24188662, 242145186],
            'Porcentaje': [56, 35, 9, 100]
        }
        df_recaudo = pd.DataFrame(recaudo_2025_data)
        df_recaudo.to_excel(writer, sheet_name='Recaudo_UGI_2025', index=False)
        
        # ==================== TABLA 14: PROYECTOS EXTENSIÓN 2025 ====================
        extension_2025_data = {
            'Código': ['55356', '59235', '58725', '61690', '61635', '61449', 'TOTAL'],
            'Proyecto': [
                'Semillas nativas y criollas',
                'Con-ciencia UNAL',
                'Abriendo puertas',
                'Galería Pradera',
                'Integración generacional Roldanillo',
                'Acuaponía familiar Yotoco',
                'TOTAL'
            ],
            'Apropiado_2025': [266934, 21114323, 44951410, 40529782, 43197900, 50000000, 200060349],
            'Registrado_2025': [0, 0, 24246600, 11999808, 32250964, 0, 68497372],
            'Pagos_2025': [0, 0, 22287200, 0, 20497425, 0, 42784625]
        }
        df_extension_2025 = pd.DataFrame(extension_2025_data)
        df_extension_2025.to_excel(writer, sheet_name='Extension_2025', index=False)
        
        # ==================== TABLA 15: EXTENSIÓN EXTERNA 2025 ====================
        extension_externa_data = {
            'Código': ['52117', '59048', 'TOTAL'],
            'Proyecto': [
                'Prototipo cuencandina 1.0',
                'Humedal RAMSAR Lago GUAMUEZ',
                'TOTAL'
            ],
            'Investigador': [
                'Viviana Vargas Franco',
                'Guillermo Duque Nivia',
                ''
            ],
            'Apropiado_2025': [44438329, 225000880, 269439209],
            'Registrado_2025': [44438329, 120742194, 165180523],
            'Pagos_2025': [36784943, 60502194, 97287137]
        }
        df_extension_externa = pd.DataFrame(extension_externa_data)
        df_extension_externa.to_excel(writer, sheet_name='Extension_Externa_2025', index=False)
        
        # ==================== TABLA 16: DIFUSIÓN EMPRESARIAL ====================
        difusion_empresarial_data = {
            'No': [1, 2, 3, 4, 5, 6, 7],
            'Empresa': [
                'Incauca S.A.S.',
                'Ingenio Providencia',
                'Riopaila – Castilla',
                'D1 S.A.S.',
                'Agrosavia',
                'Ecoline Agrícola',
                'Inelma S.A.S.'
            ],
            'Oficio': [
                'P. DFIA.1 -217-2024',
                'P. DFIA.1 -218-2024',
                'P. DFIA.1 -219-2024',
                'P. DFIA.1 -220-2024',
                'P. DFIA.1 -222-2024',
                'P. DFIA.1 -223-2024',
                'P. DFIA.1 –225-2024'
            ],
            'Gestión': [
                'Sin respuesta',
                'Sin respuesta',
                'Respuesta positiva - Reunión virtual',
                'Solicitaron información programas',
                'Sin respuesta',
                'Sin respuesta',
                'Jornada difusión 23 dic 2024'
            ]
        }
        df_difusion = pd.DataFrame(difusion_empresarial_data)
        df_difusion.to_excel(writer, sheet_name='Difusion_Empresarial', index=False)
        
        # ==================== TABLA 17: PROYECTO B-LEARNING ====================
        blearning_data = {
            'Proyecto': ['CONEXIUN - Aula Invertida'],
            'Código': ['BPUN 614-C8-F1'],
            'Apropiación': [230000000],
            'Ejecución_Porcentaje': [60],
            'Líder': ['Oscar Yovany Checa Cerón']
        }
        df_blearning = pd.DataFrame(blearning_data)
        df_blearning.to_excel(writer, sheet_name='Proyecto_B_Learning', index=False)
        
        # ==================== TABLA 18: RESUMEN TOTALES ====================
        resumen_totales_data = {
            'Categoría': [
                'Estudiantes', 'Estudiantes', 'Estudiantes',
                'Programas', 'Programas',
                'Presupuesto', 'Presupuesto', 'Presupuesto', 'Presupuesto', 'Presupuesto', 'Presupuesto',
                'Personal', 'Personal', 'Personal'
            ],
            'Indicador': [
                'Movilidad Saliente', 'Movilidad Entrante', 'Posgrado MinCiencias',
                'Acreditados', 'Semilleros Investigación',
                'PIC Total Sede Palmira', 'PIC FIA', 'Extensión Solidaria', 'UGI Apropiación', 'UGI Ejecución', 'Recaudo UGI 2025',
                'Docentes Concurso', 'Docentes Ganadores', 'Docentes Posesionados'
            ],
            'Valor_Cantidad': [
                38, 15, 12,
                5, 22,
                4840266381, 648000000, 150000000, 327381803, 201479703, 242145186,
                12, 8, 3
            ]
        }
        df_resumen_totales = pd.DataFrame(resumen_totales_data)
        df_resumen_totales.to_excel(writer, sheet_name='Resumen_Totales', index=False)
    
    print(f"✅ Archivo Excel creado exitosamente: {nombre_archivo}")
    print(f"📊 Total de hojas creadas: 18")
    print("\n📋 Hojas incluidas:")
    hojas = [
        "Asignaturas_Periodo", "Movilidad_Saliente", "Movilidad_Entrante", "Resumen_Movilidad",
        "Posgrado_MinCiencias", "Programas_Acreditados", "Concurso_General", "Docentes_Posesionados",
        "Logros_Investigacion", "Ejecucion_UGI_2024", "Extension_Solidaria_2024", "PIC_2024",
        "Recaudo_UGI_2025", "Extension_2025", "Extension_Externa_2025", "Difusion_Empresarial",
        "Proyecto_B_Learning", "Resumen_Totales"
    ]
    
    for i, hoja in enumerate(hojas, 1):
        print(f"{i:2d}. {hoja}")
    
    return nombre_archivo

def main():
    """
    Función principal
    """
    print("🚀 Generando archivo Excel con datos del Balance Social FIA...")
    print("=" * 60)
    
    try:
        archivo_creado = crear_excel_balance_social()
        print("=" * 60)
        print("🎉 ¡Proceso completado exitosamente!")
        print(f"📁 Archivo guardado como: {archivo_creado}")
        print("\n💡 Sugerencias:")
        print("   • Abre el archivo en Excel o Google Sheets")
        print("   • Cada hoja contiene una tabla diferente")
        print("   • Usa los datos para crear gráficos y análisis")
        print("   • Los valores monetarios están en pesos colombianos")
        
    except Exception as e:
        print(f"❌ Error al crear el archivo: {str(e)}")
        print("💡 Asegúrate de tener pandas y openpyxl instalados:")
        print("   pip install pandas openpyxl")

if __name__ == "__main__":
    main()