const AssignUser = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col my-4">
      <span className="flex justify-between text-gray-300">{title}</span>
      <ul className="flex flex-col gap-2 mt-3 text-xs">
        <li className="grid grid-cols-2">
          Agent: <span className="text-gray-200">Katrin</span>
        </li>
        <li className="grid grid-cols-2">
          Team: <span className="text-gray-200">Returns Support</span>
        </li>
      </ul>
      <button className="mt-4 font-thin text-xs py-1 px-4 bg-babyBlue self-center rounded-lg text-darkBlue hover:scale-110 duration-200">
        Edit
      </button>
    </div>
  )
}

export default AssignUser
