import * as swaggerDocProfile from '../swagger-config/swagger-profile.json';
import * as swaggerDocAuth from '../swagger-config/swagger-auth.json';
import * as swaggerDocActivity from '../swagger-config/swagger-activity-recorder.json';
import swaggerUi from 'swagger-ui-express';
import express, {Request, Response} from "express";

const router = express.Router();

const swaggerOpts = {
    explorer: true
  }

const swaggerHtmlProfile = swaggerUi.generateHTML(swaggerDocProfile, swaggerOpts)
  
router.use('/api/swagger/profile', swaggerUi.serveFiles(swaggerDocProfile, swaggerOpts))
router.get('/api/swagger/profile', async (req: Request, res: Response) => { res.send(swaggerHtmlProfile) });

const swaggerHtmlAuth = swaggerUi.generateHTML(swaggerDocAuth, swaggerOpts)
  
router.use('/api/swagger/auth', swaggerUi.serveFiles(swaggerDocAuth, swaggerOpts))
router.get('/api/swagger/auth', async (req: Request, res: Response) => { res.send(swaggerHtmlAuth) });

const swaggerHtmlActivity = swaggerUi.generateHTML(swaggerDocActivity, swaggerOpts)
  
router.use('/api/swagger/activity', swaggerUi.serveFiles(swaggerDocActivity, swaggerOpts))
router.get('/api/swagger/activity', async (req: Request, res: Response) => { res.send(swaggerHtmlActivity) });

export { router as swaggerRouter }