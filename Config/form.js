export const form1 = [
  {
    type: 'Input',
    label: 'First Name',
    name: 'firstname',
    validation: 'required',
  },
  {
    type: 'Input',
    label: 'Last Name',
    name: 'lastname',
    validation: 'required',
  },
  {
    type: 'Input',
    label: 'Email',
    name: 'email',
    validation: 'required|email',
  },
  {
    type: 'Checkbox',
    label: 'Do you like Vuejs?',
    name: 'likeVue',
  },
  {
    type: 'Radio',
    label: 'Gender',
    name: 'gender',
    params: {
      options: [
        {
          value: '1',
          label: 'Gender',
        },
        {
          value: '2',
          label: 'Gender',
        },
        {
          value: '3',
          label: 'Gender',
        },
      ],
    },
  },
]

export const form2 = [
  {
    type: 'Input',
    label: 'First Name',
    name: 'firstname',
    validation: 'required',
  },
  {
    type: 'Input',
    label: 'Last Name',
    name: 'lastname',
    validation: 'required',
  },
  {
    type: 'Input',
    label: 'Email',
    name: 'email',
    validation: 'required|email',
  },
  {
    type: 'Checkbox',
    label: 'Do you like Vuejs?',
    name: 'likeVue',
  },
  {
    type: 'Radio',
    label: 'Gender',
    name: 'gender',
    params: {
      options: [
        {
          value: '1',
          label: 'Gender',
        },
        {
          value: '2',
          label: 'Gender',
        },
        {
          value: '3',
          label: 'Gender',
        },
      ],
    },
  },
]
