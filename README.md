# CarBnb

## DB init

In server\db\config under development complete the relevant data according to the database that you already have.

In server\db run:

### `npx sequelize-cli db:migrate`
this command will execute any migration files which haven't run yet.

### `npx sequelize-cli db:seed:all`
this command will add the data to the DB **each time** you will run the command.


