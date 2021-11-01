let slider = document.getElementById("myLimit");
let output = document.getElementById("count");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}


let currentPage = 0;
showPage(currentPage);

function showPage(n) {
  let x = document.getElementsByClassName("page");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  let x = document.getElementsByClassName("page");
  if (n == 1 && !validateForm()) return false;
  x[currentPage].style.display = "none";
  currentPage = currentPage + n;
  if (currentPage >= x.length) {
    document.getElementById("application_form").submit();
    return false;
  }
  showPage(currentPage);
}

function validateForm() {
  let x, y, i, valid = true;
  x = document.getElementsByClassName("page");
  y = x[currentPage].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("circle")[currentPage].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let i, x = document.getElementsByClassName("circle");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

let answers = document.getElementById('nextBtnLast').addEventListener('click', () => {
  let radio = document.querySelectorAll('.have_card');
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      dataHaveCard = radio[i].value;
      break;
    }
  }
  let dataLimit = document.getElementById('myLimit').value;
  let dataCard = document.getElementById('card').value;
  let dataFirst = document.getElementById('first_name').value;
  let dataLast = document.getElementById('last_name').value;
  let dataIsik = document.getElementById('isik_name').value;
  let dataEmail = document.getElementById('email').value;
  let dataIPhone = document.getElementById('phone').value;

  document.querySelector('.have_credit').innerHTML = dataHaveCard;
  document.querySelector('.credit_limit').innerHTML = dataLimit;
  document.querySelector('.why_need').innerHTML = dataCard;
  document.querySelector('.name_first').innerHTML = dataFirst;
  document.querySelector('.name_last').innerHTML = dataLast;
  document.querySelector('.name_isik').innerHTML = dataIsik;
  document.querySelector('.email_info').innerHTML = dataEmail;
  document.querySelector('.phone_info').innerHTML = dataIPhone;
})

