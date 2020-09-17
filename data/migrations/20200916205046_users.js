exports.up = function (knex) {
    return (
      knex.schema
        .createTable('users', (tbl) => {
          tbl.increments();
          tbl.text('username', 255).notNull().unique();
          tbl.string('password', 255).notNull();
          tbl.text('firstname', 255).notNull();
          tbl.text('location', 255).notNull();
        })
        .createTable('story', (tbl) => {
          tbl.increments();
          tbl.string('title', 255).notNull();
          tbl.string('location', 255).notNull();
          tbl.string('description', 255).notNull();
          tbl.string('date', 255).notNull();
          tbl.string('image_url', 255).notNull();
          tbl
            .integer('users_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
    );
  };

  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('story')
      .dropTableIfExists('users')
  };
