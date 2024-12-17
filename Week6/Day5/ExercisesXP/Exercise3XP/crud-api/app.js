const app = express();
const PORT = 5000;

app.get('/posts', async (req, res) => {
    try {
       
        const posts = await fetchPosts();
        
        
        console.log('Data has been successfully retrieved and sent');
        
        
        res.status(200).json(posts); 
    } catch (error) {
        
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
