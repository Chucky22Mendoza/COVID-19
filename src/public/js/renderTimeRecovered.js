const dateTimeRecovered = document.getElementById('dateTimeRenderedRecovered');
const renderTimeRecovered = document.getElementById('renderTimeRecovered');
const getDateRecovered = jQuery.timeago(dateTimeRecovered.value);
renderTimeRecovered.innerHTML = getDateRecovered;