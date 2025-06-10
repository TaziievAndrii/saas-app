import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getUserCompanions, getUserSession } from '@/lib/actions/companion.actions';

const Profile = async () => {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSession(user.id);

  return (
    <main className="min-lg:w-3/4">
      <section className="flex justify-between gap-4 max-sm:flex-col items-center">
        <div className="flex gap-4 items-center">
          <Image src={user.imageUrl} alt={user.firstName!} width={110} height={110} />

          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl">
              {user.firstName} {user.lastName}
            </h1>

            <p className="text-sm text-muted-foreground">{user.emailAddresses[0].emailAddress}</p>
          </div>
        </div>
      </section>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};
export default Profile;
