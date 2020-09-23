const app = require('express')()
module.exports = { path: '/api', handler: app }
var azure = require('azure-storage')
app.get('/createtable', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )

  tableService.createTableIfNotExists('teacher', function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(result)
    }
  })
})
app.get('/addentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String('part2'),
    RowKey: entGen.String('row1'),
    boolValueTrue: entGen.Boolean(true),
    boolValueFalse: entGen.Boolean(false),
    intValue: entGen.Int32(42),
    taskDone: entGen.Boolean(false),
    dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
    complexDateValue: entGen.DateTime(
      new Date(Date.UTC(2013, 02, 16, 01, 46, 20))
      ),
    }
    tableService.insertEntity('teacher', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      // result contains the ETag for the new entity
    }
  })
})
app.get('/updateentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  );
  var entGen = azure.TableUtilities.entityGenerator;
  var entity = {
    PartitionKey: entGen.String('teacher12'),
    RowKey: entGen.String('row1'),
    // taskDone: entGen.Boolean(true),
    boolValueTrue: entGen.Boolean(true),
    boolValueFalse: entGen.Boolean(false),
    intValue: entGen.Int32(42),
    taskDone: entGen.Boolean(false),
    dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
    complexDateValue: entGen.DateTime(
      new Date(Date.UTC(2013, 02, 16, 01, 46, 20))
      ),
  }

  tableService.insertOrReplaceEntity('teacher', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
        console.log(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  });
})
app.get('/deletetable', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  );
  var entGen = azure.TableUtilities.entityGenerator;
  var entity = {
    PartitionKey: entGen.String('teacher12'),
    RowKey: entGen.String('row1'),
  
  };
  tableService.deleteTable('teacher', entity , function (error,result, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.get('/deleteentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
   var entity = {
     PartitionKey: entGen.String('part2'),
     RowKey: entGen.String('row1'),
   }
  tableService.deleteEntity('sakshi', entity,function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.get('/readentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  );
   
 tableService.retrieveEntity('sakshi', "part1","row1", function (
   error,
   result,
   response
 ) {
   if (!error) {
console.log(result)
     // result contains the entity
   }
 })
})
