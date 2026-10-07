"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HonorsPage from "../honors/page";

export default function CertificationsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/honors");
  }, [router]);

  return <HonorsPage />;
}
