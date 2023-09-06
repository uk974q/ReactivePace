const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center w-1/4 gap-2 my-3 border-black p-2 border-2 mx-auto">
            <h1 className="font-bold">Contact</h1>
            <input type="text" placeholder="Name" className="p-2 text-black rounded border-2 border-black" />
            <input type="email" placeholder="Email" className="p-2 text-black rounded border-2 border-black" />
            <button className="rounded-lg p-2 text-white bg-blue-600">Submit</button>
        </div>
    )
}

export default Contact