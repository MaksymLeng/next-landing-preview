export const POP_ART_HTML = `
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Space+Grotesk:wght@300;700&display=swap');
.opti-landing-wrapper {
    --opti-pop-yellow: #FFEF00;
    --opti-pop-cyan: #00E5FF;
    --opti-pop-magenta: #FF00FF;
    --opti-amber: #FFB000;
    --opti-black: #000000;
    --opti-white: #FFFFFF;
    --opti-rozetka-green: #00a046;
    background-color: var(--opti-white);
    font-family: 'Space Grotesk', sans-serif;
    color: var(--opti-black);
    overflow-x: hidden;
    line-height: 1.2;
}
.opti-landing-wrapper h1, .opti-landing-wrapper h2 { font-family: 'Montserrat', sans-serif; text-transform: uppercase; margin: 0; font-weight: 900; }
.opti-landing-wrapper p { font-size: 1.1rem; margin: 10px 0; }
.opti-dot-bg { background-image: radial-gradient(rgba(0,0,0,0.2) 15%, transparent 15%); background-size: 15px 15px; }
.opti-heavy-border { border: 4px solid var(--opti-black); box-shadow: 8px 8px 0px var(--opti-black); }
.opti-btn { display: inline-block; background-color: var(--opti-rozetka-green); color: white; padding: 15px 30px; text-decoration: none; font-family: 'Montserrat', sans-serif; font-weight: 900; text-transform: uppercase; border: 3px solid var(--opti-black); box-shadow: 5px 5px 0px var(--opti-black); transition: all 0.2s ease; cursor: pointer; margin-top: 20px; }
.opti-btn:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0px var(--opti-black); background-color: #00c056; }
.opti-section-hero { background: var(--opti-black); color: var(--opti-white); min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px 20px; position: relative; overflow: hidden; }
.opti-flashlight-effect { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, transparent 10%, rgba(0,0,0,0.95) 40%); pointer-events: none; z-index: 2; }
.opti-hero-content { z-index: 1; max-width: 800px; }
.opti-hero-title { font-size: clamp(3rem, 10vw, 6rem); line-height: 0.9; color: var(--opti-white); text-shadow: 4px 4px var(--opti-pop-magenta); }
.opti-flicker { animation: opti-neon-flicker 2s infinite alternate; }
@keyframes opti-neon-flicker { 0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; } 20%, 22%, 24%, 55% { opacity: 0.3; } }
.opti-section-shift { padding: 60px 20px; background-color: var(--opti-pop-yellow); position: relative; display: flex; flex-wrap: wrap; gap: 40px; justify-content: center; align-items: center; }
.opti-shift-card { background: var(--opti-white); padding: 30px; max-width: 500px; transform: rotate(-2deg); }
.opti-image-container { position: relative; max-width: 400px; width: 100%; }
.opti-main-img { width: 100%; height: auto; border: 4px solid var(--opti-black); display: block; filter: contrast(1.1); }
.opti-color-modes { display: flex; gap: 15px; margin-top: 20px; }
.opti-orb { width: 50px; height: 50px; border-radius: 50%; border: 3px solid var(--opti-black); cursor: pointer; transition: transform 0.2s; }
.opti-orb:hover { transform: scale(1.2); }
.opti-orb-1800 { background: #FFB000; } .opti-orb-3400 { background: #FFD1A4; } .opti-orb-6000 { background: #FFFFFF; }
.opti-section-battery { background: var(--opti-pop-cyan); padding: 80px 20px; overflow: hidden; }
.opti-battery-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 1100px; margin: 0 auto; }
.opti-battery-visual { background: var(--opti-black); height: 300px; border-radius: 20px; position: relative; border: 6px solid var(--opti-black); overflow: hidden; }
.opti-battery-fill { position: absolute; bottom: 0; left: 0; width: 100%; background: #39FF14; animation: opti-charge 4s infinite ease-in-out; }
@keyframes opti-charge { 0% { height: 5%; background: #ff0000; } 50% { height: 100%; background: #39FF14; } 100% { height: 5%; background: #ff0000; } }
.opti-battery-text { padding: 20px; background: var(--opti-white); }
.opti-section-split { display: flex; flex-wrap: wrap; border-top: 4px solid var(--opti-black); border-bottom: 4px solid var(--opti-black); }
.opti-split-half { flex: 1; min-width: 300px; padding: 60px 40px; position: relative; }
.opti-split-left { background: #E0E0E0; color: #666; }
.opti-split-right { background: var(--opti-amber); color: var(--opti-black); }
.opti-vibrate:hover { animation: opti-shake 0.1s infinite; }
@keyframes opti-shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 50% { transform: translate(-1px, -2px) rotate(-1deg); } 100% { transform: translate(1px, 1px) rotate(0deg); } }
.opti-section-footer { padding: 100px 20px; text-align: center; background: var(--opti-black); color: var(--opti-white); position: relative; }
.opti-glow-btn { font-size: 2rem; padding: 30px 60px; background: var(--opti-amber); color: var(--opti-black); border-radius: 0; position: relative; z-index: 5; animation: opti-pulse-glow 2s infinite; }
@keyframes opti-pulse-glow { 0% { box-shadow: 0 0 0px var(--opti-amber); } 50% { box-shadow: 0 0 50px var(--opti-amber); } 100% { box-shadow: 0 0 0px var(--opti-amber); } }
.opti-floating-img { position: absolute; width: 200px; bottom: 20px; right: 5%; transform: rotate(15deg); border: 4px solid white; box-shadow: 10px 10px 0px var(--opti-pop-magenta); }
@media (max-width: 768px) { .opti-battery-grid { grid-template-columns: 1fr; } .opti-shift-card { transform: rotate(0); } .opti-hero-title { font-size: 3.5rem; } .opti-floating-img { display: none; } .opti-split-half { padding: 40px 20px; } }
.opti-mt-2 { margin-top: 20px; } .opti-mb-2 { margin-bottom: 20px; }
.opti-comic-text { background: var(--opti-white); padding: 5px 10px; display: inline-block; border: 2px solid var(--opti-black); font-weight: bold; color: var(--opti-black); transform: skew(-10deg); }
</style>
</head>
<body>
<div class="opti-landing-wrapper">
    <section class="opti-section-hero">
        <div class="opti-flashlight-effect"></div>
        <div class="opti-hero-content">
            <h1 class="opti-hero-title">The world <span class="opti-flicker">sleeps.</span><br>You don’t.</h1>
            <h2 class="opti-mt-2" style="color: var(--opti-pop-cyan);">Why let a sunset dictate your story?</h2>
            <p class="opti-mt-2">Darkness is a wall. Break through it. ⚡️<br>Your best ideas happen at 3 AM.</p>
            <a href="#" class="opti-btn">Explore the Night</a>
        </div>
    </section>
    <section class="opti-section-shift opti-dot-bg">
        <div class="opti-image-container">
            <img src="https://content2.rozetka.com.ua/goods/images/big/500463302.jpg" alt="Gritin Lamp" class="opti-main-img">
            <div class="opti-comic-text" style="position: absolute; top: -10px; right: -10px; background: var(--opti-pop-magenta); color: white;">360° FLEX!</div>
        </div>
        <div class="opti-shift-card opti-heavy-border">
            <h2>Amber is the <br><span style="color: var(--opti-amber)">new black.</span></h2>
            <p>1800K of pure intimacy. No blue-light headaches. Zero partner complaints. Total immersion.</p>
            <a href="#" class="opti-btn">Switch Modes</a>
        </div>
    </section>
    <section class="opti-section-battery">
        <div class="opti-battery-grid">
            <div class="opti-battery-text opti-heavy-border">
                <h2>Can 80 hours fit in your pocket?</h2>
                <p>A battery that outlasts your willpower. 1000mAh of raw focus. One charge. Two weeks. USB-C fueled. 🔋</p>
                <a href="#" class="opti-btn" style="background: var(--opti-pop-magenta);">Get Endless Power</a>
            </div>
            <div class="opti-battery-visual">
                <div class="opti-battery-fill"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem; font-weight: 900; z-index: 3;">80H</div>
            </div>
        </div>
    </section>
    <section class="opti-section-footer opti-dot-bg">
        <div style="max-width: 800px; margin: 0 auto; position: relative; z-index: 2;">
            <h1 style="font-size: clamp(2.5rem, 8vw, 5rem); margin-bottom: 30px;">Claim your spotlight.</h1>
            <a href="#" class="opti-btn opti-glow-btn">I WANT THE GLOW</a>
        </div>
    </section>
</div>
</body></html>
;`
