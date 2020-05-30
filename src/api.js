

class APIClient {

    constructor(emitter) {
        this.emitter = emitter;
        this.baseURL = 'https://e7p503ngy5.execute-api.us-west-2.amazonaws.com/prod/'
		this.getCounties = this.getCounties.bind(this);
		this.getStateData = this.getStateData.bind(this);
        this.getZipCodeData = this.getZipCodeData.bind(this);
        this.getCorrectionalData = this.getCorrectionalData.bind(this);
    }
    
	async getCounties() {
        console.log('fetching county data')
		const res = await fetch(`${this.baseURL}GetCounties`);
        const data = await res.json();

        this.emitter.emit('county-data', data.data);
        this.emitter.emit('set-name', 'nmdoh_covid_county_data');
    }

    async getCountyHistorical(countyId) {
        console.log('fetching county data')
		const res = await fetch(`${this.baseURL}GetCountyDataByDay?countyId=${countyId}`);
        const data = await res.json();
        return data
    }
    
    async getStateData() {
        console.log('fetching state data')
		const res = await fetch(`${this.baseURL}GetPublicStatewideData`);
        const data = await res.json();
        data.data.updated = new Date(data.data.updated).toLocaleDateString();
        this.emitter.emit('state-data', [data.data]);
        this.emitter.emit('set-name', 'nmdoh_covid_state_data');
	}

	async getZipCodeData() {
        console.log('fetching zip code data')
		const res = await fetch(`${this.baseURL}GetPublicZipsData`);
		const data = await res.json();
        this.emitter.emit('zip-code-data', data.data);
        this.emitter.emit('set-name', 'nmdoh_covid_zip_code_data');
    }
    
    async getCorrectionalData() {
        console.log('fetching correctional facility data')
		const res = await fetch(`${this.baseURL}GetCorrectionalFacilities`);
		const data = await res.json();
        this.emitter.emit('correctional-data', data.data);
        this.emitter.emit('set-name', 'nmdoh_covid_correctional_facility_data');
	}

}

export default APIClient;