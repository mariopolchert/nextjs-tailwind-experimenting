const Contact = () => {
    const year = new Date().getFullYear();
    return (
        <div
            name="contact"
            id="contact"
            className="contact-container h-screen w-screen"
        >
            <div className="contact-content bg-rose-950 h-full w-full flex flex-col items-center justify-center text-white">
                <h1 className="text-[5rem]">Contact</h1>
            </div>
            <footer className="author mt-auto">
                <h1 className="text-white">Made by Mario Polchert {year} </h1>
            </footer>
        </div>
    );
};

export default Contact;
