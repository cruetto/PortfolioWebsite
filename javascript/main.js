// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Translations Dictionary ---
    const translations = {
        pageTitle: { en: "Konstantinas Ovčinikovas - Portfolio", lt: "Konstantinas Ovčinikovas - Portfolio" },
        navAbout: { en: "About", lt: "Apie mane" },
        navProjects: { en: "Projects", lt: "Projektai" },
        navContacts: { en: "Contacts", lt: "Kontaktai" },
        helloName: { en: "Konstantinas Ovčinikovas", lt: "Konstantinas Ovčinikovas" },
        helloSubtitle: { en: "AI Systems Student & Aspiring Developer", lt: "DI Sistemų Studentas & Siekiantis Programuotojas" },
        aboutTitle: { en: "About Me", lt: "Apie Mane" },
        aboutPhotoAlt: { en: "Headshot photo of Konstantinas Ovčinikovas", lt: "Konstantino Ovčinikovo portretinė nuotrauka" },
        aboutGreeting: { en: "Hello!", lt: "Sveiki!" },
        aboutText: { en: `I am an "AI systems" third-year student at <a class="hyperlink" href="https://vilniustech.lt" target="_blank" rel="noopener noreferrer">Vilnius Tech</a>. I previously completed a 3-year course focused on Back-end development at <a class="hyperlink" href="https://nkkm.lt" target="_blank" rel="noopener noreferrer">NKKM</a>. Through my studies and projects, I've gained programming knowledge in C++, Visual Basic, C# (using Visual Studio), database management with MySQL, and built Android apps incorporating libraries like Glide. I've also explored game development using Unity and GameMaker.`, lt: `Esu \"DI sistemų\" trečio kurso studentas <a class="hyperlink" href="https://vilniustech.lt" target="_blank" rel="noopener noreferrer">Vilnius Tech</a> universitete. Anksčiau baigiau 3 metų Back-end programuotojo kursus <a class="hyperlink" href="https://nkkm.lt" target="_blank" rel="noopener noreferrer">NKKM</a>. Studijų ir projektų metu įgijau programavimo žinių C++, Visual Basic, C# (naudojant Visual Studio), duomenų bazių valdymo su MySQL, kūriau Android programėles naudojant Glide biblioteką. Taip pat išbandžiau žaidimų kūrimą su Unity ir GameMaker.` },
        aboutConnect: { en: "Connect with Me", lt: "Susisiekite" },
        projectsTitle: { en: "My Projects", lt: "Mano Projektai" },
        project1Name: { en: "C++ Vehicle Storage", lt: "C++ Transporto Priemonių Saugykla" },
        project1Desc: { en: "A storage system written in C++ for a course project. The system manages cars and motorcycles in containers, allowing modification of vehicle properties (brand, model, engine, cost). Key OOP concepts practiced: pointers, structures, and classes.", lt: "Saugyklos sistema parašyta C++ kalba kursiniam darbui. Sistema valdo automobilius ir motociklus konteineriuose, leidžia keisti kiekvienos transporto priemonės savybes (markę, modelį, variklio parametrus, kainą). Praktikuotos pagrindinės OOP koncepcijos: rodyklės, struktūros ir klasės." },
        project1Link: { en: "View Project Documentation", lt: "Peržiūrėti Projekto Dokumentaciją" },
        project1VideoAlt: { en: "Demo video of C++ Vehicle Storage System UI", lt: "C++ Transporto Priemonių Saugyklos Sistemos UI demonstracinis vaizdo įrašas" },
        project2Name: { en: "Pacman Clone (GameMaker)", lt: "Pacman Klonas (GameMaker)" },
        project2Desc: { en: "Created a Pacman clone using <a class=\"hyperlink\" href=\"https://gamemaker.io/en\" target=\"_blank\" rel=\"noopener noreferrer\">GameMaker</a> during foundational coding courses at NKKM. This project provided practical understanding of game loops, collision detection, hitboxes, movement mechanics, and sprite management.", lt: "Sukūriau Pacman kloną naudojant <a class=\"hyperlink\" href=\"https://gamemaker.io/en\" target=\"_blank\" rel=\"noopener noreferrer\">GameMaker</a> per programavimo pagrindų kursus NKKM. Šis projektas suteikė praktinį supratimą apie žaidimų ciklus, kolizijų aptikimą, \"hitbox'us\", judėjimo mechaniką ir \"sprite'ų\" valdymą." },
        project2Link: { en: "View Code on GitHub", lt: "Peržiūrėti Kodą GitHub" },
        project2VideoAlt: { en: "Gameplay video of Pacman clone", lt: "Pacman klono žaidimo eigos vaizdo įrašas" },
        project3Name: { en: "Exercise Tracker App (Glide)", lt: "Pratimų Sekimo Programėlė (Glide)" },
        project3Desc: { en: "A side project built using the no-code platform <a class=\"hyperlink\" href=\"https://www.glideapps.com\" target=\"_blank\" rel=\"noopener noreferrer\">Glide</a>. This app allows users to log daily exercise repetitions, visualize their progress, and stay motivated.", lt: "Šalutinis projektas, sukurtas naudojant \"no-code\" platformą <a class=\"hyperlink\" href=\"https://www.glideapps.com\" target=\"_blank\" rel=\"noopener noreferrer\">Glide</a>. Ši programėlė leidžia vartotojams registruoti kasdienius pratimų pakartojimus, vizualizuoti savo progresą ir išlikti motyvuotiems." },
        project3Link: { en: "View Live App", lt: "Peržiūrėti Programėlę Gyvai" },
        project3VideoAlt: { en: "Demo video of the Glide Exercise Tracker App", lt: "Glide Pratimų Sekimo Programėlės demonstracinis vaizdo įrašas" },
        project4Name: { en: "MATLAB Object Recognition Analysis", lt: "MATLAB Objektų Atpažinimo Analizė" },
        project4Desc: { en: "Part of university laboratory work using <a class=\"hyperlink\" href=\"https://ch.mathworks.com/products/matlab.html\" target=\"_blank\" rel=\"noopener noreferrer\">MATLAB</a>. Investigated how a pre-trained neural network classifies objects within an image, focusing on identifying the image features the network uses for classification.", lt: "Universiteto laboratorinio darbo dalis naudojant <a class=\"hyperlink\" href=\"https://ch.mathworks.com/products/matlab.html\" target=\"_blank\" rel=\"noopener noreferrer\">MATLAB</a>. Tiriama, kaip iš anksto apmokytas neuroninis tinklas klasifikuoja objektus paveikslėlyje, sutelkiant dėmesį į vaizdo ypatybes, kurias tinklas naudoja klasifikavimui." },
        project4Link: { en: "View Related Files on GitHub", lt: "Peržiūrėti Susijusius Failus GitHub" },
        project4ImageAlt: { en: "Matlab image analysis showing object recognition heatmaps", lt: "Matlab vaizdo analizė, rodanti objektų atpažinimo šilumos žemėlapius" },
        project5Name: { en: "Automatic Cat Feeder (Arduino/CAD)", lt: "Automatinė Kačių Šėrykla (Arduino/CAD)" },
        project5Desc: { en: "Designed and built an automatic pet feeder. The structure was designed in <a class=\"hyperlink\" href=\"https://www.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription\" target=\"_blank\" rel=\"noopener noreferrer\">AutoCAD</a> and 3D-printed. The dispensing mechanism is controlled by an <a class=\"hyperlink\" href=\"https://www.arduino.cc\" target=\"_blank\" rel=\"noopener noreferrer\">Arduino</a> microcontroller. This project involved significant problem-solving and engineering challenges. While not perfect, it was a valuable hands-on learning experience.", lt: "Suprojektuota ir pagaminta automatinė naminių gyvūnėlių šėrykla. Struktūra suprojektuota <a class=\"hyperlink\" href=\"https://www.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription\" target=\"_blank\" rel=\"noopener noreferrer\">AutoCAD</a> ir atspausdinta 3D spausdintuvu. Dozavimo mechanizmas valdomas <a class=\"hyperlink\" href=\"https://www.arduino.cc\" target=\"_blank\" rel=\"noopener noreferrer\">Arduino</a> mikrovaldikliu. Šis projektas pareikalavo daug problemų sprendimo ir inžinerinių iššūkių. Nors ir netobula, tai buvo vertinga praktinė mokymosi patirtis." },
        project5Link: { en: "View Code/Design Files on GitHub", lt: "Peržiūrėti Kodo/Dizaino Failus GitHub" },
        project5ImageAlt: { en: "Photo of the assembled 3D-printed automatic cat feeder prototype", lt: "Surinktos 3D spausdintos automatinės kačių šėryklos prototipo nuotrauka" },
        project6Name: { en: "This Portfolio Website", lt: "Šis Portfolio Puslapis" },
        project6Desc: { en: "Initially a simple university lab assignment, this website evolved into a personal project to practice and showcase web development skills. Built using HTML, CSS, and JavaScript, focusing on clean code, responsiveness, and subtle animations. Developed using VS Code, Live Server, and GitHub Pages/Codespaces.", lt: "Iš pradžių paprastas universiteto laboratorinis darbas, šis puslapis išsivystė į asmeninį projektą, skirtą praktikuoti ir demonstruoti web kūrimo įgūdžius. Sukurta naudojant HTML, CSS ir JavaScript, sutelkiant dėmesį į švarų kodą, adaptyvumą ir subtilias animacijas. Kurta naudojant VS Code, Live Server ir GitHub Pages/Codespaces." },
        project6Link: { en: "View Code on GitHub", lt: "Peržiūrėti Kodą GitHub" },
        project6ImageAlt: { en: "Animated GIF showing scrolling through this portfolio website", lt: "Animuotas GIF, rodantis slinkimą per šį portfolio puslapį" },
        contactTitle: { en: "Contact Information", lt: "Kontaktinė Informacija" },
        contactEmailInstruction: { en: "Click email to copy (or open mail app on mobile):", lt: "Spustelėkite el. paštą, kad nukopijuotumėte (arba atidarytumėte pašto programą mobiliajame):" },
        contactPhoneInstruction: { en: "Click phone to copy (or call on mobile):", lt: "Spustelėkite telefoną, kad nukopijuotumėte (arba skambintumėte mobiliajame):" },
        footerRights: { en: "All rights reserved.", lt: "Visos teisės saugomos." },
        // Translation for copy feedback
        copiedFeedback: { en: "Copied!", lt: "Nukopijuota!" }
    };

    // --- Helper Function: Detect Mobile Device ---
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
    }

    // --- Get Current Language ---
    // Helper function to safely get the current language setting
    function getCurrentLanguage() {
        let lang = document.documentElement.lang || 'en';
        if (lang !== 'en' && lang !== 'lt') {
            lang = 'en'; // Default to English if invalid lang attribute found
        }
        return lang;
    }

    // --- Language Setting Function ---
    function setLanguage(lang) {
        if (lang !== 'en' && lang !== 'lt') lang = 'en';
        document.documentElement.lang = lang; // Set HTML lang attribute
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.dataset.langKey;
            const translationData = translations[key];
            if (translationData && translationData[lang] !== undefined) { // Check if translation exists
                const translation = translationData[lang];
                if (el.tagName === 'IMG' || el.tagName === 'VIDEO') {
                    if (el.hasAttribute('alt')) el.alt = translation;
                    if (el.hasAttribute('aria-label')) el.setAttribute('aria-label', translation);
                } else if (el.tagName === 'TITLE') {
                    document.title = translation;
                } else {
                     if (el.querySelector('a')) el.innerHTML = translation; // Use innerHTML if links are present
                     else el.textContent = translation;
                }
            } else {
                console.warn(`Translation key "${key}" or language "${lang}" not found.`);
                // Fallback to English if translation missing for the current language
                if (translationData && translationData['en'] !== undefined) {
                     if (el.querySelector('a')) el.innerHTML = translationData['en'];
                     else el.textContent = translationData['en'];
                }
            }
        });
        document.querySelectorAll('.lang-button').forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });
        try { localStorage.setItem('preferredLanguage', lang); } catch (e) { console.warn("Could not save language preference.", e); }
    }

    // --- Theme Setting Function ---
    function setTheme(theme) {
        const body = document.body;
        const lightButton = document.querySelector('.theme-button[data-theme="light"]');
        const darkButton = document.querySelector('.theme-button[data-theme="dark"]');

        if (theme === 'light') {
            body.classList.add('light-theme');
            if (lightButton) lightButton.classList.add('active');
            if (darkButton) darkButton.classList.remove('active');
        } else {
            body.classList.remove('light-theme');
            if (lightButton) lightButton.classList.remove('active');
            if (darkButton) darkButton.classList.add('active');
            theme = 'dark'; // Ensure theme variable is 'dark' for saving
        }
        try { localStorage.setItem('preferredTheme', theme); } catch (e) { console.warn("Could not save theme preference.", e); }
    }


    // --- Language Button Event Listeners ---
    const langButtons = document.querySelectorAll('.lang-button');
    langButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    // --- Theme Button Event Listeners ---
    const themeButtons = document.querySelectorAll('.theme-button');
    themeButtons.forEach(button => {
        button.addEventListener('click', () => setTheme(button.dataset.theme));
    });


    // --- Initial Language Load ---
    let initialLanguage = 'en';
    try { const savedLang = localStorage.getItem('preferredLanguage'); if (savedLang === 'en' || savedLang === 'lt') initialLanguage = savedLang; } catch (e) { /* Ignore */ }
    setLanguage(initialLanguage); // Apply language on load


    // --- Initial Theme Load ---
    let initialTheme = 'dark'; // Default theme
    try {
        const savedTheme = localStorage.getItem('preferredTheme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            initialTheme = savedTheme;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            initialTheme = 'light'; // Use OS preference if no saved theme
        }
    } catch (e) { console.warn("Could not read theme preference.", e); }
    setTheme(initialTheme); // Apply theme on load


    // --- Navbar Toggle ---
    const navbarToggleBtn = document.querySelector('.navbar-toggle-button');
    const navbar = document.getElementById('navbar');
    if (navbarToggleBtn && navbar) {
        navbarToggleBtn.addEventListener('click', () => {
            navbar.classList.toggle('navbar--visible');
            navbarToggleBtn.setAttribute('aria-expanded', navbar.classList.contains('navbar--visible'));
        });
    }


    // --- Copy to Clipboard (with visual feedback & translation) ---
    function copyTextToClipboard(textToCopy, nameOfObject, clickedElement) {
        if (!textToCopy) return;
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    if (clickedElement) {
                        const originalText = clickedElement.textContent;
                        const currentLang = getCurrentLanguage(); // Get current language
                        const copiedText = translations.copiedFeedback?.[currentLang] || translations.copiedFeedback?.['en'] || 'Copied!'; // Get translated text or fallback

                        clickedElement.textContent = copiedText; // Show translated feedback
                        clickedElement.style.opacity = '0.7';
                        setTimeout(() => {
                            // Only revert if the text is still the "Copied!" message
                            // This prevents reverting if the language was switched during the timeout
                            const stillCopiedText = translations.copiedFeedback?.[getCurrentLanguage()] || translations.copiedFeedback?.['en'] || 'Copied!';
                            if (clickedElement.textContent === stillCopiedText) {
                                clickedElement.textContent = originalText;
                            }
                            clickedElement.style.opacity = '1';
                        }, 1500);
                    }
                })
                .catch(err => {
                    console.error(`Copy failed: `, err);
                    alert("Copying failed. Please try again."); // Simple error alert
                });
        } else {
            alert("Copying not supported/allowed in this context.");
        }
    }

    // --- Email Button Logic ---
    const emailButton = document.getElementById('email-button');
    if (emailButton) {
        emailButton.addEventListener('click', () => {
            const emailAddress = emailButton.getAttribute('data-copy-text');
            if (isMobileDevice()) window.location.href = `mailto:${emailAddress}`;
            else copyTextToClipboard(emailAddress, 'Email', emailButton);
        });
    }

    // --- Phone Link Logic ---
    const phoneLink = document.getElementById('phone-link');
    if (phoneLink) {
        phoneLink.addEventListener('click', (event) => {
            if (!isMobileDevice()) {
                event.preventDefault();
                const phoneNumber = phoneLink.getAttribute('data-phone-number');
                if (phoneNumber) copyTextToClipboard(phoneNumber, 'Phone Number', phoneLink);
            }
            // On mobile, default 'tel:' behavior is allowed
        });
    }


    // --- Intersection Observer for Appear Animation ---
    const appearClassName = "appear-object";
    const animationClassName = "appear-animation";
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add(animationClassName);
            // else entry.target.classList.remove(animationClassName); // Optional: remove if scrolls out
        });
    }, { threshold: 0.1 });
    const elementsToObserve = document.querySelectorAll('.' + appearClassName);
    elementsToObserve.forEach(element => observer.observe(element));


    // --- Scroll Effects ---
    function clamp(minNumber, maxNumber, number) {
        return Math.max(minNumber, Math.min(number, maxNumber));
    }

    function moveElementOnScroll(element) {
        if (!element) return;
        const elementRect = element.getBoundingClientRect();
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        const elementCenterRelativeToViewport = elementRect.top + elementHeight / 2;
        const viewportCenter = windowHeight / 2;
        const centerDifference = elementCenterRelativeToViewport - viewportCenter;
        const parallaxRatio = -0.45; // Speed
        let translate = centerDifference * parallaxRatio;

        // *** ADJUSTED CLAMPING TO PREVENT OVERLAP ***
        // Limit how far UP the image can move (negative translate)
        const maxMoveUp = -200; // Pixels. Try -50, -80, -120 etc. to find the best value
        const maxMoveDown = 200; // Limit downward movement (optional)
        translate = clamp(maxMoveUp, maxMoveDown, translate);

        element.style.transform = `translate3d(0, ${translate}px, 0)`;
    }

    const photosToMove = document.querySelectorAll('.Photo');
    const elementsToFade = document.querySelectorAll('.fadeOutOnScroll'); // Keep if fade effect is wanted
    let ticking = false;
    function scrollHandler() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // if (elementsToFade.length > 0) elementsToFade.forEach(fadeOutOnScroll); // Uncomment fade if used
                if (photosToMove.length > 0) photosToMove.forEach(moveElementOnScroll);
                ticking = false;
            });
            ticking = true;
        }
    }
    if (elementsToFade.length > 0 || photosToMove.length > 0) {
        window.addEventListener('scroll', scrollHandler, { passive: true });
    }

    // --- Other Initializations ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

}); // End DOMContentLoaded