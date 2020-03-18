const selectCountry = document.getElementById('select-country');
const btnSearch = document.getElementById('btn-search');

btnSearch.setAttribute('href', '/get-info/' + selectCountry.value);

selectCountry.addEventListener('change', () => {
    btnSearch.setAttribute('href', '/get-info/' + selectCountry.value);
});