function register() {
    const userName = document.getElementsByName("userName")[0].value;
    const phoneNumber = document.getElementsByName("phoneNumber")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const WatsupNumber = document.getElementsByName("WatsupNumber")[0].value;
    const intent = document.getElementsByName("intent")[0].value;
    const sitePhasing = document.getElementsByName("sitePhasing")[0].value;
    const clientStatus = document.getElementsByName("clientStatus")[0].value;
    const scheduleRecall = document.getElementsByName("scheduleRecall")[0].value;
    const location = document.getElementsByName("location")[0].value;
    const siteRatio = document.getElementsByName("site_ratio")[0].value;
    const vehicalNumber = document.getElementsByName("vehicalNumber")[0].value;
    const profession = document.getElementsByName("profession")[0].value;
    const rating = document.getElementsByName("rating")[0].value;

 if (checkUniqueness(userName,phoneNumber, email, WatsupNumber, 
    intent,sitePhasing, clientStatus, scheduleRecall, location,siteRatio, vehicalNumber,profession, rating,)){

        alert(" You have been Registered Successfully");

 }else{
    alert("User already exists. please try to login")
 }
}
    