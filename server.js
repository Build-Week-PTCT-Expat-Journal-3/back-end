const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const storyRouter = require('./story/story-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use(storyRouter);


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;