
exports.seed = function(knex) {
  await knex("story").truncate()
  await knex("story").insert([
    {title: "Outdoors", location: "mountains", description: "great outdoor mountains", date: "5/5/2019", image_url: "https://i.pinimg.com/originals/ae/77/1b/ae771b7e8140ed86eb38e966f0374a73.jpg" , user_id: 1},
    {title: "city", location: "seoul", description: "south korea capital", date: "8/9/19", image_url: "https://cf.bstatic.com/data/xphoto/1182x887/153/15399205.jpg?size=S" , user_id: 2},
    {title: "city", location: "texas", description: "great outdoors", date: "8/15/19", image_url: "https://www.visittheusa.com/sites/default/files/styles/state_hero_s/public/images/hero_media_image/2017-01/HERO_shutterstock_456495790_Big%20Bend_Web72DPI.jpg?itok=pTEQxeRY" , user_id: 3},
    {title: "city", location: "LA", description: "city life", date: "1/9/19", image_url: "https://blogs.kcrw.com/whichwayla/wp-content/uploads/2013/07/Passage19_1076.jpg" , user_id: 4},
  ]);
};
