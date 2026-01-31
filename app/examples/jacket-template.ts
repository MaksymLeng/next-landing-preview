export const jacketTemplate = `
<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,700;0,900;1,400&display=swap&subset=cyrillic');

.opti-landing-wrapper {
    font-family: 'Exo 2', sans-serif;
    background-color: #ffffff;
    color: #0c0c0c;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    line-height: 1.4;
}

.opti-landing-wrapper * {
    box-sizing: border-box;
}

/* --- UI COMPONENTS --- */

.opti-neon-text {
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
}

.opti-glitch-effect {
    animation: opti-glitch 3s infinite;
}

@keyframes opti-glitch {
    0% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; }
    2% { text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff; transform: skew(2deg); }
    4% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; transform: skew(0deg); }
    100% { text-shadow: 1px 0 #ff00ff, -1px 0 #00ffff; }
}

.opti-cta-button {
    display: inline-block;
    background-color: #00a046; /* Rozetka Green for conversion */
    color: #ffffff;
    padding: 18px 35px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 4px;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(0, 160, 70, 0.3);
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    text-align: center;
}

.opti-cta-button:hover {
    background-color: #00bc52;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 160, 70, 0.5);
}

/* --- SECTIONS --- */

.opti-section {
    position: relative;
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto 10px auto;
    overflow: hidden;
}

/* Section 1: Hero */
.opti-hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: radial-gradient(circle at 50% 50%, #fcfcfc 0%, #f0f0f0 100%);
}

.opti-hero-grid {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: 
        linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .05) 25%, rgba(0, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .05) 75%, rgba(0, 255, 255, .05) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .05) 25%, rgba(255, 0, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .05) 75%, rgba(255, 0, 255, .05) 76%, transparent 77%, transparent);
    background-size: 50px 50px;
    transform: perspective(500px) rotateX(60deg);
    z-index: 1;
}

.opti-hero-content {
    position: relative;
    z-index: 2;
}

.opti-hero-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    margin: 0;
    line-height: 0.9;
}

.opti-hero-image-wrap {
    position: relative;
    margin: 40px 0;
}

.opti-hero-image {
    width: 100%;
    max-width: 500px;
    filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.2));
    transform: rotate(-3deg);
    transition: transform 0.5s ease;
}

.opti-hero-image:hover {
    transform: rotate(0deg) scale(1.02);
}

/* Section 2: Agitation */
.opti-agitation {
    background: #0c0c0c;
    color: #ffffff;
    border-radius: 0;
}

.opti-scanner-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #ff00ff;
    box-shadow: 0 0 15px #ff00ff;
    z-index: 10;
    animation: opti-scan 4s linear infinite;
}

@keyframes opti-scan {
    0% { top: 0%; }
    100% { top: 100%; }
}

.opti-pain-points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.opti-pain-card {
    border: 1px solid #333;
    padding: 30px;
    background: rgba(255, 255, 255, 0.02);
    transition: border-color 0.3s;
}

.opti-pain-card:hover {
    border-color: #00ffff;
}

.opti-shiver {
    display: inline-block;
    animation: opti-shiver-anim 0.2s infinite alternate;
}

@keyframes opti-shiver-anim {
    from { transform: translateX(-1px); }
    to { transform: translateX(1px); }
}

/* Section 3: Reveal */
.opti-reveal {
    background: #ffffff;
}

.opti-tech-grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
}

.opti-tech-image {
    flex: 1;
    min-width: 300px;
    position: relative;
}

.opti-tech-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 20px 20px 0px #f0f0f0;
}

.opti-heat-zone {
    position: absolute;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(255, 69, 0, 0.6) 0%, transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    animation: opti-pulse-heat 2s infinite;
}

@keyframes opti-pulse-heat {
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.5); opacity: 0.4; }
    100% { transform: scale(1); opacity: 0.8; }
}

/* Section 4: Lifestyle */
.opti-lifestyle {
    background: #f8f8f8;
    padding: 80px 20px;
}

.opti-split-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    height: 500px;
}

.opti-split-side {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: flex 0.5s ease;
}

.opti-split-side:hover {
    flex: 1.5;
}

.opti-side-mountain {
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://content2.rozetka.com.ua/goods/images/big/628001737.jpg');
    background-size: cover;
    background-position: center;
}

.opti-side-urban {
    background: linear-gradient(rgba(0,255,255,0.2), rgba(255,0,255,0.2)), url('https://content.rozetka.com.ua/goods/images/big/628001733.jpg');
    background-size: cover;
    background-position: center;
}

.opti-split-text {
    color: white;
    font-weight: 900;
    font-size: 2rem;
    text-shadow: 0 5px 15px rgba(0,0,0,0.5);
    z-index: 5;
}

/* Section 5: Final Push */
.opti-final {
    text-align: center;
    background: #ffffff;
    border-top: 5px solid #0c0c0c;
}

.opti-price-tag {
    margin: 40px 0;
}

.opti-old-price {
    text-decoration: line-through;
    color: #888;
    font-size: 1.5rem;
}

.opti-new-price {
    color: #f84147;
    font-size: 4rem;
    font-weight: 900;
    display: block;
    line-height: 1;
}

.opti-availability {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #00a046;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.opti-dot {
    width: 10px;
    height: 10px;
    background-color: #00a046;
    border-radius: 50%;
    animation: opti-blink 1s infinite;
}

@keyframes opti-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

/* --- MOBILE ADAPTABILITY --- */
@media (max-width: 768px) {
    .opti-split-container {
        grid-template-columns: 1fr;
        height: auto;
    }
    .opti-split-side {
        height: 250px;
    }
    .opti-hero-title {
        font-size: 3rem;
    }
    .opti-new-price {
        font-size: 3rem;
    }
    .opti-tech-grid {
        flex-direction: column;
    }
    .opti-tech-image {
        order: -1;
    }
}

</style>
</head>
<body>

<div class="opti-landing-wrapper">

    
    <div class="opti-section opti-hero">
        <div class="opti-hero-grid"></div>
        <div class="opti-hero-content">
            <h1 class="opti-hero-title opti-neon-text opti-glitch-effect">WINTER IS A<br>GLITCH.</h1>
            <p style="font-size: 1.2rem; font-weight: 700; margin: 20px 0;">REBOOT YOUR WARMTH WITH MOUNTAIN BLUE ARMOR ⚡</p>
            
            <div class="opti-hero-image-wrap">
                <img src="https://content2.rozetka.com.ua/goods/images/big/628001723.jpg" alt="Puma Mountain Blue Jacket" class="opti-hero-image">
            </div>

            <a href="https://rozetka.com.ua/ua/puma-4069157595346/p526184974/" class="opti-cta-button">UPGRADE TO warmCELL NOW</a>
        </div>
    </div>

    
    <div class="opti-section opti-agitation">
        <div class="opti-scanner-line"></div>
        <h2 class="opti-neon-text" style="color: #00ffff;">SYSTEM ERROR: THERMAL LEAK DETECTED</h2>
        <p>Is your current gear failing the urban winter simulation?</p>
        
        <div class="opti-pain-points">
            <div class="opti-pain-card">
                <h3 class="opti-shiver">❄️ HEAVY AS A BRICK?</h3>
                <p>Standard jackets weigh you down. The Puma Classics is engineered for light-speed movement.</p>
            </div>
            <div class="opti-pain-card">
                <h3 class="opti-shiver">❄️ LEAKING HEAT?</h3>
                <p>If you're shivering, your insulation is ghosting you. Our warmCELL tech locks the heat in the core.</p>
            </div>
            <div class="opti-pain-card">
                <h3 class="opti-shiver">❄️ SOAKED THROUGH?</h3>
                <p>Three snowflakes shouldn't mean a wet commute. The water-repellent shell is your firewall.</p>
            </div>
        </div>

        <div style="text-align: center; margin-top: 40px;">
            <a href="https://rozetka.com.ua/ua/puma-4069157595346/p526184974/" class="opti-cta-button" style="background-color: #f84147;">PATCH THE GLITCH (-51%)</a>
        </div>
    </div>

    
    <div class="opti-section opti-reveal">
        <div class="opti-tech-grid">
            <div style="flex: 1; min-width: 300px;">
                <h2 class="opti-neon-text" style="font-size: 2.5rem;">TRAP THE HEAT.<br>LOSE THE BULK.</h2>
                <ul style="list-style: none; padding: 0; font-size: 1.1rem;">
                    <li style="margin-bottom: 15px;">🔥 <strong>warmCELL:</strong> Thermal insulation traps heat close to the body.</li>
                    <li style="margin-bottom: 15px;">🦆 <strong>Duck Down Core:</strong> Premium loft without the weight.</li>
                    <li style="margin-bottom: 15px;">📱 <strong>Fleece Pockets:</strong> Instant warmth for your hands and tech.</li>
                    <li style="margin-bottom: 15px;">♻️ <strong>Eco-Shield:</strong> 100% recycled polyester shell.</li>
                </ul>
                <a href="https://rozetka.com.ua/ua/puma-4069157595346/p526184974/" class="opti-cta-button">VIEW TECH SPECS</a>
            </div>
            <div class="opti-tech-image">
                <div class="opti-heat-zone"></div>
                <img src="https://content.rozetka.com.ua/goods/images/big/628001733.jpg" alt="Puma Tech View">
            </div>
        </div>
    </div>

    
    <div class="opti-section opti-lifestyle">
        <h2 class="opti-neon-text" style="text-align: center; display: block; margin-bottom: 40px;">MOUNTAIN BLUE. URBAN SOUL.</h2>
        <div class="opti-split-container">
            <div class="opti-split-side opti-side-mountain">
                <div class="opti-split-text">PEAK PERFORMANCE</div>
            </div>
            <div class="opti-split-side opti-side-urban">
                <div class="opti-split-text">NEON STREETS</div>
            </div>
        </div>
        <div style="text-align: center; margin-top: 30px;">
            <p>From frozen mornings to cyber-noir nights. One jacket. Zero compromises.</p>
            <a href="https://rozetka.com.ua/ua/puma-4069157595346/p526184974/" class="opti-cta-button">CLAIM YOUR STYLE</a>
        </div>
    </div>

    
    <div class="opti-section opti-final">
        <h2 class="opti-neon-text" style="font-size: 3rem;">51% OFF THE FUTURE</h2>
        <p>The frost doesn't wait for a better price. Neither should you.</p>
        
        <div class="opti-price-tag">
            <span class="opti-old-price">10,990 ₴</span>
            <span class="opti-new-price">5,359 ₴</span>
        </div>

        <a href="https://rozetka.com.ua/ua/puma-4069157595346/p526184974/" class="opti-cta-button" style="padding: 25px 60px; font-size: 1.5rem;">GET IT NOW 🛒</a>
        
        <div class="opti-availability">
            <div class="opti-dot"></div>
            <span>SCANNING STOCK... LIMITED QUANTITY AVAILABLE IN KYIV</span>
        </div>

        <div style="margin-top: 60px; opacity: 0.5; font-size: 0.8rem; letter-spacing: 2px;">
            PUMA CLASSICS HOODED DOWN JACKET // MOUNTAIN BLUE EDITION
        </div>
    </div>

</div>


</body></html>
`