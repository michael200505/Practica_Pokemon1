# PokéDeck Matchup & Tactical Analyzer

**Estudiante:** Edison Michael Muy Angamarca  
**Carrera:** Ingeniería en Ciencias de la Computación  
**Asignatura:** Programación y Plataformas Web  
**Universidad:** Universidad Politécnica Salesiana  

---

##  Nombre y Propósito

**PokéDeck Matchup & Tactical Analyzer** es una aplicación web interactiva orientada al análisis táctico de combate y caracterización biológica de Pokémon. 

El propósito del proyecto es integrar datos en tiempo real provenientes de **PokéAPI** dentro de una arquitectura modular en Angular 19, permitiendo al usuario consultar un Pokémon por nombre o ID y obtener instantáneamente un análisis completo que abarca su ficha técnica, fortalezas/debilidades de tipo en escenario de batalla y su trasfondo biológico.

---

##  Principales Funcionalidades

* **Búsqueda interactiva dinámica:** Permite la consulta mediante nombre o ID a través de eventos por botón de clic o la tecla *Enter*.
* **Perfil Técnico y Stats Base:** Visualización de la imagen oficial del Pokémon, atributos físicos (peso y altura), tipos elementales y desglose de sus 6 estadísticas base en combate.
* **Cálculo de Matchups Tácticos:** Matriz dinámica que evalúa el tipo elemental principal del Pokémon para calcular ventajas (*doble daño a*) y debilidades (*recibe doble daño de*).
* **Ficha Biológica y Hábitat:** Recuperación de la descripción narrativa filtrada únicamente en idioma español (`es`), hábitat de origen, tasa de captura y categorización (legendario o mítico).
* **Gestión de Estados de la UI:** Control de mensajes de carga durante las peticiones asíncronas y manejo claro de errores ante búsquedas de Pokémon inexistentes.

---

##  Descripción de los Endpoints Utilizados

1. **`/api/v2/pokemon/{id|name}` (Datos Base y Estadísticas):**  
   Recupera la entidad principal del Pokémon, incluyendo su ID, tipos asignados, métricas de peso/altura, sprites oficiales de alta calidad y la lista de estadísticas base (HP, Attack, Defense, Special Attack, Special Defense, Speed).

2. **`/api/v2/type/{name}` (Efectividad Táctica y Tipos):**  
   Consulta el recurso de tipos tomando como entrada el primer tipo del Pokémon obtenido en el endpoint anterior. Retorna las relaciones de daño (`damage_relations`) para procesar cuáles tipos reciben doble daño y cuáles le causan doble daño.

3. **`/api/v2/pokemon-species/{id|name}` (Especie e Historia):**  
   Obtiene la información narrativa de la especie, permitiendo filtrar en la plantilla los registros de texto (`flavor_text_entries`) exclusivamente en idioma español, además de rescatar el hábitat, la tasa de captura y los indicadores booleanos de especie legendaria o mítica.

---

##  Instrucciones de Instalación y Ejecución Local

Para clonar y ejecutar el proyecto localmente en tu equipo:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/michael200505/Practica_Pokemon1.git](https://github.com/michael200505/Practica_Pokemon1.git)
