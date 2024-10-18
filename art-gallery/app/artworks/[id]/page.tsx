"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}`;
    const art_id = url.replace('/artworks/', '')
    console.log(art_id);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return (
    <>
        
    </>
  )
}
