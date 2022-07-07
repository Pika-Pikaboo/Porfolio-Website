/* window.addEventListener("DOMContentLoaded", () => {
    VANTA.NET({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    });
}); */

window.addEventListener("DOMContentLoaded", () => {
    VANTA.BIRDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundAlpha: 0.00
    });

    setTimeout(() => {
        let content = document.querySelector(".container");
        content.style.opacity = 1;
        content.style.filter = "blur(0px)";
    }, 2000);
});