# EmployeeTracker

A node CLI app, for managing a directory of employees, by role & department

To create the schema, run:
`mysql -u root -p  schema.sql`
OR copy paste the body of `schema.sql` into the mysql Workbench

To populate the information, grab the `seeds.sql` body and run it in the mysql Workbench

Once done, make sure to run `npm install -mysql -console.table -node.banner -inquirer`

After all of this is installed `node server.js` to start the app, and browse around!.
