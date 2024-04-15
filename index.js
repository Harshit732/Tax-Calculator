function displaytoolkit(event) {
  document.getElementById(event).style.opacity = "1";
}
function hidetoolkit(event) {
  document.getElementById(event).style.opacity = "0";
}

function calculate() {
  var c = 0;
  var annual_income = parseFloat(document.getElementById("annual").value);
  var extra_income = parseFloat(document.getElementById("extra-income").value);

  var age = document.getElementById("age").value;
  console.log(age);

  var deduction = parseFloat(document.getElementById("deduction").value);
  if (isNaN(annual_income)) {
    document.getElementById("income-error").style.display = "inline-block";
    c = 1;
  }
  if (isNaN(extra_income)) {
    document.getElementById("extraincome-error").style.display = "inline-block";
    c = 1;
  }
  if (isNaN(deduction)) {
    document.getElementById("deduction-error").style.display = "inline-block";
    c = 1;
  }
  if (age === '') {
    document.getElementById("age-error").style.display = "inline-block";
    c = 1;
  }
  if (annual_income && extra_income && age && deduction) {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();

    var overall_income = annual_income + extra_income - deduction;
    if (overall_income <= 800000) {
      console.log("not tax");
    } else {
      var after_tax = 0;
      if (age == 1) {
        after_tax = overall_income - (overall_income - 800000) * 0.3;
        console.log(after_tax);
      } else if (age == 2) {
        after_tax = overall_income - (overall_income - 800000) * 0.4;
        console.log(after_tax);
      } else if (age == 3) {
        after_tax = overall_income - (overall_income - 800000) * 0.1;
        console.log(after_tax);
      } else {
        document.getElementById("age-error").style.display = "block";
      }
    }
    var value = document.getElementById("outputincome");
    value.innerHTML = after_tax;
  }
}

function refreshPage() {
  location.reload();
}
