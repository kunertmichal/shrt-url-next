import * as yup from 'yup'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { UrlForm } from '../components/UrlForm'
import { GeneratedUrl } from '../components/GeneratedUrl'
import { createUrlKey } from '../services/urlKeys'
import { FormData } from '../types/form-data'

const schema = yup.object({}).shape({
  url: yup.string().url('URL is not valid').required('Please enter a URL'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const { mutate, data, reset } = useMutation(createUrlKey)

  function onSubmit(formData: FormData) {
    mutate(formData);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl text-white">Short url</h1>
        <p className="text-lg">
          <span className="text-secondary font-bold">Easier</span> way to share
          your links
        </p>
        {data ? (
          <GeneratedUrl shortUrlKey={data.shortUrlKey} onReset={reset} />
        ) : (
          <UrlForm
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
            register={register}
            error={formState.errors.url?.message}
          />
        )}
      </div>
    </div>
  );
};
