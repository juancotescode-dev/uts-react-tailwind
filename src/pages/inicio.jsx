import student from '../assets/estudiante.avif'

export default function Inicio() {
  return (
    <main className='flex flex-row items-center justify-around mb-[60px]'>
      <section className='w-[500px] mr-[-120px]'>
        <h2 className='text-[40px] text-gray-800 font-bold'>Construimos los futuros líderes del país</h2>
        <p className='text-gray-500 mb-[20px]'>
          Las Unidades Tecnológicas de Santander se dedica a la formación de personas con sentido ético, pensamiento crítico y actitud emprendedora
        </p>
        <button className='bg-green-600 rounded-full w-[130px] h-[55px] text-white hover:bg-green-800'>
          SOY UTEÍSTA
        </button>
      </section>
      <img className='w-[340px] rounded-xl mt-7' src={student} alt='student'/>
    </main>
  )
}