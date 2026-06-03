document.getElementById("contactLogo").src = SITE_CONFIG.logo;
document.getElementById("contactBusinessName").innerText = SITE_CONFIG.businessName;
document.getElementById("contactTitle").innerText = SITE_CONFIG.contactPageTitle;
document.getElementById("contactFooter").innerHTML = `
${SITE_CONFIG.businessName}<br>
${SITE_CONFIG.phone}<br>
${SITE_CONFIG.email}
`;

const form = document.getElementById("quoteForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = form.querySelector("button[type='submit']");
  submitButton.disabled = true;
  statusMessage.innerText = "Sending...";

  const formData = {
    websiteName: SITE_CONFIG.businessName,
    submissionDate: new Date().toLocaleString(),
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    contactMethod: form.contactMethod.value,
    address: form.address.value,
    projectSize: form.projectSize.value,
    date: form.date.value,
    message: form.message.value
  };

  try {
    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Something went wrong.");
    }

    statusMessage.innerText = SITE_CONFIG.successMessage;
    form.reset();
  } catch (error) {
    statusMessage.innerText = error.message || "Unable to connect.";
  } finally {
    submitButton.disabled = false;
  }
});
