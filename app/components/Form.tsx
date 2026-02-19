'use client'

import { useActionState } from 'react'
import { greetUser } from '../actions'

const initialState = {
    message: '',
}

export default function Form() {
    const [state, formAction] = useActionState(greetUser, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4 items-center">
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border p-2 rounded text-black"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                Greet Me
            </button>
            {state?.message && <p className="text-lg font-bold mt-4">{state.message}</p>}
        </form>
    )
}
