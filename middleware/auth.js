export default function ({ store, redirect, route }) {
  const user = store.getters['modules/user/user']
  const path = ['/', '/signup', '/login', '/pricing', '/notification']
  let value = path.includes(route.path)
  if (!user) {
    if (value) {
      redirect()
    } else {
      redirect('/')
    }
  } else {
    if (value) {
      if (user['custom:role'] == 'teacher') {
        redirect('/instructor')
      } else if (user['custom:role'] == 'admin') {
        redirect('/admin')
      } else if (user['custom:role'] == 'student') {
        redirect('/student')
      }
    }
  }
}
