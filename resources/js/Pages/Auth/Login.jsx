import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import image from '@/../../public/assets/images/cris-tagupa-9ZXHUr5aCwM-unsplash.jpg';
var bg = {
    backgroundImage: `url(${image})`
}
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
       <>
           <div className="bg-gray-900">
               <div className="flex justify-center h-screen">
                   <div className="hidden bg-cover lg:block lg:w-2/3"
                        style={bg}>
                       <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                           <div>
                               <h2 className="text-4xl font-bold text-white">Brand</h2>

                               <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur
                                   adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis
                                   libero suscipit nam temporibus molestiae</p>
                           </div>
                       </div>
                   </div>

                   <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                       <div className="flex-1">
                           <div className="text-center">
                               <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

                               <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                           </div>

                           <div className="mt-8">
                               <form  onSubmit={submit}>
                                   <div>

                                       <InputLabel forInput="email" value="Email
                                           Address" className="block mb-2 text-sm text-gray-600 dark:text-gray-200" />

                                       <TextInput
                                           type="email"
                                           name="email"
                                           value={data.email}
                                           className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400
                                           bg-white border border-gray-200 rounded-md dark:placeholder-gray-600
                                           dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400
                                           dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none
                                           focus:ring focus:ring-opacity-40"
                                           autoComplete="username"
                                           isFocused={true}
                                           handleChange={onHandleChange}
                                       />

                                       <InputError message={errors.email} className="mt-2" />
                                   </div>

                                   <div className="mt-6">
                                       <div className="flex justify-between mb-2">

                                           <InputLabel forInput="password" value="Password" className="text-sm text-gray-600 dark:text-gray-200" />
                                           {canResetPassword && (
                                               <Link
                                                   href={route('password.request')}
                                                   className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                                               >
                                                   Forgot your password?
                                               </Link>
                                           )}
                                       </div>

                                       <TextInput
                                           type="password"
                                           name="password"
                                           value={data.password}
                                           className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border
                                           border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700
                                           focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                           autoComplete="current-password"
                                           handleChange={onHandleChange}
                                       />

                                       <InputError message={errors.password} className="mt-2" />
                                   </div>

                                   <div className="mt-6">
                                       <PrimaryButton className="w-full px-4 py-2 tracking-wide text-white
                                       transition-colors duration-200 transform bg-blue-500
                                       rounded-md hover:bg-blue-400 focus:outline-none
                                       focus:bg-blue-400 focus:ring focus:ring-blue-300
                                       focus:ring-opacity-50" processing={processing}>
                                           Log in
                                       </PrimaryButton>
                                   </div>

                               </form>

                               <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a
                                   href="#"
                                   className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign
                                   up</a>.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </>
    );
}
