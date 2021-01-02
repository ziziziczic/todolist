const dateElement = document.getElementById("date");

const todayTime = new Date();

dateElement.innerHTML = moment(todayTime).format('LLLL');