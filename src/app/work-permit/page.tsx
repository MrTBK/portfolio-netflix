"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import EducationPage from "../education/page";

export default function WorkPermitRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/education");
  }, [router]);

  return <EducationPage />;
}
