'use client';

// import { registerUser } from '@/app/components/auth/UserAdd';
import ComponentCard from '@/app/components/common/ComponentCard';
import PageBreadcrumb from '@/app/components/common/PageBreadCrumb';
import Input from '@/app/components/form/input/InputField';
import Label from '@/app/components/form/Label';
// import Select from '@/app/components/form/Select';
import Button from '@/app/components/ui/button/Button';
// import { ChevronDownIcon, EyeCloseIcon, EyeIcon } from '@/app/icons';
import AdminRoute from '@/app/layout/AdminRoute';
import { useState } from 'react';

export const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};


interface ERRORS {
  email: boolean
}

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    macId:'',
    email: ''
  });
  const [errors, setErrors] = useState<ERRORS>({email:false})
  // const [errorM, setErrorM] = useState<string | null>(null)

  console.log("lalchandF", formData)

  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors({email:false})
  };


  const handleSubmit = async (): Promise<void> => {
//     try {
//       setIsSubmitting(true);
// // setErrors({password:true})
// if(formData.password.length<6){
//   setErrors({...errors, password:true})
// }
// if(!validateEmail(formData.email)){
//   setErrors({...errors, email:true})
// }
//       const res = await registerUser(
//         formData.username,
//         formData.email,
//         formData.password,
//         formData?.role || "user"
//       );

//       console.log('userSubmited', res);

//       setFormData({ macId:"", email: "" });
//     } catch (error:any) {
//       console.error('got an error', error?.code);
//       setErrorM(error?.code||null)
//     } finally {
//       setIsSubmitting(false);
//     }
  };

  // const options = [{ label: 'admin', value: 'admin' }, { label: 'user', value: 'user' }]

  return (
    <AdminRoute>
      <div>
        <PageBreadcrumb pageTitle="Device Assign To User" />
        <div className="flex justify-center">
          <ComponentCard
            title="Enter User Details"
            // desc="Enter user details"
          >
            <div className="space-y-2 xl:w-xl lg:w-lg md:w-md">
              
                <Label>Mac. Id</Label>
                <Input
                  type="text"
                  name='username'
                  autoComplete="new-text"
                  value={formData.macId}
                  onChange={handleChange}
                  placeholder="User Name"
                  className="dark:bg-dark-900"
                />
             

              
                <Label>User Id</Label>
                <Input
                  type="email"
                  name='email'
                  autoComplete="new-email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="dark:bg-dark-900"
                  error={errors.email}
                  hint={errors.email?'Invalid Email...': ''}
                />
           

            </div>
              <div className='flex justify-end gap-2'>
                <Button onClick={() => setFormData({macId: "", email: "" })} size="sm" variant="outline">Cancel</Button>
                <Button onClick={handleSubmit} size="sm" variant="primary">Submit</Button>
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
    </AdminRoute>
  );
}