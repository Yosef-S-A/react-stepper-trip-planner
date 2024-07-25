import express from 'express';
import countryRouter from './routes/countryRoutes.js';
import destinationRouter from './routes/destinationRouter.js';
import tripPackageRouter from './routes/tripPackageRouter.js';
import weatherRouter from './routes/weatherRouter.js';



const app = express();

app.use('/api/v1/countries', countryRouter);
app.use('/api/v1/destinations', destinationRouter);
app.use('/api/v1/tripPackages', tripPackageRouter);
app.use('/api/v1/weather-forecast', weatherRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;