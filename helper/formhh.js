const sellerForm = [
  {
    type: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
   
  },
  {
    type: 'input',
    f: 'RowKey',
    id: 'RowKey',
    p: 'RowKey',
    l: 'RowKey',
  },
  {
    type: 'text',
    id: 'teachername',
    label: 'Full Name',
    p: 'Enter your name...',
  },

  {
    type: 'textarea',
    id: 'teacheremail',
    label: 'Email Address',
    p: 'Enter Email...',
  },
  {
    type: 'textarea',
    id: 'teacheraddress',
    label: 'Address',
    p: 'Enter Address...',
  },
  {
    type: 'text',
    id: 'teacherdepartment',
    label: 'Department',
    p: 'Enter Department...',
  },
  {
    type: 'text',
    id: 'teachernumber',
    label: 'Mob No',
    p: 'Enter Number...',
  },
  {
    type: 'date',
    id: 'teacherDOB',
    label: 'D.O.B',
    p: 'Enter Date...',
  },
  {
    type: 'text',
    id: 'teacherExper',
    label: 'Experience(year)',
    p: 'Experience',
  },
]
 const Personal = [
  {
    type: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
   
  },
  {
    type: 'input',
    f: 'RowKey',
    id: 'RowKey',
    p: 'RowKey',
    l: 'RowKey',
  },
  { type: 'text', id: 'Tname', label: 'Name:' },
  {
    type: 'text',
    id: 'Tdays',
    label: 'Days Worked:',
  },
  {
    type: 'text',
    id: 'TLeave',
    label: 'Leave Taken::',
  },
  {
    type: 'text',
    id: 'Tjoin',
    label: 'Joining Date:',
  },
  {
    type: 'text',
    id: 'Tdept',
    label: 'Department:',
  },
  {
    type: 'text',
    id: 'Twork',
    label: 'Days Worked:',
  },
  
  {
    type: 'text',
    id: 'TAllow',
    label: 'Allowed Leaves:',
  },
  {
    type: 'text',
    id: 'Ttotal',
    label: 'Total Amount:',
  },

  {
    type: 'text',
    id: 'THRA',
    label: 'HRA:',
  },
  {
    type: 'text',
    id: 'Tconv',
    label: 'Conv Allowance:',
  },
  {
    type: 'text',
    id: 'Tmed',
    label: 'Medical Allowance:',
  },

  
  {
    type: 'text',
    id: 'TDOT',
    label: 'Date of Transfer:',
  },

  {
    type: 'text',
    id: 'TBname',
    label: 'Bank Name:',
  },
]

const teacherassignment = [
  {
    type: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
   
  },
  {
    type: 'input',
    f: 'RowKey',
    id: 'RowKey',
    p: 'RowKey',
    l: 'RowKey',
  },
  
  {
    type: 'text',
    id: 'assignment',
    label: 'Write',
    style: 'height:180px',
    class:'col-10'
  },
  {
    type: 'date',
    id: 'assi',
    label: 'Submit-In',
  },
  
]

const productEditForm = [
  { type: 'text', id: 'productname', label: 'Product Name', class: 'col-8' },
  { type: 'number', id: 'quantity', label: 'Product Quantity', class: 'col-4' },
  // {type:"text",id:"price",label:"Image",class:"col-6"},
  // {type:"text",id:"tags",label:"Tag",class:"col-6"},
]

const categoryForm = [
  { type: 'text', id: 'name', label: 'Add Category', class: 'col-4' },
  { type: 'text', id: 'subcategory', label: 'Add SubCategory', class: 'col-4' },
]

const userLogin = [
  { type: 'email', id: 'userEmail', label: 'Email:' },
  { type: 'password', id: 'userPass', label: 'Password:' },
]

const userSignup = [
  { type: 'email', id: 'userSignUpEmail', label: 'Email:' },
  { type: 'text', id: 'userSignUpName', label: 'Full Name:' },
  { type: 'password', id: 'userSignUpPass', label: 'Password:' },
  { type: 'password', id: 'userSignUpConfirmPass', label: 'Confirm Password:' },
]

const billingAddress = [
  { type: 'text', id: 'name', label: 'Full Name', class: 'col-6' },
  { type: 'text', id: 'company', label: 'Company', class: 'col-6' },
  { type: 'text', id: 'address1', label: 'Address', class: 'col-12' },
  { type: 'text', id: 'address2', label: 'Address2', class: 'col-12' },
  { type: 'text', id: 'state', label: 'State', class: 'col-4' },
  { type: 'text', id: 'city', label: 'City', class: 'col-4' },
  { type: 'text', id: 'postalcode', label: 'Zip Code', class: 'col-4' },
]
export {
  sellerForm,
  Personal,
  teacherassignment,
  productEditForm,
  categoryForm,
  userLogin,
  userSignup,
  billingAddress,
}
