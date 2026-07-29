/* ==========================================================================
   PUNTA PLAYA CONDOS - Interactive JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileToggle.querySelector('i')) {
          mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
      });
    });
  }

  // 3. Unit Filter Functionality
  const filterBtns = document.querySelectorAll('.unit-filter-btn');
  const unitCards = document.querySelectorAll('.unit-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      unitCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'todos' || filter === cat) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Interactive Calculator (30% Enganche / 70% Entrega con Crédito Bancario)
  const calcSelect = document.getElementById('calcUnitSelect');
  const resEnganche = document.getElementById('resEnganche');
  const resEntrega = document.getElementById('resEntrega');

  function formatMXN(amount) {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0
    }).format(amount);
  }

  function updateCalculator() {
    if (!calcSelect) return;
    const rawVal = calcSelect.value.replace('_201', '');
    const price = parseFloat(rawVal) || 3852000;

    const enganche = price * 0.30;
    const entrega = price * 0.70;

    if (resEnganche) resEnganche.textContent = formatMXN(enganche);
    if (resEntrega) resEntrega.textContent = formatMXN(entrega);
  }

  if (calcSelect) {
    calcSelect.addEventListener('change', updateCalculator);
    updateCalculator(); // Initial calculation
  }

  // 5. Finishes & Equipment Tab Switcher
  const finishTabBtns = document.querySelectorAll('.finish-tab-btn');
  const finishPanels = document.querySelectorAll('.finish-content-panel');

  finishTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      finishTabBtns.forEach(b => b.classList.remove('active'));
      finishPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 6. Unit Selection Shortcut Buttons
  const selectUnitBtns = document.querySelectorAll('.btn-select-unit');
  const unitSelectForm = document.getElementById('unidadInteres');

  selectUnitBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const unitText = btn.getAttribute('data-unit');
      if (unitSelectForm && unitText) {
        for (let i = 0; i < unitSelectForm.options.length; i++) {
          if (unitSelectForm.options[i].value.includes(unitText.split(' - ')[0])) {
            unitSelectForm.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

});

// Lightbox Modal Functions
function openLightbox(imgSrc, captionText) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  if (modal && img) {
    img.src = imgSrc;
    caption.textContent = captionText || '';
    modal.classList.add('active');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Contact Form Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const unidad = document.getElementById('unidadInteres').value;

  alert(`¡Gracias ${nombre}! Tu solicitud para "${unidad}" (Esquema 30% Enganche + 70% Entrega/Crédito Bancario) ha sido registrada con éxito. Un asesor de Punta Playa Condos se pondrá en contacto contigo a la brevedad.`);
  e.target.reset();
}
