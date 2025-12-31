import Link from "next/link";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  console.log(params);
  return (
    <div>
      <ul className="mt-10">
        search params: {JSON.stringify(params)}
        <Link href="/dashboard/users/1">
          <li>User 1</li>
        </Link>
        <Link href="/dashboard/users/1">
          <li>User 2</li>
        </Link>
        <Link href="/dashboard/users/1">
          <li>User 3</li>
        </Link>
      </ul>
    </div>
  );
}
