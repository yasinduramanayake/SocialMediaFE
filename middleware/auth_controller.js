export default function ({ route, redirect , next , to}) {
  // Your navigation guard logic goes here
  if (route.path === '/restricted') {
    // Redirect to another page if the condition is not met
    redirect('/')
  }
}
