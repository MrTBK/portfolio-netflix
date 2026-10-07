import ProfileDashboard from "./ProfileDashboard";

export function generateStaticParams() {
  return [
    { profileName: "recruiter" },
    { profileName: "developer" },
    { profileName: "stalker" },
    { profileName: "adventurer" },
  ];
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileName: string }>;
}) {
  const resolvedParams = await params;
  return <ProfileDashboard profileName={resolvedParams.profileName} />;
}
