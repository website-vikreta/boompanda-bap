<?php
include_once "./db.php";


if (isset($_POST['contactform'])) {
   $response = array();
   $response['success'] = false;

   $fullname = mysqli_real_escape_string($conn, $_POST['fullName']);
   $mobile = mysqli_real_escape_string($conn, $_POST['mobile']);
   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $dob = mysqli_real_escape_string($conn, $_POST['dob']);
   $state = mysqli_real_escape_string($conn, $_POST['state']);
   $city = mysqli_real_escape_string($conn, $_POST['city']);
   $instagram = mysqli_real_escape_string($conn, $_POST['instagram']);
   $linkedin = mysqli_real_escape_string($conn, $_POST['linkedin']);
   $youtube = mysqli_real_escape_string($conn, $_POST['youtube']);
   $snapchat = mysqli_real_escape_string($conn, $_POST['snapchat']);
   $facebook = mysqli_real_escape_string($conn, $_POST['facebook']);
   $other = mysqli_real_escape_string($conn, $_POST['other']);
   $college = mysqli_real_escape_string($conn, $_POST['college']);
   $course = mysqli_real_escape_string($conn, $_POST['course']);
   $year = mysqli_real_escape_string($conn, $_POST['year']);
   $collegeEvent = mysqli_real_escape_string($conn, $_POST['collegeEvent']);
   $fullname = mysqli_real_escape_string($conn, $_POST['fullName']);
   $here = mysqli_real_escape_string($conn, $_POST['here']);
   $referral = mysqli_real_escape_string($conn, $_POST['referral']);
   $whatExcite = mysqli_real_escape_string($conn, $_POST['whatExcite']);

   $sql = "INSERT INTO `bap`(`name`, `mobile`, `email`, `dob`, `state`, `city`, `instagram`, `youtube`, `snapchat`, `facebook`, `linkedin`, `other`, `college`, `course`, `year`, `collegeEvent`, `hereAboutUs`, `referralCode`, `whatExcite`)
            VALUES ('$fullname','$mobile','$email','$dob','$state','$city','$instagram','$youtube','$snapchat','$facebook','$linkedin','$other','$college','$course','$year','$collegeEvent','$here','$referral','$whatExcite')";
   if (mysqli_query($conn, $sql)) {
      $response['success'] = true;
   }

   echo json_encode($response);
}
