/**
 * Poffi Store - Shared Header Component
 * Dynamically injects the header navigation into all pages
 */

function loadHeader() {
    const headerHTML = `
    <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F4EFE6]/90 dark:bg-[#1b1917]/90 border-b border-stone-200 dark:border-stone-800">
        <div class="px-4 md:px-10 py-3 max-w-[1440px] mx-auto w-full">
            <div class="flex items-center justify-between whitespace-nowrap gap-4">
                <!-- Logo & Links -->
                <div class="flex items-center gap-8 lg:gap-12">
                    <a href="index.html" class="flex items-center gap-3 text-stone-900 dark:text-white group cursor-pointer">
                        <div class="size-8 bg-[#5a4c3a] text-white rounded-lg flex items-center justify-center">
                            <span class="material-symbols-outlined text-[20px]">redeem</span>
                        </div>
                        <h2 class="text-lg font-bold leading-tight tracking-tight">Poffi Store</h2>
                    </a>
                    <div class="hidden lg:flex items-center gap-8">
                        <a class="text-sm font-semibold hover:text-[#5a4c3a] transition-colors nav-link" href="products.html" data-page="products">Shop</a>
                        <a class="text-sm font-semibold hover:text-[#5a4c3a] transition-colors nav-link" href="products.html" data-page="collections">Collections</a>
                        <a class="text-sm font-semibold hover:text-[#5a4c3a] transition-colors nav-link" href="journal.html" data-page="journal">Journal</a>
                    </div>
                </div>
                <!-- Actions -->
                <div class="flex flex-1 justify-end gap-4 md:gap-6 items-center">
                    <!-- Search (Hidden on mobile) -->
                    <label class="hidden md:flex flex-col min-w-40 h-10 max-w-64 group">
                        <div class="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm ring-1 ring-inset ring-stone-200 dark:ring-stone-700 bg-white dark:bg-stone-800 focus-within:ring-2 focus-within:ring-[#5a4c3a] transition-all">
                            <div class="flex items-center justify-center pl-3 text-stone-400">
                                <span class="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input class="flex w-full min-w-0 flex-1 bg-transparent border-none text-sm px-3 text-stone-900 dark:text-white placeholder:text-stone-400 focus:ring-0" placeholder="Search gifts..." />
                        </div>
                    </label>
                    <!-- Icon Buttons -->
                    <div class="flex gap-2">
                        <button class="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors">
                            <span class="material-symbols-outlined text-stone-900 dark:text-white">search</span>
                        </button>
                        <button class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors relative">
                            <span class="material-symbols-outlined text-stone-900 dark:text-white">shopping_bag</span>
                            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors">
                            <span class="material-symbols-outlined text-stone-900 dark:text-white">person</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;

    // Insert header at the beginning of the body or replace existing header
    const existingHeader = document.querySelector('header');
    if (existingHeader) {
        existingHeader.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Highlight active nav link based on current page
    highlightActiveNavLink();
}

function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage ||
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === 'products.html' && (link.dataset.page === 'products' || link.dataset.page === 'collections')) ||
            (currentPage === 'product-detail.html' && link.dataset.page === 'products') ||
            (currentPage === 'journal.html' && link.dataset.page === 'journal')) {
            link.classList.add('text-[#5a4c3a]', 'font-bold');
        }
    });
}

// Auto-load header when script is loaded
document.addEventListener('DOMContentLoaded', loadHeader);
