const config = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'blog'
    }
};

export default config;