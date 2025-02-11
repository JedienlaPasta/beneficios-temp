import image from '../../assets/user-sample-100x67.jpg'
export default function User() {
  return (
    <section className='flex items-center gap-2 p-2 mx-6 my-4 rounded-md bg-gray-500/30'>
        <span className='relative w-10 aspect-square'>
            <img src={image} alt="user-image" className='object-cover w-full h-full rounded-md' />
            <div className='absolute bottom-[-3px] right-[-1px] w-[10px] h-[10px] bg-green-400 rounded-md'></div>
        </span>
        <span className=''>
            <h3 className='text-sm font-bold text-black/70'>Kristina Meyers</h3>
            <p className='text-xs text-black/70'>Administrador</p>
        </span>
    </section>
  )
}
