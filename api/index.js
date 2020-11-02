const app = require('express')()
const bodyParser = require('body-parser')
module.exports = { path: '/api', handler: app }

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var azure = require('azure-storage')
app.get('/createtable', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )

  tableService.createTableIfNotExists('attendence', function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
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
    PartitionKey: entGen.String('teacher'),
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
      res.send(result)

      // result contains the ETag for the new entity
    }
    //   tableService.insertEntity('teacher', entity, function (
    //   error,
    //   result,
    //   response
    // ) {
    //   if (!error) {
    //     res.send(result)

    //     // result contains the ETag for the new entity

    //   }
    // });
  })
  app.get('/updateentity', (req, res) => {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String('teacher'),
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
    })
  })
  app.get('/deletetable', (req, res) => {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String('teacher'),
      RowKey: entGen.String('row1'),
    }
    tableService.deleteTable('teacherTimeTable', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        console.log(response)
        res.send(result)
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
    tableService.deleteEntity('teacher', entity, function (error, response) {
      if (!error) {
        // console.log(response)
        // result contains true if created; false if already exists
        res.send(result)
      }
    })
  })
  app.get('/readentity', (req, res) => {
    var tableService = azure.ceateTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    tableService.retrieveEntity('teacher', 'part1', 'row1', function (
      error,
      result,
      response
    ) {
      if (!error) {
        console.log(result)
       
      }
    })
  })
})
// teacher 
app.post('/addDetails',async (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    teachername: entGen.String(req.body.teachername),
    teacheremail: entGen.String(req.body.teacheremail),
    teacheraddress: entGen.String(req.body.teacheraddress),
    teacherdepartment: entGen.String(req.body.teacherdepartment),
    teachernumber: entGen.String(req.body.teachernumber),
    teacherDOB: entGen.String(req.body.teacherDOB),
    teacherExper: entGen.String(req.body.teacherExper),
  }
  tableService.insertEntity('teacherprofile', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)

      // result contains the ETag for the new entity
    }
  
})
})
app.post('/updateDetails', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    teachername: entGen.String(req.body.teachername),
    teacheremail: entGen.String(req.body.teacheremail),
    teacheraddress: entGen.String(req.body.teacheraddress),
    teacherdepartment: entGen.String(req.body.teacherdepartment),
    teachernumber: entGen.String(req.body.teachernumber),
    teacherDOB: entGen.String(req.body.teacherDOB),
    teacherExper: entGen.String(req.body.teacherExper),
    
    
  }

  tableService.insertOrReplaceEntity('teacherprofile', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})
// deleteteacherentity
app.post('/deleteDetails', (req, res) => {

  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('teacherprofile', entity, function (error, response) {
    if (!error) {
      console.log(result)
    }
  })
})

// readteachermyprofile
app.post('/readtDetails', async (req, res) => {
  // console.log(req.body.PartitionKey)
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var query = new azure.TableQuery()
    .top(2)
    .where('PartitionKey eq ?', req.body.PartitionKey)

  tableService.queryEntities('teacherprofile', query, null, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(response.body.value)
      res.send(response.body.value)
      // result.entries contains entities matching the query
    }
    })
  })



// TeacherAssignment
app.post('/addAssignment',async (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    Wassignment: entGen.String(req.body.Wassignment),
    Cassignment: entGen.String(req.body.Cassignment),
    Dassignment: entGen.String(req.body.Dassignment),
  }
  tableService.insertEntity('teacherAssignment', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)

      // result contains the ETag for the new entity
    }
  
})
})
app.post('/updateAssignment', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    
    Wassignment: entGen.String(req.body.Wassignment),
    Cassignment: entGen.String(req.body.Cassignment),
    Dassignment: entGen.String(req.body.Dassignment),
    
  }

  tableService.insertOrReplaceEntity('teacherAssignment', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})

// DEleteteacherassignment
app.post('/deleteAssignment', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('teacherAssignment', entity, function (
    error,
    response
  ) {
    if (!error) {
      console.log(result)
    }
  })
})
 
// REadTEacherAssignment
app.post('/readtAssignment', async (req, res) => {
  // console.log(req.body.PartitionKey)
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var query = new azure.TableQuery()
    
    .where('PartitionKey eq ?', req.body.PartitionKey)

  tableService.queryEntities('teacherAssignment', query, null, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(response.body.value)
      res.send(response.body.value)
      // result.entries contains entities matching the query
    }
    })
  })


  // Teachertimetable
app.post('/addtimetable',async (req, res) => {
  console.log('req', req.body.col)
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    days: entGen.String(req.body.days),
    class: entGen.String(req.body.class),
    teachersection:entGen.String(req.body.teachersection),
        // lecture1: entGen.String(req.body.lecture1),
    col1: entGen.String(req.body.col1),
    col2: entGen.String(req.body.col2),
    col3: entGen.String(req.body.col3),
    col4: entGen.String(req.body.col4),
    col5: entGen.String(req.body.col5),
  }
  tableService.insertEntity('teachertimetable', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)

      // result contains the ETag for the new entity
    }
  
})
})
app.post('/updatetimetable', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    teacherday: entGen.String(req.body.teacherday),
    teacherminute: entGen.String(req.body.teacherminute),
    teachersubject: entGen.String(req.body.teachersubject),
    teachername: entGen.String(req.body.teachername),

   
    
  }

  tableService.insertOrReplaceEntity('teachertimetable', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})

// DEleteteacherassignment
app.post('/deletetimetable', (req, res) => {
  try {

  
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('teachertimetable', entity, function (
    error,
    response
  ) {
    if (!error) {
      console.log(result)
    }
  })}
catch (error) {
  console.log(error)
}
})


 
// REadTEachertimetable
app.post('/readtimetable', async (req, res) => {
  // console.log(req.body.PartitionKey)
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var query = new azure.TableQuery()
    
    .where('PartitionKey eq ?', req.body.PartitionKey)

  tableService.queryEntities('teachertimetable', query, null, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(response.body.value)
      res.send(response.body.value)
      // result.entries contains entities matching the query
    }
    })
  })


   // TeacherSyllabus
app.post('/addSyllabus',async (req, res) => {
  console.log('Express req',req.body)
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    topics: entGen.String(req.body.topics),
   
  }
  console.log('Express ent', entity)
  tableService.insertEntity('teachersyllabus', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
      // result contains the ETag for the new entity
    }else{
      console.log('add', error)
    }
  
})
})
app.post('/updateSyllabus', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }

  tableService.insertOrReplaceEntity('teachersyllabus', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})

// DEleteteacherassignment
app.post('/deleteSyllabus', (req, res) => {
  try {

  
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('teachersyllabus', entity, function (
    error,
    response
  ) {
    if (!error) {
      console.log(result)
    }
  })}
catch (error) {
  console.log(error)
}
})


 
// REadTEachertimetable
app.post('/readSyllabus', async (req, res) => {
  // console.log(req.body.PartitionKey)
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var query = new azure.TableQuery()
   
    .where('PartitionKey eq ?', req.body.PartitionKey)

  tableService.queryEntities('teachersyllabus', query, null, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(response.body.value)
      res.send(response.body.value)
      // result.entries contains entities matching the query
    }
    })
  })
  app.post('/showstudent', async (req, res) => {
    var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var query = new azure.TableQuery()
    
    .where('PartitionKey eq ?', req.body.PartitionKey)

  tableService.queryEntities('attendence', query, null, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(response.body.value)
      res.send(response.body.value)
          }
  })
})