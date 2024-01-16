
///quizzz

function reponse(form4){ 
    var score=0;
    if(form4.thematique1[2].checked==true){score++;}
    if(form4.thematique2[1].checked==true){score++;} 
    if(form4.thematique3[1].checked==true){score++;}
    if(form4.thematique4[0].checked==true){score++;} 
    if(form4.thematique5[0].checked==true){score++;}
    if(form4.thematique6[0].checked==true){score++;}
    if(form4.thematique7[0].checked==true){score++;}
    if(form4.thematique8[0].checked==true){score++;}
   
    var scoreElement = document.getElementById("score");
    if (score > 4) {
      scoreElement.innerHTML = "Votre score est : " + score;
      scoreElement.style.color = "green";
    } else {
      scoreElement.innerHTML = "Votre score est : " + score;
      scoreElement.style.color = "red"; 
    }
  //alert('votre score est '+score);
  }


////




var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};