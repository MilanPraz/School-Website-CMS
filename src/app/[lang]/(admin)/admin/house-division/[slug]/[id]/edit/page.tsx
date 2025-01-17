import connectDB from "@/server/utils/connectDB";
import { H3 } from "@/components/typography";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import Teacher from "@/server/models/Teacher";
import EditTeacherMemberForm from "@/components/admin/teams/EditTeacherMemberForm";
import House from "@/server/models/House";
import EditHouseMember from "@/components/admin/house/EditHouseMember";

const page = async ({ params }: { params: { id: string } }) => {
  noStore();
  await connectDB();
  const { id } = params;

  if (id) {
    const member = await House.findById(id);

    console.log("house memeber hai", member);
    return (
      <div>
        <H3 className=" my-4">
          Edit Details of{" "}
          <span className=" text-primary">{member.fullname}</span>
        </H3>
        <EditHouseMember member={JSON.parse(JSON.stringify(member))} />
      </div>
    );
  }
  return notFound();
};

export default page;
