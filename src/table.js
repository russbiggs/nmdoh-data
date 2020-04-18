import {DataTable} from 'simple-datatables';
import cleanData from './utils';

class Table {

    constructor() {
        this.elem = document.querySelector('.js-table');
        this.dataTable = new DataTable(this.elem, {paging:false});

        this.update = this.update.bind(this);
    }

    update(data) {
        this.dataTable.destroy();
        this.dataTable = new DataTable(this.elem, {paging:false});
        const tableData = cleanData(data)
        this.dataTable.insert(tableData);
    }
}

export default Table;