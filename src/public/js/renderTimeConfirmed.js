const dateTimeConfirmed = document.getElementById('dateTimeRenderedConfirmed');
const renderTimeConfirmed = document.getElementById('renderTimeConfirmed');
const getDateConfirmed = jQuery.timeago(dateTimeConfirmed.value);
renderTimeConfirmed.innerHTML = getDateConfirmed;