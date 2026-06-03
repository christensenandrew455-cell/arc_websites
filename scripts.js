document.title = SITE_CONFIG.businessName;

document.getElementById("pageTitle").innerText =
SITE_CONFIG.businessName;

document.getElementById("businessName").innerText =
SITE_CONFIG.businessName;

document.getElementById("heroTitle").innerText =
SITE_CONFIG.heroTitle;

document.getElementById("heroSubtitle").innerText =
SITE_CONFIG.heroSubtitle;

document.getElementById("companyStory").innerText =
SITE_CONFIG.companyStory;

document.getElementById("mission").innerText =
SITE_CONFIG.mission;

document.getElementById("whyChooseUs").innerText =
SITE_CONFIG.whyChooseUs;

document.getElementById("logo").src =
SITE_CONFIG.logo;

document.getElementById("headerButton").innerText =
SITE_CONFIG.buttonText;

document.getElementById("heroButton").innerText =
SITE_CONFIG.buttonText;

document.getElementById("reviewLink").href =
SITE_CONFIG.googleReviewLink;

document.getElementById("footerInfo").innerHTML =
`
${SITE_CONFIG.businessName}<br>
${SITE_CONFIG.phone}<br>
${SITE_CONFIG.email}
`;

const galleryGrid =
document.getElementById("galleryGrid");

SITE_CONFIG.gallery.forEach(item => {

galleryGrid.innerHTML += `

<div class="beforeAfter">

<div class="beforeAfterGrid">

<img src="${item.before}" alt="Before">

<img src="${item.after}" alt="After">

</div>

<div class="label">

Before & After

</div>

</div>

`;

});

const testimonialGrid =
document.getElementById("testimonialGrid");

SITE_CONFIG.testimonials.forEach(item => {

testimonialGrid.innerHTML += `

<div class="testimonial">

<h3>${item.name}</h3>

<div class="stars">

${"⭐".repeat(item.stars)}

</div>

<p>${item.review}</p>

</div>

`;

});

if(SITE_CONFIG.videoLink){

document.getElementById("videoContainer")
.innerHTML = `

<iframe
src="${SITE_CONFIG.videoLink}"
allowfullscreen>
</iframe>

`;

}else{

document.getElementById("videoSection")
.style.display = "none";

}
