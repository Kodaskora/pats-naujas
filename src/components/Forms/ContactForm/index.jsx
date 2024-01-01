import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from 'react-daisyui';

const schema = yup
  .object({
    firstName: yup.string().required("Please enter your name"),
    age: yup.number("Please enter just a number").positive("Please enter positive number").integer("Please enter a number").required("Please enter your age").typeError('Please enter a number').min(18).max(120),
  })
  .required("Please enter something");

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex w-full component-preview p-4 items-center justify-center gap-2 font-sans'>
      <div className='form-control w-full max-w-xs'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='label'>
            <span className='label-text'>What is your name?</span>
          </label>
          <Input {...register('firstName')} />
          <label className='label'>
            <span className='label-text-alt'>
              <p>{errors.firstName?.message}</p>
            </span>
          </label>
          <label className='label'>
            <span className='label-text'>What is your age?</span>
          </label>
          <Input {...register('age')} />
          <label className='label'>
            <span className='label-text-alt'>
              <p>{errors.age?.message}</p>
            </span>
          </label>
          <Button type='submit' wide={true}>Ok</Button>
        </form>
      </div>
    </div>
  );
}
