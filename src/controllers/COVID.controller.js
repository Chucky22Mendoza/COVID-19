const axios = require('axios');

const indexCtrl = {};

indexCtrl.renderIndex = async (req, res) => {
    let dataCountries;
    let dataDateIndex;

    try{
        const response = await axios.get('https://api.covid19api.com/summary');
        dataCountries = response.data.Countries;
        dataDateIndex = response.data.Date;
    }catch (error) {
        console.log(error);
    }
    res.render('index', { response: dataCountries, dataDateIndex });
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about');
}

indexCtrl.getInfoCountry = async (req, res) => {
    const { country } = req.params;
    let dataCountries;
    let countryInfo;

    try{
        const response = await axios.get('https://api.covid19api.com/summary');
        dataCountries = response.data.Countries;
    }catch (error) {
        console.log(error);
    }

    dataCountries.forEach(element => {
        if(element.Country === country){
            countryInfo = element;
        }
    });

    res.render('COVID/country-info', { country: countryInfo });
}

indexCtrl.getInfoCountryRecovered = async (req, res) => {
    const { country } = req.params;
    let parseCountry = country.toLowerCase();
    parseCountry = parseCountry.replace(/ /g,'-');

    let dataCountries;
    let countryInfo;

    let uri = 'https://api.covid19api.com/total/country/' + parseCountry + '/status/recovered';

    try{
        const response = await axios.get(uri);
        dataCountries = response.data;
    }catch (error) {
        console.log(error);
    }

    dataCountries.forEach((element, index) => {
        if(index === dataCountries.length-1){
            element.Status = element.Status.toUpperCase();
            countryInfo = element;
        }
    });

    res.render('COVID/recovered', { recovered: countryInfo });
}

indexCtrl.getInfoCountryConfirmed = async (req, res) => {
    const { country } = req.params;
    let parseCountry = country.toLowerCase();
    parseCountry = parseCountry.replace(/ /g,'-');

    let dataCountries;
    let countryInfo;

    let uri = 'https://api.covid19api.com/total/country/' + parseCountry + '/status/confirmed';

    try{
        const response = await axios.get(uri);
        dataCountries = response.data;
    }catch (error) {
        console.log(error);
    }

    dataCountries.forEach((element, index) => {
        if(index === dataCountries.length-1){
            element.Status = element.Status.toUpperCase();
            countryInfo = element;
        }
    });

    res.render('COVID/confirmed', { confirmed: countryInfo });
}

indexCtrl.getInfoCountryDeaths = async (req, res) => {
    const { country } = req.params;
    let parseCountry = country.toLowerCase();
    parseCountry = parseCountry.replace(/ /g,'-');

    let dataCountries;
    let countryInfo;

    let uri = 'https://api.covid19api.com/total/country/' + parseCountry + '/status/deaths';

    try{
        const response = await axios.get(uri);
        dataCountries = response.data;
    }catch (error) {
        console.log(error);
    }

    dataCountries.forEach((element, index) => {
        if(index === dataCountries.length-1){
            element.Status = element.Status.toUpperCase();
            countryInfo = element;
        }
    });

    res.render('COVID/deaths', { deaths: countryInfo });
}

module.exports = indexCtrl;