function verif() {
  let inputLogin = document.getElementById("login");
  let login = document.getElementById("login").value;
  let veriflogin = login.indexOf("@");
  let acceptlogin = false;

  if (veriflogin != -1) {
    acceptlogin = true;
    inputLogin.classList.remove("wrong");
  } else {
    inputLogin.classList.add("wrong");
    acceptlogin = false;
  }

  let inputPassword = document.getElementById("password");
  let password = document.getElementById("password").value;
  let verifpassword = password.split("");
  let number = 0;
  let acceptpassword = false;

  for (let i = 0; i <= verifpassword.length; i++) {
    if (isNaN(verifpassword[i])) {
      continue;
    } else {
      number++;
    }
  }

  if (number >= 2) {
    acceptpassword = true;
    inputPassword.classList.remove("wrong");
  } else {
    inputPassword.classList.add("wrong");
    acceptpassword = false;
  }

  if (acceptlogin == true && acceptpassword == true) {
    location.replace(
      "file:///C:/Users/33621/Documents/competence%203a%20boostrap/index.html"
    );
  } else {
    alert("L'email ou le mot de passe est incorrect !");
  }
}

/*****************/

(function ($) {
  "use strict";

  // manual carousel controls
  $(".next").click(function () {
    $(".carousel").carousel("next");
    return false;
  });
  $(".prev").click(function () {
    $(".carousel").carousel("prev");
    return false;
  });
})(jQuery);

/***************/

$("#recent").click(function () {
  $("#trierPar").html("<p>Les plus récents</p>");
});

$("#populaire").click(function () {
  $("#trierPar").html("<p>Les plus populaires</p>");
});

$("#recomandation").click(function () {
  $("#trierPar").html("<p>Vos recomandations</p>");
});

/************/
let like =0;
$("#btn-like").click(function () {
  like += 1;
  $("#nbre-like").html("<p>" + like + "</p>");
})
