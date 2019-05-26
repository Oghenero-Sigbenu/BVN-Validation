import axios from 'axios';

const base = axios.create({
    baseURL: "https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/"
});

export default base;