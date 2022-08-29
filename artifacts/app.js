// //H1 age
// function getageValue() {
//     var age = document.getElementsByName("age");
//     for(var i in age) {
//       if(age[i].checked) {
//           return parseInt(i)+1;
//       }
//     }
//     return -1; // Invalid Value
//   }
// //H2 sex
// function getsexValue() {
//   var sex = document.getElementsByName("sex");
//   for(var i in sex) {
//     if(sex[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H3 cp
// function getcpValue() {
//   var cp = document.getElementsByName("cp");
//   for(var i in cp) {
//     if(cp[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H4 
// function gettrestbpsValue() {
//   var trestbps = document.getElementsByName("trestbps");
//   for(var i in trestbps) {
//     if(trestbps[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H5 chol
// function getcholValue() {
//   var chol = document.getElementsByName("chol");
//   for(var i in chol) {
//     if(chol[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H6 fbs
// function getfbsValue() {
//   var fbs = document.getElementsByName("fbs");
//   for(var i in fbs) {
//     if(fbs[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H7 thalach
// function getthalachValue() {
//   var thalach = document.getElementsByName("thalach");
//   for(var i in thalach) {
//     if(thalach[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H8 oldpeak
// function getoldpeakValue() {
//   var oldpeak = document.getElementsByName("oldpeak");
//   for(var i in oldpeak) {
//     if(oldpeak[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H9 exang
// function getexangValue() {
//   var exang = document.getElementsByName("exang");
//   for(var i in exang) {
//     if(exang[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H10 restecg
// function getrestecgValue() {
//   var restecg = document.getElementsByName("restecg");
//   for(var i in restecg) {
//     if(restecg[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H11 slope
// function getslopeValue() {
//   var slope = document.getElementsByName("slope");
//   for(var i in slope) {
//     if(slope[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H12 ca
// function getcaValue() {
//   var ca = document.getElementsByName("ca");
//   for(var i in ca) {
//     if(ca[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
// //H13 thal
// function getcaValue() {
//   var thal = document.getElementsByName("thal");
//   for(var i in thal) {
//     if(thal[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }
  function onClickedDisease() {
    console.log("Heart Disease Prediction Button clicked");
    var age = document.getElementsByName("age");
    var sex = document.getElementByName("sex");
    var cp = document.getElementByName("cp");
    var trestbps = document.getElementByName("trestbps");
    var chol = document.getElementByName("chol");
    var fbs = document.getElementByName("fbs");
    var restecg = document.getElementByName("restecg");
    var thalach = document.getElementByName("thalach");
    var exang = document.getElementByName("exang");
    var oldpeak = document.getElementByName("oldpeak");
    var slope = document.getElementByName("slope");
    var ca = document.getElementByName("ca");
    var thal = document.getElementByName("thal");
    var disease = document.getElementById("disease_status");
    var url = "http://127.0.0.1:5000/predict_heart_disease"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_heart_disease"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    $.post(url, {
        age: age,
        sex: sex,
        cp: cp,
        trestbps: trestbps,
        chol:chol,
        fbs:fbs,
        restecg:restecg,
        thalach:thalach,
        exang:exang,
        oldpeak:oldpeak,
        slope:slope,
        ca:ca,
        thal:thal
},function(data, status) {
        console.log(data.disease);
        disease.innerHTML = "<h2> DO YOU HAVE HEART DISEASE : " + data.disease.toString() + "</h2>";
        console.log(status);
    });
  }
  window.onload = onPageLoad;
