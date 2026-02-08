// 1. Definir el Enum para los estados de la tarea
enum EstadoTarea {
  PENDIENTE = "PENDIENTE",
  EN_PROGRESO = "EN_PROGRESO",
  COMPLETADA = "COMPLETADA"
}

// 2. Definir la Interface Tarea con propiedad opcional
interface Tarea {
  id: number;
  descripcion: string;
  estado: EstadoTarea;
  fechaLimite?: string; // Propiedad opcional
}

// 3. Crear un arreglo de tareas (al menos 5)
const tareas: Tarea[] = [
  {
    id: 1,
    descripcion: "Aprender TypeScript",
    estado: EstadoTarea.EN_PROGRESO,
    fechaLimite: "2026-03-30"
  },
  {
    id: 2,
    descripcion: "Hacer ejercicio",
    estado: EstadoTarea.PENDIENTE,
    fechaLimite: "2026-02-08"
  },
  {
    id: 3,
    descripcion: "Comprar víveres",
    estado: EstadoTarea.COMPLETADA
  },
  {
    id: 4,
    descripcion: "Llamar al médico",
    estado: EstadoTarea.PENDIENTE,
    fechaLimite: "2026-02-10"
  },
  {
    id: 5,
    descripcion: "Enviar reporte mensual",
    estado: EstadoTarea.COMPLETADA,
    fechaLimite: "2026-02-05"
  },
  {
    id: 6,
    descripcion: "Reunión de equipo",
    estado: EstadoTarea.EN_PROGRESO
  }
];

// 4. Función para filtrar tareas por estado
function filtrarTareasPorEstado(tareas: Tarea[], estado: EstadoTarea): Tarea[] {
  return tareas.filter(tarea => tarea.estado === estado);
}

// 5. Función para mostrar las estadísticas de tareas
function mostrarEstadisticasTareas(tareas: Tarea[]): void {
  const tareasPendientes = filtrarTareasPorEstado(tareas, EstadoTarea.PENDIENTE);
  const tareasEnProgreso = filtrarTareasPorEstado(tareas, EstadoTarea.EN_PROGRESO);
  const tareasCompletadas = filtrarTareasPorEstado(tareas, EstadoTarea.COMPLETADA);

  console.log("=== ESTADÍSTICAS DE TAREAS ===");
  console.log(`Tareas Pendientes: ${tareasPendientes.length}`);
  console.log(`Tareas en Progreso: ${tareasEnProgreso.length}`);
  console.log(`Tareas Completadas: ${tareasCompletadas.length}`);
  console.log(`Total de Tareas: ${tareas.length}`);
  console.log("==============================\n");
}

// 6. Función para mostrar tareas de un estado específico
function mostrarTareas(tareas: Tarea[], estado: EstadoTarea): void {
  const tareasFiltradas = filtrarTareasPorEstado(tareas, estado);

  console.log(`=== TAREAS ${estado} ===`);
  
  if (tareasFiltradas.length === 0) {
    console.log(`No hay tareas en estado ${estado}`);
  } else {
    tareasFiltradas.forEach(tarea => {
      console.log(`ID: ${tarea.id}`);
      console.log(`Descripción: ${tarea.descripcion}`);
      console.log(`Estado: ${tarea.estado}`);
      // Mostrar fecha límite si existe, o un mensaje por defecto
      console.log(`Fecha Límite: ${tarea.fechaLimite ? tarea.fechaLimite : "No definida"}`);
      console.log("---");
    });
  }
  console.log("\n");
}

// 7. Función principal
function main(): void {
  console.log("=== GESTOR DE TAREAS CON TYPESCRIPT ===\n");

  // Mostrar todas las tareas
  console.log("=== TODAS LAS TAREAS ===");
  tareas.forEach(tarea => {
    console.log(`[${tarea.id}] ${tarea.descripcion} - ${tarea.estado}`);
  });
  console.log("\n");

  // Mostrar estadísticas
  mostrarEstadisticasTareas(tareas);

  // Mostrar tareas por estado
  mostrarTareas(tareas, EstadoTarea.PENDIENTE);
  mostrarTareas(tareas, EstadoTarea.EN_PROGRESO);
  mostrarTareas(tareas, EstadoTarea.COMPLETADA);

  // Ejemplo adicional: mostrar tareas con fecha límite definida
  console.log("=== TAREAS CON FECHA LÍMITE DEFINIDA ===");
  const tareasConFechaLimite = tareas.filter(tarea => tarea.fechaLimite);
  tareasConFechaLimite.forEach(tarea => {
    console.log(`- ${tarea.descripcion} (${tarea.fechaLimite})`);
  });
}

// Ejecutar el programa
main();

// Exportar tipos y funciones si se necesitan en otros módulos
export { EstadoTarea, Tarea, filtrarTareasPorEstado, mostrarEstadisticasTareas };