function placementNumbers() {
	const time = document.querySelector('.time');

	const radius = 265;
	const centerX = 265;
	const centerY = 265;
	
	for (let i = 0; i <= 11; i++){
		const angle = (i + 1) * 30;
		const number = document.createElement("span");
		number.innerHTML = i + 1;
		const x = centerX + radius * Math.cos((angle - 90) * Math.PI / 180);
		const y = centerY + radius * Math.sin((angle - 90) * Math.PI / 180);

		number.style.left = `${x}px`;
		number.style.top = `${y}px`;

		time.appendChild(number);
	}
}

function PlacementSticks() {
	const time = document.querySelector('.time');
	const radius = 230;
	const centerX = 270;
	const centerY = 266;

	for (let i = 0; i < 60; i++) {
		const angle = i * 6;
		const radian = (angle - 91.4) * Math.PI / 180;

		const x = centerX + radius * Math.cos(radian);
		const y = centerY + radius * Math.sin(radian);

		const stick = document.createElement("span");

		stick.style.position = "absolute";
		stick.style.left = `${x}px`;
		stick.style.top = `${y}px`;

		stick.style.transform = `rotate(${angle - 90}deg)`;
		stick.style.display = "inline-block";
		stick.style.borderBottom = "3px solid black";
		stick.style.width = "10px";
		stick.style.height = "10px";

		if (i % 5 === 0) {
			stick.style.borderBottom = "5px solid black";
			stick.style.width = "14px";
			stick.style.height = "14px";
		}

		time.appendChild(stick);
	}
}

function getTime(){
	const date = new Date();
	return {hour: date.getHours(), minute: date.getMinutes(), seconds: date.getSeconds()}
}

function setCurrentTime() {
	const {hour, minute, seconds} = getTime();
	updateSecond(seconds);
	updateMinutes(minute);
	updateHours(hour);
	setTimeout(setCurrentTime, 1000);
}

function updateSecond(currentTime) {
	let rotate = currentTime * 6;
	document.documentElement.style.setProperty('--second-rotate', `${rotate}deg`)
}

function updateMinutes(currentTime){
	let rotate = currentTime * 6;
	document.documentElement.style.setProperty('--minute-rotate', `${rotate}deg`)
}

function updateHours(currentTime) {
	let rotate = currentTime * 30;
	document.documentElement.style.setProperty('--sentry-rotate', `${rotate}deg`)
}

window.addEventListener('load', () => {
	placementNumbers();
	PlacementSticks();
	setCurrentTime();
})

