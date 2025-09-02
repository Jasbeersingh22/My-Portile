// ======= Mobile nav toggle =======
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

    // ======= Active link on scroll =======
    const sections = [...document.querySelectorAll('section[id]')];
    const navAnchors = [...navLinks.querySelectorAll('a')];

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0.01 });

    sections.forEach(s => io.observe(s));

    // ======= Year in footer =======
    document.getElementById('year').textContent = new Date().getFullYear();

    // ======= Contact form (demo only) =======
    const form = document.getElementById('contactForm');
    const hint = document.getElementById('formHint');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));

      // Simple validation example
      if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
        hint.textContent = 'Please fill in all the fields.';
        return;
      }

      // Demo success action
      hint.textContent = 'Thanks! Your message has been queued (demo).';
      form.reset();
    });