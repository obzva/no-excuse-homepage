import { SIX_SHOP_LINKS } from '@/app/menu'
import { permanentRedirect } from 'next/navigation'

export const metadata = {
  alternates: {
    canonical: SIX_SHOP_LINKS.FAQ,
  },
}

export default async function Page() {
  permanentRedirect(SIX_SHOP_LINKS.FAQ)
}