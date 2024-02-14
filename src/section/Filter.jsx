const Filter = () => {
  const filters = [
    {name:"Show All"},
    {name:"adventure"},
    {name:"strategy"},
    {name:"racing"},
  ]
  return (
    <>
      <section className="flex flex-wrap gap-4 items-center justify-center my-8">
        {filters.map((filter) => (
          <div key={filter.name} className={`bg-gray-100 px-4 py-2 rounded-full hover:text-white hover:bg-lightRed transition-all duration-[.3s] ease-in-out cursor-pointer  `}>
            <a className="uppercase font-medium">{filter.name}</a>
          </div>
        ))}
      </section>
    </>
  )
}

export default Filter