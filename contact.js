document.getElementById(
"contactLogo"
).src =
SITE_CONFIG.logo;

document.getElementById(
"contactBusinessName"
).innerText =
SITE_CONFIG.businessName;

document.getElementById(
"contactTitle"
).innerText =
SITE_CONFIG.contactPageTitle;

document.getElementById(
"contactFooter"
).innerHTML =

`
${SITE_CONFIG.businessName}<br>
${SITE_CONFIG.phone}<br>
${SITE_CONFIG.email}
`;

const form =
document.getElementById(
"quoteForm"
);

form.addEventListener(
"submit",
async function(e){

e.preventDefault();

const formData = {

websiteName:
SITE_CONFIG.businessName,

submissionDate:
new Date().toLocaleString(),

firstName:
form.firstName.value,

lastName:
form.lastName.value,

contactMethod:
form.contactMethod.value,

address:
form.address.value,

projectSize:
form.projectSize.value,

date:
form.date.value,

message:
form.message.value

};

try{

const response =
await fetch(
"http://localhost:3000/send-email",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(formData)

}
);

const result =
await response.json();

if(result.success){

document.getElementById(
"statusMessage"
).innerText =
SITE_CONFIG.successMessage;

form.reset();

}else{

document.getElementById(
"statusMessage"
).innerText =
"Something went wrong.";

}

}catch{

document.getElementById(
"statusMessage"
).innerText =
"Unable to connect.";

}

});
