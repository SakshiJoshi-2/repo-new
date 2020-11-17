const app = require('express')()
const bodyParser = require('body-parser')
module.exports = { path: '/api', handler: app }
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var azure = require('azure-storage')
var tableService = azure.createTableService(
  'projmgt',
  'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
)
var entGen = azure.TableUtilities.entityGenerator
app.get('/createtable', (req, res) => {
 

  tableService.createTableIfNotExists('teachersyllabus', function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
    }
  })
})
app.get('/createblob', (req, res) => {
  var blobService = azure.createBlobService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  blobService.createContainerIfNotExists(
    'taskcontainer',
    {
      publicAccessLevel: 'blob',
    },
    function (error, result, response) {
      if (!error) {
        // if result = true, container was created.
        // if result = false, container already existed.
      }
    }
  )
})
app.post('/addblob',  (req, res) => {
  var blobService = azure.createBlobService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  console.log('Add Blob')
  console.log('profile', req.body)
  
  blobService.createBlockBlobFromText(
  // blobService.createBlockBlobFromLocalFile(
    'taskcontainer',
    '123',
  req.body.profile,
    function (error, result, response) {
      if (!error) {
        console.log('result', result)
        console.log('response', response)
        // file uploaded
      } else {
        console.log('error', error)
      }
    }
  )
})

app.get('/showblob', (req, res) => {
  var blobService = azure.createBlobService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  console.log('Show Blob')
  var url = blobService.getUrl('taskcontainer', 'priyanshi', null, function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(response.body.value)
      res.send(url)
    }
  })

  console.log('URL', url)
})

app.post('/addrole', async (req, res) => {
 
 
    
    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
      Name: entGen.String(req.body.name),
      DOB: entGen.String(req.body.dob),
      Age: entGen.String(req.body.age),
      Gender: entGen.String(req.body.gender),
      Marital_Status: entGen.String(req.body.ms),
      Contact1: entGen.String(req.body.contact1),
      Contact2: entGen.String(req.body.contact2),
      Email: entGen.String(req.body.email),
      Qualification: entGen.String(req.body.qualification),
      Work_Experience: entGen.String(req.body.work_experience),
      Designation: entGen.String(req.body.designation),
      Department: entGen.String(req.body.department),
      Address: entGen.String(req.body.address),
    }
    tableService.insertEntity('Roles', entity, function (
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
app.post('/updaterole', (req, res) => {
 
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    Name: entGen.String(req.body.name),
    DOB: entGen.String(req.body.dob),
    Age: entGen.String(req.body.age),
    Gender: entGen.String(req.body.gender),
    Marital_Status: entGen.String(req.body.ms),
    Contact1: entGen.String(req.body.contact1),
    Contact2: entGen.String(req.body.contact2),
    Email: entGen.String(req.body.email),
    Qualification: entGen.String(req.body.qualification),
    Work_Experience: entGen.String(req.body.work_experience),
    Designation: entGen.String(req.body.designation),
    Department: entGen.String(req.body.department),
    Address: entGen.String(req.body.address),
  }
  tableService.insertOrReplaceEntity('Roles', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
    }
  })
})
app.post('/deleterole', async (req, res) => {
 
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('Roles', entity, function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.post('/showstaffdetails', async (req, res) => {
 
  var query = new azure.TableQuery().where(
    'PartitionKey eq ?',
    req.body.PartitionKey
  )

  tableService.queryEntities('Roles', query, null, function (
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
// <---------studentprofile--------------------------------------------------------->
app.post('/addstudent', async (req, res) => {
  // await res.send(req.body.PartitionKey)
  console.log('hgjhg')
  try {
    console.log('try')

    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
      name: entGen.String(req.body.name),
      std: entGen.String(req.body.std),
      section: entGen.String(req.body.section),
      class_section: entGen.String(req.body.class_section),
      dob: entGen.String(req.body.dob),
      age: entGen.String(req.body.age),
      bloodgroup: entGen.String(req.body.bloodGroup),
      contact1: entGen.String(req.body.contact1),
      contact2: entGen.String(req.body.contact2),
      email1: entGen.String(req.body.email1),
      email2: entGen.String(req.body.email2),
      address: entGen.String(req.body.address),
      f_name: entGen.String(req.body.f_name),
      f_contact: entGen.String(req.body.f_contact),
      f_email: entGen.String(req.body.f_email),
      m_name: entGen.String(req.body.m_name),
      m_contact: entGen.String(req.body.m_contact),
      m_email: entGen.String(req.body.m_email),
    }
    tableService.insertEntity('myprofile', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)

        // result contains the ETag for the new entity
      }
    })
  } catch (error) {
    console.log(error)
  }
})
app.post('/updatestudent', (req, res) => {

  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    Name: entGen.String(req.body.name),
    Class: entGen.String(req.body.class),
    DOB: entGen.String(req.body.dob),
    Age: entGen.String(req.body.age),
    BloodGroup: entGen.String(req.body.bloodGroup),
    ContactNo: entGen.String(req.body.contact1),
    AlternateContactNo: entGen.String(req.body.contact2),
    EmailAddress: entGen.String(req.body.email1),
    AlternateEmailAddress: entGen.String(req.body.email2),
    Address: entGen.String(req.body.address),
    FatherName: entGen.String(req.body.f_name),
    ContactNo: entGen.String(req.body.f_contact),
    EmailAddress: entGen.String(req.body.f_email),
    MotherName: entGen.String(req.body.m_name),
    ContactNo: entGen.String(req.body.m_contact),
    EmailAddress: entGen.String(req.body.m_email),
  }
  tableService.insertOrReplaceEntity('myprofile', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
    }
  })
})
app.post('/deletestudent', async (req, res) => {
 
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('myprofile', entity, function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.post('/showstudent', async (req, res) => {

  var query =
    new azure.TableQuery().where('class_section eq ?', req.body.class_section )
  

  tableService.queryEntities('myprofile', query, null, function (
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
// <-------------studentfees----------------------------------------------------->
app.post('/showfees', async (req, res) => {
  // console.log(req.body.PartitionKey)
 
  var query = new azure.TableQuery().where(
    'PartitionKey eq ?',
    req.body.PartitionKey
  )

  tableService.queryEntities('fees', query, null, function (
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
app.post('/showfeestostudent', async (req, res) => {
  // console.log(req.body.PartitionKey)

  var query = new azure.TableQuery()
    .top(2)
    .where('RowKey eq ?', req.body.RowKey)
  tableService.queryEntities('fees', query, null, function (
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
app.post('/addfees', async (req, res) => {
  try {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: String(req.body.PartitionKey),
      RowKey: String(req.body.RowKey),
      totalFees: String(req.body.totalFees),
      paidFees: entGen.String(req.body.paidFees),
      remainingFees: entGen.String(req.body.remainingFees),
      monthlyInstallement: entGen.String(req.body.monthlyInstallement),
      paidUpto: entGen.String(req.body.paidUpto),
      lastPaidOn: entGen.String(req.body.lastPaidOn),
      lastDate: entGen.String(req.body.lastDate),
    }

    tableService.insertEntity('fees', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)

        // result contains the ETag for the new entity
      }
    })
  } catch (error) {
    console.log(error)
  }
}),
  app.post('/deletefees', async (req, res) => {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
    }
    tableService.deleteEntity('fees', entity, function (error, response) {
      if (!error) {
        console.log(response)
        // result contains true if created; false if already exists
      }
    })
  })
app.post('/updatefees', (req, res) => {

  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    totalFees: entGen.String(req.body.totalFees),
    paidFees: entGen.String(req.body.paidFees),
    remainingFees: entGen.String(req.body.remainingFees),
    monthlyInstallement: entGen.String(req.body.monthlyInstallement),
    paidUpto: entGen.String(req.body.paidUpto),
    lastPaidOn: entGen.String(req.body.lastPaidOn),
    lastDate: entGen.String(req.body.lastDate),
  }

  tableService.insertOrReplaceEntity('fees', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})
app.post('/addpayment', (req, res) => {
  console.log('hgjhg')
  try {
    console.log('try')
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
      installmentNo: entGen.String(req.body.installmentNo),
      amount: entGen.String(req.body.amount),
      dateofpayment: entGen.String(req.body.dateofpayment),
      paidFees: entGen.String('vvv'),
    }

    tableService.insertOrMergeEntity('fees', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)
        // result contains the entity with field 'taskDone' set to `true`
      }
    })
  } catch (error) {
    console.log(error)
  }
})
// <_____________________________________complaint________________________________>
app.post('/addcomplaint', async (req, res) => {
  try {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    // tableService.retrieveEntity('teacher', 'part1', 'row1', function (
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: String(req.body.PartitionKey),
      RowKey: String(req.body.RowKey),
      to: String(req.body.to),
      description: String(req.body.description),
    }

    tableService.insertEntity('Complaint', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)

        // result contains the ETag for the new entity
      }
    })
  } catch (error) {
    console.log(error)
  }
})
app.post('/updatecomplaint', (req, res) => {

  var entity = {
    PartitionKey: String(req.body.PartitionKey),
    RowKey: String(req.body.RowKey),
    to: String(req.body.to),
    complaint1: String(req.body.description),
  }

  tableService.insertOrReplaceEntity('Complaint', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})
app.post('/deletecomplaint', async (req, res) => {

  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('Complaint', entity, function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.post('/showcomplaint', async (req, res) => {

  var query = new azure.TableQuery().where(
    'PartitionKey eq ?',
    req.body.PartitionKey1
  )

  tableService.queryEntities('Complaint', query, null, function (
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
app.post('/readcomplaint', async (req, res) => {
  
  var query = new azure.TableQuery()
    .top(2)
    .where('RowKey eq ?', req.body.RowKey1)

  tableService.queryEntities('Complaint', query, null, function (
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

//----------------------------------------------------------------------------------------------
app.get('/addentity', (req, res) => {
  var entity = {
    PartitionKey: entGen.String('part2'),
    RowKey: entGen.String('row2'),
    boolValueTrue: entGen.Boolean(true),
    boolValueFalse: entGen.Boolean(false),
    intValue: entGen.Int32(42),
    taskDone: entGen.Boolean(false),
    dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
    complexDateValue: entGen.DateTime(
      new Date(Date.UTC(2013, 02, 16, 01, 46, 20))
    ),
  }
  tableService.insertEntity('sakshi2', entity, function (
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
app.get('/updateentity', (req, res) => {
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
      res.send(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})
app.get('/deletetable', (req, res) => {


  tableService.deleteTable('sakshi', function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.get('/deleteentity', (req, res) => {

  var entity = {
    PartitionKey: entGen.String('test'),
    RowKey: entGen.String('c1'),
  }
  tableService.deleteEntity('Complaint', entity, function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.get('/readentity', (req, res) => {


  tableService.retrieveEntity('fees', 'test', 's1', function (
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
//------------------------------------------notification----------------------------------------------------------------
app.post('/addnotification', async (req, res) => {
      var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
      date: entGen.String(req.body.date),
      recipient: entGen.String(req.body.recipient),
      notification: entGen.String(req.body.notification),
    }
    tableService.insertEntity('Notification', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)
      }
    })

})
app.post('/updatenotification', (req, res) => {
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    recipient: entGen.String(req.body.recipient),
    notification: entGen.String(req.body.notification),
  }
  tableService.insertOrReplaceEntity('Notification', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
    }
  })
})
app.post('/deletenotification', async (req, res) => {
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('Notification', entity, function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.post('/shownotification', async (req, res) => {
  var query = new azure.TableQuery().where(
    'PartitionKey eq ?',
    req.body.PartitionKey
  )

  tableService.queryEntities('Notification', query, null, function (
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
// teacher
app.post('/addDetails', async (req, res) => {
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
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
  }
  tableService.deleteEntity('teacherprofile', entity, function (
    error,
    response
  ) {
    if (!error) {
      console.log(result)
    }
  })
})

// readteachermyprofile
app.post('/readtDetails', async (req, res) => {
 
  var query = new azure.TableQuery().where('RowKey eq ?', req.body.RowKey)

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
app.post('/addAssignment', async (req, res) => {
   var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    section:entGen.String(req.body.section),
    
    RowKey: entGen.String(req.body.RowKey),
    topics: entGen.String(req.body.topics),
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
  var query = new azure.TableQuery().where(
    'PartitionKey eq ?',
    req.body.PartitionKey
  )
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
app.post('/addtimetable', async (req, res) => {
   var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    days: entGen.String(req.body.days),
    class: entGen.String(req.body.class),
    teachersection: entGen.String(req.body.teachersection),
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
    })
  
})

// REadTEachertimetable
app.post('/readtimetable', async (req, res) => {

  var query = new azure.TableQuery().where(
    'PartitionKey eq ?',
    req.body.PartitionKey
  )

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
app.post('/addSyllabus', async (req, res) => {

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
    } else {
      console.log('add', error)
    }
  })
})
app.post('/updateSyllabus', (req, res) => {

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

// DEleteteacher
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
    })
  } catch (error) {
    console.log(error)
  }
})

// REadTEachertimetable
app.post('/readSyllabus', async (req, res) => {

  var query = new azure.TableQuery().where(
    'PartitionKey eq ?',
    req.body.PartitionKey
  )

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
app.post('/addtimetable', async (req, res) => {
  console.log('req', req.body.col)

  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    days: entGen.String(req.body.days),
    class: entGen.String(req.body.class),
    teachersection: entGen.String(req.body.teachersection),
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
//_________________________________attendence___________________________________
app.post('/addattendence', async (req, res) => {
   var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    date: entGen.String(req.body.date),
    day: entGen.String(req.body.day),
    attendence: entGen.String(req.body.attendence),
    
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
