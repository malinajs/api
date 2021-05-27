import { Router } from 'worktop';
import { listen } from 'worktop/cache';

import {getGist,addGist} from './lib/store';

const API = new Router();

/** Get gist from the store */
API.add('GET', '/gist/:gid', async (req, res) => {
    const gist = await getGist(req.params.gid);
	if(!gist) return res.send(500, 'No gist found');
	res.send(200,gist);
});

/** Add gist to the store */
API.add('POST', '/gist', async (req, res) => {
    const gid = await addGist(await req.body());
	res.send(200,{
		gid
	});
});

/** Show info */
API.add('GET', '/', (req, res) => {
	res.setHeader('Cache-Control', 'public,max-age=60');
	res.end(`malinajs API
- GET  /gist/:gid  -  get the gist by ID, returns JSON
- POST /gist  -  save gist, await any JSON, returns '{"gid":<gist_id>}'.	
`);
});

listen(API.run);