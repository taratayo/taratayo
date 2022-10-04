import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import image from "../../../../public/assets/images/eibner-saliba-3T9dDY0WqDI-unsplash.jpg";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        middle_name: '',
        last_name: '',
        birth_of_date: '',
        phone_number: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (

        <div class="container mx-auto ">
            <div class="flex justify-center px-6 my-12">

                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        style={{backgroundImage: `url(https://source.unsplash.com/Mv9hjnEUHR4/600x800)`}}
                    ></div>

                    <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={submit}>
                            <div class="mb-4 md:flex md:justify-between">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <InputLabel forInput="first_name" value="First Name" className="block mb-2 text-sm font-bold text-gray-700" for="firstName"/>
                                    <TextInput
                                        type="text"
                                        name="first_name"
                                        value={data.first_name}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        autoComplete="first_name"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.first_name} className="text-xs italic text-red-500" />
                                </div>

                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <InputLabel forInput="middle_name" value="Middle Name" className="block mb-2 text-sm font-bold text-gray-700" for="middle_name"/>
                                    <TextInput
                                        placeholder="Optional"
                                        type="text"
                                        name="middle_name"
                                        value={data.middle_name}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        autoComplete="middle_name"
                                        handleChange={onHandleChange}

                                    />
                                    <InputError message={errors.middle_name} className="text-xs italic text-red-500" />
                                </div>

                                <div class="md:ml-2">
                                    <InputLabel forInput="last_name" value="Last Name" className="block mb-2 text-sm font-bold text-gray-700" for="last_name"/>
                                    <TextInput
                                        type="text"
                                        name="last_name"
                                        value={data.last_name}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        autoComplete="last_name"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.last_name} className="text-xs italic text-red-500" />
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <InputLabel forInput="birth_of_date" value="Birthdate" className="block mb-2 text-sm font-bold text-gray-700" for="birth_of_date"/>
                                    <TextInput
                                        type="date"
                                        name="birth_of_date"
                                        value={data.birth_of_date}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        autoComplete="birth_of_date"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.birth_of_date} className="text-xs italic text-red-500" />
                                </div>

                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <InputLabel forInput="phone_number" value="Phone number" className="block mb-2 text-sm font-bold text-gray-700" for="phone_number"/>
                                    <TextInput
                                        maxlength="11"
                                        placeholder="09xxxxxxxxx"
                                        type="text"
                                        name="phone_number"
                                        value={data.phone_number}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        autoComplete="phone_number"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.phone_number} className="text-xs italic text-red-500" />
                                </div>
                            </div>
                            <div class="mb-4">
                                <InputLabel forInput="email" value="Email" className="block mb-2 text-sm font-bold text-gray-700" />

                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.email} className="text-xs italic text-red-500" />
                            </div>
                            <div class="mb-4 md:flex md:justify-between">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <InputLabel forInput="password" value="Password" className="block mb-2 text-sm font-bold text-gray-700" />

                                    <TextInput
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        autoComplete="new-password"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password} className="text-xs italic text-red-500" />
                                </div>
                                <div class="md:ml-2">
                                    <InputLabel forInput="password_confirmation" value="Confirm Password" className="block mb-2 text-sm font-bold text-gray-700" />

                                    <TextInput
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="text-xs italic text-red-500" />
                                </div>
                            </div>
                            <div class="mb-6 text-center">
                                <PrimaryButton className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" processing={processing}>
                                    Register Account
                                </PrimaryButton>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <Link href={route('password.request')} className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div class="text-center">
                                <Link href={route('login')} className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                    Already registered?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
