import axios, { AxiosError } from 'axios';
import { getPAT } from './config';

async function start_action() {
    const url = 'https://api.github.com/repos/saiumesh-apty/actions-test/dispatches';
    const githubPAT = getPAT(); // keep this secret

    const resp = await axios.post(url,
        {
            event_type: 'publish_accounts',
        },
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: "token " + githubPAT,
            }
        }
    );
    console.log(resp.data);
}

start_action().catch((error: AxiosError) => {
    console.log(error.message);
});