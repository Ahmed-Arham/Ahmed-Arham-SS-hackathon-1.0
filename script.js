// Set current time for initial message
document.getElementById('currentTime').textContent = getCurrentTime();


// Comprehensive knowledge base for the chatbot
const knowledgeBase = {
    greetings: {
        patterns: ["hello", "hi", "hey", "namaste", "good morning", "good afternoon", "good evening"],
        responses: [
            "Hello! I'm MediAssist AI. How can I assist with your healthcare needs today?",
            "Greetings! I'm here to help with medical questions and health guidance. What can I do for you?",
            "Hi there! How can I support your health and wellness today?"
        ]
    },
    howAreYou: {
        patterns: ["how are you", "how do you do", "how's it going"],
        responses: [
            "I'm functioning optimally, thank you! Ready to assist with your healthcare questions.",
            "I'm doing well! How can I help you with medical information or guidance today?",
            "I'm operating perfectly! What health-related questions can I answer for you?"
        ]
    },
    farewells: {
        patterns: ["bye", "goodbye", "see you", "thanks", "thank you"],
        responses: [
            "Take care! Remember to consult healthcare professionals for serious medical concerns.",
            "You're welcome! Stay healthy and don't hesitate to return if you have more questions.",
            "Goodbye! Wishing you continued good health."
        ]
    },
    name: {
        patterns: ["what is your name", "who are you", "your name"],
        responses: [
            "I'm MediAssist AI, your intelligent healthcare assistant!",
            "I'm MediAssist AI, here to help with medical information and guidance.",
            "My name is MediAssist AI. I'm designed to assist with healthcare questions."
        ]
    },
    capabilities: {
        patterns: ["what can you do", "what do you do", "help me", "your capabilities"],
        responses: [
            "I can help with health questions, symptom checking, first aid guidance, medicine information, finding healthcare facilities, and general conversation!",
            "I'm here to assist with healthcare information. I can help check symptoms, provide first aid guidance, and more.",
            "As MediAssist AI, I provide health information, symptom analysis, first aid tips, and I'm always up for a chat too!"
        ]
    },
    weather: {
        patterns: ["weather", "rain", "sunny", "hot", "cold", "temperature"],
        responses: [
            "I don't have real-time weather data, but I hope the weather is pleasant where you are!",
            "For accurate weather information, I'd recommend checking a weather app. But I'm happy to chat about other topics!",
            "Weather can affect our health - stay hydrated when it's hot and bundle up when it's cold!"
        ]
    },
    sports: {
        patterns: ["cricket", "football", "sports", "game", "match", "player"],
        responses: [
            "Sports are great for physical and mental health! Regular activity helps maintain fitness.",
            "I'm more focused on health topics, but sports are an excellent way to stay active and healthy!",
            "Physical activity like sports is important for cardiovascular health and overall wellbeing."
        ]
    },
    food: {
        patterns: ["food", "eat", "cooking", "recipe", "meal", "dinner", "lunch", "breakfast"],
        responses: [
            "A balanced diet is crucial for good health! Include plenty of fruits, vegetables, and whole grains.",
            "Nutrition plays a key role in health. Remember to eat a variety of foods for all essential nutrients.",
            "Healthy eating is important for maintaining energy and preventing diseases. What's your favorite healthy food?"
        ]
    },
    symptoms: {
        fever: {
            patterns: ["fever", "temperature", "hot", "burning up"],
            response: "<strong>Fever Guidance:</strong> Rest, hydrate well, and consider paracetamol if needed. Monitor temperature regularly. <br><br><em>Seek medical attention if:</em> Fever persists >3 days, temperature >103°F, or accompanied by severe symptoms like rash, stiff neck, or breathing difficulty."
        },
        headache: {
            patterns: ["headache", "head pain", "migraine"],
            response: "<strong>Headache Relief:</strong> Rest in a quiet, dark environment. Stay hydrated and apply a cool compress. Avoid triggers like bright lights or loud noises. <br><br><em>Consult a doctor if:</em> Headache is severe, persistent, or accompanied by vision changes, confusion, or vomiting."
        },
        cough: {
            patterns: ["cough", "coughing", "throat irritation"],
            response: "<strong>Cough Management:</strong> Drink warm fluids like herbal tea with honey. Use a humidifier and avoid irritants. <br><br><em>Medical evaluation needed if:</em> Cough persists >1 week, produces colored phlegm, or is accompanied by breathing difficulty or chest pain."
        },
        cold: {
            patterns: ["cold", "runny nose", "sneezing", "congestion"],
            response: "<strong>Cold Care:</strong> Rest, increase fluid intake, use saline nasal spray, and gargle with warm salt water. Most colds resolve within 7-10 days. <br><br><em>See a doctor if:</em> Symptoms worsen, high fever develops, or symptoms persist beyond 10 days."
        },
        stomach: {
            patterns: ["stomach", "abdominal", "belly", "indigestion", "nausea", "vomiting", "diarrhea"],
            response: "<strong>Stomach Issue Management:</strong> Consume clear fluids and bland foods (bananas, rice, toast). Avoid dairy, fatty, or spicy foods. <br><br><em>Seek medical care if:</em> Symptoms persist >2 days, severe pain develops, blood appears in stool, or dehydration signs occur."
        }
    },
    firstAid: {
        bleeding: {
            patterns: ["bleeding", "cut", "wound", "injured"],
            response: "<strong>Bleeding Control:</strong> Apply direct pressure with a clean cloth. Elevate the injured area if possible. <br><br><em>Emergency care needed if:</em> Bleeding doesn't stop after 15 minutes of pressure, wound is deep, or caused by a dirty object."
        },
        burn: {
            patterns: ["burn", "scald", "hot water"],
            response: "<strong>Burn Care:</strong> Cool under running water for 10-20 minutes. Cover with sterile non-stick dressing. <br><br><em>Immediate medical attention required for:</em> Severe burns, burns on face/hands/genitals, or chemical/electrical burns."
        },
        choking: {
            patterns: ["choking", "can't breathe", "something stuck"],
            response: "<strong>Choking Response:</strong> If person can cough or speak, encourage coughing. If unable to breathe, perform abdominal thrusts (Heimlich maneuver). <br><br><em>Always call emergency services in choking situations.</em>"
        }
    },
    medicines: {
        paracetamol: {
            patterns: ["paracetamol", "acetaminophen", "crocin", "calpol"],
            response: "<strong>Paracetamol Information:</strong> Used for pain and fever relief. Typical adult dose: 500-1000mg every 4-6 hours (max 4000mg/24hr). Take with water. <br><br><em>Precautions:</em> Avoid alcohol, do not exceed recommended dose, consult doctor if you have liver conditions."
        },
        ibuprofen: {
            patterns: ["ibuprofen", "brufen", "advil"],
            response: "<strong>Ibuprofen Information:</strong> Anti-inflammatory for pain, fever, and inflammation. Adult dose: 200-400mg every 4-6 hours with food. <br><br><em>Contraindications:</em> Not recommended for stomach ulcers, kidney issues, or in late pregnancy."
        }
    },
    healthcare: {
        patterns: ["hospital", "clinic", "doctor", "health center", "find", "nearby", "location"],
        responses: [
            "I can help locate healthcare facilities. Please share your district or pin code for specific recommendations.",
            "For finding medical facilities, government health centers are typically available in district headquarters. You can also call the national health helpline at 104.",
            "Many districts have mobile health clinics visiting villages periodically. Contact your local health department for schedules."
        ]
    },
    emergency: {
        patterns: ["emergency", "urgent", "help", "serious", "critical", "dying"],
        responses: [
            "<div class='warning'><i class='fas fa-exclamation-triangle'></i> <strong>MEDICAL EMERGENCY:</strong> Please go to the nearest hospital immediately or call emergency services. This includes: chest pain, difficulty breathing, severe bleeding, or unconsciousness.</div>",
            "<div class='warning'><i class='fas fa-exclamation-triangle'></i> <strong>URGENT MEDICAL ATTENTION NEEDED:</strong> Do not delay - seek immediate professional medical care. This assistant cannot provide emergency services.</div>"
        ]
    },
    default: [
        "I'm not sure I understand. Could you please rephrase your question? I can help with symptoms, first aid, medicines, or finding healthcare.",
        "I'm still learning about medical topics. Could you try asking in a different way? I specialize in healthcare guidance.",
        "For specific medical advice, I recommend consulting with a healthcare professional who can provide personalized care."
    ]
};


function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
}


function addMessage(message, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageText = document.createElement('p');
    messageText.innerHTML = message;
    messageDiv.appendChild(messageText);
    
    if (!isUser && !message.includes('warning')) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'quick-options';
        
        const options = [
            'Symptom Analysis',
            'First Aid Guidance',
            'Find Healthcare',
            'Medicine Info',
            'Emergency Help'
        ];
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = function() { selectOption(this); };
            optionsDiv.appendChild(button);
        });
        
        messageDiv.appendChild(optionsDiv);
    }
    
    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getCurrentTime();
    messageDiv.appendChild(timeDiv);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        MediAssist AI is typing
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return typingDiv;
}


function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}


function processUserInput(input) {
    const lowerInput = input.toLowerCase().trim();
    
    // Check for emergencies first
    for (let pattern of knowledgeBase.emergency.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.emergency.responses[
                Math.floor(Math.random() * knowledgeBase.emergency.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for greetings
    for (let pattern of knowledgeBase.greetings.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.greetings.responses[
                Math.floor(Math.random() * knowledgeBase.greetings.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for how are you
    for (let pattern of knowledgeBase.howAreYou.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.howAreYou.responses[
                Math.floor(Math.random() * knowledgeBase.howAreYou.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for name questions
    for (let pattern of knowledgeBase.name.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.name.responses[
                Math.floor(Math.random() * knowledgeBase.name.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for capability questions
    for (let pattern of knowledgeBase.capabilities.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.capabilities.responses[
                Math.floor(Math.random() * knowledgeBase.capabilities.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for farewells
    for (let pattern of knowledgeBase.farewells.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.farewells.responses[
                Math.floor(Math.random() * knowledgeBase.farewells.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for weather
    for (let pattern of knowledgeBase.weather.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.weather.responses[
                Math.floor(Math.random() * knowledgeBase.weather.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for sports
    for (let pattern of knowledgeBase.sports.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.sports.responses[
                Math.floor(Math.random() * knowledgeBase.sports.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for food
    for (let pattern of knowledgeBase.food.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.food.responses[
                Math.floor(Math.random() * knowledgeBase.food.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Check for symptoms
    for (let symptomCategory in knowledgeBase.symptoms) {
        const symptom = knowledgeBase.symptoms[symptomCategory];
        for (let pattern of symptom.patterns) {
            if (lowerInput.includes(pattern)) {
                return symptom.response;
            }
        }
    }
    
    // Check for first aid
    for (let aidCategory in knowledgeBase.firstAid) {
        const aid = knowledgeBase.firstAid[aidCategory];
        for (let pattern of aid.patterns) {
            if (lowerInput.includes(pattern)) {
                return aid.response;
            }
        }
    }
    
    // Check for medicines
    for (let medicine in knowledgeBase.medicines) {
        const med = knowledgeBase.medicines[medicine];
        for (let pattern of med.patterns) {
            if (lowerInput.includes(pattern)) {
                return med.response;
            }
        }
    }
    
    // Check for healthcare facilities
    for (let pattern of knowledgeBase.healthcare.patterns) {
        if (lowerInput.includes(pattern)) {
            const randomResponse = knowledgeBase.healthcare.responses[
                Math.floor(Math.random() * knowledgeBase.healthcare.responses.length)
            ];
            return randomResponse;
        }
    }
    
    // Default response
    const randomDefault = knowledgeBase.default[
        Math.floor(Math.random() * knowledgeBase.default.length)
    ];
    return randomDefault;
}


function selectOption(button) {
    const selectedOption = button.textContent;
    addMessage(selectedOption, true);
    
    const typingIndicator = showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        let response = '';
        switch(selectedOption) {
            case 'Symptom Analysis':
                response = 'Please describe your symptoms. I can provide information about: <br>- Fever <br>- Headache <br>- Cough & Cold <br>- Stomach issues <br>- Skin problems <br>- Pain in any body part';
                break;
            case 'First Aid Guidance':
                response = 'I can provide first aid information for: <br>- Bleeding wounds <br>- Burns <br>- Choking <br>- Fractures <br>- Bites and stings <br>What specific first aid information do you need?';
                break;
            case 'Find Healthcare':
                response = 'I can help you find nearby healthcare facilities. Please share your district or pin code. You can also call the health helpline at 104 for assistance.';
                break;
            case 'Medicine Info':
                response = 'I can provide information about common medicines: <br>- Paracetamol (for fever and pain) <br>- Ibuprofen (for pain and inflammation) <br>- Antibiotics (for bacterial infections) <br>Which medicine would you like to know about?';
                break;
            case 'Emergency Help':
                response = '<div class="warning"><i class="fas fa-exclamation-triangle"></i> <strong>For Medical Emergencies:</strong> Please go to the nearest hospital immediately or call emergency services. This includes: chest pain, difficulty breathing, severe bleeding, sudden weakness, or unconsciousness.</div>';
                break;
            default:
                response = 'Thank you for your message. How else can I assist you with your healthcare needs?';
        }
        addMessage(response);
    }, 1500);
}


function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        
        const typingIndicator = showTypingIndicator();
        
        setTimeout(() => {
            hideTypingIndicator();
            const response = processUserInput(message);
            addMessage(response);
        }, 1500);
    }
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}


function changeLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    addMessage(`Language changed to ${event.target.textContent}. Note: Full multilingual support is coming soon!`, false);
}


// Initialize the chat
window.addEventListener('load', function() {
    setTimeout(() => {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
});
