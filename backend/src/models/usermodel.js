import mongoose from "mongoose";

const PREDEFINED_ADDRESSES = [
  {
    label: "Escritório Central",
    fullName: "Admin Principal",
    streetAddress: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    zipCode: "01310-100",
    phoneNumber: "+55 11 99999-0001",
    isDefault: true,
  },
  {
    label: "Armazém",
    fullName: "Admin Armazém",
    streetAddress: "Av. Industrial, 456",
    city: "Campinas",
    state: "SP",
    zipCode: "13010-200",
    phoneNumber: "+55 19 99999-0002",
    isDefault: false,
  },
  {
    label: "Filial Sul",
    fullName: "Admin Sul",
    streetAddress: "Rua das Acácias, 789",
    city: "Curitiba",
    state: "PR",
    zipCode: "80010-300",
    phoneNumber: "+55 41 99999-0003",
    isDefault: false,
  },
];

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    clerkId: {
      type: String,
      unique: true,
      required: true,
    },
    stripeCustomerId: {
      type: String,
      default: "",
    },
    selectedAddress: {
      type: Number, // index of PREDEFINED_ADDRESSES
      default: 0,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

export { PREDEFINED_ADDRESSES };
export const User = mongoose.model("User", userSchema);