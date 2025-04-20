// dashboard.js (atau file JS kamu)
document.addEventListener('DOMContentLoaded', () => {
    // Cari semua elemen yang ingin dianimasikan on‑scroll
    const elems = document.querySelectorAll('.animate-on-scroll');

    // Opsi observer: amati ketika minimal 10% elemen terlihat
    const observerOpts = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // Ambil tipe animasi dari data-anim (misal "fadeIn" atau "slideInRight")
                const anim = el.dataset.anim;
                // Tambahkan class animasi
                el.classList.add('animated', anim);
                // Stop observing agar animasi tidak trigging lagi
                observer.unobserve(el);
            }
        });
    }, observerOpts);

    // Mulai observe tiap elemen
    elems.forEach(el => {
        io.observe(el);
    });
});


document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());