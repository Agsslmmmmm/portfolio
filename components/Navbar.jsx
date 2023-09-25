import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        // Fungsi untuk mendeteksi bagian yang sedang aktif
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    // Bagian ini sedang aktif, Anda dapat mengganti warna latar belakang Navbar sesuai kebutuhan
                    setIsActive(true);
                } else {
                    // Bagian ini tidak aktif
                    setIsActive(false);
                }
            });
        };

        // Menambahkan event listener untuk mendeteksi perubahan posisi scroll
        window.addEventListener("scroll", handleScroll);

        // Membersihkan event listener saat komponen Navbar tidak lagi digunakan
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='fixed top-5 left-0 right-0'>

            <nav
                class="border border-b rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-500 w-[90%] mx-auto scrolling-navbar bg-white">
                <ul class="flex space-x-4 items-center justify-center">
                    <li className='hover:scale-110 transition-transform duration-500'><a href="#home" class="nav-link uppercase text-gray-400">Home</a></li>
                    <li className='hover:scale-110 transition-transform duration-500'><a href="#about" class="nav-link uppercase text-gray-400">About</a></li>
                    <li className='hover:scale-110 transition-transform duration-500'><a href="#team" class="nav-link uppercase text-gray-400">Skills</a></li>
                    <li className='hover:scale-110 transition-transform duration-500'><a href="#contact" class="nav-link uppercase text-gray-400">Projects</a></li>
                </ul>
            </nav>
        </div>

    );
};

export default Navbar;
