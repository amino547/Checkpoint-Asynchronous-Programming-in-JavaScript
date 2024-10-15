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


async function parallelCalls() {
    try {
        const [usersRes, postsRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        
        if (!usersRes.ok || !postsRes.ok) {
            throw new Error('Failed to fetch data');
        }

        const users = await usersRes.json();
        const posts = await postsRes.json();

        console.log('Users:', users);
        console.log('Posts:', posts);
    } catch (error) {
        console.error('Error:', error);
    }
}

parallelCalls()

