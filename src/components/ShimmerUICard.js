const ShimmerUICard = () => {
    return(
        <div className="w-72 h-96 flex flex-col gap-2">
            <div className="bg-gray-400 w-full opacity-25 h-1/2"></div>
            <div className="flex flex-col gap-2">
                <h1 className="bg-gray-400 w-full opacity-25 h-4"></h1>
                <p className="bg-gray-400 w-full opacity-25 h-4"></p>
                <p className="bg-gray-400 w-full opacity-25 h-4"></p>
            </div>
        </div>
    )
}

export default ShimmerUICard