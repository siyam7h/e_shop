

const MegaMenu = () => {
    

    return (
        <nav className=" shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="font-bold text-xl">Apple</div>
                    <div className="hidden md:flex space-x-6">
                        <div>
                            <div asChild>
                                <button variant="ghost" className="hover:   p-0">Store</button>
                            </div>
                            <div className="w-screen shadow-lg rounded-md overflow-hidden mt-2 p-0">
                                <div className="px-5 py-6 grid grid-cols-3 gap-8">
                                    <div>
                                        <h6 className="font-semibold    mb-2">Shop the Latest</h6>
                                        <a href="#" className="block py-1 text-sm     ">Mac</a>
                                        <a href="#" className="block py-1 text-sm     ">iPad</a>
                                        <a href="#" className="block py-1 text-sm     ">iPhone</a>
                                        <a href="#" className="block py-1 text-sm     ">Apple Watch</a>
                                        <a href="#" className="block py-1 text-sm     ">AirPods</a>
                                        <a href="#" className="block py-1 text-sm     ">Accessories</a>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold    mb-2">Quick Links</h6>
                                        <a href="#" className="block py-1 text-sm     ">Find a Store</a>
                                        <a href="#" className="block py-1 text-sm     ">Order Status</a>
                                        <a href="#" className="block py-1 text-sm     ">Apple Trade In</a>
                                        <a href="#" className="block py-1 text-sm     ">Financing</a>
                                        <a href="#" className="block py-1 text-sm     ">Personal Setup</a>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold    mb-2">Shop Special Stores</h6>
                                        <a href="#" className="block py-1 text-sm     ">Certified Refurbished</a>
                                        <a href="#" className="block py-1 text-sm     ">Education</a>
                                        <a href="#" className="block py-1 text-sm     ">Business</a>
                                        <a href="#" className="block py-1 text-sm     ">Veterans and Military</a>
                                        <a href="#" className="block py-1 text-sm     ">Government</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="hover:  ">Mac</a>
                        
                        <a href="#" className="hover:  ">iPhone</a>
                        <a href="#" className="hover:  ">Watch</a>
                        <a href="#" className="hover:  ">AirPods</a>
                    </div>
                </div>
            </div>

        
        </nav>
    );
};

export default MegaMenu;