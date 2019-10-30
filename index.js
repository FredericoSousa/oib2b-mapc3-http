const fetch = require('node-fetch');

class Map3C {
	constructor({ uri = '', accessToken = '' }) {
		this.uri = uri;
		this.accessToken = accessToken;
	}

	call(uri = '', { method = 'GET', body, headers = {} }) {
		return new Promise((resolve, reject) => {
			fetch(`${this.uri}${uri}`, {
				method,
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
					Authorization: this.accessToken,
					...headers,
				},
			})
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err));
		});
	}

	get(uri = '', options = { headers: {} }) {
		const { headers } = options;
		return this.call(uri, { headers });
	}

	post(uri = '', options = { headers: {}, body: {} }) {
		const { headers, body } = options;
		return this.call(uri, { method: 'POST', body, headers });
	}

	put(uri = '', options = { headers: {}, body: {} }) {
		const { headers, body } = options;
		return this.call(uri, { method: 'PUT', body, headers });
	}

	patch(uri = '', options = { headers: {}, body: {} }) {
		const { headers, body } = options;
		return this.call(uri, { method: 'PATCH', body, headers });
	}

	delete(uri = '', options = { headers: {}, body: {} }) {
		const { headers, body } = options;
		return this.call(uri, { method: 'DELETE', body, headers });
	}
}

module.exports = Map3C;
