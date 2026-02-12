'use client';

import { registerUser } from '@/app/components/auth/UserAdd';
import ComponentCard from '@/app/components/common/ComponentCard';
import PageBreadcrumb from '@/app/components/common/PageBreadCrumb';
import Input from '@/app/components/form/input/InputField';
import Label from '@/app/components/form/Label';
// import Select from '@/app/components/form/Select';
import Button from '@/app/components/ui/button/Button';
import { ChevronDownIcon, EyeCloseIcon, EyeIcon } from '@/app/icons';
import { useState } from 'react';

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });

  console.log("lalchandF", formData)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


const handleSubmit = async (): Promise<void> => {
  try {
    setIsSubmitting(true);

    const res = await registerUser(
      formData.email,
      formData.password,
      formData?.role || "user"
    );

    console.log(res);

    setFormData({ email: "", password: "", role: "" });
  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};

  const options = [{ label: 'admin', value: 'admin' }, { label: 'user', value: 'user' }]

  return (
    <div>
      <PageBreadcrumb pageTitle="Add New User" />
      <div className="flex justify-center">
        <ComponentCard
          title="User Details"
          desc="Enter user details"
        >
          <div className="space-y-6 xl:w-xl lg:w-lg md:w-md">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="dark:bg-dark-900"
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='dark:bg-dark-900'
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
              >
                {showPassword ? (
                  <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                ) : (
                  <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                )}
              </button>
            </div>

            <Label>Role</Label>
            <div className="relative">
              <select
                className={`h-11 w-full appearance-none rounded-lg border border-gray-300  px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${formData.role
                    ? "text-gray-800 dark:text-white/90"
                    : "text-gray-800 dark:text-white/90"
                  } dark:bg-dark-900`}
                value={formData.role}
                onChange={handleChange}
                name='role'
              >
                <option
                  value="user"
                  className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                >
                  user
                </option>
                <option
                  value="admin"
                  className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                >
                  admin
                </option>
              
              </select>
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <ChevronDownIcon />
              </span>
            </div>

            <div className='flex justify-end gap-2'>
              <Button onClick={() => setFormData({ email: "", password: "", role: "" })} size="md" variant="outline">Cencel</Button>
              <Button onClick={handleSubmit} size="md" variant="primary">Submit</Button>
            </div>
          </div>
        </ComponentCard>
      </div>
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xxxs">
          <div className="text-center">
            <svg className="mx-auto size-10 animate-spin text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <p className="mt-4 font-medium text-white">Loading...</p>
          </div>
        </div>
      )}

    </div >
  );
}