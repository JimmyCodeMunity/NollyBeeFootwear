import React from 'react';
import { companies } from '../constants';

const Companies = () => {
    return (
        <section className='flex sm:my-16 flex-row flex-wrap items-center justify-between sm:mb-10 mb-6'>
            {companies.map((comp) => (
                <div key={comp.id} className='flex-1 flex items-center flex-row m-3'>
                    <img src={comp.image} className="h-32 w-32 object-cover" alt="" />
                </div>
            ))}
        </section>
    );
}

export default Companies;