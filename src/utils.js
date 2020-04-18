function cleanData(data) {
    const removeHeaders = ['geometry', 'lat', 'long', 'countyId', 'cvDataId','created', 'archived'];
    const keys = Object.keys(data[0]);
    const headings = keys.filter((x) => {
        if (removeHeaders.indexOf(x) == -1) {
            return x;
        }
    })
    let rows = [];
    for(let i=0; i < data.length; i++){
        let row = []
        for(let j=0;j<headings.length;j++){
            row.push(`${data[i][headings[j]]}`);
        }
        rows.push(row)
    }
    return {headings: headings, data: rows}
}

export default cleanData;