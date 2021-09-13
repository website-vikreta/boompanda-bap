if (document.documentElement.clientWidth > 768) {
   var viewWidth = "-60vw"
} else {
   var viewWidth = "-100vw"
}

// formdata object
var formData = new FormData();

$("#personalNext").click((e) => {
   e.preventDefault();
   let flag = 0;
   // validating name
   const fullName = validateString($("#ctcFullName").val());
   if (fullName == "") {
      $("#errFullName").html("");
   } else {
      $("#errFullName").html(fullName);
      flag = 1;
   }

   // validating mobile
   const mobile = validateNumber($("#ctcMobileNumber").val());
   if (mobile == "") {
      $("#errMobile").html("");
   } else {
      $("#errMobile").html(mobile);
      flag = 1;
   }

   // validating mobile
   const email = validateEmail($("#ctcEmail").val());
   if (email == "") {
      $("#errEmail").html("");
   } else {
      $("#errEmail").html(email);
      flag = 1;
   }

   //validating DOB
   const dob = requiredOnly($("#ctcDob").val());
   if (dob == "") {
      $("#errDob").html("");
   } else {
      $("#errDob").html(dob);
      flag = 1;
   }

   //validating State
   const state = requiredOnly($("#sts").val());
   if (state == "") {
      $("#errState").html("");
   } else {
      $("#errState").html(state);
      flag = 1;
   }

   //validating City
   const city = requiredOnly($("#ctcCity").val());
   if (city == "") {
      $("#errCity").html("");
   } else {
      $("#errCity").html(city);
      flag = 1;
   }

   //validating INstagram
   const instagram = validateUrl($("#ctcInstagram").val(), true);
   if (instagram == "") {
      $("#errInstagram").html("");
   } else {
      $("#errInstagram").html(instagram);
      flag = 1;
   }

   //validating Snapchat
   const snapchat = validateUrl($("#ctcSnapchat").val());
   if (snapchat == "") {
      $("#errSnapchat").html("");
   } else {
      $("#errSnapchat").html(snapchat);
      flag = 1;
   }

   //validating Facebook
   const facebook = validateUrl($("#ctcFacebook").val());
   if (facebook == "") {
      $("#errFacebook").html("");
   } else {
      $("#errFacebook").html(facebook);
      flag = 1;
   }

   //validating Youtube
   const youtube = validateUrl($("#ctcYoutube").val());
   if (youtube == "") {
      $("#errYoutube").html("");
   } else {
      $("#errYoutube").html(youtube);
      flag = 1;
   }

   //validating linkedin
   const linkedin = validateUrl($("#ctcLinkedin").val());
   if (linkedin == "") {
      $("#errLinkedin").html("");
   } else {
      $("#errLinkedin").html(linkedin);
      flag = 1;
   }
   //validating other
   const other = validateUrl($("#ctcOther").val());
   if (other == "") {
      $("#errOther").html("");
   } else {
      $("#errOther").html(other);
      flag = 1;
   }

   if (flag === 0) {
      formData.append("fullName", $("#ctcFullName").val());
      formData.append("mobile", $("#ctcMobileNumber").val());
      formData.append("email", $("#ctcEmail").val());
      formData.append("dob", $("#ctcDob").val());
      formData.append("state", $("#sts").val());
      formData.append("city", $("#ctcCity").val());
      formData.append("instagram", $("#ctcInstagram").val());
      formData.append("linkedin", $("#ctcLinkedin").val());
      formData.append("youtube", $("#ctcYoutube").val());
      formData.append("snapchat", $("#ctcSnapchat").val());
      formData.append("facebook", $("#ctcFacebook").val());
      formData.append("other", $("#ctcOther").val());

      // // shifting pane
      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc(' + viewWidth + ' + 10vw))'
      })
      // // adding active class
      $("#collegeDetailsItem .line").addClass('active');
   }
});

$("#collegeNext").click((e) => {
   e.preventDefault();

   let flag = 0;

   // validating college
   const college = $("#college option:selected").text();
   if (college !== "-- Select College --") {
      $("#errCollege").html("");
   } else {
      $("#errCollege").html("Required!");
      flag = 1;
   }
   // validating course
   const course = $("#course").val();
   if (course != null) {
      $("#errCourse").html("");
   } else {
      $("#errCourse").html("Required!");
      flag = 1;
   }
   // validating year
   const year = $("#ctcYear").val();
   if (year != "") {
      $("#errYear").html("");
   } else {
      $("#errYear").html("Required!");
      flag = 1;
   }

   if (flag == 0) {
      formData.append('college', college);
      formData.append('course', course);
      formData.append('year', year);
      formData.append('collegeEvent', $("#ctcCollegeEvent").val());

      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc((' + viewWidth + ' + 10vw) * 2))'
      })
      $("#generalItem .line").addClass('active');
   }
});

$("#submitForm").click((e) => {
   e.preventDefault();

   let flag = 0;

   // validating here about us
   const here = requiredOnly($("#ctcHere").val());
   if (here == "") {
      $("#errHere").html("");
   } else {
      $("#errHere").html(here);
      flag = 1;
   }

   // validating what ecite
   const whatexcite = requiredOnly($("#ctcWhatExcite").val());
   if (whatexcite == "") {
      $("#errWhatExcite").html("");
   } else {
      $("#errWhatExcite").html(whatexcite);
      flag = 1;
   }

   if (flag == 0) {
      formData.append('here', $("#ctcHere").val());
      formData.append('referral', $("#ctcReferral").val());
      formData.append('whatExcite', $("#ctcWhatExcite").val());
      formData.append('contactform', true);

      // calling ajax function
      $.ajax({
         enctype: 'multipart/form-data',
         url: "./php/contactus.php",
         type: "POST",
         data: formData,
         processData: false,
         contentType: false,
         dataType: 'json',
         cache: false,
         success: function (response) {
            if (response.success == true) {
               $("#closeContactForm").click();
               alert("Your request has been successfully submitted. Our team will contact you soon");
               $("#ctcResetButton").click();
               $("#generalPrev").click();
               $("#collegePrev").click();
            } else {
               alert("Oops something went wrong! Try again after sometime");
            }
         },
         error: function (jqXHR, textStatus, errorThrown) {
            var message = errorThrown;
            if (jqXHR.responseText !== null && jqXHR.responseText !== 'undefined' && jqXHR.responseText !== '') {
               message = jqXHR.responseText;
            }
            console.log(message);
         }
      });
   }

})

$("#collegePrev").click((e) => {
   e.preventDefault();
   $(".pane-wrapper__form-pane").css({
      'transform': 'initial'
   })
   $("#collegeDetailsItem .line").removeClass('active');
});


$("#generalPrev").click((e) => {
   e.preventDefault();
   $(".pane-wrapper__form-pane").css({
      'transform': 'translateX(calc((' + viewWidth + ' + 10vw)))'
   })
   $("#generalItem .line").removeClass('active');
});


// ! ===========================================
// ! Validations
// ! ===========================================
function validateString(string) {
   var regName = /^[a-zA-Z ]+$/;
   if (string == "") {
      return "Required!";
   } else if (!regName.test(string)) {
      return "Invalid Name";
   }

   return "";
}
function validateNumber(number) {
   var regName = /^[7-9][0-9]{9}$/;
   if (number == "") {
      return "Required!";
   } else if (!regName.test(number)) {
      return "Invalid Number";
   }

   return "";
}
function validateEmail(email) {
   var regName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (email == "") {
      return "Required!";
   } else if (!regName.test(email)) {
      return "Invalid Email";
   }

   return "";
}
function requiredOnly(string) {
   if (string == "") {
      return "Required!";
   }
   return "";
}
function validateUrl(url, required = false) {
   if (url == "" && required) {
      return "Required!";
   } else if (url == "" && required == false) {
      return "";
   }
   const pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?' + // port
      '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
      '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
   if (!pattern.test(url)) {
      return "Invalid URL";
   }
   return "";
}