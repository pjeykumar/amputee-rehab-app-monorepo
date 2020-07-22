import * as swaggerDocProfile from '../swagger-config/swagger-profile.json';
import * as swaggerDocAuth from '../swagger-config/swagger-auth.json';
import * as swaggerDocActivity from '../swagger-config/swagger-activity-recorder.json';
import swaggerUi from 'swagger-ui-express';
import express from "express";

const router = express.Router();

const swaggerOpts = {
    explorer: true
  }
  
router.use('/api/swagger/profile', swaggerUi.serve, swaggerUi.setup(swaggerDocProfile, swaggerOpts));
router.use('/api/swagger/auth', swaggerUi.serve, swaggerUi.setup(swaggerDocAuth, swaggerOpts));
router.use('/api/swagger/activity', swaggerUi.serve, swaggerUi.setup(swaggerDocActivity, swaggerOpts));

export { router as swaggerRouter }