import allowedOrigins from './allowedOrigins.js';

const corsOptions = {
    origin: 'https://acme-fe-livid.vercel.app',  // Frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  };

export default corsOptions;