
let currentIndex = 0;
const hello = ['Thank You for Shopping With Us', 'Please Recycle This Bag', 'Thank You! Have a Nice Day!'];

function randomIndex() {
  return ~~(Math.random() * hello.length);
};

window.setInterval(function() {
  let newIndex = randomIndex();
  while (newIndex === currentIndex) newIndex = randomIndex();
  currentIndex = newIndex;
  document.getElementById("switch").textContent = hello[currentIndex];
}, 5000);
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

