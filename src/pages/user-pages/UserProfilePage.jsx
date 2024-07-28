import React, { useEffect, useState } from 'react';
import UserProfileHeader from '../../components/signed-in-user/UserProfilePageHeader';
import axios from 'axios';
import UserVideosSlider from '../../components/signed-in-user/UserVideosSlider';
import useAuth from '../../hooks/useAuth';
import UploadVideoSection from '../../components/signed-in-user/UploadVideoSection';
import { FaEdit } from 'react-icons/fa';

const UserProfilePage = () => {
    const [videos, setVideos] = useState([])
    const { user, loading, setUser } = useAuth()

    useEffect(() => {
        axios("/videos.json")
            .then(res => {
                setVideos(res.data)
            })
    }, [])

    return (
        <section className='my-container *:mb-10'>
            <UserProfileHeader />
            <div className='grid grid-cols-2 gap-4'>
                <UploadVideoSection />
                <div className='bg-secondary p-8 flex items-center justify-center rounded-lg'>
                    <button className='btn btn-neutral text-lg'> <FaEdit size={20} />Create Post</button>
                </div>
            </div>
            <UserVideosSlider title={"Watch History"} videos={videos} containerId="watch-history-slider" />
            <UserVideosSlider title={"Liked Videos"} videos={videos?.slice(4)} containerId="liked-video-slider" />
        </section>
    );
};

export default UserProfilePage;

