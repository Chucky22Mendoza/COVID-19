const { Router } = require('express');
const router = Router();

const {
    renderIndex,
    getInfoCountry,
    getInfoCountryRecovered,
    getInfoCountryConfirmed,
    getInfoCountryDeaths,
    renderAbout
} = require('../controllers/COVID.controller');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/get-info/:country', getInfoCountry);

router.get('/recovered/:country', getInfoCountryRecovered);

router.get('/confirmed/:country', getInfoCountryConfirmed);

router.get('/death/:country', getInfoCountryDeaths);

module.exports = router;