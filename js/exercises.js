const exercisesData = {
    'greetings-1': {
        type: 'multiple-choice',
        question: '¿Cómo se dice "Hola" en inglés?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 0,
        level: 'A1',
        module: 'a1-intro'
    },
    'greetings-2': {
        type: 'multiple-choice',
        question: '¿Qué significa "Goodbye"?',
        options: ['Hola', 'Gracias', 'Adiós', 'Por favor'],
        correct: 2,
        level: 'A1',
        module: 'a1-intro'
    },
    'greetings-3': {
        type: 'multiple-choice',
        question: 'Selecciona el saludo apropiado para la mañana:',
        options: ['Good morning', 'Good night', 'Good afternoon', 'See you later'],
        correct: 0,
        level: 'A1',
        module: 'a1-intro'
    },
    'numbers-1': {
        type: 'multiple-choice',
        question: '¿Cómo se dice el número 5 en inglés?',
        options: ['Three', 'Five', 'Seven', 'Nine'],
        correct: 1,
        level: 'A1',
        module: 'a1-numbers'
    },
    'numbers-2': {
        type: 'multiple-choice',
        question: '¿Qué número es "Twenty"?',
        options: ['12', '20', '2', '200'],
        correct: 1,
        level: 'A1',
        module: 'a1-numbers'
    },
    'dates-1': {
        type: 'multiple-choice',
        question: '¿Qué día de la semana es "Monday"?',
        options: ['Lunes', 'Martes', 'Miércoles', 'Jueves'],
        correct: 0,
        level: 'A1',
        module: 'a1-numbers'
    },
    'colors-1': {
        type: 'multiple-choice',
        question: '¿Qué color es "Blue"?',
        options: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
        correct: 1,
        level: 'A1',
        module: 'a1-colors'
    },
    'colors-2': {
        type: 'multiple-choice',
        question: 'Selecciona el color verde:',
        options: ['Red', 'Yellow', 'Green', 'Black'],
        correct: 2,
        level: 'A1',
        module: 'a1-colors'
    },
    'family-1': {
        type: 'multiple-choice',
        question: '¿Cómo se dice "madre" en inglés?',
        options: ['Father', 'Mother', 'Sister', 'Brother'],
        correct: 1,
        level: 'A1',
        module: 'a1-family'
    },
    'family-2': {
        type: 'multiple-choice',
        question: '¿Qué es "Grandmother"?',
        options: ['Abuelo', 'Abuela', 'Tío', 'Tía'],
        correct: 1,
        level: 'A1',
        module: 'a1-family'
    },
    'verbs-1': {
        type: 'multiple-choice',
        question: '¿Cuál es el verbo "to be" en presente?',
        options: ['is/are', 'was/were', 'will be', 'be'],
        correct: 0,
        level: 'A2',
        module: 'a2-verbs'
    },
    'verbs-2': {
        type: 'multiple-choice',
        question: 'Completa: "She ___ a teacher."',
        options: ['is', 'are', 'am', 'be'],
        correct: 0,
        level: 'A2',
        module: 'a2-verbs'
    },
    'verbs-3': {
        type: 'multiple-choice',
        question: 'El presente continuo se forma con:',
        options: ['to + verb', 'verb + ing', 'will + verb', 'have + verb'],
        correct: 1,
        level: 'A2',
        module: 'a2-verbs'
    },
    'adjectives-1': {
        type: 'multiple-choice',
        question: '¿Cuál es el comparativo de "good"?',
        options: ['more good', 'gooder', 'better', 'best'],
        correct: 2,
        level: 'A2',
        module: 'a2-adjectives'
    },
    'adjectives-2': {
        type: 'multiple-choice',
        question: '"Big" es el contrario de:',
        options: ['Small', 'New', 'Old', 'Happy'],
        correct: 0,
        level: 'A2',
        module: 'a2-adjectives'
    },
    'adverbs-1': {
        type: 'multiple-choice',
        question: 'Selecciona un adverbio de frecuencia:',
        options: ['Happy', 'Always', 'Beautiful', 'Fast'],
        correct: 1,
        level: 'A2',
        module: 'a2-adverbs'
    },
    'adverbs-2': {
        type: 'multiple-choice',
        question: '"Yesterday" significa:',
        options: ['Hoy', 'Ayer', 'Mañana', 'Ahora'],
        correct: 1,
        level: 'A2',
        module: 'a2-adverbs'
    },
    'prepositions-1': {
        type: 'multiple-choice',
        question: 'La预posición "in" se usa para:',
        options: ['Sobre', 'Dentro de', 'Debajo', 'Al lado'],
        correct: 1,
        level: 'A2',
        module: 'a2-prepositions'
    },
    'prepositions-2': {
        type: 'multiple-choice',
        question: '"The book is ___ the table."',
        options: ['in', 'on', 'at', 'to'],
        correct: 1,
        level: 'A2',
        module: 'a2-prepositions'
    },
    'comm-1': {
        type: 'multiple-choice',
        question: 'Para pedir ayuda, dices:',
        options: ['I want help', 'Could you help me?', 'Help me now', 'Give me help'],
        correct: 1,
        level: 'B1',
        module: 'b1-communication'
    },
    'comm-2': {
        type: 'multiple-choice',
        question: '"In my opinion" significa:',
        options: ['En mi casa', 'En mi opinión', 'En mi tiempo', 'En mi trabajo'],
        correct: 1,
        level: 'B1',
        module: 'b1-communication'
    },
    'sentence-1': {
        type: 'multiple-choice',
        question: 'Oración condicional correcta:',
        options: ['If it rains, I will stay home', 'If it rain, I will stay home', 'If it will rain, I stay home', 'If it raining, I stay home'],
        correct: 0,
        level: 'B1',
        module: 'b1-sentence'
    },
    'sentence-2': {
        type: 'multiple-choice',
        question: 'Oración pasiva de "The chef prepares dinner":',
        options: ['Dinner is prepared by the chef', 'The dinner is preparing', 'Chef prepares dinner', 'Dinner was prepare'],
        correct: 0,
        level: 'B1',
        module: 'b1-sentence'
    },
    'tenses-1': {
        type: 'multiple-choice',
        question: 'Present Perfect: "I ___ in Madrid for 5 years."',
        options: ['live', 'lived', 'have lived', 'am living'],
        correct: 2,
        level: 'B1',
        module: 'b1-tenses'
    },
    'tenses-2': {
        type: 'multiple-choice',
        question: 'Past Continuous: "I ___ TV at 8pm yesterday."',
        options: ['watch', 'watched', 'was watching', 'am watching'],
        correct: 2,
        level: 'B1',
        module: 'b1-tenses'
    },
    'writing-1': {
        type: 'multiple-choice',
        question: 'Saludo formal en un email:',
        options: ['Hi', 'Hello', 'Dear Mr. Smith', 'Hey'],
        correct: 2,
        level: 'B1',
        module: 'b1-writing'
    },
    'writing-2': {
        type: 'multiple-choice',
        question: 'Despedida formal:',
        options: ['Bye', 'See you', 'Best regards', 'Talk later'],
        correct: 2,
        level: 'B1',
        module: 'b1-writing'
    },
    'idioms-1': {
        type: 'multiple-choice',
        question: '"Piece of cake" significa:',
        options: ['Un pedazo de pastel', 'Muy fácil', 'Difícil', 'Imposible'],
        correct: 1,
        level: 'B2',
        module: 'b2-idioms'
    },
    'idioms-2': {
        type: 'multiple-choice',
        question: '"Break a leg" se usa para:',
        options: ['Advertir danger', 'Despedirse', 'Dar buena suerte', 'Pedir ayuda'],
        correct: 2,
        level: 'B2',
        module: 'b2-idioms'
    },
    'vocab-1': {
        type: 'multiple-choice',
        question: 'Sinónimo de "good" en contexto formal:',
        options: ['Nice', 'Great', 'Excellent', 'Cool'],
        correct: 2,
        level: 'B2',
        module: 'b2-vocabulary'
    },
    'vocab-2': {
        type: 'multiple-choice',
        question: '"Give up" significa:',
        options: ['Dar algo', 'Rendirse', 'Continuar', 'Empezar'],
        correct: 1,
        level: 'B2',
        module: 'b2-vocabulary'
    },
    'conversation-1': {
        type: 'multiple-choice',
        question: 'Expresión para comenzar una presentación:',
        options: ['So yeah', 'Today I would like to discuss', 'Hey everyone', 'What is up'],
        correct: 1,
        level: 'B2',
        module: 'b2-conversation'
    },
    'conversation-2': {
        type: 'multiple-choice',
        question: '"On the contrary" se usa para:',
        options: ['Agregar información', 'Introducir contraste', 'Concluir', 'Ejemplificar'],
        correct: 1,
        level: 'B2',
        module: 'b2-conversation'
    },
    'reading-1': {
        type: 'multiple-choice',
        question: '"Skimming" es:',
        options: ['Lectura profunda', 'Búsqueda de detalles', 'Lectura rápida general', 'Memorización'],
        correct: 2,
        level: 'B2',
        module: 'b2-reading'
    },
    'reading-2': {
        type: 'multiple-choice',
        question: 'La idea principal usualmente está en:',
        options: ['El medio del texto', 'La primera oración', 'El medio del párrafo', 'Los ejemplos'],
        correct: 1,
        level: 'B2',
        module: 'b2-reading'
    },
    'reallife-1': {
        type: 'multiple-choice',
        question: '"I am writing to follow up on..." significa:',
        options: ['Escribo para terminar', 'Escribo para dar seguimiento', 'Escribo para empezar', 'Escribo para quejarme'],
        correct: 1,
        level: 'C1',
        module: 'c1-reallife'
    },
    'reallife-2': {
        type: 'multiple-choice',
        question: '"I was wondering if..." es:',
        options: ['Una afirmación', 'Una pregunta cortés', 'Una orden', 'Una quejas'],
        correct: 1,
        level: 'C1',
        module: 'c1-reallife'
    },
    'specialized-1': {
        type: 'multiple-choice',
        question: '"Stakeholder" pertenece al vocabulario de:',
        options: ['Medicina', 'Derecho', 'Negocios', 'Tecnología'],
        correct: 2,
        level: 'C1',
        module: 'c1-specialized'
    },
    'specialized-2': {
        type: 'multiple-choice',
        question: '"Algorithm" es término de:',
        options: ['Medicina', 'Negocios', 'Tecnología', 'Derecho'],
        correct: 2,
        level: 'C1',
        module: 'c1-specialized'
    },
    'discourse-1': {
        type: 'multiple-choice',
        question: '"Moreover" es un conector de:',
        options: ['Contraste', 'Causa', 'Adición', 'Ejemplificación'],
        correct: 2,
        level: 'C1',
        module: 'c1-discourse'
    },
    'discourse-2': {
        type: 'multiple-choice',
        question: '"Nevertheless" significa:',
        options: ['Además', 'Sin embargo', 'Por lo tanto', 'Por ejemplo'],
        correct: 1,
        level: 'C1',
        module: 'c1-discourse'
    },
    'academic-1': {
        type: 'multiple-choice',
        question: '"According to..." se usa para:',
        options: ['Opinar', 'Citar fuentes', 'Concluir', 'Introducir ejemplo'],
        correct: 1,
        level: 'C1',
        module: 'c1-academic'
    },
    'academic-2': {
        type: 'multiple-choice',
        question: 'En escritura académica se recomienda:',
        options: ['Usar contracciones', 'Usar voz pasiva', 'Usar jerga', 'Ser impreciso'],
        correct: 1,
        level: 'C1',
        module: 'c1-academic'
    }
};

const levelTests = {
    'test-a1': {
        level: 'A1',
        title: 'Prueba de Nivel A1',
        questions: [
            {
                question: '¿Cómo se dice "Gracias" en inglés?',
                options: ['Please', 'Thank you', 'Sorry', 'Hello'],
                correct: 1
            },
            {
                question: 'El número 10 en inglés es:',
                options: ['Ten', 'Nine', 'Eleven', 'Eight'],
                correct: 0
            },
            {
                question: '"Red" es el color:',
                options: ['Azul', 'Verde', 'Rojo', 'Amarillo'],
                correct: 2
            },
            {
                question: '¿Qué día es "Friday"?',
                options: ['Lunes', 'Viernes', 'Miércoles', 'Domingo'],
                correct: 1
            },
            {
                question: '"Mother" significa:',
                options: ['Padre', 'Madre', 'Hermano', 'Tío'],
                correct: 1
            },
            {
                question: 'Saludo para la tarde:',
                options: ['Good morning', 'Good night', 'Good afternoon', 'Goodbye'],
                correct: 2
            },
            {
                question: '"Grandfather" es:',
                options: ['Abuela', 'Abuelo', 'Tío', 'Primo'],
                correct: 1
            },
            {
                question: 'El número 7 se dice:',
                options: ['Six', 'Eight', 'Seven', 'Five'],
                correct: 2
            },
            {
                question: '"Blue" es el color:',
                options: ['Amarillo', 'Verde', 'Azul', 'Rosa'],
                correct: 2
            },
            {
                question: '"Goodbye" significa:',
                options: ['Hola', 'Gracias', 'Adiós', 'Por favor'],
                correct: 2
            }
        ],
        passingScore: 70
    },
    'test-a2': {
        level: 'A2',
        title: 'Prueba de Nivel A2',
        questions: [
            {
                question: 'El comparativo de "good" es:',
                options: ['gooder', 'more good', 'better', 'best'],
                correct: 2
            },
            {
                question: '"Always" es un adverbio de:',
                options: ['Tiempo', 'Lugar', 'Frecuencia', 'Cantidad'],
                correct: 2
            },
            {
                question: '"The book is ___ the table."',
                options: ['in', 'on', 'at', 'to'],
                correct: 1
            },
            {
                question: 'Presente continuo de "to work":',
                options: ['work', 'working', 'works', 'worked'],
                correct: 1
            },
            {
                question: '"Yesterday" significa:',
                options: ['Hoy', 'Ayer', 'Mañana', 'Ahora'],
                correct: 1
            },
            {
                question: 'El contrario de "big" es:',
                options: ['Small', 'New', 'Old', 'Tall'],
                correct: 0
            },
            {
                question: '"Mother" es un:',
                options: ['Adjetivo', 'Verbo', 'Sustantivo', 'Adverbio'],
                correct: 2
            },
            {
                question: 'Preposición de lugar "under" significa:',
                options: ['Encima', 'Debajo', 'Dentro', 'Al lado'],
                correct: 1
            },
            {
                question: '"Fast" es el contrario de:',
                options: ['Slow', 'Good', 'New', 'Big'],
                correct: 0
            },
            {
                question: '"Beautiful" es un:',
                options: ['Verbo', 'Sustantivo', 'Adjetivo', 'Adverbio'],
                correct: 2
            }
        ],
        passingScore: 70
    },
    'test-b1': {
        level: 'B1',
        title: 'Prueba de Nivel B1',
        questions: [
            {
                question: 'Oración condicional correcta:',
                options: ['If it rain, I will stay', 'If it rains, I will stay', 'If it will rain, I stay', 'If it raining, I stay'],
                correct: 1
            },
            {
                question: 'Present Perfect: "I ___ in Madrid for 5 years."',
                options: ['live', 'lived', 'have lived', 'am living'],
                correct: 2
            },
            {
                question: '"Could you help me?" es:',
                options: ['Una afirmación', 'Una orden', 'Una petición cortés', 'Una preguntas'],
                correct: 2
            },
            {
                question: '"In my opinion" significa:',
                options: ['En mi casa', 'En mi opinión', 'En mi tiempo', 'En mi trabajo'],
                correct: 1
            },
            {
                question: 'Past Continuous: "I ___ TV at 8pm."',
                options: ['watch', 'watched', 'was watching', 'am watching'],
                correct: 2
            },
            {
                question: 'Oración pasiva de "The chef cooks":',
                options: ['The food is cooked by the chef', 'The chef is cooking', 'Food cooks the chef', 'The chef cooks food'],
                correct: 0
            },
            {
                question: '"Best regards" es:',
                options: ['Saludo', 'Despedida formal', 'Agradecimiento', 'Petición'],
                correct: 1
            },
            {
                question: '"Yesterday" + past simple se usa para:',
                options: ['Acciones futuras', 'Acciones pasadas', 'Acciones habituales', 'Acciones actuales'],
                correct: 1
            },
            {
                question: 'Reported speech: "I am happy" → He said he ___ happy.',
                options: ['is', 'was', 'will be', 'am'],
                correct: 1
            },
            {
                question: '"Thank you for calling" es:',
                options: ['Saludo', 'Despedida', 'Agradecimiento', 'Petición'],
                correct: 2
            }
        ],
        passingScore: 70
    },
    'test-b2': {
        level: 'B2',
        title: 'Prueba de Nivel B2',
        questions: [
            {
                question: '"Piece of cake" significa:',
                options: ['Pan comido', 'Muy fácil', 'Muy difícil', 'Algo pequeño'],
                correct: 1
            },
            {
                question: 'Phrasal verb "give up" significa:',
                options: ['Dar algo', 'Rendirse', 'Regalar', 'Entregar'],
                correct: 1
            },
            {
                question: '"Moreover" es un conector de:',
                options: ['Contraste', 'Adición', 'Causa', 'Ejemplo'],
                correct: 1
            },
            {
                question: '"Skimming" es un tipo de lectura:',
                options: ['Profunda', 'Rápida general', 'Detallada', 'Critica'],
                correct: 1
            },
            {
                question: 'Sinónimo avanzado de "good":',
                options: ['Nice', 'Great', 'Outstanding', 'Cool'],
                correct: 2
            },
            {
                question: '"Break a leg" se usa para:',
                options: ['Advertir', 'Despedir', 'Dar suerte', 'Criticar'],
                correct: 2
            },
            {
                question: '"On the contrary" introduce:',
                options: ['Acuerdo', 'Contraste', 'Ejemplo', 'Causa'],
                correct: 1
            },
            {
                question: '"Hit the nail on the head" significa:',
                options: ['Golpear', 'Equivocarse', 'Dar en el clavo', 'Trabajar duro'],
                correct: 2
            },
            {
                question: '"Scanning" se usa para:',
                options: ['Idea general', 'Información específica', 'Análisis profundo', 'Opinión personal'],
                correct: 1
            },
            {
                question: '"Look after" significa:',
                options: ['Mirar', 'Cuidar', 'Seguir', 'Buscar'],
                correct: 1
            }
        ],
        passingScore: 70
    },
    'test-c1': {
        level: 'C1',
        title: 'Prueba de Nivel C1',
        questions: [
            {
                question: '"I am writing to follow up on" se usa en contexto:',
                options: ['Casual', 'Formal/negocios', 'Académico', 'Personal'],
                correct: 1
            },
            {
                question: '"Stakeholder" es término de:',
                options: ['Medicina', 'Tecnología', 'Negocios', 'Educación'],
                correct: 2
            },
            {
                question: '"Nevertheless" significa:',
                options: ['Además', 'Sin embargo', 'Por lo tanto', 'Por ejemplo'],
                correct: 1
            },
            {
                question: 'En inglés académico se recomienda:',
                options: ['Usar contracciones', 'Usar jerga', 'Usar voz pasiva', 'Ser informal'],
                correct: 2
            },
            {
                question: '"Algorithm" es término de:',
                options: ['Medicina', 'Negocios', 'Tecnología', 'Derecho'],
                correct: 2
            },
            {
                question: '"According to" se usa para:',
                options: ['Opinar', 'Citar fuentes', 'Concluir', 'Pedir'],
                correct: 1
            },
            {
                question: '"I was wondering if" es:',
                options: ['Afirmación directa', 'Pregunta muy directa', 'Pregunta cortés/indirecta', 'Orden'],
                correct: 2
            },
            {
                question: '"Revenue" es término de:',
                options: ['Legal', 'Financiero', 'Médico', 'Técnico'],
                correct: 1
            },
            {
                question: '"Consequently" es un conector de:',
                options: ['Adición', 'Contraste', 'Causa/efecto', 'Ejemplificación'],
                correct: 2
            },
            {
                question: 'En escritura académica, la estructura típica incluye:',
                options: ['Solo introducción', 'Introducción, cuerpo, conclusión', 'Solo conclusiones', 'Solo ejemplos'],
                correct: 1
            }
        ],
        passingScore: 70
    }
};

let currentExercise = null;
let exerciseResults = [];
let currentTestType = null;
let currentTestData = null;

function getExercise(exerciseId) {
    return exercisesData[exerciseId] || null;
}

function getTest(testId) {
    return levelTests[testId] || null;
}

function getExercisesForModule(moduleId) {
    return Object.keys(exercisesData)
        .filter(id => exercisesData[id].module === moduleId)
        .map(id => ({ id, ...exercisesData[id] }));
}

function startExercise(exerciseId, levelId, moduleId) {
    const exercise = getExercise(exerciseId);
    if (!exercise) {
        showToast('Ejercicio no encontrado', 'error');
        return;
    }
    
    currentExercise = {
        id: exerciseId,
        ...exercise,
        levelId,
        moduleId
    };
    
    exerciseResults = [];
    currentTestType = 'exercise';
    
    document.getElementById('exercise-container').innerHTML = renderExercise(exercise, 0);
    document.getElementById('exercise-progress-fill').style.width = '0%';
    document.getElementById('exercise-progress-text').textContent = '1/1';
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').textContent = 'Finalizar';
    
    showScreen('exercise-screen');
    addAnimationToScreen('exercise-screen');
}

function startLevelTest() {
    const testId = `test-${currentLevelDetail}`;
    const test = getTest(testId);
    
    if (!test) {
        showToast('Prueba no encontrada', 'error');
        return;
    }
    
    currentTestType = 'test';
    currentTestData = test;
    
    const allExercises = test.questions.map((q, index) => ({
        type: 'multiple-choice',
        question: q.question,
        options: q.options,
        correct: q.correct
    }));
    
    currentExercise = {
        id: testId,
        questions: allExercises,
        passingScore: test.passingScore
    };
    
    exerciseResults = [];
    
    document.getElementById('exercise-container').innerHTML = renderExercise(currentExercise, 0);
    updateExerciseProgress(0, allExercises.length);
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').textContent = 'Siguiente →';
    
    showScreen('exercise-screen');
    addAnimationToScreen('exercise-screen');
}

function renderExercise(exercise, index) {
    const isTest = currentTestType === 'test';
    const data = isTest ? exercise.questions[index] : exercise;
    
    const typeLabel = isTest ? `Pregunta ${index + 1}` : 'Ejercicio';
    
    let html = `
        <div class="exercise-type">${typeLabel}</div>
        <div class="exercise-question">${data.question}</div>
        <div class="exercise-options">
    `;
    
    data.options.forEach((option, optIndex) => {
        const selected = exerciseResults[index] === optIndex;
        html += `
            <button class="option-btn ${selected ? 'selected' : ''}" 
                    onclick="selectOption(${optIndex})">
                ${option}
            </button>
        `;
    });
    
    html += '</div>';
    
    return html;
}

function selectOption(optionIndex) {
    const currentIndex = parseInt(document.getElementById('exercise-progress-text').textContent.split('/')[0]) - 1;
    exerciseResults[currentIndex] = optionIndex;
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.classList.remove('selected');
        if (index === optionIndex) {
            btn.classList.add('selected');
        }
    });
}

function nextExercise() {
    const isTest = currentTestType === 'test';
    const total = isTest ? currentExercise.questions.length : 1;
    const currentIndex = exerciseResults.length;
    
    if (exerciseResults[currentIndex] === undefined) {
        showToast('Por favor selecciona una respuesta', 'error');
        return;
    }
    
    if (currentIndex < total - 1) {
        exerciseResults.push(null);
        document.getElementById('exercise-container').innerHTML = renderExercise(currentExercise, currentIndex + 1);
        updateExerciseProgress(currentIndex + 1, total);
        
        if (currentIndex === 0) {
            document.getElementById('prev-btn').style.display = 'inline-block';
        }
        
        if (currentIndex === total - 2) {
            document.getElementById('next-btn').textContent = 'Finalizar';
        }
    } else {
        finishExercise();
    }
}

function prevExercise() {
    const isTest = currentTestType === 'test';
    const total = isTest ? currentExercise.questions.length : 1;
    const currentIndex = parseInt(document.getElementById('exercise-progress-text').textContent.split('/')[0]) - 1;
    
    if (currentIndex > 0) {
        document.getElementById('exercise-container').innerHTML = renderExercise(currentExercise, currentIndex - 1);
        updateExerciseProgress(currentIndex - 1, total);
        
        if (currentIndex === 1) {
            document.getElementById('prev-btn').style.display = 'none';
        }
        
        document.getElementById('next-btn').textContent = total === 2 ? 'Finalizar' : 'Siguiente →';
    }
}

function updateExerciseProgress(current, total) {
    const percentage = ((current + 1) / total) * 100;
    document.getElementById('exercise-progress-fill').style.width = `${percentage}%`;
    document.getElementById('exercise-progress-text').textContent = `${current + 1}/${total}`;
}

function finishExercise() {
    const isTest = currentTestType === 'test';
    let correct = 0;
    let total = 0;
    
    if (isTest) {
        currentExercise.questions.forEach((q, index) => {
            total++;
            if (exerciseResults[index] === q.correct) {
                correct++;
            }
        });
    } else {
        total = 1;
        if (exerciseResults[0] === currentExercise.correct) {
            correct = 1;
        }
    }
    
    const score = Math.round((correct / total) * 100);
    const passed = score >= 70;
    
    saveResults(correct, total, score, passed);
    showResults(score, correct, total, passed);
}

async function saveResults(correct, total, score, passed) {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    const resultData = {
        userEmail: user.email,
        exerciseId: currentExercise.id,
        correct: correct,
        total: total,
        score: score,
        passed: passed,
        date: new Date().toISOString()
    };
    
    await db.saveResult(resultData);
    
    if (currentTestType === 'test' && passed) {
        const userLevel = user.level;
        const levelIndex = levelOrder.indexOf(userLevel);
        
        if (levelIndex < levelOrder.length - 1) {
            const nextLevel = levelOrder[levelIndex + 1];
            await auth.updateLevel(nextLevel);
            showToast(`¡Felicidades! Has avanzado al nivel ${nextLevel}`, 'success');
        }
    }
    
    if (currentTestType === 'exercise' && passed) {
        const levelId = currentExercise.levelId;
        const moduleId = currentExercise.moduleId;
        
        const progressData = {
            userEmail: user.email,
            level: levelId,
            module: moduleId,
            exerciseId: currentExercise.id,
            completed: true,
            correct: passed,
            percentage: 100,
            date: new Date().toISOString()
        };
        
        await db.saveProgress(progressData);
    }
}

function showResults(score, correct, total, passed) {
    const isTest = currentTestType === 'test';
    
    document.getElementById('results-icon').textContent = passed ? '🎉' : '💪';
    document.getElementById('results-title').textContent = passed ? '¡Felicitaciones!' : '¡Sigue Intentando!';
    document.getElementById('results-message').textContent = passed 
        ? 'Has completado el ejercicio exitosamente' 
        : 'Necesitas 70% para aprobar. ¡Inténtalo de nuevo!';
    
    document.getElementById('score-value').textContent = `${score}%`;
    
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (score / 100) * circumference;
    document.getElementById('score-ring').style.strokeDashoffset = offset;
    
    if (score >= 70) {
        document.getElementById('score-ring').style.stroke = '#10b981';
    } else {
        document.getElementById('score-ring').style.stroke = '#f59e0b';
    }
    
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = total - correct;
    
    showScreen('results-screen');
    addAnimationToScreen('results-screen');
    
    if (passed && isTest) {
        createConfetti();
    }
}

function createConfetti() {
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

function retryExercise() {
    exerciseResults = [];
    
    if (currentTestType === 'test') {
        document.getElementById('exercise-container').innerHTML = renderExercise(currentExercise, 0);
        updateExerciseProgress(0, currentExercise.questions.length);
    } else {
        document.getElementById('exercise-container').innerHTML = renderExercise(currentExercise, 0);
    }
    
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').textContent = currentTestType === 'test' ? 'Siguiente →' : 'Finalizar';
    
    showScreen('exercise-screen');
}

function continueAfterResult() {
    if (currentTestType === 'test') {
        showLevelDetail(currentLevelDetail);
    } else {
        const levelId = currentExercise.levelId;
        showLevelDetail(levelId);
    }
}

function exitExercise() {
    const confirmExit = confirm('¿Estás seguro de que quieres salir? Tu progreso no se guardará.');
    if (confirmExit) {
        if (currentLevelDetail) {
            showLevelDetail(currentLevelDetail);
        } else {
            showDashboard();
        }
    }
}

if (typeof window !== 'undefined') {
    window.exercisesData = exercisesData;
    window.levelTests = levelTests;
    window.getExercise = getExercise;
    window.getTest = getTest;
    window.getExercisesForModule = getExercisesForModule;
    window.startExercise = startExercise;
    window.startLevelTest = startLevelTest;
    window.selectOption = selectOption;
    window.nextExercise = nextExercise;
    window.prevExercise = prevExercise;
    window.finishExercise = finishExercise;
    window.retryExercise = retryExercise;
    window.continueAfterResult = continueAfterResult;
    window.exitExercise = exitExercise;
}