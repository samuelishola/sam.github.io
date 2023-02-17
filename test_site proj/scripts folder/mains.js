const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images folder/iyanu.jpg") {
		myImage.setAttribute("src", "images folder/tunde1.jpg");
	} else {
		myImage.setAttribute("src", "images folder/iyanu.jpg");
	}
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
	const myName = prompt("Please enter your name");
	localStorage.setItem("name" myName);
	myHeading.textContent = "My name is Samuel Ishola, ${myName}";
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `My name is Samuel Ishola, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `My name is Samuel Ishola, ${myName}`;
  }
}