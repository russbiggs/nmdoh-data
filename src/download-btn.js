import cleanData from "./utils";


function createCsv(rows, name) {
    let csvContent = `data:text/csv;charset=utf-8,${rows}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download",name);
    link.classList.add('hidden');
    document.body.appendChild(link);
    link.click();
}

class DownloadBtn {
    constructor(){
        this.elem = document.querySelector('.js-download-btn');
        this.name = '';
        this.rows = [];

        this.addEventListeners = this.addEventListeners.bind(this);
        this.onClick = this.onClick.bind(this);
        this.setContent = this.setContent.bind(this)
        this.setName = this.setName.bind(this);

        this.elem.addEventListener('click', this.onClick);
    }

    setName(name) {
        this.name = `${name}.csv`;
    }

    setContent(data) {
        const tableData = cleanData(data);
        const rows = [tableData.headings, ...tableData.data];
        this.rows = rows
    }

    onClick() {
        let rows = this.rows.map(e => e.join(",")).join("\n");
        createCsv(rows, this.name);
    }
}

class CountyDownloadLink {
    constructor(elem, client){
        this.elem = elem;
        this.client = client;
        this.name = this.elem.innerText;
        this.countyId = this.elem.getAttribute("data-county-id");

        this.addEventListeners = this.addEventListeners.bind(this);
        this.onClick = this.onClick.bind(this);

        this.elem.addEventListener('click', this.onClick);
    }

    onClick(e) {
        e.preventDefault();
        this.client.getCountyHistorical(this.countyId).then(data => {
            const countyData = cleanData(data.data);
            let rows = [countyData.headings, ...countyData.data].map(e => e.join(",")).join("\n");
            createCsv(rows, this.name);
        });
    }
}


class StatewideDownloadLink {
    constructor(elem, client){
        this.elem = elem;
        this.client = client;

        this.addEventListeners = this.addEventListeners.bind(this);
        this.onClick = this.onClick.bind(this);

        this.elem.addEventListener('click', this.onClick);
    }


    onClick(e) {
        e.preventDefault();
        this.client.getStateHistorical().then(data => {
            const stateData = cleanData(data.data);
            let rows = [stateData.headings, ...stateData.data].map(e => e.join(",")).join("\n");
            createCsv(rows, "nm_statewide_covid_data.csv");
        });
    }
}



export {StatewideDownloadLink,CountyDownloadLink, DownloadBtn};