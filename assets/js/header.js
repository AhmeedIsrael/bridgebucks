/**
 * Bridge Bucks Services Ltd - Unified Dynamic Header & Navigation System
 * Renders consistent header, offcanvas mobile navigation, active states, and links.
 */

(function () {
  function renderHeader() {
    const container = document.getElementById('bb-header-placeholder');
    if (!container) return;

    const root = container.getAttribute('data-root') || './';
    const active = container.getAttribute('data-active') || 'home';

    const homeUrl = root;
    const aboutUrl = root + 'about/';
    const pofUrl = root + 'pof/';
    const pofApplyUrl = root + 'pof/apply/';
    const loansUrl = root + 'loans/';
    const loansApplyUrl = root + 'loans/apply/';
    const partnersUrl = root + 'partners/';
    const contactUrl = root + 'contact/';
    const logoUrl = root + 'assets/img/logo/bridgebucks logo.png';

    // 1. Offcanvas Drawer & Overlay HTML
    const offcanvasPlaceholder = document.getElementById('bb-offcanvas-placeholder');
    const offcanvasHTML = `
      <div class="fix-area">
        <div class="offcanvas__info">
          <div class="offcanvas__wrapper">
            <div class="offcanvas__content">
              <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div class="offcanvas__logo">
                  <a href="${homeUrl}">
                    <img loading="eager" decoding="async" fetchpriority="high" src="${logoUrl}" alt="Bridge Bucks Services Ltd Logo" style="max-height: 50px;">
                  </a>
                </div>
                <div class="offcanvas__close">
                  <button type="button" aria-label="Close navigation"><i class="fas fa-times"></i></button>
                </div>
              </div>
              <div class="mobile-menu fix mb-3"></div>
              <div class="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon"><i class="fal fa-map-marker-alt"></i></div>
                    <div class="offcanvas__contact-text"><a href="#">Ibadan, Nigeria</a></div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15"><i class="fal fa-envelope"></i></div>
                    <div class="offcanvas__contact-text"><a href="mailto:info.bridgebucks@gmail.com">info.bridgebucks@gmail.com</a></div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15"><i class="fal fa-clock"></i></div>
                    <div class="offcanvas__contact-text"><a href="#">Mon - Fri, 08:00am - 06:00pm</a></div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15"><i class="far fa-phone"></i></div>
                    <div class="offcanvas__contact-text"><a href="tel:+2348067944657">+234 806 794 4657</a></div>
                  </li>
                </ul>
                <div class="header-button mt-4">
                  <a href="https://wa.me/2348067944657?text=Hello%20Bridge%20Bucks,%20I%20want%20to%20inquire%20about%20your%20services." target="_blank" class="theme-btn text-center">
                    <span>Chat on WhatsApp <i class="fab fa-whatsapp"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas__overlay"></div>
    `;

    if (offcanvasPlaceholder) {
      offcanvasPlaceholder.innerHTML = offcanvasHTML;
    } else {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = offcanvasHTML;
      document.body.prepend(tempDiv);
    }

    // 2. Main Header HTML
    const headerHTML = `
      <header class="header-section-1">
        <div id="header-sticky" class="header-1">
          <div class="container-fluid">
            <div class="mega-menu-wrapper">
              <div class="header-main">
                <div class="header-left">
                  <div class="logo">
                    <a href="${homeUrl}" class="header-logo">
                      <img loading="eager" decoding="async" fetchpriority="high" src="${logoUrl}" alt="Bridge Bucks Services Ltd Logo" style="max-height: 55px; width: auto;">
                    </a>
                  </div>
                  <div class="mean__menu-wrapper">
                    <div class="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li class="${active === 'home' ? 'active' : ''}">
                            <a href="${homeUrl}">Home</a>
                          </li>
                          <li class="${active === 'about' ? 'active' : ''}">
                            <a href="${aboutUrl}">About Us</a>
                          </li>
                          <li class="${active === 'pof' ? 'active' : ''} has-dropdown">
                            <a href="${pofUrl}">Proof of Funds <i class="fas fa-angle-down ms-1"></i></a>
                            <ul class="submenu">
                              <li><a href="${pofApplyUrl}" class="nav-btn-apply"><i class="fas fa-file-signature me-1"></i> Apply For POF</a></li>
                            </ul>
                          </li>
                          <li class="${active === 'loans' ? 'active' : ''} has-dropdown">
                            <a href="${loansUrl}">SME Loans <i class="fas fa-angle-down ms-1"></i></a>
                            <ul class="submenu">
                              <li><a href="${loansApplyUrl}" class="nav-btn-apply"><i class="fas fa-edit me-1"></i> Apply Online</a></li>
                            </ul>
                          </li>
                          <li class="${active === 'partners' ? 'active' : ''}">
                            <a href="${partnersUrl}">Partnerships</a>
                          </li>
                          <li class="${active === 'contact' ? 'active' : ''}">
                            <a href="${contactUrl}">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="header-right d-flex justify-content-end align-items-center">
                  <div class="header-button me-3">
                    <a href="https://wa.me/2348067944657?text=Hello%20Bridge%20Bucks,%20I%20need%20embassy-compliant%20Proof%20of%20Funds%20(POF)%20or%20SME%20Loan." target="_blank" class="theme-btn theme-btn-navy" style="padding: 14px 24px; border-radius: 8px; font-weight: 700;">
                      <span>WhatsApp Support <i class="fab fa-whatsapp ms-1"></i></span>
                    </a>
                  </div>
                  <div class="header__hamburger d-lg-none my-auto">
                    <div class="sidebar__toggle" title="Toggle Navigation Menu">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;

    container.innerHTML = headerHTML;
  }

  // Execute renderHeader immediately so elements are in DOM before meanmenu initializes
  renderHeader();
})();
