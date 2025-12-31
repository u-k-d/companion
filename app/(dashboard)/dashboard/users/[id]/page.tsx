import React from "react";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // throw Error("Funtionality Not Implemented @UsersDetails")
  console.log(id);
  return <div>Users Detail! {id}</div>;
};

export default UserDetails;
