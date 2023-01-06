import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  onSubmit: (data: any) => void
  register: UseFormRegister<any>
  error: string | undefined
}

export const UrlForm = ({ onSubmit, register, error }: Props) => {
  return (
    <form className="form-control mt-6" onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Paste your link here"
          className="input input-bordered flex-1"
          {...register('url')}
        />
        <button className="btn btn-primary" type="submit">Shorten</button>
      </div>
      {error && <p className="text-error text-left text-sm mt-2">{error}</p>}
    </form>
  );
};
