const db = require("../data/dbConfig")

function find() {
    return db("story")
}

function findById(id) {
    return db("story").select("id", 
    "title", 
    "location", 
    "description", 
    "date", 
    "image_url" , 
    "users_id").where({ id })
}

function findByStoryId(id) {
    return db("story")
    .where({"story.users_id": id})
}


function addStory(story) {
    return db("story")
    .insert(story)
}

function updateStory(changes, id) {
    return db("story")
    .update(changes)
    .where({id})
    
}

function remove(id) {
	return db("story").where({ id }).delete()
}

module.exports = {
	find,
    findById,
    findByStoryId,
    addStory,
    updateStory,
    remove,
}