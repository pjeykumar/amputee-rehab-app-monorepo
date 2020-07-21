import * as swaggerDocument from '../swagger-config/swagger.json';
import swaggerUi from 'swagger-ui-express';
import express, {Request, Response} from "express";

const router = express.Router();

const swaggerOpts = {
    explorer: true
  }

const swaggerHtml = swaggerUi.generateHTML(swaggerDocument, swaggerOpts)
  
router.use('/api/swagger/docs', swaggerUi.serveFiles(swaggerDocument, swaggerOpts))
router.get('/api/swagger/docs', async (req: Request, res: Response) => { res.send(swaggerHtml) });

export { router as swaggerRouter }