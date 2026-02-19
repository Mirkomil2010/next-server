import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Server Action Example</h1>
      <p className="mb-4 text-lg text-center max-w-lg">
        This form uses a Server Action to process the input.
        Enter your name below and submitting will trigger a function on the server.
      </p>
      <Form />
    </div>
  );
}
