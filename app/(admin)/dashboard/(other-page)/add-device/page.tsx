'use client';

// import { registerUser } from '@/app/components/auth/UserAdd';
import ComponentCard from '@/app/components/common/ComponentCard';
import PageBreadcrumb from '@/app/components/common/PageBreadCrumb';
import Input from '@/app/components/form/input/InputField';
import Label from '@/app/components/form/Label';
import { useAddDevice } from '@/app/components/hook/useDeviceAdd';
// import Select from '@/app/components/form/Select';
import Button from '@/app/components/ui/button/Button';
// import { ChevronDownIcon, EyeCloseIcon, EyeIcon } from '@/app/icons';
import AdminRoute from '@/app/layout/AdminRoute';
import { AddDeviceInput } from '@/app/types/devices';
import { useState } from 'react';


interface ERRORS {
  // password: boolean
  phone: number
}

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    macId: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    state: ''
  });
  const { addDevice, loading, error } = useAddDevice()
  console.log("loading, error", loading, error)
  // const [errors, setErrors] = useState<ERRORS>({password:false, phone:false})
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


  };


  const handleSubmit = async (): Promise<void> => {
    if (!formData) return;
    const data: AddDeviceInput = { deviceId: formData.macId, stock: 0, phone: formData.phone, location: { address: formData.address, city: formData.city, pincode: formData.pincode, state: formData.state } }
    addDevice(data)
    setFormData({
      macId: '',
      phone: '',
      address: '',
      city: '',
      pincode: '',
      state: ''
    })
  };

  return (
    <AdminRoute>
      <div>
        <PageBreadcrumb pageTitle="Add New Device" />
        <div className="flex justify-center">
          <ComponentCard
            title="Enter Device Details"
          // desc="Enter user details"
          >
            <div className="space-y-2 xl:w-xl lg:w-lg md:w-md">

              <Label>Mac. Id</Label>
              <Input
                type="text"
                name='macId'
                autoComplete="new-text"
                value={formData.macId}
                onChange={handleChange}
                placeholder="User Name"
                className="dark:bg-dark-900"
              />



              <Label>Phone</Label>
              <Input
                type="phone"
                name='phone'
                autoComplete="new-phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="dark:bg-dark-900"
              // error={errors.phone}
              // hint={errors.phone ? 'Invalid Phone...' : ''}
              />
              <Label>Address</Label>
              <Input
                type="text"
                name='address'
                autoComplete="new-address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="dark:bg-dark-900"
              // error={errors.address}
              // hint={errors.address?'Invalid Address...': ''}
              />
              <Label>City</Label>
              <Input
                type="text"
                name='city'
                autoComplete="new-city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="dark:bg-dark-900"
              // error={errors.city}
              // hint={errors.city?'Invalid City...': ''}
              />
              <Label>Pincode</Label>
              <Input
                type="text"
                name='pincode'
                autoComplete="new-pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter your pincode"
                className="dark:bg-dark-900"
              // error={errors.pincode}
              // hint={errors.pincode?'Invalid Pincode...': ''}
              />
              <Label>State</Label>
              <Input
                type="text"
                name='state'
                autoComplete="new-state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="dark:bg-dark-900"
              // error={errors.state}
              // hint={errors.state?'Invalid State...': ''}
              />

            </div>
            <div className='flex justify-end gap-2'>
              <Button onClick={() => setFormData({ macId: "", phone: "", address: "", city: "", pincode: "", state: "" })} size="sm" variant="outline">Cancel</Button>
              <Button onClick={handleSubmit} size="sm" variant="primary">Submit</Button>
            </div>
          </ComponentCard>
        </div>
        {loading && (
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