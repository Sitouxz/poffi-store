/**
 * Poffi Store - Shared Footer Component
 * Dynamically injects the footer into all pages
 */

function loadFooter() {
    const footerHTML = `
    <footer class="w-full border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-[#1b1917] py-8">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <div class="flex items-center gap-3">
                <div class="size-6 bg-[#5a4c3a] text-white rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-[16px]">redeem</span>
                </div>
                <span class="font-semibold text-stone-700 dark:text-stone-300">Poffi Store</span>
            </div>
            <p>© 2024 Poffi Store. All rights reserved.</p>
            <div class="flex gap-6">
                <a class="hover:text-[#5a4c3a] transition-colors" href="#">Privacy Policy</a>
                <a class="hover:text-[#5a4c3a] transition-colors" href="#">Terms of Service</a>
            </div>
        </div>
    </footer>
    `;

    // Insert footer at the end of the body or replace existing footer
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        // Find the main wrapper div or body and append footer
        const wrapper = document.querySelector('.relative.flex.min-h-screen') ||
            document.querySelector('main')?.parentElement ||
            document.body;
        wrapper.insertAdjacentHTML('beforeend', footerHTML);
    }
}

// Auto-load footer when script is loaded
document.addEventListener('DOMContentLoaded', loadFooter);
