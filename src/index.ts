import axios from "axios"


// save given data in variables
const numParts = 21;
const minInnterval = 2.5*1000
const maxInterval = 10000;
const lockOutTime = 60000
const coolDownTime = 180000

const chaincodeData = [];

function sleepTime(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}


// first try to hit the api with a partNumber --> axios se hit karte hai dekhte hai
async function getData(partNumber: number) {
    try {
        const response = await axios.get(`https://exam.ankush.wiki/data?part=${partNumber}`)
        if(response.status === 200) {
            console.log(`data for ${partNumber} fetched successfully`)
        } else console.error("couldn't fetch");
    } 
    catch(e: any)  {
        console.error(`error`, e.message);
        if(e.message.startsWith("Timeout until")) {
            
        }
    }
}




// we save the data(decoded) in an array --> {chaincode} if the api is called correctly ---> try {resolve} catch{err}



// if chaincode is not submitted to /answers as {chainCode: <VALUE>}, then restart  ---> try {submisiion} catch{wait until cooldown}





// HINT --> THE DATA THAT WE GET ON HITTING IS IN MORSE CODE --> S.T.2 REFERENCE
