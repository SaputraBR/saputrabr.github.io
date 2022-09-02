
    
    function sekrolTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    
    function buttonNav() { 
       document.getElementById('sideNav').style.width = '100%' ;
       document.getElementById('sideNav2').style.display = 'block' ;
    }
        
    function closeNav() {
        document.getElementById('sideNav').style.width = '0';
        document.getElementById('sideNav2').style.display = 'none';
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
        } else {
            elemen.setAttribute('class', 'bg-light');
            localStorage.removeItem('theme', 'bg-light');
            moon.hidden = false;
            sun.hidden = true;
            //ikon ganti
            iconBlack.hidden = false;
            iconWhite.hidden = true;
        }
    };

   
    