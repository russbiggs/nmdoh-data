
import mitt from 'mitt';
import Table from './table';
import APIClient from './api';
import DownloadBtn from './download-btn';

{
    const emitter = mitt();
    const client = new APIClient(emitter);
    const table = new Table();
    const downloadBtn = new DownloadBtn();
   
    emitter.on('state-data', table.update);
    emitter.on('county-data', table.update);
    emitter.on('county-data', downloadBtn.setContent);
    emitter.on('set-name', downloadBtn.setName);
    emitter.on('zip-code-data', table.update);

    document.querySelector('.js-county-btn').addEventListener('click', ()=> {
        return client.getCounties();
    });
    document.querySelector('.js-state-btn').addEventListener('click', ()=> {
        return client.getStateData();
    });
    document.querySelector('.js-zip-code-btn').addEventListener('click', ()=> {
        return client.getZipCodeData();
    });

    client.getCounties();
}

