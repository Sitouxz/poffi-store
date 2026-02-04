/**
 * Poffi Store - Layout Component Injection
 * Handles shared Header and Footer across all pages
 */

/**
 * Navigation links configuration
 */
const NAV_LINKS = [
    { label: 'Home', href: 'index.html', keywords: ['index', ''] },
    { label: 'Shop', href: 'products.html', keywords: ['products', 'product'] },
    { label: 'Journal', href: 'journal.html', keywords: ['journal', 'blog'] }
];

/**
 * Determines which nav link should be active based on current URL
 * @returns {string} The href of the active link
 */
function getActiveNavLink() {
    const currentPath = window.location.pathname.toLowerCase();
    const currentFile = currentPath.split('/').pop().replace('.html', '') || 'index';

    for (const link of NAV_LINKS) {
        if (link.keywords.some(keyword => currentFile === keyword || currentFile.includes(keyword))) {
            return link.href;
        }
    }

    return 'index.html'; // Default to home
}

/**
 * Generates the navigation links HTML with active state
 * @returns {string} HTML string for navigation links
 */
function generateNavLinks() {
    const activeHref = getActiveNavLink();

    return NAV_LINKS.map(link => {
        const isActive = link.href === activeHref;
        const activeClass = isActive ? ' active' : '';
        return `<a class="nav-link${activeClass}" href="${link.href}">${link.label}</a>`;
    }).join('\n                        ');
}

/**
 * Header HTML template
 */
function getHeaderHTML() {
    return `
    <header class="site-header">
        <div class="header-inner">
            <!-- Logo & Navigation -->
            <div style="display: flex; align-items: center; gap: 3rem;">
                <a href="index.html" class="logo">
                    <div class="logo-icon">
                        <span class="material-symbols-outlined" style="font-size: 20px;">redeem</span>
                    </div>
                    <span>Poffi Store</span>
                </a>
                <nav class="nav-links">
                    ${generateNavLinks()}
                </nav>
            </div>
            
            <!-- Actions -->
            <div class="header-actions">
                <!-- Cart Button -->
                <button class="icon-btn" aria-label="Shopping Cart">
                    <span class="material-symbols-outlined">shopping_cart</span>
                </button>
            </div>
        </div>
    </header>
    `;
}

/**
 * Footer HTML template
 */
function getFooterHTML() {
    const currentYear = new Date().getFullYear();

    return `
    <footer class="site-footer">
        <div class="footer-inner">
            <a href="index.html" class="footer-logo">
                <div class="logo-icon">
                    <span class="material-symbols-outlined" style="font-size: 16px;">redeem</span>
                </div>
                <span>Poffi Store</span>
            </a>
            
            <p class="footer-copyright">© ${currentYear} Poffi Store. All rights reserved.</p>
            
            <div class="footer-links">
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
            </div>
        </div>
    </footer>
    `;
}

/**
 * Injects the header into the page
 * Call this function after DOM is ready
 */
function injectHeader() {
    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = getHeaderHTML();
    } else {
        console.warn('Header container #app-header not found');
    }
}

/**
 * Injects the footer into the page
 * Call this function after DOM is ready
 */
function injectFooter() {
    const footerContainer = document.getElementById('app-footer');
    if (footerContainer) {
        footerContainer.innerHTML = getFooterHTML();
    } else {
        console.warn('Footer container #app-footer not found');
    }
}

/**
 * Convenience function to inject both header and footer
 */
function injectLayout() {
    injectHeader();
    injectFooter();
}
