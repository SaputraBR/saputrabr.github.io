    //tombol kembali ke atas

    window.onscroll = function() {backTop()}

    function backTop() {
        
        var buttonTop = document.getElementById('rollBack')

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            buttonTop.hidden = false;
        } else {
            buttonTop.hidden = true;
        };
    }
    
    var rollBack = $('#rollBack');

    rollBack.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0})
    });





    
    // sidenav belum ada efek transisi
    function buttonNav() { 
       document.getElementById('sideNav').style.width = '100%' ;
       document.getElementById('setengahBg').style.opacity = '100%' ;
    }
        
    function closeNav() {
        document.getElementById('sideNav').style.width = '0';
        document.getElementById('setengahBg').style.opacity = '0';
    }



    /**
     * fungsi untuk dark mode
     */

     if (localStorage.getItem('theme') == 'dark')
        darkMode(true);

    function darkMode(e) {
        var elemen = document.body;
        var moon = document.getElementById('moonToggle');
        var sun = document.getElementById('sunToggle');
        //ikon ganti
        var iconWhite = document.getElementById('iconWhite');
        var iconBlack = document.getElementById('iconBlack');
         
        if(e) {
            elemen.setAttribute('class', 'dark-mode');
            localStorage.setItem('theme', 'dark');
            moon.hidden = true;
            sun.hidden = false;
            //ikon ganti
            iconBlack.hidden = true;
            iconWhite.hidden = false;
            document.getElementById('biUp').style.color = 'white';
        } else {
            elemen.setAttribute('class', '');
            localStorage.removeItem('theme');
            moon.hidden = false;
            sun.hidden = true;
            //ikon ganti
            iconBlack.hidden = false;
            iconWhite.hidden = true;
            document.getElementById('biUp').style.color = '';
        }

    };


   
    