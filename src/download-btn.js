import cleanData from "./utils";

class DownloadBtn {
    constructor(){
        this.elem = document.querySelector('.js-download-btn');
        this.name = '';
        this.rows = [];

        this.addEventListeners = this.addEventListeners.bind(this);
        this.onClick = this.onClick.bind(this);
        this.setContent = this.setContent.bind(this)
        this.setName = this.setName.bind(this);

        this.addEventListeners();
    }

    addEventListeners() {
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
        let csvContent = `data:text/csv;charset=utf-8,${rows}`;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download",this.name);
        link.classList.add('hidden');
        document.body.appendChild(link);
        link.click();
    }
}

export default DownloadBtn;