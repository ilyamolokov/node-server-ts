// const express = require('express');
import express, { Router } from "express";
import { api } from "./controllers/api/index";

const mainRouter : Router = express.Router();

mainRouter.post('/registration', api.postRegistration);

mainRouter.get('/users', api.getUsers);

mainRouter.get('/users/:id', api.infoById);

mainRouter.get('/users/:id/contacts', api.getUserContacts);

mainRouter.route('/users/:id/contacts').post(api.postContacts).delete(api.deleteContacts);

export { mainRouter };