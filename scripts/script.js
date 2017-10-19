var m = document.getElementById('lightbox'),
    p = document.getElementById('page');

function swap() {
    p.parentNode.insertBefore(m, p);
}

// swap();

// modal window
(function () {
    
    'use strict';    
    
    var mOverlay = getId('lightbox'),
    mOpen = getId('modal_open'),
    mClose = getId('modal_close'),
    modal = getId('modal_holder'),
    allNodes = document.querySelectorAll("*"),
    modalOpen = false,
    lastFocus,
    i;
    
    function getId(id) {
        return document.getElementById(id);
    }

    function modalShow() {
        lastFocus = document.activeElement;
        mOverlay.setAttribute('aria-hidden', 'false');
        modalOpen = true;
        modal.setAttribute('tabindex', '0');
        // modal.setAttribute('tabindex', '0');
        // modal.focus();
    }

    function modalClose(event) {
        if (modalOpen && (!event.keyCode || event.keyCode === 27)) {
            mOverlay.setAttribute('aria-hidden', 'true');
            modal.setAttribute('tabindex', '-1');
            modalOpen = false;
            lastFocus.focus();
        }
    }    

    function focusRestrict(event) {
        if (modalOpen && !modal.contains(event.target)) {
            event.stopPropagation();
            modal.focus();
        }
    }

    mOverlay.addEventListener('click', function (e) {
        if (e.target == modal.parentNode) {
            modalClose(e);
        }
    }, false);


    // open modal by btn click/hit
    mOpen.addEventListener('click', modalShow);

    // close modal by btn click/hit
    mClose.addEventListener('click', modalClose);

    // close modal by keydown, but only if modal is open
    document.addEventListener('keydown', modalClose);

})();
