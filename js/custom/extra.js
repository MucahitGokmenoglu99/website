// Navbar 
window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile = function () {
        const nCollapsible = document.body.querySelector("#mainNavbar");

        if (!nCollapsible) {
            return;
        } if (window.scrollY === 0) {
            nCollapsible.classList.remove("navbar-mobile");
        } else {
            nCollapsible.classList.add("navbar-mobile");

        }
    };
    navbarMobile();
    document.addEventListener("scroll", navbarMobile);

    const myNavbar = document.body.querySelector("#mainNavbar");
    if (myNavbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNavbar",
            offset: 740,

        });

    }
});

var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function () {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("focus", function () {
        if (phoneInput.value.trim() === "") {
            phoneInput.value = "0";
        }
    });

});


(function () {
    'use strict'
    var myName = document.querySelector("#name");
    var myEmail = document.querySelector("#email");
    var myPhone = document.querySelector("#phone");
    var myMessage = document.querySelector("#message");
    var myBtn = document.querySelector("#BtnContact");

    if (myMessage.value.length == 0) {
        myBtn.disabled = true;
    }

    const spacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;
    const letterRegex = /[A-Za-z]/;

    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myPhone.addEventListener("blur", controlPhone);
    myMessage.addEventListener("blur", controlMessage);



    function controlName(params) {
        var myError = document.querySelector("#ErrName");
        if (myName.value.length == 0) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim alanı boş bırakılamaz !";
            return false;

        }
        else if (!spacePattern.test(myName.value)) {
        if (letterRegex.test(myName.value)) {

            myName.classList.remove("is-invalid");
            myName.classList.add("is-valid");

            return false;

        } else {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "Lütfen geçerli bir isim giriniz !";
            return false; 
        }
    
     } else if (myName.value.length < 3) {
        myName.classList.remove("is-valid");
        myName.classList.add("is-invalid");
        myError.textContent = "İsminiz 3 karakterden az olamaz !";
        return false;
    } else if (!NumericPattern.test(myName.value)) {
        myName.classList.remove("is-valid");
        myName.classList.add("is-invalid");
        myError.textContent = "İsminizde rakam kullanılamaz !";
        return false;
    } else {
        myName.classList.remove("is-invalid");
        myName.classList.add("is-valid");
        return true;
    }
}




    function controlEmail(params) {
    var myError = document.querySelector("#ErrEmail");
    if (myEmail.value.length == 0) {
        myEmail.classList.remove("is-valid");
        myEmail.classList.add("is-invalid");
        myError.textContent = "E-posta alanı boş bırakılamaz !";
        return false;

    } else if (!spacePattern.test(myEmail.value)) {
        myEmail.classList.remove("is-valid");
        myEmail.classList.add("is-invalid");
        myError.textContent = "E-posta adresinizde boşluk bıraktınız !";
        return false;
    } else if (!EmailPattern.test(myEmail.value)) {
        myEmail.classList.remove("is-valid");
        myEmail.classList.add("is-invalid");
        myError.textContent = "Lütfen geçerli bir E-posta adresi giriniz.";
        return false;
    } else {
        myEmail.classList.remove("is-invalid");
        myEmail.classList.add("is-valid");
        return true;
    }




}
function controlPhone(params) {
    var myError = document.querySelector("#ErrPhone");
    if (myPhone.value.length == 0) {
        myPhone.classList.remove("is-valid");
        myPhone.classList.add("is-invalid");
        myError.textContent = "Telefon alanı boş bırakılamaz !";
        return false;

    }  else if (!spacePattern.test(myPhone.value)) {
        myPhone.classList.remove("is-valid");
        myPhone.classList.add("is-invalid");
        myError.textContent = "Telefon numaranızda boşluk bıraktınız !";
        return false;
    } else if (!OnlyNumberPattern.test(myPhone.value)) {
        myPhone.classList.remove("is-valid");
        myPhone.classList.add("is-invalid");
        myError.textContent = "Sadece rakam kullanılabilir !";
        return false;
    } else if (myPhone.value.length < 11) {
        myPhone.classList.remove("is-valid");
        myPhone.classList.add("is-invalid");
        myError.textContent = "Lütfen geçerli bir telefon numarası giriniz.";
        return false;
    }else {
        myPhone.classList.remove("is-invalid");
        myPhone.classList.add("is-valid");
        return true;
    }




}
function controlMessage(params) {
    var myError = document.querySelector("#ErrMessage");
    if (myMessage.value.length == 0) {
        myMessage.classList.remove("is-valid");
        myMessage.classList.add("is-invalid");
        myError.textContent = "Lütfen bir mesaj giriniz !";
        return false;

    } else if (!spacePattern.test(myMessage.value)) {
        if (letterRegex.test(myMessage.value)) {

            myMessage.classList.remove("is-invalid");
            myMessage.classList.add("is-valid");

            return false;

        } else {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.textContent = "Lütfen bir mesaj giriniz.";
            return false; 
        }
    
    }else if (myMessage.value.length < 10) {
        myMessage.classList.remove("is-valid");
        myMessage.classList.add("is-invalid");
        myError.textContent = "Mesajınız 10 karakterden az olamaz !";
        return false;
    } else {
        myMessage.classList.remove("is-invalid");
        myMessage.classList.add("is-valid");
        return true;
    }
}












myMessage.addEventListener("keyup", function () {
    document.getElementById("current-character").textContent = myMessage.value.length;
    if (myMessage.value.length >= 10) {
        myBtn.disabled = false;
    } else {
        myBtn.disabled = true;
    }
});

var myForms = document.querySelector(".needs-validation");
myForms.addEventListener("submit", function (e) {
    if (!myForms.checkValidity() || !controlName || !controlEmail || !controlPhone || !controlMessage) {
        e.preventDefault();
        e.stopPropagation();

    }
})

}) ();