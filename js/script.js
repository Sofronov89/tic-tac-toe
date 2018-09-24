var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1, m = 1, tm = 1, s = 0, ts = 0, ms = 0, init = 0, tsS = 0, tmS = 0, hS = 0;

readout='00:00:00';
function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1; m = 1; tm = 1; s = 0; ts = 0; ms = 0;
    init = 0;
    document.Clock.stopwatch.value = readout;
};

function StartTime() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s*1000);
    if (t > 999) {s++;}
    if ((s + tsS) >= (m*base)) {
        ts = 0;
        m++;
    } else {
        ts = parseInt((ms/100) + (s + tsS));
        if (ts >= base) {ts = ts - ((m - 1)*base);}
    };
    if ((m) > (h*base)) {
        tm = 1;
        h++;
    } else {
        tm = parseInt((ms/100) + (m));
        if (tm >= base) {tm = tm - ((h - 1)*base);}
    };
    ms = Math.round(t/10);
    if (ms > 99) {ms = 0;}
    if (ms == 0) {ms = '00';}
    if (ms > 0 && ms <= 9) { ms = '0' + ms; }
    if (ts > 0) { ds = ts; if (ts < 10) {ds = '0' + ts;}} else {ds = '00';}
    dm = tm - 1;
    if (dm > 0) { if (dm < 10) {dm = '0' + dm;}} else {dm = '00';}
    dh = h - 1;
    if (dh > 0) {if (dh < 10) {dh = '0' + dh;}} else {dh = '00';}
    readout = dh + ':' + dm + ':' + ds;
    document.Clock.stopwatch.value = readout;
    clocktimer = setTimeout("StartTime()",1);
};

function StartStop() {
    if (init == 0){
        ClearСlock();
        dateObj = new Date();
        StartTime();
    } else {
        clearTimeout(clocktimer);
    }
};

StartStop();
init = 1;

logicGame = function() {
    if (k == 1) {
        if ((($('div.gameWindow a')[1].className == x) && ($('div.gameWindow a')[2].className == x)) ||
            (($('div.gameWindow a')[3].className == x) && ($('div.gameWindow a')[6].className == x)) ||
            (($('div.gameWindow a')[4].className == x) && ($('div.gameWindow a')[8].className == x))) {
            finishS = 1;
        }
    };
    if (k == 2) {
        if ((($('div.gameWindow a')[0].className == x) && ($('div.gameWindow a')[2].className == x)) ||
            (($('div.gameWindow a')[4].className == x) && ($('div.gameWindow a')[7].className == x))) {
            finishS = 1;
        }
    };
    if (k == 3) {
        if ((($('div.gameWindow a')[0].className == x) && ($('div.gameWindow a')[1].className == x)) ||
            (($('div.gameWindow a')[4].className == x) && ($('div.gameWindow a')[6].className == x)) ||
            (($('div.gameWindow a')[5].className == x) && ($('div.gameWindow a')[8].className == x))) {
            finishS = 1;
        }
    };
    if (k == 4) {
        if ((($('div.gameWindow a')[0].className == x) && ($('div.gameWindow a')[6].className == x)) ||
            (($('div.gameWindow a')[4].className == x) && ($('div.gameWindow a')[5].className == x))) {
            finishS = 1;
        }
    };
    if (k == 5) {
        if ((($('div.gameWindow a')[1].className == x) && ($('div.gameWindow a')[7].className == x)) ||
            (($('div.gameWindow a')[3].className == x) && ($('div.gameWindow a')[5].className == x)) ||
            (($('div.gameWindow a')[0].className == x) && ($('div.gameWindow a')[8].className == x)) ||
            (($('div.gameWindow a')[2].className == x) && ($('div.gameWindow a')[6].className == x))) {
            finishS = 1;
        }
    };
    if (k == 6) {
        if ((($('div.gameWindow a')[3].className == x) && ($('div.gameWindow a')[4].className == x)) ||
            (($('div.gameWindow a')[2].className == x) && ($('div.gameWindow a')[8].className == x))) {
            finishS = 1;
        }
    };
    if (k == 7) {
        if ((($('div.gameWindow a')[0].className == x) && ($('div.gameWindow a')[3].className == x)) ||
            (($('div.gameWindow a')[7].className == x) && ($('div.gameWindow a')[8].className == x)) ||
            (($('div.gameWindow a')[2].className == x) && ($('div.gameWindow a')[4].className == x))) {
            finishS = 1;
        }
    };
    if (k == 8) {
        if ((($('div.gameWindow a')[6].className == x) && ($('div.gameWindow a')[8].className == x)) ||
            (($('div.gameWindow a')[1].className == x) && ($('div.gameWindow a')[4].className == x))) {
            finishS = 1;
        }
    };
    if (k == 9) {
        if ((($('div.gameWindow a')[0].className == x) && ($('div.gameWindow a')[4].className == x)) ||
            (($('div.gameWindow a')[2].className == x) && ($('div.gameWindow a')[5].className == x)) ||
            (($('div.gameWindow a')[6].className == x) && ($('div.gameWindow a')[7].className == x))) {
            finishS = 1;
        }
    }
};

$('div.users p:first').addClass('gamer');

$('div.button_restart a').click(function () {
    $('div.button_restart a').toggleClass('text_back text_restart');
    $('div.shadow_none').toggleClass('shadow_active');

    if (($('div.shadow_none').hasClass('shadow_active')) && (initS < 9) && (finishS == 0)){
        StartStop();
        tsS = s + tsS; tmS = m + tmS; hS = h + hS;
        init = 0;
    }else{
        if ($('div.shadow_none').hasClass('shadow_none')) {
            StartStop();
            init = 1;
        }
    }
});

var f = 0;
var k = 0;
var x = 0;
var initS = 0;
var finishS = 0;
$('div.gameWindow a').click(function () {
    if (($(this).hasClass('button-game')) && (f == 0)) {
        $(this).removeClass('button-game');
        $(this).addClass('active_x');
        initS++;
        f = 1;
    };
    if (($(this).hasClass('button-game')) && (f == 1)) {
        $(this).removeClass('button-game');
        $(this).addClass('active_o');
        initS++;
        f = 0;
    };

    k = $(this)[0].id;
    x = $(this)[0].className;

    logicGame();

    var printWin;
    if (x == 'active_x'){
        printWin = 'Chuck Norris X';
    };
    if (x == 'active_o'){
        printWin = 'O Jerry Berry';
    };

    $('div.users p').toggleClass('gamer');

    if (finishS == 1) {
        StartStop();
        $('div.shadow_none').toggleClass('shadow_active');
        alert('победитель   ' +printWin);
    };
    if ((initS >= 9) && (finishS == 0)) {
        $('div.shadow_none').toggleClass('shadow_active');
        alert('ничья');
        StartStop();
    }
});
