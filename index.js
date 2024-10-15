async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(() => {
            console.log(value);
            resolve();
        }, 1000));
    }
}


const testArray = ['A', 'B', 'C', 'D'];
iterateWithAsyncAwait(testArray);


async function awaitCall() {
    try {
        console.log('Fetching data...');
        
        
        const data = await new Promise((resolve) => {
            setTimeout(() => resolve("API data received"), 2000);
        });
        
        console.log(data);
    } catch (error) {
        console.error('Error while fetching data:', error);
    }
}

awaitCall();


async function concurrentRequests() {
    try {
        console.log('Making concurrent requests...');
        
        const [response1, response2] = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve("Response from API 1"), 1500)),
            new Promise(resolve => setTimeout(() => resolve("Response from API 2"), 1000))
        ]);

        console.log('Both responses received:');
        console.log('API 1:', response1);
        console.log('API 2:', response2);
    } catch (error) {
        console.error('Error during concurrent requests:', error);
    }
}


concurrentRequests();


async function parallelCalls(urls) {
    try {
        console.log('Fetching data from URLs...');

       
        const responses = await Promise.all(
            urls.map(url =>
                new Promise(resolve => setTimeout(() => {
                    resolve(`Data fetched from ${url}`);
                }, Math.random() * 2000)) 
        ));

        console.log('All responses received:');
        responses.forEach(response => {
            console.log(response);
        });
    } catch (error) {
        console.error('Error during parallel calls:', error);
    }
}

const urls = ['https://jsonplaceholder.typicode.com/users'];
parallelCalls(urls);

