// ---------- demo login (replace with a real server check) ----------
var DEMO_EMAIL = "rahul.sharma@gmail.com";
var DEMO_PASSWORD = "demo123";

var $ = function (id) {
  return document.getElementById(id);
};

// ---------- language ----------
var hindi = {
  "Welcome to": "आपका स्वागत है",
  "Login": "लॉगिन",
  "Email": "ईमेल",
  "Password": "पासवर्ड",
  "Enter your email and password to continue.": "आगे बढ़ने के लिए ईमेल और पासवर्ड डालें",
  "Patients, appointments, prescriptions and billing in one simple desk.": "मरीज़, अपॉइंटमेंट, पर्चे और बिलिंग, सब एक जगह"
};

$("langSel").onchange = function () {
  var lang = this.value;
  $("langLabel").textContent = lang === "hi" ? "हिं" : "EN";
  document.documentElement.lang = lang;

  var texts = [
    ["loginTitle", "Login"],
    ["loginHint", "Enter your email and password to continue."],
    ["heroText", "Patients, appointments, prescriptions and billing in one simple desk."]
  ];
  texts.forEach(function (item) {
    var el = $(item[0]);
    el.textContent = lang === "hi" ? hindi[item[1]] : item[1];
  });
};

// ---------- login ----------
$("pwToggle").onclick = function () {
  var show = $("pass").type === "password";
  $("pass").type = show ? "text" : "password";
  this.textContent = show ? "Hide" : "Show";
};

function doLogin() {
  var email = $("email").value.trim().toLowerCase();
  var password = $("pass").value;
  var msg = $("loginMsg");

  msg.className = "msg";

  if (!email || !password) {
    msg.textContent = "Please enter email and password.";
    return;
  }

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    try {
      sessionStorage.setItem("sx_login", "yes");
    } catch (err) {}
    location.href = "doctordashboard.html";
  } else {
    msg.textContent = "Wrong email or password. Try again.";
    $("pass").value = "";
  }
}

$("loginForm").onsubmit = function (e) {
  e.preventDefault();
  doLogin();
};

// Enter key in email / password also logs in
["email", "pass"].forEach(function (id) {
  $(id).addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      doLogin();
    }
  });
});

$("forgotLink").onclick = function (e) {
  e.preventDefault();
  var email = $("email").value.trim();
  var msg = $("loginMsg");
  msg.className = "msg ok";
  msg.textContent = email
    ? "Password reset link sent to " + email + " (demo)."
    : "Enter your email first, then click Forgot password.";
};

// ---------- sign up ----------
$("showSignup").onclick = function (e) {
  e.preventDefault();
  $("loginView").hidden = true;
  $("signupView").hidden = false;
};

$("showLogin").onclick = function (e) {
  e.preventDefault();
  $("signupView").hidden = true;
  $("loginView").hidden = false;
};

$("signupForm").onsubmit = function (e) {
  e.preventDefault();
  var msg = $("signupMsg");
  var pass = $("suPass").value;

  msg.className = "msg";
  if (!$("suName").value.trim() || !$("suEmail").value.trim()) {
    msg.textContent = "Please fill in your name and email.";
  } else if (pass.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
  } else if (pass !== $("suPass2").value) {
    msg.textContent = "Passwords do not match.";
  } else {
    msg.className = "msg ok";
    msg.textContent = "Account created (demo). Now login with your email and password.";
    this.reset();
  }
};

// ---------- accessibility panel ----------
var panel = $("a11yPanel");
var a11yBtn = $("a11yBtn");
var guide = $("readingGuide");
var root = document.documentElement;

var state = { zoom: 100, font: 0, cb: "none", toggles: {} };

// toggle name -> class added to <html>
var classFor = {
  darkContrast: "a11y-darkContrast",
  highlightLinks: "a11y-highlightLinks",
  hideImages: "a11y-hideImages",
  defaultCursor: "a11y-defaultCursor",
  lineSpacing: "a11y-lineSpacing",
  textSpacing: "a11y-textSpacing",
  dyslexia: "a11y-dyslexia",
  boldText: "a11y-boldText",
  highlightHeadings: "a11y-highlightHeadings",
  bigCursor: "a11y-bigCursor",
  stopAnimations: "a11y-stopAnimations",
  highlightFocus: "a11y-highlightFocus"
};

function applyA11y() {
  // zoom and font size
  document.body.style.zoom = state.zoom / 100;
  $("zoomVal").textContent = state.zoom + "%";
  root.style.fontSize = (100 + state.font * 12) + "%";

  // colour filters
  var filters = [];
  if (state.cb !== "none" && state.cb !== "highcontrast") {
    filters.push("url(#" + state.cb + ")");
  }
  if (state.cb === "highcontrast") filters.push("contrast(1.6)");
  if (state.toggles.invert) filters.push("invert(1)");
  if (state.toggles.saturation) filters.push("saturate(2.2)");
  root.style.filter = filters.join(" ");

  // classes for the on/off options
  for (var name in classFor) {
    root.classList.toggle(classFor[name], !!state.toggles[name]);
  }

  guide.hidden = !state.toggles.readingGuide;

  // highlight the selected buttons
  document.querySelectorAll("[data-cb]").forEach(function (b) {
    b.classList.toggle("on", b.dataset.cb === state.cb);
  });
  document.querySelectorAll("[data-toggle]").forEach(function (b) {
    b.classList.toggle("on", !!state.toggles[b.dataset.toggle]);
  });
}

// open / close panel
a11yBtn.onclick = function () {
  panel.hidden = !panel.hidden;
  a11yBtn.setAttribute("aria-expanded", String(!panel.hidden));
};

$("a11yClose").onclick = function () {
  panel.hidden = true;
  a11yBtn.setAttribute("aria-expanded", "false");
};

document.addEventListener("click", function (e) {
  if (!e.target.closest("#a11yPanel") && !e.target.closest("#a11yBtn")) {
    panel.hidden = true;
  }
});

// zoom buttons
document.querySelectorAll("[data-zoom]").forEach(function (btn) {
  btn.onclick = function () {
    var step = Number(this.dataset.zoom);
    if (step === 0) {
      state.zoom = 100;
    } else {
      state.zoom = Math.min(150, Math.max(70, state.zoom + step * 10));
    }
    applyA11y();
  };
});

// font size buttons (also the A+ / A- tiles)
document.querySelectorAll("[data-font]").forEach(function (btn) {
  btn.onclick = function () {
    var step = Number(this.dataset.font);
    if (step === 0) {
      state.font = 0;
    } else {
      state.font = Math.min(4, Math.max(-2, state.font + step));
    }
    applyA11y();
  };
});

// colour blind chips
document.querySelectorAll("[data-cb]").forEach(function (btn) {
  btn.onclick = function () {
    state.cb = this.dataset.cb;
    applyA11y();
  };
});

// on / off tiles
document.querySelectorAll("[data-toggle]").forEach(function (btn) {
  btn.onclick = function () {
    var name = this.dataset.toggle;
    state.toggles[name] = !state.toggles[name];
    applyA11y();
  };
});

// read page aloud
var speaking = false;
var readBtn = document.querySelector("[data-action='readAloud']");

readBtn.onclick = function () {
  if (!("speechSynthesis" in window)) return;

  if (speaking) {
    stopReading();
    return;
  }

  var utter = new SpeechSynthesisUtterance(document.querySelector(".login-wrap").innerText);
  utter.lang = root.lang === "hi" ? "hi-IN" : "en-IN";
  utter.onend = stopReading;
  speechSynthesis.speak(utter);
  speaking = true;
  readBtn.classList.add("on");
};

function stopReading() {
  speechSynthesis.cancel();
  speaking = false;
  readBtn.classList.remove("on");
}

// reading guide follows the mouse
document.addEventListener("mousemove", function (e) {
  if (state.toggles.readingGuide) {
    guide.style.top = (e.clientY - 13) + "px";
  }
});

// reset everything
$("resetAll").onclick = function () {
  state = { zoom: 100, font: 0, cb: "none", toggles: {} };
  if ("speechSynthesis" in window) stopReading();
  applyA11y();
};

applyA11y();