// const express = require('express');
import express, { Router } from "express";
import { api } from "./controllers/api/index";

const mainRouter : Router = express.Router();

mainRouter.post('/registration', api.postRegistration);

mainRouter.get('/users', api.getUsers);

mainRouter.get('/users/:id', api.infoById);

mainRouter.get('/users/:id/contacts', api.getUserContacts);

mainRouter.post('/users/:id/contacts', api.postContacts);

mainRouter.delete('/users/:id/contacts', api.deleteContacts);

export { mainRouter };