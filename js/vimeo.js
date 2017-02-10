/* ======= Animations ======= */
$(document).ready(function() {
    /* ======= Auto play Vimeo in Bootstrpa Modal ======= */
    
    var iframe = document.getElementById('vimeo-video');
    // $f == Froogaloop
    var player = $f(iframe);
    
    $('#video-popup').on('hidden.bs.modal', function () {
        player.api('pause');
    });
    
    $('#video-popup').on('shown.bs.modal', function () {
        player.api('play');
    });
            
});