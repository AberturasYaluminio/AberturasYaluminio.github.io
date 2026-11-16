// Catálogo de perfiles (agregá la ruta en "imagen", ej: "img/0001.png")
const productosCatalogo = [
    // 1. Catálogo General (Herrero) - peso por tira y paquete
    { uid: "GEN-0001", codigo: "0001", nombre: "Escuadra Armado", linea: "General", kgPaquete: 13, tirasPaquete: 4, kgRef: 3.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0002", codigo: "0002", nombre: "Marco Pesado", linea: "General", kgPaquete: 28, tirasPaquete: 6, kgRef: 4.66, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0003", codigo: "0003", nombre: "Marco Liviano N°1", linea: "General", kgPaquete: 20, tirasPaquete: 6, kgRef: 3.33, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0004", codigo: "0004", nombre: "Marco Alto Tránsito N°17", linea: "General", kgPaquete: 24, tirasPaquete: 4, kgRef: 6.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0005", codigo: "0005", nombre: "Guía 45°", linea: "General", kgPaquete: 19, tirasPaquete: 8, kgRef: 2.37, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0006", codigo: "0006", nombre: "Marco con Tapajunta", linea: "General", kgPaquete: 14, tirasPaquete: 6, kgRef: 2.33, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0007", codigo: "0007", nombre: "Marco Corredizo de 3 Guías", linea: "General", kgPaquete: 23, tirasPaquete: 4, kgRef: 5.75, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0008", codigo: "0008", nombre: "Marco Corredizo de 4 Guías", linea: "General", kgPaquete: 27, tirasPaquete: 4, kgRef: 6.75, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0009", codigo: "0009", nombre: "Marco Unificado con Postigón", linea: "General", kgPaquete: 27, tirasPaquete: 4, kgRef: 6.75, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0010", codigo: "0010", nombre: "Zócalo y Cabezal Hoja Corrediza N°2", linea: "General", kgPaquete: 18, tirasPaquete: 8, kgRef: 2.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0011", codigo: "0011", nombre: "Zócalo Reforzado", linea: "General", kgPaquete: 18, tirasPaquete: 8, kgRef: 2.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0012", codigo: "0012", nombre: "Jamba de Hoja Corrediza N°3", linea: "General", kgPaquete: 18, tirasPaquete: 8, kgRef: 2.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0013", codigo: "0013", nombre: "Parante Lateral Reforzado", linea: "General", kgPaquete: 24, tirasPaquete: 4, kgRef: 6.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0014", codigo: "0014", nombre: "Encuentro de Hoja N°4", linea: "General", kgPaquete: 18, tirasPaquete: 8, kgRef: 2.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0015", codigo: "0015", nombre: "Parante Central Reforzado", linea: "General", kgPaquete: 24, tirasPaquete: 4, kgRef: 6.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0016", codigo: "0016", nombre: "Mosquitero Mediano", linea: "General", kgPaquete: 17, tirasPaquete: 10, kgRef: 1.70, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0017", codigo: "0017", nombre: "Mosquitero Grande N°5", linea: "General", kgPaquete: 20, tirasPaquete: 10, kgRef: 2.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0018", codigo: "0018", nombre: "Travesaño Mosquitero", linea: "General", kgPaquete: 22, tirasPaquete: 10, kgRef: 2.20, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0019", codigo: "0019", nombre: "Perimetral (rayado/liso)", linea: "General", kgPaquete: 12, tirasPaquete: 10, kgRef: 1.20, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0020", codigo: "0020", nombre: "Central (rayado/liso)", linea: "General", kgPaquete: 15, tirasPaquete: 10, kgRef: 1.50, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0021", codigo: "0021", nombre: "Central con Cava", linea: "General", kgPaquete: 18, tirasPaquete: 10, kgRef: 1.80, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0022", codigo: "0022", nombre: "Guía Persiana", linea: "General", kgPaquete: 17, tirasPaquete: 8, kgRef: 2.20, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0023", codigo: "0023", nombre: "Tapa Cinta", linea: "General", kgPaquete: 12, tirasPaquete: 6, kgRef: 2.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0024", codigo: "0024", nombre: "Aireador", linea: "General", kgPaquete: 18, tirasPaquete: 6, kgRef: 3.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0025", codigo: "0025", nombre: "Acople \"H\"", linea: "General", kgPaquete: 22, tirasPaquete: 6, kgRef: 3.66, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0026", codigo: "0026", nombre: "Contravidrio", linea: "General", kgPaquete: 21, tirasPaquete: 20, kgRef: 1.05, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0027", codigo: "0027", nombre: "Marco Paño Fijo", linea: "General", kgPaquete: 26, tirasPaquete: 8, kgRef: 3.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0028", codigo: "0028", nombre: "Travesaño Paño Fijo", linea: "General", kgPaquete: 16, tirasPaquete: 4, kgRef: 4.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0029", codigo: "0029", nombre: "Parante Puerta 36mm", linea: "General", kgPaquete: 24, tirasPaquete: 4, kgRef: 6.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0030", codigo: "0030", nombre: "Travesaño Puerta 36mm", linea: "General", kgPaquete: 25, tirasPaquete: 4, kgRef: 6.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0031", codigo: "0031", nombre: "Marco Puerta 36mm", linea: "General", kgPaquete: 24, tirasPaquete: 6, kgRef: 4.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0032", codigo: "0032", nombre: "Revestimiento Tubular 124mm", linea: "General", kgPaquete: 24, tirasPaquete: 4, kgRef: 6.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0033", codigo: "0033", nombre: "Revestimiento Tubular 100mm", linea: "General", kgPaquete: 19, tirasPaquete: 4, kgRef: 4.75, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0034", codigo: "0034", nombre: "Marco Raja Grande", linea: "General", kgPaquete: 20, tirasPaquete: 6, kgRef: 3.33, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0035", codigo: "0035", nombre: "Marco Raja Chico", linea: "General", kgPaquete: 20, tirasPaquete: 8, kgRef: 2.50, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0036", codigo: "0036", nombre: "Parante Postigón Grande", linea: "General", kgPaquete: 20, tirasPaquete: 6, kgRef: 3.33, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0037", codigo: "0037", nombre: "Parante Postigón Chico", linea: "General", kgPaquete: 18, tirasPaquete: 8, kgRef: 2.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0038", codigo: "0038", nombre: "Hoja de Raja con Perimetral", linea: "General", kgPaquete: 19, tirasPaquete: 8, kgRef: 2.37, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0039", codigo: "0039", nombre: "Travesaño de Marco Raja", linea: "General", kgPaquete: 16, tirasPaquete: 4, kgRef: 4.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0040", codigo: "0040", nombre: "Contravidrio de Raja", linea: "General", kgPaquete: 20, tirasPaquete: 10, kgRef: 2.00, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0041", codigo: "0041", nombre: "Travesaño Puerta N°44", linea: "General", kgPaquete: 26, tirasPaquete: 4, kgRef: 6.25, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0042", codigo: "0042", nombre: "Tablilla Acanalada", linea: "General", kgPaquete: 22, tirasPaquete: 10, kgRef: 2.20, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0043", codigo: "0043", nombre: "Tablilla de Postigón Chica", linea: "General", kgPaquete: 18, tirasPaquete: 10, kgRef: 1.80, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0044", codigo: "0044", nombre: "Tablilla de Postigón Grande", linea: "General", kgPaquete: 20, tirasPaquete: 6, kgRef: 3.33, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0045", codigo: "0045", nombre: "Doble Contacto Batiente", linea: "General", kgPaquete: 22, tirasPaquete: 10, kgRef: 2.20, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0046", codigo: "0046", nombre: "Marco Puerta Placa 30mm", linea: "General", kgPaquete: 13, tirasPaquete: 6, kgRef: 2.16, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0047", codigo: "0047", nombre: "Marco Puerta Placa 35mm", linea: "General", kgPaquete: 22, tirasPaquete: 10, kgRef: 2.22, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0048", codigo: "0048", nombre: "Marco Puerta Placa 40mm", linea: "General", kgPaquete: 26, tirasPaquete: 10, kgRef: 2.26, unidadRef: "kg/tira", imagen: "" },
    { uid: "GEN-0049", codigo: "0049", nombre: "Marco Puerta Placa 45mm", linea: "General", kgPaquete: 27, tirasPaquete: 10, kgRef: 2.70, unidadRef: "kg/tira", imagen: "" },

    // 2. Línea A30 - peso en kg/m
    { uid: "A30-7034", codigo: "7034", nombre: "Parante lateral corrediza vidrio simple", linea: "A30", kgRef: 1.470, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7035", codigo: "7035", nombre: "Parante central corrediza vidrio simple", linea: "A30", kgRef: 1.610, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7036", codigo: "7036", nombre: "Jamba Marco de 2 guías", linea: "A30", kgRef: 0.935, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7037", codigo: "7037", nombre: "Umbral/Dintel Marco 2 guías", linea: "A30", kgRef: 1.870, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7038", codigo: "7038", nombre: "Mosquitero reforzado", linea: "A30", kgRef: 0.630, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7039", codigo: "7039", nombre: "Tope de mosquitero", linea: "A30", kgRef: 0.390, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7041", codigo: "7041", nombre: "Hoja de puerta", linea: "A30", kgRef: 1.460, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7042", codigo: "7042", nombre: "Travesaño de puerta", linea: "A30", kgRef: 1.470, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7043", codigo: "7043", nombre: "Zócalo de puerta", linea: "A30", kgRef: 2.440, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7044", codigo: "7044", nombre: "Encuentro de puerta rebatible", linea: "A30", kgRef: 1.090, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7045", codigo: "7045", nombre: "Contravidrio recto 37 mm", linea: "A30", kgRef: 0.370, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7046", codigo: "7046", nombre: "Contravidrio recto 19 mm", linea: "A30", kgRef: 0.280, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7047", codigo: "7047", nombre: "Contravidrio curvo 37 mm", linea: "A30", kgRef: 0.270, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7048", codigo: "7048", nombre: "Contravidrio curvo 19 mm", linea: "A30", kgRef: 0.220, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7049", codigo: "7049", nombre: "Contravidrio recto exterior para puerta", linea: "A30", kgRef: 0.250, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7050", codigo: "7050", nombre: "Contravidrio curvo exterior para puerta", linea: "A30", kgRef: 0.210, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7061", codigo: "7061", nombre: "Zócalo y cabezal de hoja vidrio simple", linea: "A30", kgRef: 0.980, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7062", codigo: "7062", nombre: "Zócalo alto de hoja vidrio simple", linea: "A30", kgRef: 1.580, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7067", codigo: "7067", nombre: "Acople a 180°", linea: "A30", kgRef: 0.360, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7071", codigo: "7071", nombre: "Parante lateral corrediza DVH", linea: "A30", kgRef: 1.460, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7072", codigo: "7072", nombre: "Parante central corrediza DVH", linea: "A30", kgRef: 1.600, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7073", codigo: "7073", nombre: "Zócalo y cabezal de hoja DVH", linea: "A30", kgRef: 0.910, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7074", codigo: "7074", nombre: "Zócalo alto de hoja DVH", linea: "A30", kgRef: 1.500, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7080", codigo: "7080", nombre: "Jamba de marco 3 guías", linea: "A30", kgRef: 1.790, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7081", codigo: "7081", nombre: "Umbral/Dintel Marco 3 guías", linea: "A30", kgRef: 3.090, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7082", codigo: "7082", nombre: "Parante central tercer hoja corrediza DVH", linea: "A30", kgRef: 1.540, unidadRef: "kg/m", imagen: "" },
    { uid: "A30-7083", codigo: "7083", nombre: "Parante central tercer hoja corrediza vidrio simple", linea: "A30", kgRef: 1.510, unidadRef: "kg/m", imagen: "" },

    // 3. Línea Modena - peso en kg/m
    { uid: "MOD-200", codigo: "200", nombre: "Umbral/Dintel Marco 2 guías", linea: "Modena", kgRef: 1.290, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-201", codigo: "201", nombre: "Jamba Marco de 2 guías", linea: "Modena", kgRef: 0.636, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-203", codigo: "203", nombre: "Parante lateral de hoja vidrio simple", linea: "Modena", kgRef: 0.688, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-204", codigo: "204", nombre: "Zócalo y cabezal de hoja vidrio simple", linea: "Modena", kgRef: 0.698, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-205", codigo: "205", nombre: "Premarco", linea: "Modena", kgRef: 0.406, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-206", codigo: "206", nombre: "Tapajuntas de enclipar", linea: "Modena", kgRef: 0.205, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-207", codigo: "207", nombre: "Parante central de hoja vidrio simple", linea: "Modena", kgRef: 0.688, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-208", codigo: "208", nombre: "Parante central de hoja con tirador vidrio simple", linea: "Modena", kgRef: 0.920, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-209", codigo: "209", nombre: "Zócalo alto de hoja vidrio simple", linea: "Modena", kgRef: 1.290, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-213", codigo: "213", nombre: "Acople a 180°", linea: "Modena", kgRef: 0.320, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-214", codigo: "214", nombre: "Parante hoja de puerta", linea: "Modena", kgRef: 1.020, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-216", codigo: "216", nombre: "Marco universal PF/Abrir", linea: "Modena", kgRef: 0.685, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-217", codigo: "217", nombre: "Contravidrio recto 29 mm", linea: "Modena", kgRef: 0.310, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-218", codigo: "218", nombre: "Travesaño de puerta", linea: "Modena", kgRef: 1.050, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-219", codigo: "219", nombre: "Zócalo de puerta", linea: "Modena", kgRef: 1.780, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-221", codigo: "221", nombre: "Travesaño de paño fijo", linea: "Modena", kgRef: 0.820, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-224", codigo: "224", nombre: "Encuentro de puerta rebatible", linea: "Modena", kgRef: 0.840, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-225", codigo: "225", nombre: "Contravidrio recto 22 mm", linea: "Modena", kgRef: 0.280, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-226", codigo: "226", nombre: "Contravidrio recto 15 mm", linea: "Modena", kgRef: 0.230, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-228", codigo: "228", nombre: "Tope de mosquitero", linea: "Modena", kgRef: 0.195, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-229", codigo: "229", nombre: "Marco curvo PF/Abrir", linea: "Modena", kgRef: 0.797, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-230", codigo: "230", nombre: "Contravidrio curvo 29 mm", linea: "Modena", kgRef: 0.230, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-231", codigo: "231", nombre: "Contravidrio curvo 15 mm", linea: "Modena", kgRef: 0.190, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-232", codigo: "232", nombre: "Contravidrio curvo 22 mm", linea: "Modena", kgRef: 0.210, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-235", codigo: "235", nombre: "Hoja ventana de abrir", linea: "Modena", kgRef: 0.980, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-236", codigo: "236", nombre: "Hoja de abrir (N/D)", linea: "Modena", kgRef: 0, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-237", codigo: "237", nombre: "Contravidrio de exterior para puerta", linea: "Modena", kgRef: 0.210, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-239", codigo: "239", nombre: "Travesaño de corrediza vidrio simple", linea: "Modena", kgRef: 0.680, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-240", codigo: "240", nombre: "Umbral/Dintel marco 3 guías", linea: "Modena", kgRef: 1.980, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-241", codigo: "241", nombre: "Jamba Marco de 3 guías", linea: "Modena", kgRef: 1.080, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-248", codigo: "248", nombre: "Parante lateral de hoja DVH", linea: "Modena", kgRef: 0.660, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-249", codigo: "249", nombre: "Zócalo y cabezal de hoja DVH", linea: "Modena", kgRef: 0.678, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-250", codigo: "250", nombre: "Parante central de hoja DVH", linea: "Modena", kgRef: 0.660, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-251", codigo: "251", nombre: "Parante central de hoja con tirador DVH", linea: "Modena", kgRef: 0.910, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-252", codigo: "252", nombre: "Zócalo alto de hoja DVH", linea: "Modena", kgRef: 1.270, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-253", codigo: "253", nombre: "Travesaño Hoja DVH", linea: "Modena", kgRef: 0.660, unidadRef: "kg/m", imagen: "" },
    { uid: "MOD-255", codigo: "255", nombre: "Mosquitero", linea: "Modena", kgRef: 0.480, unidadRef: "kg/m", imagen: "" }
];

// Tabla de precios por kilo según línea y color
const PRECIOS_POR_KILO = {
    General: {
        Blanco: 14500,
        Bronce: 17000,
        Negro: 16500,
        Gris: 17000
    },
    Modena: {
        Blanco: 14500,
        Bronce: 17000,
        Negro: 16500,
        Gris: 17000
    },
    A30: {
        Blanco: 17000,
        Negro: 19000
    }
};

let pedidoActual = [];
let pesoManualEditado = false;

window.onload = () => {
    document.getElementById("fecha-presupuesto").valueAsDate = new Date();
    renderizarCatalogoActual();
};

function renderizarMiniatura(rutaImagen, titulo) {
    if (!rutaImagen) {
        return `<div class="sin-foto">Sin foto</div>`;
    }
    const tituloEscapado = titulo.replace(/"/g, "&quot;");
    return `
        <img
            src="${rutaImagen}"
            alt="${tituloEscapado}"
            class="thumb-producto"
            onclick="abrirVisor('${rutaImagen}', '${tituloEscapado}')"
            onerror="this.outerHTML='<div class=&quot;sin-foto&quot;>Sin foto</div>'"
        >
    `;
}

function abrirVisor(src, titulo) {
    document.getElementById("visor-img-tag").src = src;
    document.getElementById("visor-titulo").innerText = titulo;
    document.getElementById("visor-imagen").classList.add("abierto");
}

function cerrarVisor() {
    document.getElementById("visor-imagen").classList.remove("abierto");
    document.getElementById("visor-img-tag").src = "";
}

function obtenerPrecioKg(linea, color) {
    if (linea === "A30") {
        if (color === "Blanco") return PRECIOS_POR_KILO.A30.Blanco;
        if (color === "Negro") return PRECIOS_POR_KILO.A30.Negro;
        return null;
    }
    return PRECIOS_POR_KILO[linea]?.[color] ?? null;
}

function cambiarPestana(nombrePestana, boton) {
    document.querySelectorAll(".tab-content").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

    document.getElementById(nombrePestana).classList.add("active");
    if (boton) boton.classList.add("active");
}

function renderizarCatalogoActual() {
    const color = document.getElementById("selector-color").value;
    const aviso = document.getElementById("aviso-color");

    if (color === "Bronce" || color === "Gris") {
        aviso.innerHTML = `Color seleccionado: <strong>${color}</strong>. Herrero y Modena toman precio por kg de ${color} ($17.000/kg); en A30 solo están cargados Blanco ($17.000/kg) y Negro ($19.000/kg).`;
    } else {
        aviso.innerHTML = `Color seleccionado: <strong>${color}</strong>. Herrero/Modena: $${PRECIOS_POR_KILO.Modena[color].toLocaleString("es-AR")}/kg &bull; A30: $${PRECIOS_POR_KILO.A30[color].toLocaleString("es-AR")}/kg.`;
    }

    filtrarProductos();
}

function filtrarProductos() {
    const texto = document.getElementById("buscador").value.toLowerCase().trim();
    const lineaFiltro = document.getElementById("filtro-linea").value;

    const filtrados = productosCatalogo.filter(p => {
        const coincideLinea = lineaFiltro === "TODAS" || p.linea === lineaFiltro;
        const coincideTexto =
            p.codigo.toLowerCase().includes(texto) ||
            p.nombre.toLowerCase().includes(texto);
        return coincideLinea && coincideTexto;
    });

    renderizarCatalogo(filtrados);
}

function renderizarCatalogo(lista) {
    const tbody = document.getElementById("lista-productos");
    const color = document.getElementById("selector-color").value;
    tbody.innerHTML = "";

    lista.forEach(prod => {
        const precioKg = obtenerPrecioKg(prod.linea, color);
        const disponible = precioKg !== null;
        const etiquetaUnidad = prod.linea === "General" ? "tiras" : "metros";
        const tituloFoto = `${prod.codigo} - ${prod.nombre} (${prod.linea})`;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${renderizarMiniatura(prod.imagen, tituloFoto)}</td>
            <td><strong>${prod.codigo}</strong></td>
            <td>${prod.nombre}</td>
            <td>
                <span class="badge-linea">${prod.linea}</span><br>
                <small>${prod.kgRef} ${prod.unidadRef}</small>
            </td>
            <td>${disponible ? `$${precioKg.toLocaleString("es-AR")}/kg` : "<em>No aplica</em>"}</td>
            <td>
                <input type="number" id="cant-${prod.uid}" value="1" min="0.1" step="0.1"
                    placeholder="${etiquetaUnidad}"
                    oninput="previsualizarKilos('${prod.uid}', ${prod.kgRef})"
                    ${disponible ? "" : "disabled"}>
            </td>
            <td id="kilos-prev-${prod.uid}">${prod.kgRef.toFixed(2)} kg</td>
            <td>
                <button class="btn-agregar" onclick="agregarAlPedido('${prod.uid}', this)" ${disponible ? "" : "disabled"}>
                    + Agregar
                </button>
            </td>
        `;
        tbody.appendChild(fila);
    });
}

function previsualizarKilos(uid, kgRef) {
    const cant = parseFloat(document.getElementById(`cant-${uid}`).value);
    const destino = document.getElementById(`kilos-prev-${uid}`);
    if (isNaN(cant) || cant <= 0) {
        destino.innerText = "0.00 kg";
        return;
    }
    destino.innerText = `${(cant * kgRef).toFixed(2)} kg`;
}

function agregarAlPedido(uid, btn) {
    const producto = productosCatalogo.find(p => p.uid === uid);
    const color = document.getElementById("selector-color").value;
    const precioKg = obtenerPrecioKg(producto.linea, color);
    const cantidad = parseFloat(document.getElementById(`cant-${uid}`).value);

    if (!producto || precioKg === null) {
        alert("Este perfil no tiene precio definido para el color seleccionado.");
        return;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresá una cantidad o metraje válido.");
        return;
    }

    const kilosTotalesItem = cantidad * producto.kgRef;
    const subtotal = kilosTotalesItem * precioKg;
    const claveItem = `${producto.uid}__${color}`;

    const existente = pedidoActual.find(item => item.clave === claveItem);
    if (existente) {
        existente.cantidad += cantidad;
        existente.kilosTotales += kilosTotalesItem;
        existente.subtotal += subtotal;
    } else {
        pedidoActual.push({
            clave: claveItem,
            codigo: producto.codigo,
            nombre: producto.nombre,
            linea: producto.linea,
            color: color,
            imagen: producto.imagen,
            unidad: producto.linea === "General" ? "tiras" : "m",
            precioKg: precioKg,
            cantidad: cantidad,
            kilosTotales: kilosTotalesItem,
            subtotal: subtotal
        });
    }

    actualizarPresupuesto();

    const textoOriginal = btn.innerText;
    btn.innerText = "✓ Agregado";
    btn.style.background = "#16181a";
    setTimeout(() => {
        btn.innerText = textoOriginal;
        btn.style.background = "";
    }, 800);
}

function editarKilosItem(index, nuevoValor) {
    const kilos = parseFloat(nuevoValor);
    if (isNaN(kilos) || kilos < 0) return;

    const item = pedidoActual[index];
    item.kilosTotales = kilos;
    item.subtotal = kilos * item.precioKg;
    actualizarPresupuesto();
}

function marcarPesoManual() {
    pesoManualEditado = true;
}

function restaurarPesoEstimado() {
    pesoManualEditado = false;
    actualizarPresupuesto();
}

function actualizarPresupuesto() {
    const tbody = document.getElementById("lista-pedido");
    tbody.innerHTML = "";

    let sumaPrecio = 0;
    let sumaKilos = 0;

    pedidoActual.forEach((item, index) => {
        sumaPrecio += item.subtotal;
        sumaKilos += item.kilosTotales;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td class="no-print">${renderizarMiniatura(item.imagen, `${item.codigo} - ${item.nombre}`)}</td>
            <td><strong>${item.codigo}</strong></td>
            <td>${item.nombre}</td>
            <td>${item.linea} - ${item.color}</td>
            <td>$${item.precioKg.toLocaleString("es-AR")}/kg</td>
            <td>${item.cantidad} ${item.unidad}</td>
            <td>
                <input type="number" value="${item.kilosTotales.toFixed(2)}" step="0.01" min="0"
                    onchange="editarKilosItem(${index}, this.value)">
            </td>
            <td><strong>$${item.subtotal.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></td>
            <td class="no-print">
                <button class="btn-eliminar" onclick="eliminarItem(${index})">X</button>
            </td>
        `;
        tbody.appendChild(fila);
    });

    document.getElementById("contador-items").innerText = pedidoActual.length;
    document.getElementById("peso-estimado-ref").innerText = sumaKilos.toFixed(2);

    if (!pesoManualEditado) {
        document.getElementById("peso-final-input").value = sumaKilos.toFixed(2);
    }

    document.getElementById("total-precio").innerText = sumaPrecio.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function eliminarItem(index) {
    pedidoActual.splice(index, 1);
    actualizarPresupuesto();
}

function vaciarPresupuesto() {
    if (pedidoActual.length === 0) return;
    if (confirm("¿Seguro que querés vaciar la nota de pedido?")) {
        pedidoActual = [];
        pesoManualEditado = false;
        actualizarPresupuesto();
    }
}