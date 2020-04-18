

class APIClient {

    constructor(emitter) {
        this.emitter = emitter;
        this.baseURL = 'https://e7p503ngy5.execute-api.us-west-2.amazonaws.com/prod/'
		this.trailsAbortController = new AbortController();
		this.trailReportAbortController = new AbortController();
		this.geoJSONAbortController = new AbortController();

		this.getCounties = this.getCounties.bind(this);
		this.getStateData = this.getStateData.bind(this);
		this.getZipCodeData = this.getZipCodeData.bind(this);
    }
    
	async getCounties() {
        console.log('fetching county data')
		const res = await fetch(`${this.baseURL}GetCounties`);
        const data = await res.json();

        this.emitter.emit('county-data', data.data);
        this.emitter.emit('set-name', 'nmdoh_covid_county_data');
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
}

export default APIClient;