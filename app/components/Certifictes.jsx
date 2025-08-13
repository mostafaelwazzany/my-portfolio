'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../api/GlobalApi';
import Link from 'next/link';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Certificates = () => {

    const [certificates, setCertificates] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCertificates, setVisibleCertificates] = useState(1);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchCertificates()
    }, [])

    useEffect(() => {
        const updateVisibleCertificates = () => {
            if (window.innerWidth >= 1024) setVisibleCertificates(3);
            else if (window.innerWidth >= 768) setVisibleCertificates(2);
            else setVisibleCertificates(1);
        };

        updateVisibleCertificates();
        window.addEventListener('resize', updateVisibleCertificates);

        return () => window.removeEventListener('resize', updateVisibleCertificates);
    }, []);

    const fetchCertificates = () => {
        GlobalApi.certifcites().then(res => {
            console.log('Full response:', res)
            // Handle different possible response structures
            if (res && res.data && res.data.certificates) {
                setCertificates(res.data.certificates)
            } else if (res && res.certificates) {
                setCertificates(res.certificates)
            } else {
                console.error('Unexpected response structure:', res)
                setCertificates([])
            }
        }).catch(error => {
            console.error('Error fetching certificates:', error)
            setCertificates([])
        })
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - visibleCertificates : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === certificates.length - visibleCertificates ? 0 : prevIndex + 1))
    }

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedCertificate(null);
        setIsModalOpen(false);
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    return (
        <div className='flex justify-center m-auto p-5 overflow-x-hidden'>
            <div className='w-full max-w-7xl'>
                <div className='m-6 w-fit mx-auto justify-center hover:bg-primary transition text-center'>
                    <h4 className='text-white text-4xl hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>My Certificates</h4>
                    <div className='w-full border-t-primary mt-5 border-t-2'></div>
                </div>
                <p className='text-white text-xl sm:text-2xl md:text-3xl font-bold m-auto text-center mb-6'>
                    Here are my professional certificates. Click on any certificate to view more details.
                </p>

                <div className='relative'>
                    {certificates.length > visibleCertificates && (
                        <button onClick={handlePrev} className='absolute z-20 left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white text-primary border-2 border-primary/20 hover:border-primary p-3 rounded-full text-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'>
                            <FaCircleArrowLeft />
                        </button>
                    )}
                    <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * (100 / visibleCertificates)}%)` }}>
                        {certificates.map((certificate, index) => (
                            <div key={index} className='relative mt-4 w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4'>
                                <div
                                    className='group bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-gray-200 backdrop-blur-sm'
                                    onClick={() => openModal(certificate)}
                                >
                                    {/* Image Container with Overlay */}
                                    <div className='relative overflow-hidden'>
                                        <img
                                            className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
                                            alt='certificate'
                                            src={certificate.imageOfCertifict?.url}
                                        />
                                        {/* Gradient Overlay */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                        {/* Certificate Badge */}
                                        <div className='absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg'>
                                            Certificate
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className='p-6 relative'>
                                        {/* Institution Name */}
                                        <div className='flex items-center justify-between mb-3'>
                                            <h2 className='text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 line-clamp-2'>
                                                {certificate.place}
                                            </h2>
                                        </div>

                                        {/* Date with Icon */}
                                        <div className='flex items-center mb-4 text-gray-600'>
                                            <svg className='w-4 h-4 mr-2 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd' />
                                            </svg>
                                            <p className='text-sm font-medium'>
                                                {formatDate(certificate.dayOfit)}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className='text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4'>
                                            {certificate.details}
                                        </p>

                                        {/* Call to Action */}
                                        <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
                                            <span className='text-primary font-semibold text-sm group-hover:text-primary2 transition-colors duration-300'>
                                                View Certificate
                                            </span>
                                            <svg className='w-5 h-5 text-primary group-hover:text-primary2 group-hover:translate-x-1 transition-all duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                            </svg>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className='absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary2/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                        <div className='absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-primary2/10 to-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {certificates.length > visibleCertificates && (
                        <button onClick={handleNext} className='absolute z-20 right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white text-primary border-2 border-primary/20 hover:border-primary p-3 rounded-full text-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'>
                            <FaCircleArrowRight />
                        </button>
                    )}
                </div>

                {/* Modal */}
                {isModalOpen && selectedCertificate && (
                    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn'>
                        <div className='bg-white rounded-2xl max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl transform animate-slideUp border border-gray-200'>
                            <button
                                onClick={closeModal}
                                className='absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100 text-2xl z-10 p-2 rounded-full transition-all duration-300'
                            >
                                <FaTimes />
                            </button>

                            <div className='p-8'>
                                {/* Certificate Image */}
                                <div className='relative mb-8 rounded-xl overflow-hidden shadow-lg'>
                                    <img
                                        className='w-full h-80 object-cover'
                                        alt='certificate'
                                        src={selectedCertificate.imageOfCertifict?.url}
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
                                </div>

                                <div className='space-y-6'>
                                    {/* Header */}
                                    <div className='text-center border-b border-gray-200 pb-4'>
                                        <h3 className='text-3xl font-bold text-gray-800 mb-2'>Certificate Details</h3>
                                        <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
                                    </div>

                                    {/* Content Grid */}
                                    <div className='grid md:grid-cols-2 gap-6'>
                                        <div className='bg-gradient-to-br from-primary/5 to-primary2/5 p-6 rounded-xl border border-primary/10'>
                                            <div className='flex items-center mb-3'>
                                                <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3'>
                                                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                                        <path fillRule='evenodd' d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z' clipRule='evenodd' />
                                                    </svg>
                                                </div>
                                                <h4 className='text-lg font-semibold text-gray-700'>Institution</h4>
                                            </div>
                                            <p className='text-gray-800 font-medium text-lg'>{selectedCertificate.place}</p>
                                        </div>

                                        <div className='bg-gradient-to-br from-primary2/5 to-primary/5 p-6 rounded-xl border border-primary2/10'>
                                            <div className='flex items-center mb-3'>
                                                <div className='w-8 h-8 bg-primary2 rounded-full flex items-center justify-center mr-3'>
                                                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                                        <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd' />
                                                    </svg>
                                                </div>
                                                <h4 className='text-lg font-semibold text-gray-700'>Date Completed</h4>
                                            </div>
                                            <p className='text-gray-800 font-medium text-lg'>{formatDate(selectedCertificate.dayOfit)}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className='bg-gray-50 p-6 rounded-xl border border-gray-200'>
                                        <div className='flex items-center mb-4'>
                                            <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3'>
                                                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                                    <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                                                </svg>
                                            </div>
                                            <h4 className='text-lg font-semibold text-gray-700'>Description</h4>
                                        </div>
                                        <p className='text-gray-700 leading-relaxed text-base'>{selectedCertificate.details}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Certificates;
