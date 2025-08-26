function defineTimeLeft () {
	let endDate = new Date("2025-08-30T00:59:00Z");
	let currentDate = new Date();
	let difference = (endDate > currentDate) ? endDate-currentDate : 0;
	let days=0, hours=0, minutes=0, seconds=0;
	
	if(difference > 0) {
		days = Math.floor(difference / (1000*60*60*24));
		hours = Math.floor((difference / (1000*60*60)) - (days * 24));
		minutes = Math.floor((difference / (1000*60)) - (days * 24 * 60) - (hours * 60) ); 
		seconds = Math.floor((difference / (1000)) - (days * 24 * 60 * 60) - (hours * 60 * 60)  - (minutes * 60));
	}
	
	document.getElementById("days").textContent = days;
	document.getElementById("hours").textContent = hours;
	document.getElementById("minutes").textContent = minutes;
	document.getElementById("seconds").textContent = seconds;
}

setInterval(defineTimeLeft,1000);