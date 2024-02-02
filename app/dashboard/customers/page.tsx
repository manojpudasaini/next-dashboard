import { fetchCustomers } from '@/app/lib/data';
import React from 'react';

export default async function Page() {
  const customers = await fetchCustomers();
  console.log(customers);
  return (
    <div>
      {React.Children.toArray(
        customers.map((customer) => <p>{customer.name}</p>),
      )}
    </div>
  );
}
