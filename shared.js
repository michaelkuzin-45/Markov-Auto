/* ============================================================
   MARKOV AUTOMOTIVE — SHARED JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll effect ──
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile hamburger ──
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Scroll reveal ──
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (e.target.dataset.delay || 0) + 'ms';
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(r => io.observe(r));
  }

  // ── Hero bg pan ──
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  }

  // ── Chat Widget ──
  initChatWidget();

  // ── Footer year ──
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});

/* -------- Chat Widget -------- */
function initChatWidget() {
  const toggle = document.getElementById('chat-toggle');
  const panel  = document.getElementById('chat-panel');
  const closeBtn = document.getElementById('chat-close');
  const input  = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const msgs   = document.getElementById('chat-messages');
  const quick  = document.querySelectorAll('.chat-quick-btn');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
  });
  if (closeBtn) closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  function addMsg(text, type = 'bot') {
    const div = document.createElement('div');
    div.className = `chat-msg ${type}`;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function botReply(userText) {
    const t = userText.toLowerCase();
    let reply = "I'd be happy to help. For the quickest response, call us at (240) 899-3794 or email markovautomotive@gmail.com.";

    if (t.includes('book') || t.includes('reserv') || t.includes('rent')) {
      reply = "To request a reservation, head to our booking page and select your vehicle and dates. We'll confirm availability within hours.";
    } else if (t.includes('price') || t.includes('cost') || t.includes('rate')) {
      reply = "Daily rates vary by vehicle — from $550/day for the Corvette Z06 to $1,500/day for the Rolls-Royce Ghost. Each vehicle page shows the full rate.";
    } else if (t.includes('fleet') || t.includes('car') || t.includes('vehicle')) {
      reply = "We maintain 8 premium vehicles — from the Ferrari 488 GTB to the Rolls-Royce Ghost. Browse the full fleet to see availability.";
    } else if (t.includes('location') || t.includes('where') || t.includes('pickup')) {
      reply = "We're based at 6611 Iron Pl, Springfield, VA. Delivery and pickup options can be arranged — mention it in your reservation notes.";
    } else if (t.includes('contact') || t.includes('phone') || t.includes('call')) {
      reply = "You can reach us at (240) 899-3794 or markovautomotive@gmail.com. We typically respond the same day.";
    } else if (t.includes('availab')) {
      reply = "Availability varies by vehicle and dates. Submit a reservation request and we'll confirm within hours.";
    }

    setTimeout(() => addMsg(reply, 'bot'), 600);
  }

  function sendMessage() {
    const text = (input.value || '').trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    botReply(text);
  }

  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  quick.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent.trim();
      addMsg(text, 'user');
      btn.closest('.chat-quick') && btn.closest('.chat-quick').remove();
      botReply(text);
    });
  });
}

/* -------- Availability Calendar -------- */
function renderAvailCalendar(containerId, bookedDays = []) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dayLabels = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();

  container.innerHTML = `
    <div class="avail-calendar">
      <div class="avail-calendar-header">
        <h5>${monthNames[month]} ${year}</h5>
        <div class="avail-legend">
          <span><span class="dot dot-avail"></span>Available</span>
          <span><span class="dot dot-booked"></span>Reserved</span>
        </div>
      </div>
      <div class="avail-days">
        ${dayLabels.map(d => `<div class="avail-day-label">${d}</div>`).join('')}
        ${Array(firstDay).fill('<div class="avail-day empty"></div>').join('')}
        ${Array.from({length: daysInMonth}, (_, i) => {
          const d = i + 1;
          const isPast = d < today;
          const isBooked = bookedDays.includes(d);
          const cls = isPast ? 'booked' : isBooked ? 'booked' : 'avail';
          return `<div class="avail-day ${cls}">${d}</div>`;
        }).join('')}
      </div>
    </div>
  `;
}

/* -------- Gallery -------- */
function initGallery(images) {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbsContainer = document.getElementById('gallery-thumbs');
  if (!mainImg || !thumbsContainer) return;

  mainImg.src = images[0];
  mainImg.alt = 'Vehicle gallery image';

  thumbsContainer.innerHTML = images.map((src, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <img src="${src}" alt="Gallery ${i+1}" loading="lazy">
    </div>
  `).join('');

  thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.idx);
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = images[idx];
        mainImg.style.opacity = '1';
      }, 200);
      thumbsContainer.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}
