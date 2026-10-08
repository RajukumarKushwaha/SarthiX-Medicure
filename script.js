(() => {
  function initSmoothReveal() {
    const elements = document.querySelectorAll(".reveal");

    // Keep content visible if animations are unsupported.
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 30px 0px"
      }
    );

    elements.forEach((element) => {
      element.classList.add("reveal-ready");
      observer.observe(element);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initSmoothReveal,
      { once: true }
    );
  } else {
    initSmoothReveal();
  }
})();

(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const hindiTranslations = {
    "Accessibility and language controls": "सुगम्यता और भाषा विकल्प",
    "Language": "भाषा",
    "Background theme": "पृष्ठभूमि थीम",
    "Navy": "नेवी",
    "Dark": "डार्क",
    "White": "सफेद",
    "Increase text size": "अक्षर बड़े करें",
    "Decrease text size": "अक्षर छोटे करें",
    "Accessibility options: Accessible Healthcare for Better India": "सुगम्यता विकल्प: बेहतर भारत के लिए सुलभ स्वास्थ्य सेवा",
    "Accessibility": "सुगम्यता",
    "SarthiX-Medicure home": "SarthiX-Medicure का मुख्य पृष्ठ",
    "SarthiX-Medicure | Healthcare for a Healthier Tomorrow": "SarthiX-Medicure | स्वस्थ कल के लिए स्वास्थ्य सेवा",
    "SarthiX-Medicure — healthcare made simpler, smarter and more accessible.": "SarthiX-Medicure — स्वास्थ्य सेवा को आसान, बेहतर और सभी के लिए सुलभ बनाए।",
    "— Caring for every step of your health —": "— सेहत की हर बात, अपनों के साथ —",
    "Text size": "अक्षरों का आकार",
    "CONNECT": "जुड़ें",
    "CARE": "देखभाल",
    "HEAL": "स्वस्थ हों",
    "Key services": "मुख्य सेवाएँ",
    "Book Appointments": "अपॉइंटमेंट बुक करें",
    "Find the right doctor, near you.": "अपने पास सही डॉक्टर खोजें।",
    "Consult Doctors": "डॉक्टर से परामर्श लें",
    "Expert advice, anytime.": "कभी भी विशेषज्ञ सलाह पाएँ।",
    "Medicine & Reports": "दवाइयाँ और रिपोर्ट",
    "Check prices, verify authenticity.": "कीमत जाँचें, असलियत परखें।",
    "AI Health Assistant": "AI स्वास्थ्य सहायक",
    "Understand your reports & medicines.": "अपनी रिपोर्ट और दवाइयाँ समझें।",
    "Trust highlights": "विश्वास की बातें",
    "Secure": "सुरक्षित",
    "Trusted": "विश्वसनीय",
    "Privacy First": "गोपनीयता सर्वोपरि",
    "Accessible Healthcare": "सुलभ स्वास्थ्य सेवा",
    "Welcome to": "स्वागत है",
    "Choose how you want to continue": "आगे बढ़ने का तरीका चुनें",
    "Choose account type": "खाते का प्रकार चुनें",
    "Sign in method": "लॉगिन का तरीका",
    "Patient": "मरीज़",
    "Doctor": "डॉक्टर",
    "Book appointments,": "अपॉइंटमेंट बुक करें,",
    "track health, get support": "सेहत का ध्यान रखें, सहायता पाएँ",
    "Manage patients,": "मरीज़ों का प्रबंधन करें,",
    "prescriptions & more": "प्रिस्क्रिप्शन और अन्य सेवाएँ",
    "Password": "पासवर्ड",
    "Enter your password": "अपना पासवर्ड दर्ज करें",
    "Mobile OTP": "मोबाइल OTP",
    "Show password": "पासवर्ड दिखाएँ",
    "Hide password": "पासवर्ड छिपाएँ",
    "Password requirements": "पासवर्ड की ज़रूरतें",
    "At least 8 characters": "कम-से-कम 8 अक्षर",
    "At least 1 uppercase letter": "कम-से-कम 1 बड़ा अंग्रेज़ी अक्षर",
    "At least 1 special character": "कम-से-कम 1 विशेष चिह्न",
    "At least 3 numbers": "कम-से-कम 3 अंक",
    "6-digit OTP": "6 अंकों का OTP",
    "Enter 6-digit OTP": "6 अंकों का OTP दर्ज करें",
    "Remember me": "मुझे याद रखें",
    "Forgot password?": "पासवर्ड भूल गए?",
    "Email or Mobile Number": "ईमेल या मोबाइल नंबर",
    "Your information is protected": "आपकी जानकारी सुरक्षित है",
    "Continue": "आगे बढ़ें",
    "Send OTP": "OTP भेजें",
    "New here?": "यहाँ नए हैं?",
    "Create your account": "अपना खाता बनाएँ",
    "SarthiX values": "SarthiX के मूल्य",
    "Quality": "गुणवत्ता",
    "Healthcare": "स्वास्थ्य सेवा",
    "for Everyone": "सभी के लिए",
    "Helping": "मददगार",
    "Hands": "हाथ",
    "Stronger": "मज़बूत",
    "Communities": "समुदाय",
    "Healthier": "स्वस्थ",
    "Future": "भविष्य",
    "Close": "बंद करें",
    "High contrast": "हाई कॉन्ट्रास्ट",
    "Reduce motion": "एनिमेशन कम करें",
    "Reset your password": "पासवर्ड रीसेट करें",
    "Enter your registered email or mobile number. Your backend can connect this form to the real password-reset flow.": "अपना रजिस्टर्ड ईमेल या मोबाइल नंबर दर्ज करें। असली पासवर्ड रीसेट के लिए इसे बैकएंड से जोड़ना होगा।",
    "Send reset link": "रीसेट लिंक भेजें",
    "Email address": "ईमेल पता",
    "Mobile number": "मोबाइल नंबर",
    "Full name": "पूरा नाम",
    "Your full name": "अपना पूरा नाम",
    "you@example.com": "you@example.com",
    "10-digit mobile number": "10 अंकों का मोबाइल नंबर",
    "Enter exactly 10 digits.": "ठीक 10 अंक दर्ज करें।",
    "Enter a valid email address containing @.": "@ सहित सही ईमेल पता दर्ज करें।",
    "Date of birth": "जन्म तिथि",
    "Gender": "लिंग",
    "Select gender": "लिंग चुनें",
    "Female": "महिला",
    "Male": "पुरुष",
    "Other": "अन्य",
    "Prefer not to say": "बताना नहीं चाहते",
    "Create a strong password": "मज़बूत पासवर्ड बनाएँ",
    "Confirm password": "पासवर्ड की पुष्टि करें",
    "Enter your password again": "पासवर्ड फिर से दर्ज करें",
    "Passwords do not match.": "पासवर्ड मेल नहीं खाते।",
    "Meet all password requirements listed below.": "नीचे दी गई पासवर्ड की सभी शर्तें पूरी करें।",
    "Create patient account": "मरीज़ का खाता बनाएँ",
    "Create doctor account": "डॉक्टर का खाता बनाएँ",
    "Your details are only validated in this demo; account creation needs a secure backend.": "इस डेमो में केवल जानकारी जाँची जाती है; खाता बनाने के लिए सुरक्षित बैकएंड ज़रूरी है।",
    "Details are validated in this demo only. Account creation and license verification need a secure backend.": "इस डेमो में केवल जानकारी जाँची जाती है। खाता बनाने और लाइसेंस सत्यापित करने के लिए सुरक्षित बैकएंड ज़रूरी है।",
    "← Choose account type": "← खाते का प्रकार चुनें",
    "← Back to account type": "← खाते के प्रकार पर वापस जाएँ",
    "← Back to login": "← लॉगिन पर वापस जाएँ",
    "Which account would you like to register?": "आप किस प्रकार का खाता बनाना चाहते हैं?",
    "Book appointments and manage your health": "अपॉइंटमेंट बुक करें और अपनी सेहत सँभालें",
    "Register with your medical and clinic details": "अपनी चिकित्सा और क्लिनिक की जानकारी से रजिस्टर करें",
    "Create your patient account": "मरीज़ का खाता बनाएँ",
    "Enter your details to get started with SarthiX-Medicure.": "SarthiX-Medicure शुरू करने के लिए अपनी जानकारी दर्ज करें।",
    "Create your doctor account": "डॉक्टर का खाता बनाएँ",
    "Enter your professional and contact details to get started.": "शुरू करने के लिए अपनी पेशेवर और संपर्क जानकारी दर्ज करें।",
    "Medical registration number": "चिकित्सा पंजीकरण संख्या",
    "Medical council registration number": "मेडिकल काउंसिल पंजीकरण संख्या",
    "Specialization": "विशेषज्ञता",
    "Select specialization": "विशेषज्ञता चुनें",
    "General Medicine": "जनरल मेडिसिन",
    "Cardiology": "हृदय रोग",
    "Dermatology": "त्वचा रोग",
    "Gynecology": "स्त्री रोग",
    "Pediatrics": "बाल रोग",
    "Orthopedics": "हड्डी रोग",
    "Ophthalmology": "नेत्र रोग",
    "Highest medical qualification": "उच्चतम चिकित्सा योग्यता",
    "e.g. MBBS, MD": "जैसे MBBS, MD",
    "Years of experience": "अनुभव (वर्षों में)",
    "Clinic or hospital": "क्लिनिक या अस्पताल",
    "Clinic or hospital name": "क्लिनिक या अस्पताल का नाम",
    "Back to account type": "खाते के प्रकार पर वापस जाएँ",
    "Back to login": "लॉगिन पर वापस जाएँ",
    "Appointment booking can be connected to your doctor availability and scheduling API.": "अपॉइंटमेंट बुकिंग को डॉक्टर की उपलब्धता और शेड्यूलिंग API से जोड़ा जा सकता है।",
    "Doctor discovery can be connected to profiles, specialties, location and consultation availability.": "डॉक्टर खोज को प्रोफ़ाइल, विशेषज्ञता, स्थान और परामर्श उपलब्धता से जोड़ा जा सकता है।",
    "Medicine & reports can connect to your existing upload, explanation and verification workflows.": "दवाइयों और रिपोर्ट को अपलोड, समझाने और सत्यापन की मौजूदा प्रक्रिया से जोड़ा जा सकता है।",
    "The AI Health Assistant can connect to your approved AI service and existing healthcare workflows.": "AI स्वास्थ्य सहायक को अनुमोदित AI सेवा और मौजूदा स्वास्थ्य प्रक्रियाओं से जोड़ा जा सकता है।",
    "Feature selected.": "फ़ीचर चुना गया।",
    "Patient mode selected": "मरीज़ मोड चुना गया",
    "Doctor mode selected": "डॉक्टर मोड चुना गया",
    "Enter a valid email address or 10-digit mobile number.": "सही ईमेल पता या 10 अंकों का मोबाइल नंबर दर्ज करें।",
    "Enter a valid 6-digit OTP.": "सही 6 अंकों का OTP दर्ज करें।",
    "OTP request ready — connect this action to your authentication API.": "OTP अनुरोध तैयार है — इसे authentication API से जोड़ें।",
    "Login form validated — connect this action to your authentication API.": "लॉगिन फ़ॉर्म जाँचा गया — इसे authentication API से जोड़ें।",
    "Reset request ready for backend integration.": "रीसेट अनुरोध तैयार है; इसे बैकएंड से जोड़ें।",
    "Patient details validated. Connect account creation to a secure registration service.": "मरीज़ की जानकारी जाँची गई। खाता बनाने के लिए सुरक्षित रजिस्ट्रेशन सेवा जोड़ें।",
    "Doctor details validated. Connect account creation and license verification to a secure registration service.": "डॉक्टर की जानकारी जाँची गई। खाता बनाने और लाइसेंस सत्यापन के लिए सुरक्षित रजिस्ट्रेशन सेवा जोड़ें।"
  };
  const englishTranslations = new Map(
    Object.entries(hindiTranslations).map(([english, hindi]) => [hindi, english])
  );
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let currentLanguage = "en";
  const languageSelect = $("#languageSelect");
  const themeSelect = $("#themeSelect");
  const brandTagline = $(".brand-tagline");

  function translated(value, language = currentLanguage) {
    if (language === "hi") return hindiTranslations[value] || value;
    return englishTranslations.get(value) || value;
  }

  function translatePage(language, updateHero = true) {
    const languageChanged = currentLanguage !== language;
    currentLanguage = language;
    document.documentElement.lang = language;
    brandTagline.lang = language;
    languageSelect.value = language;
    document.title = translated("SarthiX-Medicure | Healthcare for a Healthier Tomorrow", language);
    $('meta[name="description"]').content = translated(
      "SarthiX-Medicure — healthcare made simpler, smarter and more accessible.",
      language
    );

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const changedElements = new Set();
    let textNode;
    while ((textNode = walker.nextNode())) {
      if (textNode.parentElement.closest("#heroTitle, #heroDescription")) continue;
      if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue);
      const source = originalText.get(textNode);
      const leading = source.match(/^\s*/)[0];
      const trailing = source.match(/\s*$/)[0];
      const content = source.slice(leading.length, source.length - trailing.length || undefined);
      const localizedContent = translated(content, language);
      textNode.nodeValue = `${leading}${localizedContent}${trailing}`;
      if (languageChanged && localizedContent !== content) {
        changedElements.add(textNode.parentElement);
      }
    }

    const attributeNames = ["aria-label", "placeholder", "title"];
    $$("*").forEach(element => {
      attributeNames.forEach(name => {
        if (!element.hasAttribute(name)) return;
        let attributes = originalAttributes.get(element);
        if (!attributes) {
          attributes = new Map();
          originalAttributes.set(element, attributes);
        }
        if (!attributes.has(name)) attributes.set(name, element.getAttribute(name));
        const localizedAttribute = translated(attributes.get(name), language);
        if (languageChanged && localizedAttribute !== element.getAttribute(name)) {
          changedElements.add(element);
        }
        element.setAttribute(name, localizedAttribute);
      });
    });
    changedElements.forEach(element => {
      element.classList.remove("language-change");
      void element.offsetWidth;
      element.classList.add("language-change");
    });
    updateIdentityInputMode(identityInput, identityIcon, identityPhonePrefix);
    const activeRegistrationForm = $("#patientRegistrationForm, #doctorRegistrationForm", modalContent);
    activeRegistrationForm?.dispatchEvent(new Event("sarthix-language-change"));
    if (toast.classList.contains("show") && toast.dataset.message) {
      toast.textContent = translated(toast.dataset.message, language);
    }
    if (updateHero) setHeroLanguage(language);
  }

  const themes = {
    navy: {
      start: "#071a38",
      middle: "#0b2d5b",
      end: "#124779",
      glowOne: "rgba(35,151,226,.28)",
      glowTwo: "rgba(22,178,153,.2)",
      ambientOne: "rgba(35,151,226,.24)",
      ambientTwo: "rgba(22,178,153,.18)"
    },
    dark: {
      start: "#10131b",
      middle: "#1b202b",
      end: "#292f3b",
      glowOne: "rgba(109,127,164,.2)",
      glowTwo: "rgba(94,112,144,.17)",
      ambientOne: "rgba(109,127,164,.18)",
      ambientTwo: "rgba(94,112,144,.15)"
    },
    white: {
      start: "#ffffff",
      middle: "#f5fbff",
      end: "#eefaff",
      glowOne: "rgba(94,203,255,.18)",
      glowTwo: "rgba(110,238,198,.16)",
      ambientOne: "rgba(128,207,255,.18)",
      ambientTwo: "rgba(90,227,184,.14)"
    }
  };

  function setTheme(theme) {
    const palette = themes[theme];
    if (!palette) return;
    document.body.dataset.theme = theme;
    document.body.style.setProperty("--page-start", palette.start);
    document.body.style.setProperty("--page-middle", palette.middle);
    document.body.style.setProperty("--page-end", palette.end);
    document.body.style.setProperty("--page-glow-one", palette.glowOne);
    document.body.style.setProperty("--page-glow-two", palette.glowTwo);
    document.body.style.setProperty("--ambient-one", palette.ambientOne);
    document.body.style.setProperty("--ambient-two", palette.ambientTwo);
    themeSelect.value = theme;
  }

  themeSelect.addEventListener("change", event => {
    setTheme(event.target.value);
  });
  setTheme(themeSelect.value);

  const toast = $("#toast");
  let toastTimer;

  function showToast(message) {
    toast.dataset.message = message;
    toast.textContent = translated(message);
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  // Role selection
  $$(".role-card").forEach(card => {
    card.addEventListener("click", () => {
      $$(".role-card").forEach(item => {
        const selected = item === card;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-checked", String(selected));
        const check = $(".role-check", item);
        if (check) check.textContent = selected ? "✓" : "";
      });
      showToast(`${card.dataset.role === "doctor" ? "Doctor" : "Patient"} mode selected`);
    });
  });

  // Password visibility
  const password = $("#password");
  const togglePassword = $("#togglePassword");
  togglePassword.addEventListener("click", () => {
    const visible = password.type === "text";
    password.type = visible ? "password" : "text";
    togglePassword.setAttribute("aria-label", translated(visible ? "Show password" : "Hide password"));
    togglePassword.textContent = visible ? "◉" : "◎";
  });

  // Login method
  $$(".auth-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".auth-tab").forEach(item => {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });

      const otpMode = tab.dataset.auth === "otp";
      $("#passwordField").classList.toggle("hidden", otpMode);
      $("#passwordOptions").classList.toggle("hidden", otpMode);
      $("#otpField").classList.toggle("hidden", !otpMode);

      password.required = !otpMode;
      $("#otp").required = otpMode;
      $("#continueText").textContent = translated(otpMode ? "Send OTP" : "Continue");
    });
  });

  function setError(fieldId, errorId, message) {
    const field = $(`#${fieldId}`)?.closest(".field");
    const error = $(`#${errorId}`);
    if (!field || !error) return;
    field.classList.toggle("invalid", Boolean(message));
    error.textContent = message ? translated(message) : "";
  }

  function validIdentity(value) {
    const trimmed = value.trim();
    if (!trimmed) return false;
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone = /^\d{10}$/;
    return email.test(trimmed) || phone.test(value);
  }

  function limitPhoneDigits(input) {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 10);
    });
  }

  function limitNumericIdentity(input) {
    input.addEventListener("input", () => {
      if (/^\d+$/.test(input.value) && input.value.length > 10) {
        input.value = input.value.slice(0, 10);
      }
    });
  }

  function updateIdentityInputMode(input, icon, prefix) {
    const isPhoneNumber = /^\d+$/.test(input.value);
    icon.classList.toggle("hidden", isPhoneNumber);
    prefix.classList.toggle("hidden", !isPhoneNumber);
    input.placeholder = translated(
      isPhoneNumber ? "10-digit mobile number" : "Email or Mobile Number"
    );
  }

  function passwordRequirementStatus(value) {
    return {
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      special: /[^A-Za-z0-9]/.test(value),
      digits: (value.match(/\d/g) || []).length >= 3
    };
  }

  function updatePasswordChecklist(passwordField, checklist) {
    const checks = passwordRequirementStatus(passwordField.value);
    Object.entries(checks).forEach(([requirement, passed]) => {
      const item = $(`[data-password-check="${requirement}"]`, checklist);
      item.classList.toggle("passed", passed);
      item.setAttribute("aria-checked", String(passed));
    });
    return Object.values(checks).every(Boolean);
  }

  // Login form
  const identityInput = $("#identity");
  const identityIcon = $("#identityIcon");
  const identityPhonePrefix = $("#identityPhonePrefix");

  limitNumericIdentity(identityInput);
  identityInput.addEventListener("input", () => {
    updateIdentityInputMode(identityInput, identityIcon, identityPhonePrefix);
    setError("identity", "identityError", "");
  });
  identityInput.addEventListener("blur", () => {
    if (identityInput.value && !validIdentity(identityInput.value)) {
      setError("identity", "identityError", "Enter a valid email address or 10-digit mobile number.");
    }
  });
  updateIdentityInputMode(identityInput, identityIcon, identityPhonePrefix);
  const loginPasswordChecklist = $("#loginPasswordChecklist");
  password.addEventListener("input", () => {
    updatePasswordChecklist(password, loginPasswordChecklist);
    setError("password", "passwordError", "");
  });
  updatePasswordChecklist(password, loginPasswordChecklist);

  $("#loginForm").addEventListener("submit", event => {
    event.preventDefault();

    const identity = $("#identity").value;
    const otpMode = !$("#otpField").classList.contains("hidden");
    let valid = true;

    if (!validIdentity(identity)) {
      setError("identity", "identityError", "Enter a valid email address or 10-digit mobile number.");
      valid = false;
    } else {
      setError("identity", "identityError", "");
    }

    if (otpMode) {
      const otp = $("#otp").value.trim();
      if (!/^\d{6}$/.test(otp)) {
        setError("otp", "otpError", "Enter a valid 6-digit OTP.");
        valid = false;
      } else {
        setError("otp", "otpError", "");
      }
    } else {
      if (!updatePasswordChecklist(password, loginPasswordChecklist)) {
        setError("password", "passwordError", "Meet all password requirements listed below.");
        valid = false;
      } else {
        setError("password", "passwordError", "");
      }
    }

    if (!valid) return;

    const btn = $("#continueBtn");
    btn.classList.add("loading");
    setTimeout(() => {
      btn.classList.remove("loading");
      showToast(otpMode
        ? "OTP request ready — connect this action to your authentication API."
        : "Login form validated — connect this action to your authentication API.");
    }, 900);
  });

  // Forgot password modal
  const modal = $("#modal");
  const modalContent = $("#modalContent");

  function openModal(content, variant = "") {
    modal.classList.toggle("registration-modal", variant === "registration");
    modalContent.innerHTML = content;
    translatePage(currentLanguage, false);
    if (typeof modal.showModal === "function") {
      if (!modal.open) modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }

  $("#forgotPassword").addEventListener("click", () => {
    openModal(`
      <h3>Reset your password</h3>
      <p>Enter your registered email or mobile number. Your backend can connect this form to the real password-reset flow.</p>
      <form id="resetForm">
        <div class="input-wrap phone-input-wrap">
          <span class="input-icon" id="resetIdentityIcon" aria-hidden="true">✉</span>
          <span class="phone-prefix hidden" id="resetIdentityPrefix" aria-hidden="true">
            <svg class="phone-icon" viewBox="0 0 24 24" focusable="false">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91
          </span>
          <input type="text" id="resetIdentity" placeholder="Email or Mobile Number" required>
        </div>
        <button class="primary" type="submit">Send reset link</button>
      </form>
    `);
    const resetIdentity = $("#resetIdentity");
    const resetIdentityIcon = $("#resetIdentityIcon");
    const resetIdentityPrefix = $("#resetIdentityPrefix");
    resetIdentity.addEventListener("input", () => {
      updateIdentityInputMode(resetIdentity, resetIdentityIcon, resetIdentityPrefix);
    });
    limitNumericIdentity(resetIdentity);
    updateIdentityInputMode(resetIdentity, resetIdentityIcon, resetIdentityPrefix);
    $("#resetForm").addEventListener("submit", event => {
      event.preventDefault();
      modal.close();
      showToast("Reset request ready for backend integration.");
    });
    $("#resetIdentity").focus();
  });

  function configureRegistrationValidation({
    formId, phoneId, emailId, passwordId, confirmId, checklistId, nameId, successMessage
  }) {
    const form = $(`#${formId}`);
    const phone = $(`#${phoneId}`);
    const email = $(`#${emailId}`);
    const passwordField = $(`#${passwordId}`);
    const confirmField = $(`#${confirmId}`);
    const checklist = $(`#${checklistId}`);

    limitPhoneDigits(phone);

    function validatePhone() {
      phone.setCustomValidity(/^\d{10}$/.test(phone.value) ? "" : translated("Enter exactly 10 digits."));
    }

    function validateEmail() {
      email.setCustomValidity(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
        ? ""
        : translated("Enter a valid email address containing @."));
    }

    function refreshPasswordChecklist() {
      passwordField.setCustomValidity(updatePasswordChecklist(passwordField, checklist)
        ? ""
        : translated("Meet all password requirements listed below."));
    }

    function validateConfirmation() {
      confirmField.setCustomValidity(
        passwordField.value === confirmField.value ? "" : translated("Passwords do not match.")
      );
    }

    form.addEventListener("sarthix-language-change", () => {
      if (phone.validity.customError) validatePhone();
      if (email.validity.customError) validateEmail();
      if (passwordField.validity.customError) refreshPasswordChecklist();
      if (confirmField.validity.customError) validateConfirmation();
    });
    phone.addEventListener("input", validatePhone);
    email.addEventListener("input", validateEmail);
    passwordField.addEventListener("input", () => {
      refreshPasswordChecklist();
      validateConfirmation();
    });
    confirmField.addEventListener("input", validateConfirmation);
    form.addEventListener("submit", event => {
      event.preventDefault();
      validatePhone();
      validateEmail();
      refreshPasswordChecklist();
      validateConfirmation();
      if (!form.reportValidity()) return;
      modal.close();
      showToast(successMessage);
    });

    refreshPasswordChecklist();
    $(`#${nameId}`).focus();
  }

  function showPatientRegistration() {
    modalContent.innerHTML = `
      <h3>Create your patient account</h3>
      <p>Enter your details to get started with SarthiX-Medicure.</p>
      <button class="registration-back" type="button" id="registrationBack">← Choose account type</button>
      <form id="patientRegistrationForm">
        <label for="patientName">Full name</label>
        <input id="patientName" name="name" type="text" autocomplete="name" placeholder="Your full name" required>
        <label for="patientEmail">Email address</label>
        <input id="patientEmail" name="email" type="email" autocomplete="email"
               pattern="[^\\s@]+@[^\\s@]+\\.[^\\s@]+"
               placeholder="you@example.com" required>
        <label for="patientPhone">Mobile number</label>
        <div class="input-wrap phone-input-wrap">
          <span class="phone-prefix" aria-hidden="true">
            <svg class="phone-icon" viewBox="0 0 24 24" focusable="false">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91
          </span>
          <input id="patientPhone" name="phone" type="tel" autocomplete="tel"
                 inputmode="numeric" pattern="[0-9]{10}" maxlength="10"
                 title="Enter exactly 10 digits." placeholder="10-digit mobile number" required>
        </div>
        <label for="patientBirthDate">Date of birth</label>
        <input id="patientBirthDate" name="birthDate" type="date" autocomplete="bday" required>
        <label for="patientGender">Gender</label>
        <select id="patientGender" name="gender" required>
          <option value="" disabled selected>Select gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        <label for="patientPassword">Password</label>
        <input id="patientPassword" name="password" type="password" autocomplete="new-password"
               minlength="8" placeholder="Create a strong password"
               aria-describedby="patientPasswordChecklist" required>
        <ul class="password-checklist" id="patientPasswordChecklist" aria-label="Password requirements">
          <li data-password-check="length">At least 8 characters</li>
          <li data-password-check="uppercase">At least 1 uppercase letter</li>
          <li data-password-check="special">At least 1 special character</li>
          <li data-password-check="digits">At least 3 numbers</li>
        </ul>
        <label for="patientPasswordConfirm">Confirm password</label>
        <input id="patientPasswordConfirm" name="passwordConfirm" type="password" autocomplete="new-password" minlength="8" placeholder="Enter your password again" required>
        <button class="primary registration-submit" type="submit">Create patient account</button>
        <small class="registration-note" role="status">Your details are only validated in this demo; account creation needs a secure backend.</small>
      </form>
    `;
    translatePage(currentLanguage, false);

    configureRegistrationValidation({
      formId: "patientRegistrationForm",
      phoneId: "patientPhone",
      emailId: "patientEmail",
      passwordId: "patientPassword",
      confirmId: "patientPasswordConfirm",
      checklistId: "patientPasswordChecklist",
      nameId: "patientName",
      successMessage: "Patient details validated. Connect account creation to a secure registration service."
    });
    $("#registrationBack").addEventListener("click", showRegistrationChoice);
  }

  function showRegistrationChoice() {
    openModal(`
      <button class="registration-back" type="button" id="registrationLoginBack">← Back to login</button>
      <h3>Choose account type</h3>
      <p>Which account would you like to register?</p>
      <div class="registration-choices">
        <button class="registration-choice patient-choice" type="button" id="registerAsPatient">
          <span class="registration-choice-icon" aria-hidden="true">👤</span>
          <strong>Patient</strong>
          <small>Book appointments and manage your health</small>
        </button>
        <button class="registration-choice doctor-choice" type="button" id="registerAsDoctor">
          <span class="registration-choice-icon" aria-hidden="true">🩺</span>
          <strong>Doctor</strong>
          <small>Register with your medical and clinic details</small>
        </button>
      </div>
    `, "registration");
    $("#registrationLoginBack").addEventListener("click", () => modal.close());
    $("#registerAsPatient").addEventListener("click", showPatientRegistration);
    $("#registerAsDoctor").addEventListener("click", showDoctorRegistration);
  }

  function showDoctorRegistration() {
    modalContent.innerHTML = `
      <button class="registration-back" type="button" id="doctorRegistrationBack">← Choose account type</button>
      <h3>Create your doctor account</h3>
      <p>Enter your professional and contact details to get started.</p>
      <form id="doctorRegistrationForm">
        <label for="doctorName">Full name</label>
        <input id="doctorName" name="name" type="text" autocomplete="name" placeholder="Your full name" required>
        <label for="doctorEmail">Email address</label>
        <input id="doctorEmail" name="email" type="email" autocomplete="email"
               pattern="[^\\s@]+@[^\\s@]+\\.[^\\s@]+"
               placeholder="you@example.com" required>
        <label for="doctorPhone">Mobile number</label>
        <div class="input-wrap phone-input-wrap">
          <span class="phone-prefix" aria-hidden="true">
            <svg class="phone-icon" viewBox="0 0 24 24" focusable="false">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91
          </span>
          <input id="doctorPhone" name="phone" type="tel" autocomplete="tel"
                 inputmode="numeric" pattern="[0-9]{10}" maxlength="10"
                 title="Enter exactly 10 digits." placeholder="10-digit mobile number" required>
        </div>
        <label for="doctorRegistrationNumber">Medical registration number</label>
        <input id="doctorRegistrationNumber" name="registrationNumber" type="text" autocomplete="off" placeholder="Medical council registration number" required>
        <label for="doctorSpecialty">Specialization</label>
        <select id="doctorSpecialty" name="specialty" required>
          <option value="" disabled selected>Select specialization</option>
          <option>General Medicine</option>
          <option>Cardiology</option>
          <option>Dermatology</option>
          <option>Gynecology</option>
          <option>Pediatrics</option>
          <option>Orthopedics</option>
          <option>Ophthalmology</option>
          <option>Other</option>
        </select>
        <label for="doctorQualification">Highest medical qualification</label>
        <input id="doctorQualification" name="qualification" type="text" placeholder="e.g. MBBS, MD" required>
        <label for="doctorExperience">Years of experience</label>
        <input id="doctorExperience" name="experience" type="number" min="0" max="80" step="1" inputmode="numeric" placeholder="Years of experience" required>
        <label for="doctorClinic">Clinic or hospital</label>
        <input id="doctorClinic" name="clinic" type="text" autocomplete="organization" placeholder="Clinic or hospital name" required>
        <label for="doctorPassword">Password</label>
        <input id="doctorPassword" name="password" type="password" autocomplete="new-password"
               minlength="8" placeholder="Create a strong password"
               aria-describedby="doctorPasswordChecklist" required>
        <ul class="password-checklist" id="doctorPasswordChecklist" aria-label="Password requirements">
          <li data-password-check="length">At least 8 characters</li>
          <li data-password-check="uppercase">At least 1 uppercase letter</li>
          <li data-password-check="special">At least 1 special character</li>
          <li data-password-check="digits">At least 3 numbers</li>
        </ul>
        <label for="doctorPasswordConfirm">Confirm password</label>
        <input id="doctorPasswordConfirm" name="passwordConfirm" type="password" autocomplete="new-password" minlength="8" placeholder="Enter your password again" required>
        <button class="primary registration-submit" type="submit">Create doctor account</button>
        <small class="registration-note" role="status">Details are validated in this demo only. Account creation and license verification need a secure backend.</small>
      </form>
    `;
    translatePage(currentLanguage, false);

    $("#doctorRegistrationBack").addEventListener("click", showRegistrationChoice);
    configureRegistrationValidation({
      formId: "doctorRegistrationForm",
      phoneId: "doctorPhone",
      emailId: "doctorEmail",
      passwordId: "doctorPassword",
      confirmId: "doctorPasswordConfirm",
      checklistId: "doctorPasswordChecklist",
      nameId: "doctorName",
      successMessage: "Doctor details validated. Connect account creation and license verification to a secure registration service."
    });
  }

  $("#createAccount").addEventListener("click", () => {
    showRegistrationChoice();
  });

  $("#modalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("close", () => modal.classList.remove("registration-modal"));

  // Feature cards
  const featureMessages = {
    appointments: "Appointment booking can be connected to your doctor availability and scheduling API.",
    doctors: "Doctor discovery can be connected to profiles, specialties, location and consultation availability.",
    medicine: "Medicine & reports can connect to your existing upload, explanation and verification workflows.",
    assistant: "The AI Health Assistant can connect to your approved AI service and existing healthcare workflows."
  };

  $$(".feature-card").forEach(card => {
    card.addEventListener("click", () => showToast(featureMessages[card.dataset.feature] || "Feature selected."));
  });

  // Font controls
  let scale = 1;
  $("#fontIncrease").addEventListener("click", () => {
    scale = Math.min(1.16, +(scale + 0.04).toFixed(2));
    document.documentElement.style.setProperty("--scale", scale);
  });
  $("#fontDecrease").addEventListener("click", () => {
    scale = Math.max(.9, +(scale - 0.04).toFixed(2));
    document.documentElement.style.setProperty("--scale", scale);
  });

  // The selected language applies to the full interface.
  const heroTitle = $("#heroTitle");
  const heroDescription = $("#heroDescription");
  const heroCopy = {
    en: {
      title: [
        { text: "Healthcare for a" },
        { text: "Healthier", accent: true },
        { text: "Tomorrow" }
      ],
      description: "SarthiX-Medicure connects patients, doctors and healthcare services to make healthcare simpler, smarter and more accessible for everyone."
    },
    hi: {
      title: [
        { text: "स्वस्थ कल के लिए" },
        { text: "स्वास्थ्य सेवा", accent: true }
      ],
      description: "SarthiX-Medicure मरीजों, डॉक्टरों और स्वास्थ्य सेवाओं को जोड़ता है, ताकि स्वास्थ्य सेवा सभी के लिए सरल, स्मार्ट और सुलभ हो।"
    }
  };
  let heroLanguage = "en";
  let heroAnimationTimer;

  function appendAnimatedLetters(text, parent, letterIndex) {
    const graphemes = "Segmenter" in Intl
      ? [...new Intl.Segmenter(heroLanguage, { granularity: "grapheme" }).segment(text)].map(part => part.segment)
      : Array.from(text);

    graphemes.forEach(grapheme => {
      if (grapheme === " ") {
        parent.append(document.createTextNode(" "));
        return;
      }
      const letter = document.createElement("span");
      letter.className = "hero-letter";
      letter.setAttribute("aria-hidden", "true");
      letter.style.setProperty("--letter-index", letterIndex.value++);
      letter.textContent = grapheme;
      parent.append(letter);
    });
  }

  function setHeroLanguage(language) {
    heroLanguage = language;
    const copy = heroCopy[language];
    const accessibleTitle = copy.title.map(part => part.text).join(" ");
    heroTitle.replaceChildren();
    heroTitle.setAttribute("aria-label", accessibleTitle);
    const letterIndex = { value: 0 };
    copy.title.forEach((part, index) => {
      if (index > 0) {
        const lineBreak = document.createElement("br");
        lineBreak.setAttribute("aria-hidden", "true");
        heroTitle.append(lineBreak);
      }
      const line = document.createElement("span");
      line.setAttribute("aria-hidden", "true");
      const target = part.accent ? document.createElement("span") : line;
      if (part.accent) {
        target.classList.add("hero-title-accent");
        line.append(target);
      }
      appendAnimatedLetters(part.text, target, letterIndex);
      heroTitle.append(line);
    });
    heroDescription.replaceChildren();
    heroDescription.setAttribute("aria-label", copy.description);
    appendAnimatedLetters(copy.description, heroDescription, { value: 0 });
    heroTitle.lang = language;
    heroDescription.lang = language;

    heroTitle.classList.remove("hero-language-change");
    void heroTitle.offsetWidth;
    heroTitle.classList.add("hero-language-change");
  }

  function scheduleHeroAnimation() {
    clearTimeout(heroAnimationTimer);
    heroAnimationTimer = setTimeout(() => {
      const reduceMotion = document.body.classList.contains("reduced-motion")
        || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduceMotion) setHeroLanguage(heroLanguage);
      scheduleHeroAnimation();
    }, 5000);
  }

  languageSelect.addEventListener("change", event => {
    translatePage(event.target.value);
  });
  translatePage(languageSelect.value);
  scheduleHeroAnimation();

  // Accessibility menu (button ke neeche hi khulta hai, har screen size pe)
  const accessibilityBtn = $("#accessibilityBtn");
  const accessibilityMenu = $("#accessibilityMenu");

  function positionMenu() {
    const rect = accessibilityBtn.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    accessibilityMenu.style.top = `${Math.round(rect.bottom + 8)}px`;
    accessibilityMenu.style.right = `${Math.max(14, Math.round(vw - rect.right))}px`;
  }

  function closeMenu() {
    accessibilityMenu.hidden = true;
    accessibilityBtn.setAttribute("aria-expanded", "false");
  }

  accessibilityBtn.addEventListener("click", () => {
    const willOpen = accessibilityMenu.hidden;
    if (willOpen) positionMenu();
    accessibilityMenu.hidden = !willOpen;
    accessibilityBtn.setAttribute("aria-expanded", String(willOpen));
  });

  document.addEventListener("click", event => {
    if (!accessibilityMenu.hidden && !accessibilityMenu.contains(event.target) && !accessibilityBtn.contains(event.target)) closeMenu();
  });
  window.addEventListener("resize", () => { if (!accessibilityMenu.hidden) positionMenu(); });

  // Sticky header: sirf shadow toggle hota hai (size same rehta hai, page jump nahi karta)
  const topbar = $(".topbar");
  function onScroll() {
    if (topbar) topbar.classList.toggle("stuck", window.scrollY > 4);
    if (!accessibilityMenu.hidden) positionMenu();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("#contrastToggle").addEventListener("change", event => {
    document.body.classList.toggle("high-contrast", event.target.checked);
  });

  $("#motionToggle").addEventListener("change", event => {
    document.body.classList.toggle("reduced-motion", event.target.checked);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !accessibilityMenu.hidden) {
      closeMenu();
      accessibilityBtn.focus();
    }
  });

  // Illustration scene: chhoti screen pe poora scene proportionally scale hota hai (cut/overflow nahi)
  const scene = $(".doctor-scene");
  const stage = $(".scene-stage");
  const SCENE_BASE_W = 620, SCENE_BASE_H = 285;
  setInterval(() => scene.classList.toggle("show-image"), 5000);

  function fitScene() {
    if (!scene || !stage) return;
    const w = scene.clientWidth;
    if (!w) return;
    const k = Math.min(1, w / SCENE_BASE_W);
    stage.style.width = `${w / k}px`;
    stage.style.transform = `scale(${k})`;
    scene.style.height = `${Math.round(SCENE_BASE_H * k)}px`;
  }

  if (scene && "ResizeObserver" in window) {
    new ResizeObserver(fitScene).observe(scene);
  } else {
    window.addEventListener("resize", fitScene);
  }
  fitScene();
})();
