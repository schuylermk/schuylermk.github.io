document.onkeydown = function ESCclose(evt) {
    if (evt.keyCode == 27) {
        window.close();
        console.log('close the window...')
    }
} 
    
    // function getId(id) {
        //     return document.getElementById(id);
        // }
        
        // function getClass(class) {
            //     return document.getElementById(id);
            // }
            
            // var mOverlay = getId('lightbox'),
            //     modal = getClass('bxslider'),
            //     modalOpen = false,
            //     lastFocus,
            //     i;
            
            // function modalClose(event) {
                //     if (modalOpen && (!event.keyCode || event.keyCode === 27)) {
                    //         mOverlay.setAttribute('aria-hidden', 'true');
                    //         modal.setAttribute('tabindex', '-1');
                    //         modalOpen = false;
                    //         lastFocus.focus();
                    //     }
                    // }
                                            // document.onkeydown = function (evt) {
                                            //     evt = evt || window.event;
                                            //     if (evt.keyCode == 27) {
                                            //         alert('Esc key pressed.');
                                            //     }
                                            // };
