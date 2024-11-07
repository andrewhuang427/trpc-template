"use client";

import { trpc } from "../trpc/client";

export default function UsersList() {
  const { data, refetch } = trpc.getUsers.useQuery();
  const createUser = trpc.createUser.useMutation({
    onSettled() {
      refetch();
    },
  });

  function handleCreateUser() {
    createUser.mutate({ name: "John Doe" });
  }

  return (
    <div className="flex flex-col gap-4">
      {data?.map((user) => {
        return <div key={user.id}>{JSON.stringify(user)}</div>;
      })}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-1 "
        onClick={handleCreateUser}
      >
        Create User
      </button>
    </div>
  );
}
