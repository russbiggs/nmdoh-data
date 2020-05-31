
import mitt from 'mitt';
import Table from './table';
import APIClient from './api';
import {StatewideDownloadLink, CountyDownloadLink, DownloadBtn} from './download-btn';


{
    const emitter = mitt();
    const client = new APIClient(emitter);
    const table = new Table();
    const downloadBtn = new DownloadBtn();
   
    emitter.on('state-data', table.update);
    emitter.on('state-data', downloadBtn.setContent);
    emitter.on('county-data', table.update);
    emitter.on('county-data', downloadBtn.setContent);
    emitter.on('set-name', downloadBtn.setName);
    emitter.on('zip-code-data', table.update);
    emitter.on('correctional-data', table.update);

    const historicalDataNavLink = document.querySelector('.js-historical-link');
    const dailyDataNavLink = document.querySelector('.js-daily-link');

    const historicalDataSection = document.querySelector('.js-historical-section');
    const dailyDataSection = document.querySelector('.js-daily-section');

    const statewideHistoricalLink = document.querySelector('.js-download-statewide-historical-link');
    new StatewideDownloadLink(statewideHistoricalLink, client);

    const countyLinks = document.querySelectorAll('.js-download-county-historical-link');
    for (const countyLink of countyLinks) {
        new CountyDownloadLink(countyLink, client);
    }

    historicalDataNavLink.addEventListener('click', (e)=> {
        e.preventDefault();
        const activeSection = document.querySelector('.section--active');
        if (activeSection !== historicalDataSection) {
            activeSection.classList.remove('section--active');
            historicalDataSection.classList.add('section--active');
        }
    })

    dailyDataNavLink.addEventListener('click', (e)=> {
        e.preventDefault();
        const activeSection = document.querySelector('.section--active');
        if (activeSection !== dailyDataSection) {
            activeSection.classList.remove('section--active');
            dailyDataSection.classList.add('section--active');
        }
    })

    document.querySelector('.js-county-btn').addEventListener('click', ()=> {
        return client.getCounties();
    });
    document.querySelector('.js-state-btn').addEventListener('click', ()=> {
        return client.getStateData();
    });
    document.querySelector('.js-zip-code-btn').addEventListener('click', ()=> {
        return client.getZipCodeData();
    });
    document.querySelector('.js-correctional-btn').addEventListener('click', ()=> {
        return client.getCorrectionalData();
    });

    client.getCounties();
}

