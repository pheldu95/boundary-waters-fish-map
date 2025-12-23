import { fishingLureSchema, type FishingLureSchema } from '../../lib/schemas/fishingLureSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DefaultButton from '../../components/buttons/DefaultButton';
import DefaultInput from '../../components/form/DefaultInput';
import { useAuth } from '../../AuthContext';
import { useFishingLure } from '../../lib/hooks/useFishingLure';

export default function FishingLureForm() {
    const { user } = useAuth();
    const { createFishingLure } = useFishingLure();
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FishingLureSchema>({
        mode: 'onTouched',
        resolver: zodResolver(fishingLureSchema),
        defaultValues: {
            addedBy: user ? `/api/users/${user.id.toString()}` : '' //seems like a bad way to do this
        }
    });

    const onSubmit = async (data: FishingLureSchema) => {
        if (!data.addedBy) {
            throw new Error('Error finding user to add to form data')
        }

        try {
            createFishingLure.mutate(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-[400px] items-center bg-secondary shadow-xl'>
            <DefaultInput
                label='Name *'
                propertyName='name'
                register={register}
                required={false}
                className='w-[90%]'
                type='text'
            />
            <DefaultInput
                label='Color *'
                propertyName='color'
                register={register}
                required={false}
                className='w-[90%]'
                type='text'
            />
            <DefaultButton text={'Submit'} type='submit' />
        </form>
    )
}
