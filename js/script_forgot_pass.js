function sendRecovery() {
  const email = document.getElementById("emailRecover").value;

  if (!email) {
    alert("Digite um email válido!");
    return;
  }

  fetch("http://localhost:5000/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then(() => {
      alert("Se o email existir, você receberá um link.");
    })
    .catch(() => {
      alert("Erro ao enviar solicitação.");
    });
}

function goBack() {
  window.location.href = "index.html";
}
