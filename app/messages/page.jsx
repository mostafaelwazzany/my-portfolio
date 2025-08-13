'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../api/GlobalApi'

const page = () => {
    const [messages, setMessages] = useState([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedPassword = localStorage.getItem('password');
        if (storedPassword === 'a7a') {
            setIsAuthenticated(true);
            others();
        }
    }, []);

    const handlePasswordSubmit = () => {
        if (password === 'a7a') {
            localStorage.setItem('password', password);
            setIsAuthenticated(true);
            others();
        } else {
            alert('Incorrect password');
        }
    };

    const others = () => {
        GlobalApi.messages().then((res) => {
            console.log(res);
            setMessages(res.newMessages);
        });
    };

    return (
        <div className="p-4">
            {!isAuthenticated ? (
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-center bg-yellow-400/30 text-yellow-500 font-arabicUI3 w-fit text-5xl p-4 rounded-xl mb-6">حط الباسورد يمصطفي</h2>
                    <input
                        type="password"
                        value={password}
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded mb-4"
                    />
                    <button onClick={handlePasswordSubmit} className="p-2 bg-yellow-500  font-arabicUI2 text-black rounded">دخول</button>
                </div>
            ) : (
                <>
                    <h2 className="font-bold text-center bg-yellow-400/30 text-yellow-500 font-arabicUI3 w-fit text-5xl p-4 rounded-xl mb-6">Messages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {messages.map((item, index) => (
                            <div key={index} className="from-yellow-400 to-yellow-500 bg-gradient-to-tr p-4 rounded-lg font-arabicUI3 shadow-lg">
                                <h3 className="text-xl font-arabicUI3 text-gray-800 mb-2"><strong className='text-yellow-700'>{`Name =>`}</strong> {item.name}</h3>
                                <p className="text-gray-800 mb-1"><strong className='text-yellow-700'>{`Email =>`}</strong> {item.email}</p>
                                <p className="text-gray-800 mb-1"><strong className='text-yellow-700'>{`Phone =>`}</strong> {item.phone}</p>
                                <p className="text-gray-800"><strong className='text-yellow-700'>{`Message =>`}</strong> {item.message}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default page;