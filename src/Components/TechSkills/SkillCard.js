
const SkillCard = ({ name, path }) => {
    return (
        <div className='m-5 flex flex-col items-center lg:w-3/12 lg:m-0'>
            <h1 className='text-sm pb-4'>{name}</h1>
            <img className='w-14 lg:w-20' alt={name} src={path} />
        </div>
    )
}

export default SkillCard