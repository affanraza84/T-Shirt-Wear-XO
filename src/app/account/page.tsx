// app/account/page.tsx
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AccountClient from './account-client';

export default async function AccountPage() {
  const user = await currentUser();

  if (!user) return redirect('/sign-in');

  // Pick only serializable fields
  const safeUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0]?.emailAddress ?? '',
    imageUrl: user.imageUrl,
  };

  return <AccountClient user={safeUser} />;
}
