'use server'

export async function greetUser(prevState: any, formData: FormData) {
  const name = formData.get('name')

  if (!name) {
    return { message: 'Please enter a name' }
  }

  return { message: `Hello, ${name}!` }
}
