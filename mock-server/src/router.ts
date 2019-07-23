import {Router} from 'express';
import {Request, Response, Router as CoreRouter} from 'express-serve-static-core';

const router: CoreRouter = Router();

router.get('/api/getCatList', async (req: Request, res: Response) => {
  console.log('-Get /api/getCatList');
  const data = (await import('./api/cat-list.json')).default;
  res.json(data);
});

router.delete('/api/deleteCat/:id', async (req: Request, res: Response) => {
  console.log(`-Delete /api/removeCat/${req.params.id}`);
  if ((+req.params.id) < 5) {
	  res.status(409).send();
  } else {
	  setTimeout(() => {
		res.status(204).send();
	  }, 3000);
  }
});
router.put('/api/addToFavorite/:id', async (req: Request, res: Response) => {
  console.log(`-Put /api/addToFavorite/${req.params.id}`);
  setTimeout(() => {
	res.status(204).send();
  }, 3000);
});

export default router;
