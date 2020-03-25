if (document.getElementById('dateIndexContainer')) {
    const dateTimeIndex = document.getElementById('dateTimeRenderedIndex');
    const renderTimeIndex = document.getElementById('renderTimeIndex');
    const getDateIndex = jQuery.timeago(dateTimeIndex.value);
    renderTimeIndex.innerHTML = 'Last Update: ' + getDateIndex;
}