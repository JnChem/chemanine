import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User } from "../models/usermodel.js";

export const inngest = new Inngest({ id: "chem_ltd" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, username, image_url } = event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      username: username || email_addresses[0]?.email_address.split("@")[0],
      imageUrl: image_url,
      selectedAddress: 0,
      wishlist: [],
    };

    await User.create(newUser);
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
  }
);

export const functions = [syncUser, deleteUserFromDB];