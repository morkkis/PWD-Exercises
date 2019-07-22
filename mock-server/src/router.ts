import {Router} from 'express';
import {Request, Response, Router as CoreRouter} from 'express-serve-static-core';

const router: CoreRouter = Router();

router.get('/api/getCatList', async (req: Request, res: Response) => {
  console.log('-Get /api/getCatList');
  const data = (await import('./api/cat-list.json')).default;
  // res.status(409).send((await import('./api/jasper/create_account_error_409.json')).default);
  /*setTimeout(()=>{
    res.json(data);
  }, 5000);*/
  res.json(data);
});

export default router;
