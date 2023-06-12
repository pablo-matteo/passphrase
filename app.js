function generarPassphrase() {
    const articulos = ['el', 'la', 'los', 'las'];
    const objetosMasculinoSingular = ['telefono', 'ordenador', 'automovil', 'reloj', 'libro', 'escritorio', 'cuaderno', 'boligrafo', 'periodico', 'microfono', 'televisor', 'altavoz', 'proyector', 'microfono', 'cable', 'enchufe', 'interruptor', 'teclado', 'raton', 'lapiz', 'sacapuntas', 'calendario', 'periodico', 'vaso', 'plato', 'tenedor', 'cuchillo', 'mantel', 'refrigerador', 'horno', 'microondas', 'fregadero', 'lavavajillas', 'tostador', 'exprimidor', 'cucharon', 'delantal', 'lavabo', 'espejo', 'cepillo de dientes', 'jabon', 'champu', 'peine', 'secadordepelo', 'cepillo para el pelo', 'inodoro', 'bide', 'papel higienico', 'cepillo de bano', 'armario', 'perchero', 'cajon', 'zapatero', 'espejo', 'sillon', 'sofa', 'cojin', 'estante', 'cuadro', 'florero', 'jarron', 'cenicero', 'candelabro', 'televisor', 'reproductor de DVD', 'estereo', 'proyector de cine', 'altavoz', 'amplificador', 'microfono', 'piano', 'violin', 'tambor', 'acordeon', 'saxofon', 'microfono', 'atril', 'pedestal', 'podio', 'escenario', 'camerino', 'telon', 'proyector', 'microfono', 'tripode', 'objetivo', 'filtro', 'flash', 'visor', 'obturador', 'telescopio', 'microscopio', 'prisma', 'mapa', 'compas', 'transportador', 'lapiz', 'borrador', 'cuaderno', 'libro'];
    const objetosFemeninoSingular = ['gata', 'casa', 'flor', 'mesa', 'silla', 'puerta', 'ventana', 'pared', 'escalera', 'alfombra', 'lampara', 'cortina', 'cocina', 'habitacion', 'television', 'radio', 'computadora', 'impresora', 'planta', 'pintura', 'escultura', 'estatua', 'joya', 'guitarra', 'piano', 'violin', 'flauta', 'caja', 'maleta', 'bolsa', 'cartera', 'ropa', 'joyero', 'joya', 'pulsera', 'collar', 'anillo', 'reloj', 'perfume', 'sombrilla', 'libreta', 'carta', 'revista', 'pelicula', 'camara', 'pintura', 'paleta', 'cepillo', 'espejo', 'tijeras', 'plancha', 'aspiradora', 'lavadora', 'secadora', 'licuadora', 'batidora', 'cafetera', 'olla', 'sarten', 'taza', 'plato', 'cuchara', 'tenedor', 'cuchillo', 'nevera', 'lavaplatos', 'horno', 'estufa', 'mesita', 'jarron', 'maceta', 'bandeja', 'candelabro', 'corona', 'caja de musica', 'radio', 'telefono', 'bolso', 'paraguas', 'sombrero', 'gafas', 'cepillo de pelo', 'crema', 'toalla', 'jabon', 'shampoo', 'cepillo de dientes', 'esponja', 'botella', 'fruta', 'verdura', 'chocolatina', 'dulce', 'chicle', 'mascarilla'];
    const objetosMasculinoPlural = ['perros', 'autos', 'arboles', 'telefonos', 'ordenadores', 'relojes', 'libros', 'escritorios', 'cuadernos', 'boligrafos', 'periodicos', 'microfonos', 'televisores', 'altavoces', 'proyectores', 'cables', 'enchufes', 'interruptores', 'teclados', 'ratones', 'lapices', 'sacapuntas', 'calendarios', 'vasos', 'platos', 'tenedores', 'cuchillos', 'manteles', 'refrigeradores', 'hornos', 'microondas', 'fregaderos', 'lavavajillas', 'tostadores', 'exprimidores', 'cucharones', 'lavabos', 'espejos', 'cepillos de dientes', 'jabones', 'champus', 'peines', 'secadoresdepelo', 'cepillos para el pelo', 'inodoros', 'bides', 'papeles higienicos', 'cepillos de bano', 'armarios', 'percheros', 'cajones', 'zapateros', 'espejos', 'sillones', 'sofas', 'cojines', 'estantes', 'cuadros', 'floreros', 'jarrones', 'ceniceros', 'candelabros', 'televisores', 'reproductores de DVD', 'estereos', 'proyectores de cine', 'altavoces', 'amplificadores', 'microfonos', 'pianos', 'violines', 'tambores', 'acordeones', 'saxofones', 'microfonos', 'atriles', 'pedestales', 'podios', 'escenarios', 'camerinos', 'telones', 'proyectores', 'microfonos', 'tripodes', 'objetivos', 'filtros', 'flashes', 'visores', 'obturadores', 'telescopios', 'microscopios', 'prismas', 'mapas', 'compases', 'transportadores', 'lapices', 'borradores', 'cuadernos', 'libros'];
    const objetosFemeninoPlural = ['gatas', 'casas', 'flores', 'mesas', 'sillas', 'puertas', 'ventanas', 'paredes', 'escaleras', 'alfombras', 'lamparas', 'cortinas', 'cocinas', 'habitaciones', 'televisiones', 'radios', 'computadoras', 'impresoras', 'plantas', 'pinturas', 'esculturas', 'estatuas', 'joyas', 'guitarras', 'pianos', 'violines', 'flautas', 'cajas', 'maletas', 'bolsas', 'carteras', 'ropas', 'joyeros', 'pulseras', 'collares', 'anillos', 'relojes', 'perfumes', 'sombrillas', 'libretas', 'cartas', 'revistas', 'peliculas', 'camaras', 'paletas', 'cepillos', 'espejos', 'tijeras', 'planchas', 'aspiradoras', 'lavadoras', 'secadoras', 'licuadoras', 'batidoras', 'cafeteras', 'ollas', 'sartenes', 'tazas', 'platos', 'cucharas', 'tenedores', 'cuchillos', 'neveras', 'lavaplatos', 'hornos', 'estufas', 'mesitas', 'jarrones', 'macetas', 'bandejas', 'candelabros', 'coronas', 'cajas de musica', 'radios', 'telefonos', 'bolsos', 'paraguas', 'sombreros', 'gafas', 'cepillos de pelo', 'cremas', 'toallas', 'jabones', 'shampoo', 'cepillos de dientes', 'esponjas', 'botellas', 'frutas', 'verduras', 'chocolatinas', 'dulces', 'chicles', 'mascarillas'];

    const verbosSingular = ['corre', 'salta', 'duerme', 'come', 'bebe', 'camina', 'estudia', 'trabaja', 'lee', 'escribe', 'habla', 'escucha', 'observa', 'piensa', 'decide', 'ayuda', 'canta', 'baila', 'nada', 'juega', 'corre', 'vuela', 'mueve', 'respira', 'crece', 'vive', 'muere', 'despierta', 'duerme', 'come', 'bebe', 'cambia', 'gana', 'pierde', 'llora', 'ríe', 'sonríe', 'grita', 'susurra', 'salta', 'corre', 'cuida', 'abre', 'cierra', 'construye', 'destruye', 'imagina', 'recuerda', 'olvida', 'aprende', 'enseña', 'entrena', 'viaja', 'vuela', 'navega', 'conduce', 'nada', 'atrapa', 'lanza', 'revisa', 'arregla', 'rompe', 'repara', 'elige', 'combina', 'cocina', 'come', 'bebe', 'comparte', 'cuida', 'protege', 'ayuda', 'rescata', 'apoya', 'espera', 'encuentra', 'busca', 'huye', 'lucha', 'vence', 'llama', 'responde', 'miente', 'confía', 'desconfía', 'cuestiona', 'resuelve', 'mejora', 'empeora', 'decide', 'cambia', 'acepta', 'rechaza', 'celebra', 'llora', 'festeja', 'discute', 'escucha', 'ignora', 'crea', 'destruye', 'cuida', 'descuida'];
    const verbosPlural = ['corren', 'saltan', 'duermen', 'comen', 'beben', 'caminan', 'estudian', 'trabajan', 'leen', 'escriben', 'hablan', 'escuchan', 'observan', 'piensan', 'deciden', 'ayudan', 'cantan', 'bailan', 'nadan', 'juegan', 'corren', 'vuelan', 'mueven', 'respiran', 'crecen', 'viven', 'mueren', 'despiertan', 'duermen', 'comen', 'beben', 'cambian', 'ganan', 'pierden', 'lloran', 'ríen', 'sonríen', 'gritan', 'susurran', 'saltan', 'corren', 'cuidan', 'abren', 'cierran', 'construyen', 'destruyen', 'imaginan', 'recuerdan', 'olvidan', 'aprenden', 'enseñan', 'entrenan', 'viajan', 'vuelan', 'navegan', 'conducen', 'nadan', 'atrapan', 'lanzan', 'revisan', 'arreglan', 'rompen', 'reparan', 'eligen', 'combina', 'cocinan', 'comen', 'beben', 'comparten', 'cuidan', 'protegen', 'ayudan', 'rescatan', 'apoyan', 'esperan', 'encuentran', 'buscan', 'huyen', 'luchan', 'vencen', 'llaman', 'responden', 'mienten', 'confían', 'desconfían', 'cuestionan', 'resuelven', 'mejoran', 'empeoran', 'deciden', 'cambian', 'aceptan', 'rechazan', 'celebran', 'lloran', 'festejan', 'discuten', 'escuchan', 'ignoran', 'crean', 'destruyen', 'cuidan', 'descuidan'];

    const caracteresEspeciales = ['_', '#', '-', '*', '!', '@', '$', '+', '=', '?'];

    // Generar el artículo al azar
    const articulo = articulos[Math.floor(Math.random() * articulos.length)];

    let objetos, verbos;

    // Evaluar el artículo para formar el resto de la passphrase
    if (articulo === 'el') {
        objetos = objetosMasculinoSingular;
        verbos = verbosSingular;
    } else if (articulo === 'la') {
        objetos = objetosFemeninoSingular;
        verbos = verbosSingular;
    } else if (articulo === 'los') {
        objetos = objetosMasculinoPlural;
        verbos = verbosPlural;
    } else if (articulo === 'las') {
        objetos = objetosFemeninoPlural;
        verbos = verbosPlural;
    }

    const objeto = objetos[Math.floor(Math.random() * objetos.length)];
    const verbo = verbos[Math.floor(Math.random() * verbos.length)];

    // Generar un número entre múltiplo de 3 entre 12 y 99
    const numero = Math.floor(Math.random() * 30 + 1) * 3;

    // Generar un caracter especial al azar
    const caracterEspecial = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

    // Capitalizar la inicial de cada palabra
    const articuloCapitalizado = articulo.charAt(0).toUpperCase() + articulo.slice(1);
    const objetoCapitalizado = objeto.charAt(0).toUpperCase() + objeto.slice(1);
    const verboCapitalizado = verbo.charAt(0).toUpperCase() + verbo.slice(1);

    // Concatenar todas las partes y aplicar formato
    const passphrase = `${articuloCapitalizado}${objetoCapitalizado}${verboCapitalizado}${caracterEspecial}${numero}`;

    const passphraseElement = document.getElementById('passphrase');
    passphraseElement.value = passphrase;
}

// Generar la passphrase al hacer clic en un botón
window.addEventListener('DOMContentLoaded', () => {
    const copiarBtn = document.getElementById('copiarBtn');
    const toast = document.getElementById('toast');

    generarBtn.addEventListener('click', generarPassphrase);

    copiarBtn.addEventListener('click', () => {
        const passphraseElement = document.getElementById('passphrase');
        passphraseElement.select();
        document.execCommand('copy');
      
      
        toast.className = 'ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border show';
        setTimeout(() => {
          toast.className = 'hidden';
        }, 3000);
      });
    // Generar la passphrase automáticamente al cargar la página
    generarPassphrase();
});
