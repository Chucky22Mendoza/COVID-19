const dateTimeDeaths = document.getElementById('dateTimeRenderedDeaths');
const renderTimeDeaths = document.getElementById('renderTimeDeaths');
const getDateDeaths = jQuery.timeago(dateTimeDeaths.value);
renderTimeDeaths.innerHTML = getDateDeaths;