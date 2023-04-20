import { Router } from 'express';

export interface IRouter {
  users: Router;
  auth: Router;
  doctors: Router;
}
