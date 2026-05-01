import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'CV',
};

export default function CVPage() {
  redirect('/CV_Alexandros_Soteriou.pdf');
}
