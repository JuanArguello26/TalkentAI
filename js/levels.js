const levelsData = {
    A1: {
        id: 'A1',
        title: 'Nivel A1 - Principiante',
        description: 'Introducción al inglés básico',
        icon: '🌱',
        color: '#10b981',
        modules: [
            {
                id: 'a1-intro',
                title: 'Introducción al Inglés',
                icon: '📖',
                description: 'Aprende los fundamentos básicos del inglés',
                content: `
                    <h2>Bienvenido al Inglés Básico</h2>
                    <p>En este módulo aprenderás las bases del inglés: saludos, presentaciones y vocabulario esencial.</p>
                    
                    <h3>Saludos Básicos</h3>
                    <ul>
                        <li><strong>Hello</strong> - Hola</li>
                        <li><strong>Good morning</strong> - Buenos días</li>
                        <li><strong>Good afternoon</strong> - Buenas tardes</li>
                        <li><strong>Good evening</strong> - Buenas noches</li>
                        <li><strong>Goodbye</strong> - Adiós</li>
                        <li><strong>See you later</strong> - Nos vemos luego</li>
                    </ul>
                    
                    <h3>Presentaciones</h3>
                    <ul>
                        <li><strong>My name is...</strong> - Me llamo...</li>
                        <li><strong>I am from...</strong> - Soy de...</li>
                        <li><strong>I am...</strong> - Yo soy...</li>
                        <li><strong>Nice to meet you</strong> - Mucho gusto</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>"Hello! My name is Maria. I am from Spain. Nice to meet you!"</p>
                    </div>
                `,
                exercises: ['greetings-1', 'greetings-2', 'greetings-3']
            },
            {
                id: 'a1-numbers',
                title: 'Números y Fechas',
                icon: '🔢',
                description: 'Aprende a contar y expresar fechas',
                content: `
                    <h2>Números en Inglés</h2>
                    <p>Los números son esenciales en cualquier idioma. Vamos a aprender los números del 1 al 100.</p>
                    
                    <h3>Números del 1 al 20</h3>
                    <ul>
                        <li>1 - One | 2 - Two | 3 - Three | 4 - Four | 5 - Five</li>
                        <li>6 - Six | 7 - Seven | 8 - Eight | 9 - Nine | 10 - Ten</li>
                        <li>11 - Eleven | 12 - Twelve | 13 - Thirteen | 14 - Fourteen | 15 - Fifteen</li>
                        <li>16 - Sixteen | 17 - Seventeen | 18 - Eighteen | 19 - Nineteen | 20 - Twenty</li>
                    </ul>
                    
                    <h3>Decenas</h3>
                    <ul>
                        <li>20 - Twenty | 30 - Thirty | 40 - Forty | 50 - Fifty</li>
                        <li>60 - Sixty | 70 - Seventy | 80 - Eighty | 90 - Ninety</li>
                        <li>100 - One hundred</li>
                    </ul>
                    
                    <h3>Días de la Semana</h3>
                    <ul>
                        <li><strong>Monday</strong> - Lunes</li>
                        <li><strong>Tuesday</strong> - Martes</li>
                        <li><strong>Wednesday</strong> - Miércoles</li>
                        <li><strong>Thursday</strong> - Jueves</li>
                        <li><strong>Friday</strong> - Viernes</li>
                        <li><strong>Saturday</strong> - Sábado</li>
                        <li><strong>Sunday</strong> - Domingo</li>
                    </ul>
                    
                    <h3>Meses del Año</h3>
                    <ul>
                        <li>January, February, March, April</li>
                        <li>May, June, July, August</li>
                        <li>September, October, November, December</li>
                    </ul>
                `,
                exercises: ['numbers-1', 'numbers-2', 'dates-1']
            },
            {
                id: 'a1-colors',
                title: 'Colores',
                icon: '🎨',
                description: 'Aprende los colores en inglés',
                content: `
                    <h2>Los Colores en Inglés</h2>
                    <p>Conocer los colores es útil en muchas situaciones cotidianas.</p>
                    
                    <h3>Colores Básicos</h3>
                    <ul>
                        <li><strong>Red</strong> - Rojo</li>
                        <li><strong>Blue</strong> - Azul</li>
                        <li><strong>Yellow</strong> - Amarillo</li>
                        <li><strong>Green</strong> - Verde</li>
                        <li><strong>Orange</strong> - Naranja</li>
                        <li><strong>Purple</strong> - Morado</li>
                        <li><strong>Pink</strong> - Rosa</li>
                        <li><strong>Black</strong> - Negro</li>
                        <li><strong>White</strong> - Blanco</li>
                        <li><strong>Brown</strong> - Marrón</li>
                    </ul>
                    
                    <h3>Colores con "Light" y "Dark"</h3>
                    <ul>
                        <li>Light blue - Azul claro</li>
                        <li>Dark green - Verde oscuro</li>
                        <li>Light pink - Rosa claro</li>
                        <li>Dark brown - Marrón oscuro</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>"The sky is blue and the grass is green."</p>
                    </div>
                `,
                exercises: ['colors-1', 'colors-2']
            },
            {
                id: 'a1-family',
                title: 'La Familia',
                icon: '👨‍👩‍👧',
                description: 'Vocabulario familiar',
                content: `
                    <h2>Vocabulario de la Familia</h2>
                    <p>Aprende a hablar sobre tu familia en inglés.</p>
                    
                    <h3>Miembros de la Familia</h3>
                    <ul>
                        <li><strong>Family</strong> - Familia</li>
                        <li><strong>Mother / Mom</strong> - Madre / Mamá</li>
                        <li><strong>Father / Dad</strong> - Padre / Papá</li>
                        <li><strong>Parents</strong> - Padres</li>
                        <li><strong>Sister</strong> - Hermana</li>
                        <li><strong>Brother</strong> - Hermano</li>
                        <li><strong>Grandmother</strong> - Abuela</li>
                        <li><strong>Grandfather</strong> - Abuelo</li>
                        <li><strong>Aunt</strong> - Tía</li>
                        <li><strong>Uncle</strong> - Tío</li>
                        <li><strong>Cousin</strong> - Primo/a</li>
                        <li><strong>Niece</strong> - Sobrina</li>
                        <li><strong>Nephew</strong> - Sobrino</li>
                    </ul>
                    
                    <h3>Relaciones</h3>
                    <ul>
                        <li><strong>Son</strong> - Hijo</li>
                        <li><strong>Daughter</strong> - Hija</li>
                        <li><strong>Children</strong> - Hijos</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>"This is my family. My mother's name is Rosa. I have one brother and one sister."</p>
                    </div>
                `,
                exercises: ['family-1', 'family-2']
            }
        ],
        test: {
            id: 'test-a1',
            title: 'Prueba de Nivel A1',
            description: 'Pon a prueba tus conocimientos del nivel A1',
            passingScore: 70,
            exercises: 10
        }
    },
    A2: {
        id: 'A2',
        title: 'Nivel A2 - Elemental',
        description: 'Amplía tu vocabulario y estructura',
        icon: '📚',
        color: '#6366f1',
        modules: [
            {
                id: 'a2-verbs',
                title: 'Verbos en Inglés',
                icon: '🏃',
                description: 'Domina los verbos esenciales',
                content: `
                    <h2>Verbos en Inglés</h2>
                    <p>Los verbos son la base de cualquier oración. Aprende los verbos más comunes.</p>
                    
                    <h3>Verbos Comunes</h3>
                    <ul>
                        <li><strong>To be</strong> - Ser/Estar</li>
                        <li><strong>To have</strong> - Tener</li>
                        <li><strong>To do</strong> - Hacer</li>
                        <li><strong>To go</strong> - Ir</li>
                        <li><strong>To come</strong> - Venir</li>
                        <li><strong>To see</strong> - Ver</li>
                        <li><strong>To know</strong> - Saber/Conocer</li>
                        <li><strong>To want</strong> - Querer</li>
                        <li><strong>To think</strong> - Pensar</li>
                        <li><strong>To say</strong> - Decir</li>
                    </ul>
                    
                    <h3>Presente Simple</h3>
                    <p>Se usa para hábitos, verdades generales y hechos.</p>
                    <ul>
                        <li>I <strong>work</strong> every day. (Trabajo todos los días)</li>
                        <li>She <strong>lives</strong> in Madrid. (Ella vive en Madrid)</li>
                        <li>They <strong>study</strong> English. (Ellos estudian inglés)</li>
                    </ul>
                    
                    <h3>Presente Continuo</h3>
                    <p>Se usa para acciones que están happening ahora.</p>
                    <ul>
                        <li>I <strong>am reading</strong> a book. (Estoy leyendo un libro)</li>
                        <li>She <strong>is cooking</strong>. (Ella está cocinando)</li>
                    </ul>
                `,
                exercises: ['verbs-1', 'verbs-2', 'verbs-3']
            },
            {
                id: 'a2-adjectives',
                title: 'Adjetivos',
                icon: '✨',
                description: 'Describe personas y cosas',
                content: `
                    <h2>Los Adjetivos</h2>
                    <p>Los adjetivos describen sustantivos. Aprende a usar adjetivos para describir.</p>
                    
                    <h3>Adjetivos Comunes</h3>
                    <ul>
                        <li><strong>Big</strong> - Grande</li>
                        <li><strong>Small</strong> - Pequeño</li>
                        <li><strong>Beautiful</strong> - Hermoso</li>
                        <li><strong>Ugly</strong> - Feo</li>
                        <li><strong>New</strong> - Nuevo</li>
                        <li><strong>Old</strong> - Viejo</li>
                        <li><strong>Good</strong> - Bueno</li>
                        <li><strong>Bad</strong> - Malo</li>
                        <li><strong>Happy</strong> - Feliz</li>
                        <li><strong>Sad</strong> - Triste</li>
                        <li><strong>Fast</strong> - Rápido</li>
                        <li><strong>Slow</strong> - Lento</li>
                    </ul>
                    
                    <h3>Adjetivos Comparativos</h3>
                    <ul>
                        <li><strong>more + adjective</strong> - más + adjetivo</li>
                        <li>big - bigger - más grande</li>
                        <li>good - better - mejor</li>
                        <li>bad - worse - peor</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>"This book is more interesting than that one."</p>
                    </div>
                `,
                exercises: ['adjectives-1', 'adjectives-2']
            },
            {
                id: 'a2-adverbs',
                title: 'Adverbios',
                icon: '⚡',
                description: 'Modifica verbos y adjetivos',
                content: `
                    <h2>Los Adverbios</h2>
                    <p>Los adverbios modifican verbos, adjetivos u otros adverbios.</p>
                    
                    <h3>Adverbios de Frecuencia</h3>
                    <ul>
                        <li><strong>Always</strong> - Siempre</li>
                        <li><strong>Usually</strong> - Usualmente</li>
                        <li><strong>Often</strong> - Frecuentemente</li>
                        <li><strong>Sometimes</strong> - A veces</li>
                        <li><strong>Rarely</strong> - Rara vez</li>
                        <li><strong>Never</strong> - Nunca</li>
                    </ul>
                    
                    <h3>Adverbios de Tiempo</h3>
                    <ul>
                        <li><strong>Today</strong> - Hoy</li>
                        <li><strong>Tomorrow</strong> - Mañana</li>
                        <li><strong>Yesterday</strong> - Ayer</li>
                        <li><strong>Now</strong> - Ahora</li>
                        <li><strong>Later</strong> - Después</li>
                    </ul>
                    
                    <h3>Adverbios de Lugar</h3>
                    <ul>
                        <li><strong>Here</strong> - Aquí</li>
                        <li><strong>There</strong> - Allá</li>
                        <li><strong>Everywhere</strong> - En todas partes</li>
                    </ul>
                `,
                exercises: ['adverbs-1', 'adverbs-2']
            },
            {
                id: 'a2-prepositions',
                title: 'Preposiciones',
                icon: '📍',
                description: 'Aprende a conectar ideas',
                content: `
                    <h2>Preposiciones en Inglés</h2>
                    <p>Las preposiciones muestran relaciones entre palabras.</p>
                    
                    <h3>Preposiciones de Lugar</h3>
                    <ul>
                        <li><strong>In</strong> - En (dentro de)</li>
                        <li><strong>On</strong> - En (sobre)</li>
                        <li><strong>At</strong> - En (punto específico)</li>
                        <li><strong>Under</strong> - Debajo</li>
                        <li><strong>Next to</strong> - Al lado de</li>
                        <li><strong>Between</strong> - Entre</li>
                        <li><strong>In front of</strong> - Delante de</li>
                        <li><strong>Behind</strong> - Detrás de</li>
                    </ul>
                    
                    <h3>Preposiciones de Tiempo</h3>
                    <ul>
                        <li><strong>In</strong> - En (meses, años)</li>
                        <li><strong>On</strong> - En (días)</li>
                        <li><strong>At</strong> - En (horas)</li>
                        <li><strong>Since</strong> - Desde</li>
                        <li><strong>For</strong> - Durante</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>"The book is on the table. I study in the morning."</p>
                    </div>
                `,
                exercises: ['prepositions-1', 'prepositions-2']
            }
        ],
        test: {
            id: 'test-a2',
            title: 'Prueba de Nivel A2',
            description: 'Pon a prueba tus conocimientos del nivel A2',
            passingScore: 70,
            exercises: 10
        }
    },
    B1: {
        id: 'B1',
        title: 'Nivel B1 - Intermedio',
        description: 'Comunicación efectiva',
        icon: '🎯',
        color: '#f59e0b',
        modules: [
            {
                id: 'b1-communication',
                title: 'Comunicación Efectiva',
                icon: '💬',
                description: 'Exprésate con claridad',
                content: `
                    <h2>Comunicación en Inglés</h2>
                    <p>Aprende frases y expresiones para comunicarte efectivamente.</p>
                    
                    <h3>Expresiones para Conversar</h3>
                    <ul>
                        <li><strong>Could you help me?</strong> - ¿Podrías ayudarme?</li>
                        <li><strong>I would like...</strong> - Me gustaría...</li>
                        <li><strong>What do you think?</strong> - ¿Qué piensas?</li>
                        <li><strong>In my opinion...</strong> - En mi opinión...</li>
                        <li><strong>To be honest...</strong> - Para ser honesto...</li>
                    </ul>
                    
                    <h3>Pedir Información</h3>
                    <ul>
                        <li><strong>Excuse me, could you tell me...?</strong> - Disculpa, ¿podrías decirme...?</li>
                        <li><strong>Where is the nearest...?</strong> - ¿Dónde está el... más cercano?</li>
                        <li><strong>How much does it cost?</strong> - ¿Cuánto cuesta?</li>
                    </ul>
                    
                    <h3>Expresiones de Acuerdo/Desacuerdo</h3>
                    <ul>
                        <li><strong>I agree</strong> - Estoy de acuerdo</li>
                        <li><strong>I disagree</strong> - No estoy de acuerdo</li>
                        <li><strong>That's a good point</strong> - Ese es un buen punto</li>
                    </ul>
                `,
                exercises: ['comm-1', 'comm-2']
            },
            {
                id: 'b1-sentence',
                title: 'Estructura de Oraciones',
                icon: '📝',
                description: 'Construye oraciones correctas',
                content: `
                    <h2>Estructura de Oraciones</h2>
                    <p>Domina la gramática para construir oraciones correctas.</p>
                    
                    <h3>Oraciones Condicionales</h3>
                    <p><strong>If + presente simple, will + infinitivo</strong></p>
                    <ul>
                        <li>If it <strong>rains</strong>, I <strong>will stay</strong> home. (Si llueve, me quedaré en casa)</li>
                        <li>If you <strong>study</strong>, you <strong>will pass</strong>. (Si estudias, pasarás)</li>
                    </ul>
                    
                    <h3>Oraciones Pasivas</h3>
                    <p><strong>Sujeto + be + participio pasado</strong></p>
                    <ul>
                        <li>The book <strong>was written</strong> by... (El libro fue escrito por...)</li>
                        <li>The house <strong>is being built</strong>. (La casa está siendo construida)</li>
                    </ul>
                    
                    <h3>Reported Speech</h3>
                    <ul>
                        <li>Direct: "I am happy" → Reported: He said he was happy.</li>
                        <li>Direct: "I will come" → Reported: She said she would come.</li>
                    </ul>
                `,
                exercises: ['sentence-1', 'sentence-2']
            },
            {
                id: 'b1-tenses',
                title: 'Tiempos Verbales',
                icon: '⏰',
                description: 'Domina los tiempos del pasado',
                content: `
                    <h2>Tiempos del Pasado</h2>
                    <p>Aprende a expresar acciones en el pasado.</p>
                    
                    <h3>Past Simple vs Past Continuous</h3>
                    <ul>
                        <li><strong>Past Simple</strong>: Acciones completadas</li>
                        <li>I <strong>saw</strong> a movie yesterday. (Vi una película ayer)</li>
                    </ul>
                    <ul>
                        <li><strong>Past Continuous</strong>: Acciones en progreso en un momento específico</li>
                        <li>I <strong>was watching</strong> TV at 8pm. ( Estaba viendo televisión a las 8)</li>
                    </ul>
                    
                    <h3>Present Perfect</h3>
                    <ul>
                        <li><strong>Have/Has + participio pasado</strong></li>
                        <li>I <strong>have lived</strong> here for 5 years. (He vivido aquí por 5 años)</li>
                        <li>She <strong>has visited</strong> many countries. (Ha visitado muchos países)</li>
                    </ul>
                    
                    <h3>Past Perfect</h3>
                    <ul>
                        <li><strong>Had + participio pasado</strong></li>
                        <li>By the time I arrived, the movie <strong>had started</strong>. (Cuando llegué, la película había comenzado)</li>
                    </ul>
                `,
                exercises: ['tenses-1', 'tenses-2']
            },
            {
                id: 'b1-writing',
                title: 'Escritura Básica',
                icon: '✍️',
                description: 'Escribe textos simples',
                content: `
                    <h2>Escritura en Inglés</h2>
                    <p>Aprende a escribir diferentes tipos de textos.</p>
                    
                    <h3>Cómo Escribir un Email Formal</h3>
                    <ul>
                        <li><strong>Saludo:</strong> Dear Mr./Mrs. [Name],</li>
                        <li><strong>Introducción:</strong> I am writing to...</li>
                        <li><strong>Cuerpo:</strong> Explaining the main point</li>
                        <li><strong>Despedida:</strong> Best regards, / Kind regards,</li>
                    </ul>
                    
                    <h3>Cómo Escribir una Carta</h3>
                    <ul>
                        <li><strong>Tu dirección:</strong> Your address</li>
                        <li><strong>Fecha:</strong> Date</li>
                        <li><strong>Destinatario:</strong> Dear [Name],</li>
                        <li><strong>Cuerpo:</strong> The letter content</li>
                        <li><strong>Firma:</strong> Sincerely, [Your name]</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>Querido estudiante, practica escribir al menos un párrafo cada día. La práctica hace al maestro.</p>
                    </div>
                `,
                exercises: ['writing-1', 'writing-2']
            }
        ],
        test: {
            id: 'test-b1',
            title: 'Prueba de Nivel B1',
            description: 'Pon a prueba tus conocimientos del nivel B1',
            passingScore: 70,
            exercises: 10
        }
    },
    B2: {
        id: 'B2',
        title: 'Nivel B2 - Intermedio Alto',
        description: 'Expresiones y vocabulario avanzado',
        icon: '🚀',
        color: '#ec4899',
        modules: [
            {
                id: 'b2-idioms',
                title: 'Expresiones Idiomáticas',
                icon: '🎭',
                description: 'Habla como un nativo',
                content: `
                    <h2>Expresiones Idiomáticas</h2>
                    <p>Las expresiones idiomáticas te ayudan a sonar más natural.</p>
                    
                    <h3>Expresiones Comunes</h3>
                    <ul>
                        <li><strong>Break a leg</strong> - Buena suerte</li>
                        <li><strong>Piece of cake</strong> - Pan comido / Muy fácil</li>
                        <li><strong>Spill the beans</strong> - Revelar un secreto</li>
                        <li><strong>Hit the nail on the head</strong> - Dar en el clavo</li>
                        <li><strong>Cost an arm and a leg</strong> - Costar un ojo de la cara</li>
                        <li><strong>Bite the bullet</strong> - Armarse de valor</li>
                        <li><strong>Beat around the bush</strong> - Andar con rodeos</li>
                        <li><strong>The ball is in your court</strong> - La decisión es tuya</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>"Don't worry about the exam, it's a piece of cake!"</p>
                    </div>
                `,
                exercises: ['idioms-1', 'idioms-2']
            },
            {
                id: 'b2-vocabulary',
                title: 'Vocabulario Avanzado',
                icon: '📖',
                description: 'Amplía tu léxico',
                content: `
                    <h2>Vocabulario Avanzado</h2>
                    <p>Aprende palabras y expresiones más sofisticadas.</p>
                    
                    <h3>Sinónimos de Palabras Comunes</h3>
                    <ul>
                        <li>Good → Excellent, Outstanding, Remarkable</li>
                        <li>Bad → Terrible, Awful, Dreadful</li>
                        <li>Big → Massive, Enormous, Vast</li>
                        <li>Small → Tiny, Minute, Petite</li>
                        <li>Happy → Delighted, Ecstatic, Thrilled</li>
                    </ul>
                    
                    <h3>Phrasal Verbs</h3>
                    <ul>
                        <li><strong>Give up</strong> - Rendirse</li>
                        <li><strong>Look after</strong> - Cuidar</li>
                        <li><strong>Come across</strong> - Encontrarse con</li>
                        <li><strong>Put off</strong> - Posponer</li>
                        <li><strong>Bring up</strong> - Mencionar/Criar</li>
                        <li><strong>Find out</strong> - Descubrir</li>
                    </ul>
                    
                    <h3>Palabras de Enlace</h3>
                    <ul>
                        <li><strong>Furthermore</strong> - Además</li>
                        <li><strong>Nevertheless</strong> - Sin embargo</li>
                        <li><strong>Consequently</strong> - En consecuencia</li>
                        <li><strong>Subsequently</strong> - Posteriormente</li>
                    </ul>
                `,
                exercises: ['vocab-1', 'vocab-2']
            },
            {
                id: 'b2-conversation',
                title: 'Conversación Avanzada',
                icon: '🗣️',
                description: 'Participa en conversaciones',
                content: `
                    <h2>Conversación Avanzada</h2>
                    <p>Aprende a participar en conversaciones más complejas.</p>
                    
                    <h3>Expresiones para Debatir</h3>
                    <ul>
                        <li><strong>On the contrary</strong> - Por el contrario</li>
                        <li><strong>With all due respect</strong> - Con todo el respeto</li>
                        <li><strong>That raises an interesting point</strong> - Eso plantea un punto interesante</li>
                        <li><strong>I see your point, but...</strong> - Veo tu punto, pero...</li>
                    </ul>
                    
                    <h3>Hacer Presentaciones</h3>
                    <ul>
                        <li><strong>Today I would like to discuss...</strong> - Hoy me gustaría discutir...</li>
                        <li><strong>Allow me to elaborate...</strong> - Permíteme elaborar...</li>
                        <li><strong>In conclusion...</strong> - En conclusión...</li>
                        <li><strong>Thank you for your attention</strong> - Gracias por su atención</li>
                    </ul>
                    
                    <h3>Expresiones de Probabilidad</h3>
                    <ul>
                        <li><strong>It's highly likely that...</strong> - Es muy probable que...</li>
                        <li><strong>There's a chance that...</strong> - Hay una posibilidad de que...</li>
                        <li><strong>It's unlikely that...</strong> - Es improbable que...</li>
                    </ul>
                `,
                exercises: ['conversation-1', 'conversation-2']
            },
            {
                id: 'b2-reading',
                title: 'Comprensión Lectora',
                icon: '📚',
                description: 'Lee y comprende textos',
                content: `
                    <h2>Comprensión Lectora</h2>
                    <p>Mejora tu capacidad de entender textos complejos.</p>
                    
                    <h3>Estrategias de Lectura</h3>
                    <ul>
                        <li><strong>Skimming</strong> - Lectura rápida para obtener idea general</li>
                        <li><strong>Scanning</strong> - Búsqueda de información específica</li>
                        <li><strong>Detailed reading</strong> - Lectura profunda para entender detalles</li>
                    </ul>
                    
                    <h3>Tipos de Textos</h3>
                    <ul>
                        <li><strong>Articles</strong> - Artículos de noticias o revistas</li>
                        <li><strong>Essays</strong> - Ensayos académicos</li>
                        <li><strong>Reports</strong> - Informes técnicos</li>
                        <li><strong>Reviews</strong> - Reseñas de productos/películas</li>
                    </ul>
                    
                    <h3>Identificar la Idea Principal</h3>
                    <p>Suele estar en:</p>
                    <ul>
                        <li>La primera oración del párrafo</li>
                        <li>La última oración del párrafo</li>
                        <li>El título o subtítulo</li>
                    </ul>
                `,
                exercises: ['reading-1', 'reading-2']
            }
        ],
        test: {
            id: 'test-b2',
            title: 'Prueba de Nivel B2',
            description: 'Pon a prueba tus conocimientos del nivel B2',
            passingScore: 70,
            exercises: 10
        }
    },
    C1: {
        id: 'C1',
        title: 'Nivel C1 - Avanzado',
        description: 'Comunicación fluida y precisa',
        icon: '👑',
        color: '#8b5cf6',
        modules: [
            {
                id: 'c1-reallife',
                title: 'Situaciones Reales',
                icon: '🌍',
                description: 'Comunícate en contextos reales',
                content: `
                    <h2>Comunicación en Situaciones Reales</h2>
                    <p>Aprende a desenvolverte en situaciones complejas de la vida real.</p>
                    
                    <h3>Negocios y Trabajo</h3>
                    <ul>
                        <li><strong>I am writing to follow up on...</strong> - Le escribo para dar seguimiento a...</li>
                        <li><strong>Would you mind if...</strong> - ¿Le importaría si...</li>
                        <li><strong>I would appreciate it if...</strong> - Apreciaría si...</li>
                        <li><strong>Please find attached...</strong> - Adjunto encontrará...</li>
                    </ul>
                    
                    <h3>Situaciones Sociales</h3>
                    <ul>
                        <li><strong>I was wondering if...</strong> - Me preguntaba si...</li>
                        <li><strong>That sounds like a great idea</strong> - Eso suena a una gran idea</li>
                        <li><strong>I'm afraid I can't...</strong> - Me temo que no puedo...</li>
                    </ul>
                    
                    <h3>Servicios y Atención</h3>
                    <ul>
                        <li><strong>I would like to make a complaint</strong> - Me gustaría presentar una queja</li>
                        <li><strong>Could you please explain...</strong> - ¿Podría explicar...</li>
                    </ul>
                `,
                exercises: ['reallife-1', 'reallife-2']
            },
            {
                id: 'c1-specialized',
                title: 'Vocabulario Especializado',
                icon: '💼',
                description: 'Domina vocabulario técnico',
                content: `
                    <h2>Vocabulario Especializado</h2>
                    <p>Aprende vocabulario para diferentes áreas profesionales.</p>
                    
                    <h3>Tecnología</h3>
                    <ul>
                        <li><strong>Software</strong> - Software</li>
                        <li><strong>Hardware</strong> - Hardware</li>
                        <li><strong>Network</strong> - Red</li>
                        <li><strong>Database</strong> - Base de datos</li>
                        <li><strong>Algorithm</strong> - Algoritmo</li>
                    </ul>
                    
                    <h3>Negocios</h3>
                    <ul>
                        <li><strong>Revenue</strong> - Ingresos</li>
                        <li><strong>Profit margin</strong> - Margen de beneficio</li>
                        <li><strong>Stakeholder</strong> - Parte interesada</li>
                        <li><strong>Strategy</strong> - Estrategia</li>
                    </ul>
                    
                    <h3>Medicina</h3>
                    <ul>
                        <li><strong>Symptom</strong> - Síntoma</li>
                        <li><strong>Diagnosis</strong> - Diagnóstico</li>
                        <li><strong>Treatment</strong> - Tratamiento</li>
                        <li><strong>Prescription</strong> - Receta médica</li>
                    </ul>
                    
                    <h3>Derecho</h3>
                    <ul>
                        <li><strong>Contract</strong> - Contrato</li>
                        <li><strong>Liability</strong> - Responsabilidad</li>
                        <li><strong>Evidence</strong> - Evidencia</li>
                        <li><strong>Witness</strong> - Testigo</li>
                    </ul>
                `,
                exercises: ['specialized-1', 'specialized-2']
            },
            {
                id: 'c1-discourse',
                title: 'Discurso Avanzado',
                icon: '🎓',
                description: 'Estructura textos complejos',
                content: `
                    <h2>Discurso y Cohesión Textual</h2>
                    <p>Aprende a crear textos bien estructurados y cohesivos.</p>
                    
                    <h3>Conectores Discursivos</h3>
                    <ul>
                        <li><strong>Adición:</strong> Moreover, Furthermore, Additionally</li>
                        <li><strong>Contraste:</strong> Nevertheless, Nonetheless, Alternatively</li>
                        <li><strong>Causa:</strong> Consequently, As a result, Therefore</li>
                        <li><strong>Ejemplificación:</strong> For instance, For example, Specifically</li>
                    </ul>
                    
                    <h3>Construcciones Avanzadas</h3>
                    <ul>
                        <li><strong>Relative clauses:</strong> The person whom I met...</li>
                        <li><strong>Participial phrases:</strong> Having finished the work, I left.</li>
                        <li><strong>Inverted sentences:</strong> Rarely do I complain.</li>
                    </ul>
                    
                    <h3>Coherencia y Cohesión</h3>
                    <ul>
                        <li>Usa pronombres para evitar repetición</li>
                        <li>Mantén un hilo conductor claro</li>
                        <li>Usa señales de transición</li>
                    </ul>
                `,
                exercises: ['discourse-1', 'discourse-2']
            },
            {
                id: 'c1-academic',
                title: 'Inglés Académico',
                icon: '🎓',
                description: 'Escribe textos académicos',
                content: `
                    <h2>Inglés Académico</h2>
                    <p>Aprende a escribir textos académicos de nivel avanzado.</p>
                    
                    <h3>Estructura de un Ensayo</h3>
                    <ul>
                        <li><strong>Introduction</strong> - Introducción con tesis</li>
                        <li><strong>Body paragraphs</strong> - Párrafos con evidencia</li>
                        <li><strong>Conclusion</strong> - Conclusión con síntesis</li>
                    </ul>
                    
                    <h3>Citaciones</h3>
                    <ul>
                        <li><strong>According to...</strong> - Según...</li>
                        <li><strong>As stated by...</strong> - Como stated por...</li>
                        <li><strong>Research shows...</strong> - La investigación muestra...</li>
                    </ul>
                    
                    <h3>Lenguaje Formal</h3>
                    <ul>
                        <li>Evita contracciones en escritura formal</li>
                        <li>Usa voz pasiva cuando sea apropiado</li>
                        <li>Evita jerga y coloquialismos</li>
                        <li>Sé preciso con el vocabulario</li>
                    </ul>
                    
                    <div class="content-example">
                        <p>"The data presented in this study suggests that further research is necessary to confirm these findings."</p>
                    </div>
                `,
                exercises: ['academic-1', 'academic-2']
            }
        ],
        test: {
            id: 'test-c1',
            title: 'Prueba de Nivel C1',
            description: 'Pon a prueba tus conocimientos del nivel C1',
            passingScore: 70,
            exercises: 10
        }
    }
};

const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1'];

function getLevel(levelId) {
    return levelsData[levelId];
}

function getAllLevels() {
    return Object.values(levelsData);
}

function getModule(levelId, moduleId) {
    const level = levelsData[levelId];
    if (!level) return null;
    return level.modules.find(m => m.id === moduleId);
}

function isLevelUnlocked(levelId) {
    const currentLevel = auth.getCurrentUser()?.level || 'A1';
    const currentIndex = levelOrder.indexOf(currentLevel);
    const levelIndex = levelOrder.indexOf(levelId);
    return levelIndex <= currentIndex;
}

function getLevelProgress(levelId) {
    return new Promise(async (resolve) => {
        const user = auth.getCurrentUser();
        if (!user) {
            resolve(0);
            return;
        }
        
        const progress = await db.getProgress(user.email, levelId);
        const level = levelsData[levelId];
        
        if (!level || progress.length === 0) {
            resolve(0);
            return;
        }
        
        const totalExercises = level.modules.reduce((acc, m) => acc + m.exercises.length, 0);
        const completedExercises = progress.filter(p => p.completed).length;
        
        const percentage = Math.round((completedExercises / totalExercises) * 100);
        resolve(percentage);
    });
}

async function renderLevels() {
    const grid = document.getElementById('levels-grid');
    if (!grid) return;
    
    const user = auth.getCurrentUser();
    const currentLevel = user?.level || 'A1';
    
    let html = '';
    
    for (const levelId of levelOrder) {
        const level = levelsData[levelId];
        const isUnlocked = isLevelUnlocked(levelId);
        const progress = isUnlocked ? await getLevelProgress(levelId) : 0;
        
        const statusIcon = progress >= 100 ? '✅' : (isUnlocked ? '📖' : '🔒');
        
        html += `
            <div class="level-card ${!isUnlocked ? 'locked' : ''} hover-lift" 
                 onclick="${isUnlocked ? `showLevelDetail('${levelId}')` : ''}"
                 style="opacity: ${isUnlocked ? 1 : 0.6}">
                <div class="level-header">
                    <div>
                        <div class="level-icon">${level.icon}</div>
                        <span class="level-badge">${levelId}</span>
                    </div>
                </div>
                <h3 class="level-title">${level.title}</h3>
                <p class="level-description">${level.description}</p>
                <div class="level-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <div class="progress-label">
                        <span>Progreso</span>
                        <span>${progress}%</span>
                    </div>
                </div>
                <div class="level-status">
                    <span class="status-icon">${statusIcon}</span>
                    <span>${progress >= 100 ? 'Completado' : (isUnlocked ? 'En progreso' : 'Bloqueado')}</span>
                </div>
            </div>
        `;
    }
    
    grid.innerHTML = html;
}

async function showLevelDetail(levelId) {
    const level = levelsData[levelId];
    if (!level) return;
    
    document.getElementById('level-title').textContent = level.title;
    document.getElementById('level-description').textContent = level.description;
    
    const modulesGrid = document.getElementById('modules-grid');
    let modulesHtml = '';
    
    const user = auth.getCurrentUser();
    const progress = await db.getProgress(user?.email, levelId);
    
    for (const module of level.modules) {
        const moduleProgress = progress.find(p => p.module === module.id);
        const completed = moduleProgress?.completed || false;
        const percent = moduleProgress?.percentage || 0;
        
        modulesHtml += `
            <div class="module-card ${completed ? 'completed' : ''} hover-lift" 
                 onclick="showModuleDetail('${levelId}', '${module.id}')">
                <div class="module-icon">${module.icon}</div>
                <h4 class="module-title">${module.title}</h4>
                <p class="module-description">${module.description}</p>
                <div class="module-progress-text">
                    ${completed ? '✅ Completado' : `${percent}% completado`}
                </div>
            </div>
        `;
    }
    
    modulesGrid.innerHTML = modulesHtml;
    
    const exercisesList = document.getElementById('exercises-list');
    let exercisesHtml = '';
    
    for (const module of level.modules) {
        for (const exerciseId of module.exercises.slice(0, 2)) {
            const exerciseProgress = progress.find(p => p.exerciseId === exerciseId);
            const completed = exerciseProgress?.correct || false;
            
            exercisesHtml += `
                <div class="exercise-item hover-lift" 
                     onclick="startExercise('${exerciseId}', '${levelId}', '${module.id}')">
                    <span class="exercise-icon">📝</span>
                    <div class="exercise-info">
                        <h4>Ejercicio: ${exerciseId}</h4>
                        <p>Del módulo: ${module.title}</p>
                    </div>
                    <span class="exercise-status">${completed ? '✅' : '⭕'}</span>
                </div>
            `;
        }
    }
    
    exercisesList.innerHTML = exercisesHtml || '<p style="text-align: center; color: var(--gray);">No hay ejercicios disponibles</p>';
    
    showScreen('level-detail');
    currentLevelDetail = levelId;
}

function showModuleDetail(levelId, moduleId) {
    const module = getModule(levelId, moduleId);
    if (!module) return;
    
    document.getElementById('module-title').textContent = module.title;
    document.getElementById('module-progress').textContent = 'Progreso: 0%';
    
    const contentHtml = `
        <div class="theory-section">
            <div class="theory-header">
                <span class="theory-icon">📚</span>
                <h2>Teoría</h2>
            </div>
            <div class="theory-content">
                ${module.content}
            </div>
            <button class="btn-primary theory-btn" onclick="startModuleExercises('${levelId}', '${moduleId}')">
                <span>Comenzar Ejercicios</span>
                <span>🚀</span>
            </button>
        </div>
    `;
    
    document.getElementById('module-content').innerHTML = contentHtml;
    
    const exercisesList = document.getElementById('module-exercises-list');
    let exercisesHtml = '<h3>Práctica</h3>';
    
    for (const exerciseId of module.exercises) {
        exercisesHtml += `
            <div class="exercise-item hover-lift" 
                 onclick="startExercise('${exerciseId}', '${levelId}', '${moduleId}')">
                <span class="exercise-icon">📝</span>
                <div class="exercise-info">
                    <h4>Ejercicio: ${exerciseId}</h4>
                    <p>Practica lo aprendido</p>
                </div>
                <span class="exercise-status">▶️</span>
            </div>
        `;
    }
    
    exercisesList.innerHTML = exercisesHtml;
    
    showScreen('module-detail');
    currentModuleDetail = { levelId, moduleId };
}

function startModuleExercises(levelId, moduleId) {
    const module = getModule(levelId, moduleId);
    if (!module || !module.exercises || module.exercises.length === 0) return;
    
    startExercise(module.exercises[0], levelId, moduleId);
}

if (typeof window !== 'undefined') {
    window.levelsData = levelsData;
    window.getLevel = getLevel;
    window.getAllLevels = getAllLevels;
    window.getModule = getModule;
    window.isLevelUnlocked = isLevelUnlocked;
    window.getLevelProgress = getLevelProgress;
    window.renderLevels = renderLevels;
    window.showLevelDetail = showLevelDetail;
    window.showModuleDetail = showModuleDetail;
    window.startModuleExercises = startModuleExercises;
}