const Contact = () => {
    return(
        <div className="text-center pt-10">
            <h1 className="font-bold text-2xl pb-3">Contact Us</h1>
            <p>Feel free to reach out! We'll get back to you as soon as possible.</p>
            <form className="pt-12">
                <div className="flex justify-between w-8/12 mx-auto">
                    <input type="text" placeholder="Your Name" className="pb-4 border-black border-b-2"></input>
                    <input type="email" placeholder="Your Email" className="pb-4 border-black border-b-2"></input>
                </div>
                <div className="flex w-8/12 mx-auto pt-8">
                    <input type="text" placeholder="Your Message" className="pb-16 border-black border-b-2"></input>
                    
                </div>
                    <button type="submit" className="bg-white hover:bg-yellow hover:text-white hover:border-none font-bold py-2 px-4 my-10 border-2 rounded">Submit</button>
            </form>
        </div>
    )
}

export default Contact 