exports.up = function (knex) {
    return (
      knex.schema
        // projects
        .createTable("projects", tbl => {
          tbl.increments();
          tbl.string("projectName", 255).notNullable().unique().index();
          tbl.string('description');
          tbl.boolean('completed').notNullable();
        })
  
        // resources
        .createTable("resources", tbl => {
          tbl.increments();
          tbl.string("resourceName", 255).notNullable();
          tbl.string("description");
  
          // foreign key to projects
          tbl
            .string("project_id", 255)
            .references("id")
            .inTable("projects")
            .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
            .onUpdate("CASCADE");
        })
  
        // tasks
        .createTable("tasks", tbl => {
          tbl.increments();
          tbl.string("taskDescription", 255).notNullable().index();
          tbl.string('notes');
          tbl.boolean('completed').notNullable();
          // foreign key to projects
          tbl
            .string("project_id", 255)
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
            .onUpdate("CASCADE");
        })
    );
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };
  