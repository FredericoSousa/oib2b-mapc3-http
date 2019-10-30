# OIB2B MAP3C HTTP

OIB2B MAP3C HTTP is a [NodeJs](https://nodejs.org/en/) library for http requests into the MP3C legacy API.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) to install.

```bash
npm i --save oib2b-map3c-http
```

or

```bash
yarn add oib2b-map3c-http
```

## Usage

```js
const Map3c = require('oib2b-map3c-http');

const map3c = new Map3c({ uri: 'MAP3C_URI', acessToken: 'ACCESS_TOKEN' });

//GET
map3c
	.get('MAP3C_ROUTE')
	.then(res => console.log(res))
	.catch(err => console.log(err));

//POST
map3c
	.post('MAP3C_ROUTE', { body: { foo: 'bar' } })
	.then(res => console.log(res))
	.catch(err => console.log(err));

//PUT
map3c
	.put('MAP3C_ROUTE', { body: { foo: 'bar' } })
	.then(res => console.log(res))
	.catch(err => console.log(err));

//PATHC
map3c
	.patch('MAP3C_ROUTE', { body: { foo: 'bar' } })
	.then(res => console.log(res))
	.catch(err => console.log(err));

//DELETE
map3c
	.delete('MAP3C_ROUTE')
	.then(res => console.log(res))
	.catch(err => console.log(err));

//You can add custom headers to any request adding the header property to the option parameter
//Like this:
map3c.get('MAP3C_ROUTE', { headers: { foo: 'bar' } });
```

## Authors

-   **[Frederico Sousa](https://github.com/fredericosousa)**

See also the list of [contributors](https://github.com/FredericoSousa/oib2b-map3c-http/graphs/contributors) who participated in this project.

## License

[MIT](https://choosealicense.com/licenses/mit/)
