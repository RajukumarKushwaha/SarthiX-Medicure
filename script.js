(function(){
var $=function(s){return document.querySelector(s)};
var OPTS=[
 ["💊","Medical Store","Medicines, orders & stock","Manage your pharmacy: incoming orders, stock levels and prescription fulfilment.",["Incoming orders","Stock & expiry tracking","Prescription verification"],"medicallogin.html"],
 ["🩺","Doctor","Patients, prescriptions & schedule","Manage your patients, appointments and digital prescriptions in one place.",["Today's appointments","Patient records","Write prescriptions"],"loginDoctor.html"],
 ["⚕️","Surgery","Surgeons, OT & procedures","Plan and track surgeries: surgeons, operation theatre slots and procedures.",["Schedule a surgery","OT availability","Pre/post-op notes"],"surgerylogin.html"],
 ["🧪","Test Center","Lab tests, samples & reports","Handle lab tests: bookings, sample collection and report uploads.",["Test bookings","Sample tracking","Upload reports"],"testcenterlogin.html"],
 ["🏥","Laboratory","Beds, departments & admissions","Run hospital operations: departments, bed availability and admissions.",["Bed availability","Departments & staff","Admissions"],"laboratorylogin.html"]
];
var tt;function toast(m){var t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(function(){t.classList.remove("show")},2800)}

/* theme */
var th=0;$("#themeBtn").onclick=function(){th=(th+1)%3;var r=document.documentElement;if(th===0)r.removeAttribute("data-theme");else r.setAttribute("data-theme",th===1?"dark":"light")};

/* feature cards */
document.querySelectorAll(".feat").forEach(function(b){b.onclick=function(){toast(b.dataset.t.replace("&amp;","&"))}});

/* partner popup + in-page views */
var pl=$("#pl");
OPTS.forEach(function(o,i){var b=document.createElement("button");b.type="button";b.className="popt";b.innerHTML='<i aria-hidden="true">'+o[0]+'</i><strong>'+o[1]+'</strong><small>'+o[2]+'</small>';b.onclick=function(){$("#dlg").close();if(o[5]){window.location.href=o[5];return}show(i)};pl.appendChild(b)});
$("#dx").onclick=function(){$("#dlg").close()};
$("#dlg").addEventListener("click",function(e){if(e.target===this)this.close()});
function show(i){var o=OPTS[i],v=$("#view");v.innerHTML='<div class="pp"><button class="lnk back" type="button" id="bk">← Back to login</button><div class="ic" aria-hidden="true">'+o[0]+'</div><h1>'+o[1]+'</h1><p>'+o[3]+'</p><ul>'+o[4].map(function(x){return"<li>"+x+"</li>"}).join("")+'</ul></div>';
 $("#home").classList.add("hidden");v.classList.remove("hidden");scrollTo(0,0);$("#bk").onclick=function(){v.classList.add("hidden");$("#home").classList.remove("hidden")}}

/* roles */
document.querySelectorAll(".role").forEach(function(c){c.onclick=function(){
 document.querySelectorAll(".role").forEach(function(r){var s=r===c;r.classList.toggle("sel",s);r.setAttribute("aria-checked",s);r.querySelector(".ck").textContent=s?"✓":""});
 if(c.dataset.role==="partner"){$("#dlg").showModal();var f=$(".popt");if(f)f.focus()}else toast("Patient mode selected")}});

/* tabs */
var otp=false;document.querySelectorAll(".tab").forEach(function(t){t.onclick=function(){
 document.querySelectorAll(".tab").forEach(function(x){x.classList.toggle("on",x===t)});otp=t.dataset.auth==="otp";
 $("#pwF").classList.toggle("hidden",otp);$("#pwO").classList.toggle("hidden",otp);$("#otpF").classList.toggle("hidden",!otp);$("#cb").textContent=otp?"Send OTP →":"Continue →"}});

/* identity: digits-only -> max 10 */
$("#id").addEventListener("input",function(){if(/^\d+$/.test(this.value)&&this.value.length>10)this.value=this.value.slice(0,10);$("#e1").textContent=""});

/* form validation */
$("#f").addEventListener("submit",function(e){e.preventDefault();var ok=true,v=$("#id").value.trim();
 if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||/^\d{10}$/.test(v))){$("#e1").textContent="Enter a valid email address or 10-digit mobile number.";ok=false}else $("#e1").textContent="";
 if(otp){if(!/^\d{6}$/.test($("#otp").value.trim())){$("#e3").textContent="Enter a valid 6-digit OTP.";ok=false}else $("#e3").textContent=""}
 else{var p=$("#pw").value;if(!(p.length>=8&&/[A-Z]/.test(p)&&/[^A-Za-z0-9]/.test(p)&&(p.match(/\d/g)||[]).length>=3)){$("#e2").textContent="Need 8+ chars, 1 uppercase, 1 special character and 3 numbers.";ok=false}else $("#e2").textContent=""}
 if(ok)toast(otp?"OTP request ready (demo, no backend).":"Login validated (demo, no backend).")});
$("#fp").onclick=function(){toast("Password reset needs a backend. Demo only.")};
$("#ca").onclick=function(){toast("Registration needs a backend. Demo only.")};
})();