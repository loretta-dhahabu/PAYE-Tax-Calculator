function calculate_paye() {
  if (document.getElementById("2020").checked) {
    var year = document.getElementById("2020").value;
  } else if (document.getElementById("2021").checked) {
    var year = document.getElementById("2021").value;
  } else if (document.getElementById("2022").checked) {
    var year = document.getElementById("2022").value;
  }

  if (document.getElementById("pmonth").checked) {
    var pay_period = document.getElementById("pmonth").value;
  } else if (document.getElementById("pyear").checked) {
    var pay_period = document.getElementById("pyear").value;
  }
  if (document.getElementById("pyes").checked) {
    var deduct_social = document.getElementById("pyes").value;
  } else if (document.getElementById("pno").checked) {
    var deduct_social = document.getElementById("pno").value;
  }
  if (document.getElementById("iyes").checked) {
    var deduct_hospital = document.getElementById("iyes").value;
  } else if (document.getElementById("ino").checked) {
    var deduct_hospital = document.getElementById("ino").value;
  }
  if (document.getElementById("hyes").checked) {
    var deduct_housing = document.getElementById("hyes").value;
  } else if (document.getElementById("hno").checked) {
    var deduct_housing = document.getElementById("hno").value;
  }

  if (document.getElementById("new").checked) {
    var nssf_rate = document.getElementById("new").value;
  } else if (document.getElementById("old").checked) {
    var nssf_rate = document.getElementById("old").value;
  }
  var salary = AutoNumeric.getNumericString(".salary");
  var benefits = AutoNumeric.getNumericString(".benefits");

  if (salary != "") {
    var myRandom = parseInt(Math.random() * 99999999);
    url =
      "calculate/math/paye.php?pay_period=" +
      encodeURI(pay_period) +
      "&salary=" +
      encodeURI(salary) +
      "&benefits=" +
      encodeURI(benefits) +
      "&year=" +
      encodeURI(year) +
      "&deduct_housing=" +
      encodeURI(deduct_housing) +
      "&deduct_social=" +
      encodeURI(deduct_social) +
      "&deduct_hospital=" +
      encodeURI(deduct_hospital) +
      "&nssf_rate=" +
      encodeURI(nssf_rate) +
      "&rand=" +
      myRandom;
    makeRequest4(url, "payeresults");
  }
}
