const express = require("express")
const db = require("./story-model")
const restrict = require("../auth/authenticate-middleware");

const router = express.Router()

//GET all stories
router.get("/api/story",restrict(), async (req, res, next) => {
	try {
        res.json(await db.find())
	} catch(err) {
		next(err)
	}
})

//GET a story by id
router.get("/api/story/:id",restrict(), async (req, res, next) => {
	try {
		const stori = await db.findById(req.params.id)
		if (!stori) {
			return res.status(404).json({
				message: "story not found",
			})
		}

		res.json(stori)
	} catch(err) {
		next(err)
	}
})

//GET stories by user id
router.get("/api/story/:id/story",restrict(), async (req, res, next) => {
	try {
		const stori = await db.findByStoryId(req.params.id)
		if (!stori) {
			return res.status(404).json({
				message: "user story not found",
			})
		}

		res.json(stori)
	} catch(err) {
		next(err)
	}
})

//Post
router.post("/api/story/:id/story",restrict(), async (req, res, next) => {
	try {
        const stori = await db.addStory(req.body)
        res.status(201).json(stori)
        
	} catch(err) {
		next(err)
	}
})

//PUT
router.put("/api/story/:id",restrict(), async (req, res, next) => {
	try {
		const {id} = req.params
		const newStory = { ...req.body }

		const stori = await db.updateStory(newStory, id)
		
        res.status(201).json(stori)
        
	} catch(err) {
		next(err)
	}
})

//delete
router.delete("/api/story/:id",restrict(), async (req, res, next) => {
	try {
		const { id } = req.params
		
		await db.remove(id)

		res.status(204).end()
	} catch(err) {
		next(err)
	}
})
module.exports = router;