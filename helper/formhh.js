const sellerForm = [
  {
    type: 'text',
    id: 'teachername',
    label: 'Full Name',
    p: 'Enter your name...',
  },

  {
    type: 'text',
    id: 'teacheremail',
    label: 'Email Address',
    p: 'Enter Email...',
  },
  {
    type: 'text',
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


const sellerLogin = [
  { type: 'text', id: 'tname', label: 'Name:',},
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
    id: 'Tdays',
    label: 'Department:',
   
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'Days Worked:',
    
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'Joining Date:',
    
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'Allowed Leaves:',
    
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'HRA:',
    
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'Conv Allowance:',
    
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'Medical Allowance:',
    
  },
  {
    type: 'label',
    id: 'Tdep',
    label: 'Payment Details:',
    
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'Date of Transfer:',
    
  },
  
  {
    type: 'text',
    id: 'Tdep',
    label: 'Bank Name:',
    
  },
  {
    type: 'text',
    id: 'Tdep',
    label: 'Total Amount:',
    
  },

  ] 

const adminForm = [
  { type: 'email', id: 'adminEmail', label: 'Email:' },
  { type: 'password', id: 'adminPass', label: 'Password:' },
]

const adminSignUpForm = [
  { type: 'email', id: 'adminSignUpEmail', label: 'Email:' },
  { type: 'text', id: 'adminSignUpName', label: 'Full Name:' },
  { type: 'password', id: 'adminSignUpPass', label: 'Password:' },
  {
    type: 'password',
    id: 'adminSignUpConfirmPass',
    label: 'Confirm Password:',
  },
]

const sellerBuisnessFrom = [
  { type: 'text', id: 'firstname', label: 'First Name', class: 'col-5' },
  { type: 'text', id: 'lastname', label: 'Last Name', class: 'col-7' },
  { type: 'text', id: 'businessname', label: 'Business Name', class: 'col-12' },
  { type: 'tel', id: 'contactno', label: 'Contact Number', class: 'col-6' },
  { type: 'email', id: 'email', label: 'Email', class: 'col-6' },
  { type: 'text', id: 'address', label: 'Address', class: 'col-12' },
  { type: 'text', id: 'city', label: 'City', class: 'col-6' },
  { type: 'text', id: 'state', label: 'State / Province', class: 'col-6' },
  { type: 'number', id: 'zipcode', label: 'Zip Code', class: 'col-6' },
  { type: 'text', id: 'country', label: 'Country', class: 'col-6' },
  {
    type: 'text',
    id: 'businesstype',
    label: 'Type of Business',
    class: 'col-12',
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
  sellerLogin,
  adminForm,
  adminSignUpForm,
  sellerBuisnessFrom,
  productEditForm,
  categoryForm,
  userLogin,
  userSignup,
  billingAddress,
}
