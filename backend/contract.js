const ethers = require('ethers');

const getContract = () => {
    const { API_URL, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;
    const abi = require('./artifacts/contracts/Agreement.sol/Agreement.json').abi;
    const provider = new ethers.providers.JsonRpcProvider(API_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
};

const getAgreement = async (agreementId) => {
    try {
        const contract = getContract();
        return await contract.getAgreement(agreementId);
    } catch (error) {
        console.error(error);
        return null;
    }
};

const makeAgreement = async (agreementId, lender, tenet, data) => {
    try {
        const contract = getContract();
        return await contract.makeAgreement(agreementId, lender, tenet, data);
    } catch (error) {
        console.error(error);
        return null;
    }
};

const setLender = async (lender, agreementId) => {
    try {
        const contract = getContract();
        return await contract.setLender(lender, agreementId);
    } catch (error) {
        console.error(error);
        return null;
    }
};

const setTenant = async (tenet, agreementId) => {
    try {
        const contract = getContract();
        return await contract.setTenant(tenet, agreementId);
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = { getAgreement, makeAgreement, setLender, setTenant };