// show focus only when user is tabbing, you can find it's relevant CSS code in main.css
function handleFirstTab(e) {
  if (e.keyCode === 9) { // the "I am a keyboard user" key
    document.body.classList.add('user__is__tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);

document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.querySelector('.parallax-placeholder')
  const footer = document.querySelector('.footer-container')

  let placeholderTop,
    ticking

  window.addEventListener('resize', onResize)

  // On DOM Content Load, set placeholder height to be equal to footer height
  updateHolderHeight()
  checkFooterHeight()

  // On window resize, update placeholder height to be equal to footer height
  function onResize() {
    updateHolderHeight()
    checkFooterHeight()
  }

  // Placeholder should always match footer height
  function updateHolderHeight() {
    // placeholder.style.height = `${footer.offsetHeight}px`
  }

  function checkFooterHeight() {
    if (footer.offsetHeight > window.innerHeight) { // Check if footer is taller than window height
      window.addEventListener('scroll', onScroll)
      footer.style.bottom = 'unset'
      footer.style.top = '0px'
    } else { // If footer height is not greater than window height, bottom is 0 for normal parllax 
      window.removeEventListener('scroll', onScroll)
      footer.style.top = 'unset'
      footer.style.bottom = '0px'
    }
  }

  function onScroll() {
    placeholderTop = Math.round(placeholder.getBoundingClientRect().top)
    requestTick()
  }

  function requestTick() {
    if (!ticking) requestAnimationFrame(updateBasedOnScroll)
    ticking = true
  }

  function updateBasedOnScroll() {
    // Reset the tick so we can capture the next onScroll
    ticking = false

    // When main content disappears from view, start to move footer up 
    // in conjunction with placeholder top value (in relation to viewport)
    if (placeholderTop <= 0) {
      footer.style.top = `${placeholderTop}px` // match footer top value with placeholder's top value
    }
  }
})

// Requires the polyfill unitl fully supported
import dialogPolyfill from "https://cdn.skypack.dev/dialog-polyfill@0.5.6";

// Custom open and close handeler
// This also has an close via backdrop option
// TODO Replace with the Fylgja Plugin `@fylgja/dialog-js`
function newDialog(id, button, backdrop = true) {
    const dialog = document.querySelector(id);
    const btn = document.querySelector(button);

    if (!dialog) return;
    if (!btn) return;

    if (typeof HTMLDialogElement !== "function") {
        dialogPolyfill.registerDialog(dialog);
    }

    const dialogClose = (target, e, dialog) => {
        if (!e.target.closest(target)) return;
        dialog.close();
    };

    const dialogCloseOnBackdrop = (e, dialog) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;

        if (!isInDialog) {
            dialog.close();
        }
    };

    btn.addEventListener("click", () => {
        if (backdrop) {
            dialog.showModal();
        } else {
            dialog.show();
        }
    });

    dialog.addEventListener("click", (e) => {
        dialogClose(".close", e, dialog);
        dialogCloseOnBackdrop(e, dialog);
    });
}

newDialog("#dialog-modal-gutter-cleaning", "#show-dialog-modal-gutter-cleaning");
newDialog("#dialog-modal-residential", "#show-dialog-modal-residential");
newDialog("#dialog-modal-commercial", "#show-dialog-modal-commercial");
newDialog("#dialog-modal-hot-water", "#show-dialog-modal-hot-water");
newDialog("#dialog-modal-insurance", "#show-dialog-modal-insurance");