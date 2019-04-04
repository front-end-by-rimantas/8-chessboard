function generateChessBoard( eilutes, stulpeliai ) {
    
    var HTML = '';
    var eilutes_aukstis = 100 / eilutes + '%';
    var stulpelio_plotis = 100 / stulpeliai + '%';

    for ( var e=0; e<eilutes; e++ ) {
        HTML += '<div class="row" style="height: '+eilutes_aukstis+';">';
        // generuojame langelius
        for ( var s=0; s<stulpeliai; s++ ) {
            if ( e % 2 === 0 ) {
                if ( s % 2 === 0 ) {
                    // baltas langelis
                    HTML += '<div class="cell" style="width: '+stulpelio_plotis+';"></div>';
                } else {
                    // juodas langelis
                    HTML += '<div class="cell black" style="width: '+stulpelio_plotis+';"></div>';
                }
            } else {
                if ( s % 2 === 0 ) {
                    // juodas langelis
                    HTML += '<div class="cell black" style="width: '+stulpelio_plotis+';"></div>';
                } else {
                    // baltas langelis
                    HTML += '<div class="cell" style="width: '+stulpelio_plotis+';"></div>';
                }
            }
        }
        HTML += '</div>';
    }

    return HTML;
}