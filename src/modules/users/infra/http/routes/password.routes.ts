import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPassowordController';
import ResetPassowordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPassowordController = new ResetPassowordController();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPassowordController.create);

export default passwordRouter;
