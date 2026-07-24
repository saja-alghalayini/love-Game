
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const responseMsg = document.getElementById("responseMsg");

function moveButton() {
  const maxX = 200;
  const maxY = 200;

  const randomX = Math.random() * maxX - maxX / 2;
  const randomY = Math.random() * maxY - maxY / 2;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
  responseMsg.textContent = `حبيبي، عم بكتبلك هاد الكلام وقلبي عم بيحكي قبل إيدي، يمكن الكلمات ما تكفي لحتى أقولك قديش بحبك وقديش وجودك فارق معي. من أول يوم دخلت فيه حياتي، كل شي فيي اتغير للأحسن صرت أشوف الدنيا بطريقة أدفى وأجمل.
بتعرف؟ كل تفصيلة صغيرة معك بتعنيلي العالم، ولساتني لهلأ عم بحس بسحر اللحظة لما شفتك، لما حضنتني وبستني وقديش كنت حنون معي بهديك اللحظة.. حسيت بحرارة هالحضن وأمانه عم بيغمروني من جوا، وكأنه الدنيا كلها وقفت وكنا لحالنا. حنانك معي وقفتك جنبي بتنسيني كل تعب الدنيا وبتخليني أحس قديش أنا محظوظة فيك.
من لما دخلت حياتي وهي صارت أحلى وأغنى بكل شي، بكل ضحكة ضحكناها سوا، وبكل لحظة أمان حسيتها وأنا بين إيديك. وجودك هو أحلى نعمة دخلت حياتي، وعن جد الله لا يحرمني منك ولا من حنانك اللي ما بيتعوض.
بحبك كتير.
`;
  responseMsg.classList.remove("hidden");
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  const headings = document.querySelectorAll(".game-container h2");
  headings.forEach((h) => (h.style.display = "none"));
  document.body.classList.add("new-background");
});
