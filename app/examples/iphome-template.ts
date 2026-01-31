export const Iphone_ART_HTML = `
<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@1,900&display=swap');

.opti-landing-wrapper {
    --opti-orange: #ff4500;
    --opti-blue: #0071e3;
    --opti-black: #000000;
    --opti-white: #ffffff;
    --opti-grey: #1d1d1f;
    background-color: var(--opti-white);
    color: var(--opti-black);
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    line-height: 1.2;
}

.opti-landing-wrapper * {
    box-sizing: border-box;
}

.opti-btn {
    display: inline-block;
    background-color: var(--opti-blue);
    color: var(--opti-white);
    padding: 18px 35px;
    border-radius: 980px;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
    border: none;
    cursor: pointer;
    text-align: center;
}

.opti-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 113, 227, 0.4);
}

.opti-section {
    position: relative;
    width: 100%;
    padding: 60px 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* SECTION 1: THE PATTERN BREAKER */
.opti-hero {
    background: var(--opti-black);
    color: var(--opti-white);
    min-height: 100vh;
    justify-content: center;
    text-align: center;
}

.opti-glitch-text {
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    line-height: 0.9;
    position: relative;
    z-index: 2;
}

.opti-hero-sub {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(1.5rem, 4vw, 3rem);
    color: var(--opti-orange);
    margin: 20px 0;
}

.opti-hero-img-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin-top: -50px;
}

.opti-hero-img {
    width: 100%;
    height: auto;
    filter: grayscale(1) contrast(1.2);
    mix-blend-mode: screen;
}

.opti-hero-overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    pointer-events: none;
    opacity: 0.3;
    font-size: 12vw;
    font-weight: 900;
    white-space: nowrap;
}

/* SECTION 2: THE DIAGNOSTIC */
.opti-diagnostic {
    background: #f5f5f7;
    padding: 80px 20px;
}

.opti-pain-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
}

@media (min-width: 768px) {
    .opti-pain-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.opti-pain-card {
    background: var(--opti-white);
    padding: 40px;
    border: 2px solid var(--opti-black);
    position: relative;
    transition: all 0.4s ease;
    cursor: pointer;
}

.opti-pain-card:hover {
    background: var(--opti-orange);
    color: var(--opti-white);
    transform: translateY(-10px) rotate(2deg);
}

.opti-pain-card h3 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0 0 15px 0;
}

.opti-pulse {
    width: 20px;
    height: 20px;
    background: var(--opti-orange);
    border-radius: 50%;
    display: inline-block;
    animation: opti-pulse-anim 1.5s infinite;
    margin-right: 10px;
}

@keyframes opti-pulse-anim {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
}

/* SECTION 3: THE ANTIDOTE */
.opti-antidote {
    background: var(--opti-black);
    color: var(--opti-white);
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
}

.opti-antidote-content {
    flex: 1;
    min-width: 300px;
    padding: 60px;
    z-index: 2;
}

.opti-antidote-visual {
    flex: 1;
    min-width: 300px;
    position: relative;
    overflow: hidden;
    min-height: 500px;
}

.opti-antidote-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}

.opti-badge {
    background: var(--opti-orange);
    color: var(--opti-black);
    padding: 5px 15px;
    font-weight: 900;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 20px;
    transform: skewX(-15deg);
}

/* SECTION 4: VISION SHIFT */
.opti-vision {
    background: var(--opti-white);
}

.opti-lens-container {
    width: 100%;
    max-width: 1000px;
    height: 600px;
    position: relative;
    border: 10px solid var(--opti-black);
    overflow: hidden;
}

.opti-lens-base {
    width: 100%;
    height: 100%;
    background: url('https://www.apple.com/v/iphone-17-pro/c/images/overview/cameras/pro-video/prores__da2ay2urzh4y_medium_2x.jpg') center/cover;
    filter: blur(5px) grayscale(1);
}

.opti-lens-reveal {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: url('https://www.apple.com/v/iphone-17-pro/c/images/overview/cameras/pro-video/prores__da2ay2urzh4y_medium_2x.jpg') center/cover;
    border-right: 4px solid var(--opti-orange);
    transition: width 0.1s ease;
    resize: horizontal;
    overflow: auto;
    max-width: 100%;
    min-width: 10px;
}

.opti-lens-reveal::after {
    content: 'DRAG TO ZOOM';
    position: absolute;
    right: 20px;
    bottom: 20px;
    background: var(--opti-orange);
    color: var(--opti-white);
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 700;
}

/* SECTION 5: FINAL PUSH */
.opti-final {
    background: var(--opti-orange);
    color: var(--opti-white);
    text-align: center;
    padding: 100px 20px;
}

.opti-final h2 {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    margin: 0;
    line-height: 0.8;
}

.opti-footer-img {
    max-width: 600px;
    width: 100%;
    margin: 40px 0;
    transform: rotate(-5deg);
    transition: transform 0.5s ease;
}

.opti-footer-img:hover {
    transform: rotate(0deg) scale(1.1);
}

.opti-cta-large {
    background: var(--opti-black);
    color: var(--opti-white);
    font-size: 2rem;
    padding: 30px 60px;
    border: 4px solid var(--opti-white);
}

.opti-cta-large:hover {
    background: var(--opti-white);
    color: var(--opti-black);
    box-shadow: 20px 20px 0 var(--opti-black);
}

/* MAXIMALIST DECORATIONS */
.opti-float-text {
    position: absolute;
    font-weight: 900;
    opacity: 0.05;
    font-size: 15vw;
    z-index: 0;
    pointer-events: none;
}

.opti-marquee {
    width: 100%;
    background: var(--opti-black);
    color: var(--opti-white);
    padding: 10px 0;
    overflow: hidden;
    white-space: nowrap;
}

.opti-marquee span {
    display: inline-block;
    padding-left: 100%;
    animation: opti-marquee-anim 20s linear infinite;
    font-weight: 900;
    font-size: 1.5rem;
}

@keyframes opti-marquee-anim {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}

/* MOBILE ADJUSTMENTS */
@media (max-width: 768px) {
    .opti-section {
        padding: 40px 15px;
    }
    .opti-antidote-content {
        padding: 30px;
    }
    .opti-lens-container {
        height: 300px;
    }
}
</style>
</head>
<body>
<div class="opti-landing-wrapper">

    
    <section class="opti-section opti-hero">
        <div class="opti-float-text" style="top: 10%; left: -5%;">LIAR</div>
        <h1 class="opti-glitch-text">Your phone<br>is lying<br>to you.</h1>
        <p class="opti-hero-sub">It promises "Pro," but delivers "Slow." ⚡️</p>
        <div class="opti-hero-img-container">
            <img src="https://www.apple.com/v/iphone-17-pro/c/images/overview/welcome/hero_endframe__xdzisdq1ppem_medium_2x.jpg" alt="iPhone 17 Pro" class="opti-hero-img">
            <div class="opti-hero-overlay-text">AUDIT YOUR POCKET</div>
        </div>
        <a href="https://www.apple.com/ua/iphone-17-pro/" class="opti-btn">STOP SETTLING NOW</a>
    </section>

    <div class="opti-marquee">
        <span>8X OPTICAL ZOOM • A19 PRO CHIP • VAPOR CHAMBER COOLING • SPACE ORANGE • TITANIUM UNIBODY • 8X OPTICAL ZOOM • A19 PRO CHIP • VAPOR CHAMBER COOLING • SPACE ORANGE • TITANIUM UNIBODY •</span>
    </div>

    
    <section class="opti-section opti-diagnostic">
        <h2 style="font-size: 4rem; font-weight: 900; margin-bottom: 10px;">WHERE DOES IT HURT? 🌡️</h2>
        <p style="margin-bottom: 50px; font-size: 1.2rem; font-weight: 700;">The truth about your current device is leaking.</p>
        
        <div class="opti-pain-grid">
            <div class="opti-pain-card">
                <div class="opti-pulse"></div>
                <h3>THE LENS</h3>
                <p>"Digital zoom is just a fancy word for a blurry mess." Own the horizon instead.</p>
                <a href="https://www.apple.com/ua/iphone-17-pro/" class="opti-btn" style="margin-top:20px; width: 100%;">FIX THE VIEW</a>
            </div>
            <div class="opti-pain-card" style="transform: rotate(-1deg);">
                <div class="opti-pulse"></div>
                <h3>THE HEAT</h3>
                <p>Throttling because it’s sweating? Amateur hour. Feel the ice.</p>
                <a href="https://www.apple.com/ua/iphone-17-pro/" class="opti-btn" style="margin-top:20px; width: 100%;">STAY COLD</a>
            </div>
            <div class="opti-pain-card" style="transform: rotate(1.5deg);">
                <div class="opti-pulse"></div>
                <h3>THE LIFE</h3>
                <p>Scratches shouldn't be your phone’s personality. Armor up.</p>
                <a href="https://www.apple.com/ua/iphone-17-pro/" class="opti-btn" style="margin-top:20px; width: 100%;">GET ARMOR</a>
            </div>
        </div>
    </section>

    
    <section class="opti-section opti-antidote">
        <div class="opti-antidote-content">
            <span class="opti-badge">The Antidote</span>
            <h2 style="font-size: 5rem; font-weight: 900; line-height: 0.9;">SOLID BODY.<br><span style="color: var(--opti-orange);">ZERO EXCUSES.</span></h2>
            <ul style="list-style: none; padding: 0; margin: 30px 0; font-size: 1.5rem; font-weight: 700;">
                <li style="margin-bottom: 15px;">❄️ Vapor Chamber Cooling</li>
                <li style="margin-bottom: 15px;">🏗️ Unibody Aluminum Strength</li>
                <li style="margin-bottom: 15px;">🚀 Sustained Peak Performance</li>
            </ul>
            <a href="https://www.apple.com/ua/iphone-17-pro/" class="opti-btn" style="background: var(--opti-orange);">MEET THE PRO</a>
        </div>
        <div class="opti-antidote-visual">
            <img src="https://www.apple.com/v/iphone-17-pro/c/images/overview/performance/battery/battery__fc7m9oxxh7yy_medium_2x.jpg" alt="Performance" class="opti-antidote-img">
        </div>
    </section>

    
    <section class="opti-section opti-vision">
        <div class="opti-float-text" style="bottom: 0; right: 0; color: var(--opti-orange); opacity: 0.1;">VISION</div>
        <h2 style="font-size: 3.5rem; font-weight: 900; text-align: center; margin-bottom: 10px;">8X ZOOM. NO PIXELS, JUST SOUL. 👁️</h2>
        <p style="text-align: center; max-width: 600px; margin-bottom: 40px; font-weight: 600;">Why see the world through a straw when you can own the horizon?</p>
        
        <div class="opti-lens-container">
            <div class="opti-lens-base"></div>
            <div class="opti-lens-reveal"></div>
        </div>
        
        <div style="margin-top: 40px; display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
            <div style="background: var(--opti-black); color: white; padding: 20px; font-weight: 900;">48MP FUSION</div>
            <div style="background: var(--opti-black); color: white; padding: 20px; font-weight: 900;">100MM CLARITY</div>
            <div style="background: var(--opti-black); color: white; padding: 20px; font-weight: 900;">4K @ 120FPS</div>
        </div>
        <a href="https://www.apple.com/ua/iphone-17-pro/" class="opti-btn" style="margin-top: 40px;">CAPTURE THE FUTURE</a>
    </section>

    
    <section class="opti-section opti-final">
        <div style="text-transform: uppercase; font-weight: 900; letter-spacing: 5px; margin-bottom: 20px;">The Space Orange Era</div>
        <h2>THE FUTURE<br>DOESN'T WAIT<br>FOR "MAYBE."</h2>
        <img src="https://www.apple.com/v/iphone-17-pro/c/images/overview/welcome/hero_endframe__xdzisdq1ppem_medium_2x.jpg" alt="Final iPhone" class="opti-footer-img">
        
        <div style="margin-bottom: 50px;">
            <p style="font-size: 1.5rem; font-weight: 700; margin: 5px;">Apple Intelligence Ready 🧠</p>
            <p style="font-size: 1.5rem; font-weight: 700; margin: 5px;">Ceramic Shield 2 Armor 🛡️</p>
            <p style="font-size: 1.5rem; font-weight: 700; margin: 5px;">37 Hours of Pure Life 🔋</p>
        </div>

        <a href="https://www.apple.com/ua/iphone-17-pro/" class="opti-btn opti-cta-large">I WANT THE PRO</a>
        
        <div style="margin-top: 60px; font-weight: 900; font-size: 0.8rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 2px;">
            Designed to disrupt. Built to last. No compromises.
        </div>
    </section>

</div>

</body>
</html>    
    `