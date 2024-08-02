import React from 'react';
import PostCard from '../../components/cards/PostCard';

const Posts = () => {
    return (
        <section className='my-container w-full min-h-screen bg-slate-950 py-8 rounded-lg'>
            <div className='max-w-2xl mx-auto flex flex-col gap-6'>
                {fakePosts.map((post, index) => <PostCard post={post} key={index} />)}
            </div>
        </section>
    );
};

export default Posts;


export const fakePosts = [
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: `/assets/1.jpg`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/2.jpeg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/3.jpeg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/4.jpeg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/5.jpeg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/6.jpeg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/1.jpg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/1.jpg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/1.jpg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/1.jpg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/1.jpg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/1.jpg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`,
        media: '/assets/1.jpg'
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
]