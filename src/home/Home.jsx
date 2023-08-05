export const Home = () => (
  <div className='mt-10 flex w-full flex-col'>
    <div className='flex w-full flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left'>
      <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl'>
        <span className='flex w-full items-center'>
          Vite + React + Typescript + TailwindCSS + React Router + Redux + Redux Toolkit + Eslint + Prettier
        </span>
      </h2>
    </div>
    <div className='flex justify-center'>
      <img className='w-1/4' src='./logo-with-shadow.png' alt='Vite Logo' />
    </div>
  </div>
)
