const Contact = () => {
    const year = new Date().getFullYear();
    return (
        <div
            name="contact"
            id="contact"
            className="contact-container h-screen w-screen"
        >
            <div className="contact-content bg-rose-950 h-[95vh] w-full flex flex-col items-center justify-center text-white snap-center">
                <h1 className="text-[5rem]">Contact</h1>
                <div className="contact-form">
                    <form action="">Form</form>
                </div>
            </div>
            <footer className="author relative h-[5vh] w-full justify-center bg-rose-950 opacity-100">
                <h1 className="text-white text-[1.3rem] text-center ">
                    Made by Mario Polchert {year}{" "}
                </h1>
            </footer>
        </div>
    );
};

export default Contact;
