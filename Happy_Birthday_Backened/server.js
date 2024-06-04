import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { MongoClient } from 'mongodb';

async function createServer() {
  const app = express();
  app.use(express.json());

  const mongoUri = 'mongodb+srv://AashishKumarSingh:%40Aashish1@aashishkumarsingh.psisy4d.mongodb.net/PersonalProject?retryWrites=true&w=majority&appName=AashishKumarSingh';
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('PrivateProject');
    const userInfoCollection = db.collection('Happy_Birthday_Aadarsh');

    app.use((req, res, next) => {
      req.usersCollection = userInfoCollection;
      next();
    });

    app.post('/incrementTotalUser', async (req, res) => {
      try {
        const result = await userInfoCollection.updateOne(
          { Number_Visitors: { $exists: true } },
          { $inc: { Number_Visitors: 1 } }
        );
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
    });

    app.post('/incrementUniqueOne', async (req, res) => {
      try {
        const result = await userInfoCollection.updateOne(
          { Unique_Visitors: { $exists: true } },
          { $inc: { Unique_Visitors: 1 } }
        );
        const result1 = await userInfoCollection.updateOne(
          { Number_Visitors: { $exists: true } },
          { $inc: { Number_Visitors: 1 } }
        );
        res.status(200).json({ result, result1 });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
    });

    app.post('/realtime', async (req, res) => {
      try {
        const visitorsData = await userInfoCollection.findOne(
          { $or: [{ Number_Visitors: { $exists: true } }, { Unique_Visitors: { $exists: true } }, { Visitors_Greeted: { $exists: true } }] },
          { projection: { Number_Visitors: 1, Unique_Visitors: 1, Visitors_Greeted: 1 } }
        );
        const data = {
          Number_Visitors: visitorsData?.Number_Visitors ?? 0,
          Unique_Visitors: visitorsData?.Unique_Visitors ?? 0,
          Visitors_Greeted: visitorsData?.Visitors_Greeted ?? 0
        };
        res.status(200).json({ data });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
    });

    app.post('/incrementGreeting', async (req, res) => {
      try {
        const result = await userInfoCollection.updateOne(
          { Owner: 'Aashish Kumar Singh' },
          { $inc: { Visitors_Greeted: 1 } }
        );
        if (result.modifiedCount === 1) {
          res.status(200).json({ message: 'Visitors_Greeted incremented successfully.' });
        } else {
          res.status(404).json({ message: 'No document found to update.' });
        }
      } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating Visitors_Greeted.' });
      }
    });

    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.get('/', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const filePath = path.resolve(__dirname, '../', 'index.html');
        let template = await fs.readFile(filePath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (err) {
        vite.ssrFixStacktrace(err);
        next(err);
      }
    });

    app.use(vite.middlewares);
    app.use(express.static(path.resolve(__dirname, '../Happy_Birthday_Project')));

    app.listen(5173, () => {
      console.log('Server is running on http://localhost:5173');
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

createServer();
