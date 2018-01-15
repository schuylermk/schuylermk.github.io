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

///////////////////////////////////////////////

var m2 = document.getElementById('lightbox2'),
    p2 = document.getElementById('page2');

function swap() {
    p2.parentNode.insertBefore(m2, p2);
}

// swap();

// modal window
(function () {

    'use strict';

    var mOverlay2 = getId('lightbox2'),
        mOpen2 = getId('modal_open2'),
        mClose2 = getId('modal_close2'),
        modal2 = getId('modal_holder2'),
        allNodes = document.querySelectorAll("*"),
        modalOpen2 = false,
        lastFocus,
        i;

    function getId(id) {
        return document.getElementById(id);
    }

    function modalShow2() {
        lastFocus = document.activeElement;
        mOverlay2.setAttribute('aria-hidden', 'false');
        modalOpen2 = true;
        modal2.setAttribute('tabindex', '0');
        // modal.setAttribute('tabindex', '0');
        // modal.focus();
    }

    function modalClose2(event) {
        if (modalOpen2 && (!event.keyCode || event.keyCode === 27)) {
            mOverlay2.setAttribute('aria-hidden', 'true');
            modal2.setAttribute('tabindex', '-1');
            modalOpen2 = false;
            lastFocus.focus();
        }
    }

    function focusRestrict(event) {
        if (modalOpen2 && !modal2.contains(event.target)) {
            event.stopPropagation();
            modal2.focus();
        }
    }

    mOverlay2.addEventListener('click', function (e) {
        if (e.target == modal2.parentNode) {
            modalClose2(e);
        }
    }, false);


    // open modal by btn click/hit
    mOpen2.addEventListener('click', modalShow2);

    // close modal by btn click/hit
    mClose2.addEventListener('click', modalClose2);

    // close modal by keydown, but only if modal is open
    document.addEventListener('keydown', modalClose2);

})();
