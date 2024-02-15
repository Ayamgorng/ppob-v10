import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes, useState } from 'react';
import InputLabel from './InputLabel';
import InputError from './InputError';
import clsx from 'clsx';
import { Transition } from '@headlessui/react';
import Spinner from './Spinner';

export default forwardRef(function TextInput({ type = 'text', className = '', title, errorMessage, loading, isFocused = false, ...props }: InputHTMLAttributes<HTMLInputElement> & { loading?: boolean, errorMessage?: string, isFocused?: boolean }, ref) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    let customType = type;
    switch (type) {
        case 'password':
            customType = isPasswordVisible ? 'text' : 'password';
            break;
        default:
            break;
    }

    return (
        <div className={`flex w-full flex-col ${className}`}>
            {
                title &&
                <InputLabel htmlFor={props.id} value={title} className='mb-2' />
            }

            <div className='relative'>
                <input
                    {...props}
                    type={customType}
                    className={clsx(`w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm dark:bg-gray-200`, (type === 'password' || loading === true) && 'pr-[10%]')}
                    ref={localRef}
                />
                <Transition
                    show={loading ? true : false}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                    className='absolute top-1/2 -translate-y-1/2 right-2'
                >
                    <Spinner className='h-8 w-8' />
                </Transition>
                {
                    type === 'password' &&
                    <div
                        className='absolute cursor-pointer flex items-center inset-y-0 right-0 px-3'
                        onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        )}
                    </div>
                }
            </div>
            <InputError message={errorMessage} />
        </div>
    );
});
