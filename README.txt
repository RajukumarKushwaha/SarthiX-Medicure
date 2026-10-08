# SarthiX-Medicure Login Frontend

Files :
- index.html
- styles.css
- script.js

Open `index.html` in a modern browser.

## Included
- Responsive layout (320px phones se 4K screens tak)
- Patient/Doctor role selection
- Password visibility toggle
- Password / Mobile OTP UI
- Login and registration validation (10-digit phone; password checklist)
- Forgot-password modal
- Patient and doctor registration forms
- Accessibility menu
- High-contrast mode
- Reduced-motion mode
- Font-size controls
- English/Hindi language switching across the interface
- Animated background with Navy, Dark and White theme choices
- Keyboard focus states
- No framework or build step required

## Backend integration points
The UI intentionally does not fake a real login. Connect:
- `#loginForm` submit handler to your authentication API
- OTP tab to your OTP service
- Forgot password to your reset API
- Registration forms validate details locally; connect account creation and medical-license verification to secure backend services
- Feature cards to the corresponding SarthiX-Medicure routes

Security note:
Do not put API secrets, database credentials, or private keys in `script.js`.

## Responsive fixes (latest)
- Mobile header: Language / A+ A- / Accessibility ab logo ke upar overlap nahi karte, alag row mein aate hain
- 320px phones pe horizontal scroll hata diya
- Right-side "Quality / Helping Hands..." icons ab login panel ke upar nahi aate (chhoti screen pe bottom strip, 1820px+ pe side gutter)
- Doctor/patient illustration ab har width pe proportionally scale hoti hai (JS: fitScene in script.js)
- Laptop-small (1050-1200px): feature cards 2x2, trust bar 2x2, role-card arrow text ke upar nahi aata
- Accessibility menu button ke neeche khulta hai, bahar click ya Esc se band hota hai
- Toast message mobile pe poori width use karta hai
- Touch devices: 44px tap targets, hover jump band; inputs 16px (iOS zoom nahi)
- Phone notch support (viewport-fit=cover), 100dvh, prefers-reduced-motion / prefers-contrast respect
