function trim(e) {
  return e.replace(/^\s*|\s*$/g, "");
}
function IsOfficialEmailCheck(e) {
  var a = e.split("@")[1].toLowerCase();
  if ("hotmail.com" == a || "gmail.com" == a) return !1;
  if ("yahoo.co" == a) return !1;
  if ("yahoo.com" == a) return !1;
  if ("mailinator.com" == a) return !1;
  else if ("gmail.co.in" == a) return !1;
  else if ("aol.com" == a) return !1;
  else if ("yandex.com" == a) return !1;
  else if ("msn.com" == a) return !1;
  else if ("gawab.com" == a) return !1;
  else if ("inbox.com" == a) return !1;
  else if ("gmx.com" == a) return !1;
  else if ("rediffmail.com" == a) return !1;
  else if ("in.com" == a) return !1;
  else if ("live.com" == a) return !1;
  else if ("hotmail.co.uk" == a) return !1;
  else if ("hotmail.fr" == a) return !1;
  else if ("yahoo.fr" == a) return !1;
  else if ("wanadoo.fr" == a) return !1;
  else if ("wanadoo.fr" == a) return !1;
  else if ("comcast.net" == a) return !1;
  else if ("yahoo.co.uk" == a) return !1;
  else if ("yahoo.com.br" == a) return !1;
  else if ("yahoo.co.in" == a) return !1;
  else if ("rediffmail.com" == a) return !1;
  else if ("free.fr" == a) return !1;
  else if ("gmx.de" == a) return !1;
  else if ("gmx.de" == a) return !1;
  else if ("yandex.ru" == a) return !1;
  else if ("ymail.com" == a) return !1;
  else if ("libero.it" == a) return !1;
  else if ("outlook.com" == a) return !1;
  else if ("uol.com.br" == a) return !1;
  else if ("bol.com.br" == a) return !1;
  else if ("mail.ru" == a) return !1;
  else if ("cox.net" == a) return !1;
  else if ("hotmail.it" == a) return !1;
  else if ("sbcglobal.net" == a) return !1;
  else if ("sfr.fr" == a) return !1;
  else if ("live.fr" == a) return !1;
  else if ("verizon.net" == a) return !1;
  else if ("live.co.uk" == a) return !1;
  else if ("googlemail.com" == a) return !1;
  else if ("yahoo.es" == a) return !1;
  else if ("ig.com.br" == a) return !1;
  else if ("live.nl" == a) return !1;
  else if ("bigpond.com" == a) return !1;
  else if ("terra.com.br" == a) return !1;
  else if ("yahoo.it" == a) return !1;
  else if ("neuf.fr" == a) return !1;
  else if ("yahoo.de" == a) return !1;
  else if ("live.com" == a) return !1;
  else if ("yahoo.de" == a) return !1;
  else if ("rocketmail.com" == a) return !1;
  else if ("att.net" == a) return !1;
  else if ("laposte.net" == a) return !1;
  else if ("facebook.com" == a) return !1;
  else if ("bellsouth.net" == a) return !1;
  else if ("yahoo.in" == a) return !1;
  else if ("hotmail.es" == a) return !1;
  else if ("charter.net" == a) return !1;
  else if ("yahoo.ca" == a) return !1;
  else if ("yahoo.com.au" == a) return !1;
  else if ("rambler.ru" == a) return !1;
  else if ("hotmail.de" == a) return !1;
  else if ("tiscali.it" == a) return !1;
  else if ("shaw.ca" == a) return !1;
  else if ("yahoo.co.jp" == a) return !1;
  else if ("sky.com" == a) return !1;
  else if ("earthlink.net" == a) return !1;
  else if ("optonline.net" == a) return !1;
  else if ("freenet.de" == a) return !1;
  else if ("t-online.de" == a) return !1;
  else if ("aliceadsl.fr" == a) return !1;
  else if ("virgilio.it" == a) return !1;
  else if ("home.nl" == a) return !1;
  else if ("qq.com" == a) return !1;
  else if ("telenet.be" == a) return !1;
  else if ("me.com" == a) return !1;
  else if ("yahoo.com.ar" == a) return !1;
  else if ("tiscali.co.uk" == a) return !1;
  else if ("yahoo.com.mx" == a) return !1;
  else if ("gmx.net" == a) return !1;
  else if ("mail.com" == a) return !1;
  else if ("planet.nl" == a) return !1;
  else if ("tin.it" == a) return !1;
  else if ("live.it" == a) return !1;
  else if ("ntlworld.com" == a) return !1;
  else if ("arcor.de" == a) return !1;
  else if ("yahoo.co.id" == a) return !1;
  else if ("frontiernet.net" == a) return !1;
  else if ("hetnet.nl" == a) return !1;
  else if ("live.com.au" == a) return !1;
  else if ("yahoo.com.sg" == a) return !1;
  else if ("zonnet.nl" == a) return !1;
  else if ("club-internet.fr" == a) return !1;
  else if ("juno.com" == a) return !1;
  else if ("optusnet.com.au" == a) return !1;
  else if ("blueyonder.co.uk" == a) return !1;
  else if ("bluewin.ch" == a) return !1;
  else if ("skynet.be" == a) return !1;
  else if ("sympatico.ca" == a) return !1;
  else if ("windstream.net" == a) return !1;
  else if ("mac.com" == a) return !1;
  else if ("centurytel.net" == a) return !1;
  else if ("chello.nl" == a) return !1;
  else if ("live.ca" == a) return !1;
  else if ("aim.com" == a) return !1;
  else if ("bigpond.net.au" == a) return !1;
  else return !0;
}
function validateEmail(e) {
  return /^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,10}$/.test(e);
}
function validatePhone(e) {
  return /^[^\s]+(\s.*)?$/.test(e);
}
function onlyChar(e) {
  return /^[a-zA-Z ]+$/.test(e);
}
function validateCompany(e) {
  return /^[a-zA-Z0-9 !@#$%^&*)(]{2,100}$/.test(e);
}
function onlyChar1(e) {
  return /^[a-zA-Z\s-,]+$/.test(e);
}
function fnnewsletter() {
  return validateEmail(trim(document.f1.email.value))
    ? IsOfficialEmailCheck(trim(document.f1.email.value))
      ? void 0
      : (alert("Please enter your official e-mail address"),
        document.f1.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f1.email.focus(), !1);
}
function fnValidationContact() {
  return "" == trim(document.f2.services.value)
    ? (alert("Please Select Your Service"), document.f2.services.focus(), !1)
    : "" == trim(document.f2.name.value)
    ? (alert("Please Enter Name"), document.f2.name.focus(), !1)
    : validateEmail(trim(document.f2.email.value))
    ? IsOfficialEmailCheck(trim(document.f2.email.value))
      ? validatePhone(trim(document.f2.phone.value))
        ? "" == trim(document.f2.comments.value)
          ? (alert("Please enter your requirement"),
            document.f2.comments.focus(),
            !1)
          : void 0
        : (alert("Please enter Phone Number"), document.f2.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f2.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f2.email.focus(), !1);
}
function fnValidationtoppop() {
  return "" == trim(document.f2.name.value)
    ? (alert("Please Enter Name"), document.f2.name.focus(), !1)
    : validateEmail(trim(document.f2.email.value))
    ? IsOfficialEmailCheck(trim(document.f2.email.value))
      ? validatePhone(trim(document.f2.phone.value))
        ? "" == trim(document.f2.comments.value)
          ? (alert("Please enter your requirement"),
            document.f2.comments.focus(),
            !1)
          : void 0
        : (alert("Please enter Phone Number"), document.f2.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f2.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f2.email.focus(), !1);
}
function fnSignup() {
  return "" == trim(document.f9.name.value)
    ? (alert("Please enter Name"), document.f9.name.focus(), !1)
    : validatePhone(trim(document.f9.phone.value))
    ? validateEmail(trim(document.f9.email.value))
      ? void 0
      : (alert("Please enter email id"), document.f9.email.focus(), !1)
    : (alert("Please enter Phone Number"), document.f9.phone.focus(), !1);
}
function fndreamforce() {
  return "" == trim(document.f9.name.value)
    ? (alert("Please enter Name"), document.f9.name.focus(), !1)
    : validatePhone(trim(document.f9.phone.value))
    ? validateEmail(trim(document.f9.email.value))
      ? IsOfficialEmailCheck(trim(document.f9.email.value))
        ? void 0
        : (alert("Please enter your official e-mail address"),
          document.f9.email.focus(),
          !1)
      : (alert("Please Enter Valid email id"), document.f9.email.focus(), !1)
    : (alert("Please enter Phone Number"), document.f9.phone.focus(), !1);
}
function fnquote() {
  return "" == trim(document.f4.name.value)
    ? (alert("Please Enter Name"), document.f4.name.focus(), !1)
    : validateEmail(trim(document.f4.email.value))
    ? IsOfficialEmailCheck(trim(document.f4.email.value))
      ? "" == trim(document.f4.quote.value)
        ? (alert("Please enter Your Quote"), document.f4.quote.focus(), !1)
        : void 0
      : (alert("Please enter your official e-mail address"),
        document.f4.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f4.email.focus(), !1);
}
function buyNowvalidation() {
  return "" == trim(document.f8.fname.value)
    ? (alert("Please First enter Name"), document.f8.fname.focus(), !1)
    : "" == trim(document.f8.lname.value)
    ? (alert("Please enter Last Name"), document.f8.lname.focus(), !1)
    : validateEmail(trim(document.f8.email.value))
    ? IsOfficialEmailCheck(trim(document.f8.email.value))
      ? validatePhone(trim(document.f8.phone.value))
        ? void 0
        : (alert("Please enter phone number"), document.f8.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f8.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f8.email.focus(), !1);
}
function getCountvalidation() {
  return "" == trim(document.f7.fname1.value)
    ? (alert("Please enter First Name"), document.f7.fname1.focus(), !1)
    : "" == trim(document.f7.lname1.value)
    ? (alert("Please enter Last Name"), document.f7.lname1.focus(), !1)
    : validateEmail(trim(document.f7.email1.value))
    ? IsOfficialEmailCheck(trim(document.f7.email1.value))
      ? validatePhone(trim(document.f7.phone1.value))
        ? void 0
        : (alert("Please enter phone number"), document.f7.phone1.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f7.email1.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f7.email1.focus(), !1);
}
function dataappendvalidation() {
  if ("" == trim(document.f20.fname.value))
    return alert("Please enter First Name"), document.f20.fname.focus(), !1;
  if ("" == trim(document.f20.lname.value))
    return alert("Please enter Last Name"), document.f20.lname.focus(), !1;
  if (!validateEmail(trim(document.f20.email.value)))
    return alert("Please Enter Valid email id"), document.f20.email.focus(), !1;
  if (!IsOfficialEmailCheck(trim(document.f20.email.value)))
    return (
      alert("Please enter your official e-mail address"),
      document.f20.email.focus(),
      !1
    );
  if (!validatePhone(trim(document.f20.phone.value)))
    return alert("Please enter phone number"), document.f20.phone.focus(), !1;
  if ("" == trim(document.f20.company.value))
    return (
      alert("Please enter company Name."), document.f20.company.focus(), !1
    );
  if ("" == trim(document.f20.comments.value))
    return alert("Please enter comments."), document.f20.comments.focus(), !1;
  var e = document.getElementById("upload").value,
    a = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
  return (
    "xls" == a ||
    "csv" == a ||
    "xlsx" == a ||
    "odt" == a ||
    "docx" == a ||
    "txt" == a ||
    "pdf" == a ||
    "gif" == a ||
    "png" == a ||
    "jpg" == a ||
    (alert("Please Upload Your Sample File"), !1)
  );
}
function appendpopupform() {
  return "" == trim(document.appendpopup.fname.value)
    ? (alert("Please enter First Name"), document.appendpopup.fname.focus(), !1)
    : "" == trim(document.appendpopup.lname.value)
    ? (alert("Please enter Last Name"), document.appendpopup.lname.focus(), !1)
    : validateEmail(trim(document.appendpopup.email.value))
    ? IsOfficialEmailCheck(trim(document.appendpopup.email.value))
      ? validatePhone(trim(document.appendpopup.phone.value))
        ? "" == trim(document.appendpopup.company.value)
          ? (alert("Please enter company Name."),
            document.appendpopup.company.focus(),
            !1)
          : "" == trim(document.appendpopup.comments.value)
          ? (alert("Please enter comments."),
            document.appendpopup.comments.focus(),
            !1)
          : void 0
        : (alert("Please enter phone number"),
          document.appendpopup.phone.focus(),
          !1)
      : (alert("Please enter your official e-mail address"),
        document.appendpopup.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"),
      document.appendpopup.email.focus(),
      !1);
}
function getCountvalidationbottom() {
  if ("" == trim(document.f18.name.value))
    return alert("Please enter Name"), document.f18.name.focus(), !1;
  if (!validateEmail(trim(document.f18.email.value)))
    return alert("Please Enter Valid email id"), document.f18.email.focus(), !1;
  if (!IsOfficialEmailCheck(trim(document.f18.email.value)))
    return (
      alert("Please enter your official e-mail address"),
      document.f18.email.focus(),
      !1
    );
  if (!validatePhone(trim(document.f18.phone.value)))
    return alert("Please enter phone number"), document.f18.phone.focus(), !1;
  var e = document.getElementById("upload1").value,
    a = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
  return (
    "xls" == a ||
    "csv" == a ||
    "xlsx" == a ||
    "odt" == a ||
    "docx" == a ||
    "txt" == a ||
    "pdf" == a ||
    "gif" == a ||
    "png" == a ||
    "jpg" == a ||
    (alert("Please Upload Your Sample File"), !1)
  );
}
function getCountvalidationdown() {
  if ("" == trim(document.f8.name.value))
    return alert("Please enter Name"), document.f8.name.focus(), !1;
  if (!validateEmail(trim(document.f8.email.value)))
    return alert("Please Enter Valid email id"), document.f8.email.focus(), !1;
  if (!IsOfficialEmailCheck(trim(document.f8.email.value)))
    return (
      alert("Please enter your official e-mail address"),
      document.f8.email.focus(),
      !1
    );
  if (!validatePhone(trim(document.f8.phone.value)))
    return alert("Please enter phone number"), document.f8.phone.focus(), !1;
  var e = document.getElementById("upload").value,
    a = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
  return (
    "xls" == a ||
    "csv" == a ||
    "xlsx" == a ||
    "odt" == a ||
    "docx" == a ||
    "txt" == a ||
    "pdf" == a ||
    "gif" == a ||
    "png" == a ||
    "jpg" == a ||
    (alert("Please Upload Your Sample File"), !1)
  );
}
function getCountvalidationfeight() {
  if ("" == trim(document.f8.name.value))
    return alert("Please enter Name"), document.f8.name.focus(), !1;
  if (!validateEmail(trim(document.f8.email.value)))
    return alert("Please Enter Valid email id"), document.f8.email.focus(), !1;
  if (!IsOfficialEmailCheck(trim(document.f8.email.value)))
    return (
      alert("Please enter your official e-mail address"),
      document.f8.email.focus(),
      !1
    );
  if (!validatePhone(trim(document.f8.phone.value)))
    return alert("Please enter phone number"), document.f8.phone.focus(), !1;
  var e = document.getElementById("upload").value,
    a = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
  return (
    "xls" == a ||
    "csv" == a ||
    "xlsx" == a ||
    "odt" == a ||
    "docx" == a ||
    "txt" == a ||
    "pdf" == a ||
    "gif" == a ||
    "png" == a ||
    "jpg" == a ||
    (alert("Please Upload Your Sample File"), !1)
  );
}
function getfilevalidation() {
  if ("" == trim(document.f7.name.value))
    return alert("Please enter Name"), document.f7.name.focus(), !1;
  if (!validateEmail(trim(document.f7.email.value)))
    return alert("Please Enter Valid email id"), document.f7.email.focus(), !1;
  if (!IsOfficialEmailCheck(trim(document.f7.email.value)))
    return (
      alert("Please enter your official e-mail address"),
      document.f7.email.focus(),
      !1
    );
  var e = document.getElementById("upload").value,
    a = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
  return (
    "xls" == a ||
    "csv" == a ||
    "xlsx" == a ||
    "odt" == a ||
    "docx" == a ||
    "txt" == a ||
    "pdf" == a ||
    "gif" == a ||
    "png" == a ||
    "jpg" == a ||
    (alert("Please Upload Your Sample File"), !1)
  );
}
function fnvalidation() {
  return "" == trim(document.f6.name.value)
    ? (alert("Please enter Name"), document.f6.name.focus(), !1)
    : "" == trim(document.f6.company.value)
    ? (alert("Please enter company name"), document.f6.company.focus(), !1)
    : validateEmail(trim(document.f6.email.value))
    ? IsOfficialEmailCheck(trim(document.f6.email.value))
      ? validatePhone(trim(document.f6.phone.value))
        ? void 0
        : (alert("Please enter phone number"), document.f6.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f6.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f6.email.focus(), !1);
}
function fnvalidationsample() {
  if ("" == trim(document.f6.fname.value))
    return alert("Please enter first name"), document.f6.fname.focus(), !1;
  if ("" == trim(document.f6.lname.value))
    return alert("Please enter last name"), document.f6.lname.focus(), !1;
  if (!validateEmail(trim(document.f6.email.value)))
    return alert("Please Enter Valid email id"), document.f6.email.focus(), !1;
  if (!IsOfficialEmailCheck(trim(document.f6.email.value)))
    return (
      alert("Please enter your official e-mail address"),
      document.f6.email.focus(),
      !1
    );
  if (!validatePhone(trim(document.f6.phone.value)))
    return alert("Please enter phone number"), document.f6.phone.focus(), !1;
  else if ("" == trim(document.f6.industry.value))
    return alert("Please enter industry"), document.f6.industry.focus(), !1;
}
function fnvalidationcontact() {
  return "" == trim(document.f6.name.value)
    ? (alert("Please enter Name"), document.f6.name.focus(), !1)
    : validateEmail(trim(document.f6.email.value))
    ? IsOfficialEmailCheck(trim(document.f6.email.value))
      ? validatePhone(trim(document.f6.phone.value))
        ? "0" == trim(document.f6.targetbuyer.value)
          ? (alert("Please select your target buyer."), !1)
          : "" == trim(document.f6.comments.value)
          ? (alert("Please enter your requirement"),
            document.f6.comments.focus(),
            !1)
          : void 0
        : (alert("Please enter phone number"), document.f6.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f6.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f6.email.focus(), !1);
}
function fnvalidationhome() {
  return "" == trim(document.f12.name.value)
    ? (alert("Please enter Name"), document.f12.name.focus(), !1)
    : validateEmail(trim(document.f12.email.value))
    ? IsOfficialEmailCheck(trim(document.f12.email.value))
      ? validatePhone(trim(document.f12.phone.value))
        ? void 0
        : (alert("Please enter phone number"), document.f12.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f12.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f12.email.focus(), !1);
}
function fncontact() {
  return "" == trim(document.f6.name.value)
    ? (alert("Please enter Name"), document.f6.name.focus(), !1)
    : validateEmail(trim(document.f6.email.value))
    ? IsOfficialEmailCheck(trim(document.f6.email.value))
      ? validatePhone(trim(document.f6.phone.value))
        ? "" == trim(document.f6.Industry.value)
          ? (alert("Please select Topic for Discussion."), !1)
          : void 0
        : (alert("Please enter phone number"), document.f6.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f6.email.focus(),
        !1)
    : (alert("Please Enter email id"), document.f6.email.focus(), !1);
}
function fncontactinfo() {
  return "" == trim(document.f5.name.value)
    ? (alert("Please enter FirstName"), document.f5.name.focus(), !1)
    : "" == trim(document.f5.name.value)
    ? (alert("Please enter LastName"), document.f5.lname.focus(), !1)
    : "" == trim(document.f5.company.value)
    ? (alert("Please enter Company"), document.f5.company.focus(), !1)
    : validateEmail(trim(document.f5.email.value))
    ? IsOfficialEmailCheck(trim(document.f5.email.value))
      ? validatePhone(trim(document.f5.phone.value))
        ? "" == trim(document.f5.country.value)
          ? (alert("Please select your Country"),
            document.f5.country.focus(),
            !1)
          : void 0
        : (alert("Please Enter Phone no."), document.f5.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f5.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f5.email.focus(), !1);
}
function fnlogin() {
  return "" == trim(document.f3.name.value)
    ? (alert("Please enter Name"), document.f3.name.focus(), !1)
    : "" == trim(document.f3.password.value)
    ? (alert("Please enter Password"), document.f3.password.focus(), !1)
    : trim(document.f3.password.value).length < 8
    ? (alert("Password must be at least 8 charectors long"), !1)
    : void 0;
}
function newsvalidation() {
  return "" == trim(document.f8.First_Name.value)
    ? (alert("Please enter First Name"), document.f8.First_Name.focus(), !1)
    : onlyChar1(trim(document.f8.Last_Name.value))
    ? "" == trim(document.f8.Company.value)
      ? (alert("Please enter Company"), document.f8.Company.focus(), !1)
      : validateEmail(trim(document.f8.Email.value))
      ? IsOfficialEmailCheck(trim(document.f8.Email.value))
        ? void 0
        : (alert("Please enter your official e-mail address"),
          document.f8.Email.focus(),
          !1)
      : (alert("Please Enter Valid email id"), document.f8.Email.focus(), !1)
    : (alert("Please enter Last Name"), document.f8.Last_Name.focus(), !1);
}
function halovalidation() {
  return "" == trim(document.f1.name.value)
    ? (alert("Please enter Your First Name"), document.f1.name.focus(), !1)
    : "" == trim(document.f1.company.value)
    ? (alert("Please enter Company"), document.f1.company.focus(), !1)
    : validateEmail(trim(document.f1.email.value))
    ? !!validatePhone(trim(document.f1.phone.value)) ||
      (alert("Please enter Your phone number"), document.f1.phone.focus(), !1)
    : (alert("Please Enter Valid email id"), document.f1.email.focus(), !1);
}
function validationcon() {
  return "" == trim(document.f12.fname.value)
    ? (alert("Please enter Your First Name"), document.f12.fname.focus(), !1)
    : "" == trim(document.f12.lname.value)
    ? (alert("Please enter Your Last Name"), document.f12.lname.focus(), !1)
    : validateEmail(trim(document.f12.email.value))
    ? IsOfficialEmailCheck(trim(document.f12.email.value))
      ? validatePhone(trim(document.f12.phone.value))
        ? "" == trim(document.f12.company.value)
          ? (alert("Please enter company Name."),
            document.f12.company.focus(),
            !1)
          : "" != trim(document.f12.comments.value) ||
            (alert("Please enter comments."), document.f12.comments.focus(), !1)
        : (alert("Please enter Your phone number"),
          document.f12.phone.focus(),
          !1)
      : (alert("Please enter your official e-mail address"),
        document.f12.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f12.email.focus(), !1);
}
function independpopvalidationcon() {
  return "" == trim(document.independpopform.popname.value)
    ? (alert("Please enter Your Name"),
      document.independpopform.popname.focus(),
      !1)
    : validateEmail(trim(document.independpopform.poemail.value))
    ? IsOfficialEmailCheck(trim(document.independpopform.poemail.value))
      ? !!validatePhone(trim(document.independpopform.popphone.value)) ||
        (alert("Please enter Your phone number"),
        document.independpopform.popphone.focus(),
        !1)
      : (alert("Please enter your official e-mail address"),
        document.independpopform.poemail.focus(),
        !1)
    : (alert("Please Enter Valid email id"),
      document.independpopform.poemail.focus(),
      !1);
}
function validationdataapendingright() {
  if ("" == trim(document.f13.name.value))
    return alert("Please enter Your Name"), document.f13.name.focus(), !1;
  if (!validateEmail(trim(document.f13.email.value)))
    return alert("Please Enter Valid email id"), document.f13.email.focus(), !1;
  if (!IsOfficialEmailCheck(trim(document.f13.email.value)))
    return (
      alert("Please enter your official e-mail address"),
      document.f13.email.focus(),
      !1
    );
  if (!validatePhone(trim(document.f13.phone.value)))
    return (
      alert("Please enter Your phone number"), document.f13.phone.focus(), !1
    );
  if (!validatePhone(trim(document.f13.comments.value)))
    return (
      alert("Tell us about your data requirements"),
      document.f13.comments.focus(),
      !1
    );
  var e = document.getElementById("fileupload").value;
  if ("" == e) return alert("Please Upload Your Sample File"), !1;
  var a = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
  return (
    "xls" == a ||
    "csv" == a ||
    "xlsx" == a ||
    "odt" == a ||
    "docx" == a ||
    "txt" == a ||
    "pdf" == a ||
    "gif" == a ||
    "png" == a ||
    "jpg" == a ||
    (alert("Please Upload Valid Sample File"), !1)
  );
}
function fnvalidationpop() {
  return "" == trim(document.f6.name.value)
    ? (alert("Please enter Name"), document.f6.name.focus(), !1)
    : validateEmail(trim(document.f6.email.value))
    ? IsOfficialEmailCheck(trim(document.f6.email.value))
      ? validatePhone(trim(document.f6.phone.value))
        ? "" == trim(document.f6.company.value)
          ? (alert("Please enter compaany Name."), !1)
          : "" == trim(document.f6.comments.value)
          ? (alert("Please enter comments here."), !1)
          : void 0
        : (alert("Please enter phone number"), document.f6.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f6.email.focus(),
        !1)
    : (alert("Please Enter email id"), document.f6.email.focus(), !1);
}
function commonpopupform() {
  return "" == trim(document.popup.fname.value)
    ? (alert("Please enter Your First Name"), document.popup.fname.focus(), !1)
    : "" == trim(document.popup.lname.value)
    ? (alert("Please enter Your Last Name"), document.popup.lname.focus(), !1)
    : validateEmail(trim(document.popup.email.value))
    ? IsOfficialEmailCheck(trim(document.popup.email.value))
      ? validatePhone(trim(document.popup.phone.value))
        ? "" == trim(document.popup.company.value)
          ? (alert("Please enter company Name."),
            document.popup.company.focus(),
            !1)
          : "" != trim(document.popup.comments.value) ||
            (alert("Please enter comments."),
            document.popup.comments.focus(),
            !1)
        : (alert("Please enter Your phone number"),
          document.popup.phone.focus(),
          !1)
      : (alert("Please enter your official e-mail address"),
        document.popup.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.popup.email.focus(), !1);
}
function commonoffsite() {
  return "" == trim(document.popupoffsite.fname.value)
    ? (alert("Please enter Your First Name"),
      document.popupoffsite.fname.focus(),
      !1)
    : "" == trim(document.popupoffsite.lname.value)
    ? (alert("Please enter Your Last Name"),
      document.popupoffsite.lname.focus(),
      !1)
    : validateEmail(trim(document.popupoffsite.email.value))
    ? IsOfficialEmailCheck(trim(document.popupoffsite.email.value))
      ? validatePhone(trim(document.popupoffsite.phone.value))
        ? "" == trim(document.popupoffsite.company.value)
          ? (alert("Please enter company Name."),
            document.popupoffsite.company.focus(),
            !1)
          : "" != trim(document.popupoffsite.comments.value) ||
            (alert("Please enter comments."),
            document.popupoffsite.comments.focus(),
            !1)
        : (alert("Please enter Your phone number"),
          document.popupoffsite.phone.focus(),
          !1)
      : (alert("Please enter your official e-mail address"),
        document.popupoffsite.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"),
      document.popupoffsite.email.focus(),
      !1);
}
function homepopup() {
  return "" == trim(document.hpopup.fname.value)
    ? (alert("Please enter Your First Name"), document.hpopup.fname.focus(), !1)
    : "" == trim(document.hpopup.lname.value)
    ? (alert("Please enter Your Last Name"), document.hpopup.lname.focus(), !1)
    : validateEmail(trim(document.hpopup.email.value))
    ? IsOfficialEmailCheck(trim(document.hpopup.email.value))
      ? validatePhone(trim(document.hpopup.phone.value))
        ? "" == trim(document.hpopup.company.value)
          ? (alert("Please enter company Name."),
            document.hpopup.company.focus(),
            !1)
          : "" != trim(document.hpopup.comments.value) ||
            (alert("Please enter comments."),
            document.hpopup.comments.focus(),
            !1)
        : (alert("Please enter Your phone number"),
          document.hpopup.phone.focus(),
          !1)
      : (alert("Please enter your official e-mail address"),
        document.hpopup.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.hpopup.email.focus(), !1);
}
function fnValidationContactside() {
  return "" == trim(document.contactside.fname.value)
    ? (alert("Please enter Your First Name"),
      document.contactside.fname.focus(),
      !1)
    : "" == trim(document.contactside.lname.value)
    ? (alert("Please enter Your Last Name"),
      document.contactside.lname.focus(),
      !1)
    : validateEmail(trim(document.contactside.email.value))
    ? IsOfficialEmailCheck(trim(document.contactside.email.value))
      ? validatePhone(trim(document.contactside.phone.value))
        ? "" != trim(document.contactside.comments.value) ||
          (alert("Please enter comments here."),
          document.contactside.comments.focus(),
          !1)
        : (alert("Please enter phone number"),
          document.contactside.phone.focus(),
          !1)
      : (alert("Please enter your official e-mail address"),
        document.contactside.email.focus(),
        !1)
    : (alert("Please Enter email id"), document.contactside.email.focus(), !1);
}
function costCalculator() {
  return "" == trim(document.cost.numcalls.value)
    ? (alert("Please Enter Number of Calls"),
      document.cost.numcalls.focus(),
      !1)
    : "" == trim(document.cost.handlingtime.value)
    ? (alert("Please Enter Time"), document.cost.handlingtime.focus(), !1)
    : "" == trim(document.cost.name.value)
    ? (alert("Please enter Name"), document.cost.name.focus(), !1)
    : validateEmail(trim(document.cost.email.value))
    ? IsOfficialEmailCheck(trim(document.cost.email.value))
      ? !!validatePhone(trim(document.cost.phone.value)) ||
        (alert("Please enter phone number"), document.cost.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.cost.email.focus(),
        !1)
    : (alert("Please Enter email id"), document.cost.email.focus(), !1);
}
function fnValidationsolution() {
  return validateEmail(trim(document.solution.bde.value))
    ? IsOfficialEmailCheck(trim(document.solution.bde.value))
      ? "" == trim(document.solution.cn.value)
        ? (alert("Please enter Client Name"), document.solution.cn.focus(), !1)
        : validateEmail(trim(document.solution.ce.value))
        ? validatePhone(trim(document.solution.cp.value))
          ? "" != trim(document.solution.cw.value) ||
            (alert("Please enter Client Website Name"),
            document.solution.cw.focus(),
            !1)
          : (alert("Please enter Client phone number"),
            document.solution.cp.focus(),
            !1)
        : (alert("Please Enter Client email id"),
          document.solution.ce.focus(),
          !1)
      : (alert("Please enter your BD official e-mail address"),
        document.solution.bde.focus(),
        !1)
    : (alert("Please Enter BD email id"), document.solution.bde.focus(), !1);
}
function popupfilevalidation() {
  return "" == trim(document.f21.fname.value)
    ? (alert("Please enter First Name"), document.f21.fname.focus(), !1)
    : "" == trim(document.f21.lname.value)
    ? (alert("Please enter Last Name"), document.f21.lname.focus(), !1)
    : validateEmail(trim(document.f21.email.value))
    ? IsOfficialEmailCheck(trim(document.f21.email.value))
      ? validatePhone(trim(document.f21.phone.value))
        ? "" == trim(document.f21.company.value)
          ? (alert("Please enter company Name."),
            document.f21.company.focus(),
            !1)
          : "" != trim(document.f21.comments.value) ||
            (alert("Please enter comments."), document.f21.comments.focus(), !1)
        : (alert("Please enter phone number"), document.f21.phone.focus(), !1)
      : (alert("Please enter your official e-mail address"),
        document.f21.email.focus(),
        !1)
    : (alert("Please Enter Valid email id"), document.f21.email.focus(), !1);
}
function writevalidation() {
  return "" == trim(document.write.fname.value)
    ? (alert("Please enter First Name"), document.write.fname.focus(), !1)
    : validateEmail(trim(document.write.email.value))
    ? "" != trim(document.write.company.value) ||
      (alert("Please enter company Name."), document.write.company.focus(), !1)
    : (alert("Please Enter Valid email id"), document.write.email.focus(), !1);
}
