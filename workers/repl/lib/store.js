import {uid} from 'worktop/utils';
import {read,write} from 'worktop/kv';

export async function addGist(gist){
   const gid = uid();
   const key = `id::${gid}`;
   await write(REPL_GISTS,key,gist);
   return gid;
}

export async function getGist(gid){
    const gist = await read(REPL_GISTS,`id::${gid}`);
    return gist;
}