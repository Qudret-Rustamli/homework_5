var oyuncu = document.querySelector('.adi_o_name');
oyuncu.innerHTML = prompt("Oyunu oynamaq üçün adınızı qeyd edin!")

// deyisenlerin teyin olunmasi


oyuncunun_secimi = null;
kompun_secimi = null;
oyuncunun_xali = 0;
kompun_xali = 0;
hechece=0;


// secim arrayin teyin olunmasi

var secimler = ["r", "p", "s"]

//teqribi secim ucun funksiyanin yazilmasi

function randomReqemler() {

    x = Math.floor(Math.random() * 3)

    return x;

}


//kompyuterin secimi

function kompsecimi() {
    kompun_secimi = secimler[randomReqemler()]
    return kompun_secimi;

}


window.onkeyup = function (e) {






    if (e.key !== "r" && e.key !== "s" && e.key !== "p") {
        alert("Ancaq R P S herflerinderrn istifade edin!!!!")
    }


    oyuncunun_secimi = e.key

    kompsecimi()



    if (oyuncunun_secimi === "r" && kompun_secimi === "s") {
        oyuncunun_xali += 1
    } else if (oyuncunun_secimi === "s" && kompun_secimi === "r") {
        kompun_xali += 1
    } else if (oyuncunun_secimi === "s" && kompun_secimi === "p") {
        kompun_xali += 1
    } else if (oyuncunun_secimi === "p" && kompun_secimi === "s") {
        oyuncunun_xali += 1
    } else if (oyuncunun_secimi === "p" && kompun_secimi === "r") {
        oyuncunun_xali += 1
    } else if (oyuncunun_secimi === "r" && kompun_secimi === "p") {
        kompun_xali += 1
    } else {
        
        hechece+=1

    }




    /* DOM elementlerinin teyin edilmesi */

    //oyunucunun DOM elementleri



    var os = document.querySelector('.adin_oyuncu_secimi');
    os.innerHTML = oyuncunun_secimi;

    var oyuncunun_secmine_uygun_sekil = document.querySelector('.oyuncu_sekili');

    oyuncunun_secmine_uygun_sekil.src = "images/" + os.innerHTML + ".png"


    var ox = document.querySelector('.adi_o_xal');
    ox.innerHTML = oyuncunun_xali

    //oyunucunun DOM elementleri

    ks = document.querySelector('.komp_secimi');

    ks.innerHTML = kompun_secimi

    var kompun_secmine_uygun_sekil = document.querySelector('.komp_sekili');

    kompun_secmine_uygun_sekil.src = "images/" + ks.innerHTML + ".png"

    var kx = document.querySelector('.komp_xal');
    kx.innerHTML = kompun_xali;


    //hec hece ucun dom elementlerinin teyin olunmasi

    var hh = document.querySelector('.hechece');
    hh.innerHTML = hechece;

}











































