const SITE_CONFIG = {

businessName:
"BUSINESS NAME",

phone:
"(555) 555-5555",

email:
"youremail@email.com",

logo:
"assets/logo.png",

font:
"Poppins",

primaryColor:
"#2563eb",

secondaryColor:
"#f8fafc",

buttonText:
"Get Free Estimate",

contactPageTitle:
"Get A Free Quote",

successMessage:
"Thank you! We will contact you shortly.",

heroTitle:
"YOUR COMPANY SLOGAN",

heroSubtitle:
"Professional Services You Can Trust",

companyStory:
`
Tell your company story here.

How long have you been in business?

Why did you start?

What makes you different?
`,

mission:
`
Describe your mission.

What do you strive to provide
for customers?
`,

whyChooseUs:
`
Licensed.

Insured.

Experienced.

Reliable.

Customer Focused.
`,

videoLink:
"",

gallery:[

{
before:"assets/before1.jpg",
after:"assets/after1.jpg"
},

{
before:"assets/before2.jpg",
after:"assets/after2.jpg"
},

{
before:"assets/before3.jpg",
after:"assets/after3.jpg"
}

],

testimonials:[

{
name:"John D",
stars:5,
review:
"Excellent service and great communication."
},

{
name:"Sarah M",
stars:5,
review:
"Fast, professional, and affordable."
},

{
name:"Mike T",
stars:5,
review:
"Would absolutely hire again."
}

],

googleReviewLink:
"https://google.com",

resendEmail:
"business@email.com"

};

document.documentElement.style
.setProperty(
'--primary',
SITE_CONFIG.primaryColor
);

document.documentElement.style
.setProperty(
'--secondary',
SITE_CONFIG.secondaryColor
);
